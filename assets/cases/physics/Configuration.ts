const {ccclass, property} = cc._decorator;

const debugDrawFlags = cc.PhysicsManager.DrawBits.e_pairBit
                     | cc.PhysicsManager.DrawBits.e_jointBit
                     | cc.PhysicsManager.DrawBits.e_shapeBit;

@ccclass
export default class Configuration extends cc.Component {

    @property
    _debugMode = false;
    @property
    set debugMode(value: boolean):void {
        this._debugMode = value;
        this.enableDebugMode(value);
    }
    get debugMode() {
        return this._debugMode;
    }
    @property
    gravity = 0;

    onLoad () {
        const physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        const collisions = cc.director.getCollisionManager();
        collisions.enabled = true;
        if (this.gravity != 0)
            physics.gravity = cc.v2(0, -this.gravity);
        this.enableDebugMode(this.debugMode);
    }

    private enableDebugMode(enable: boolean): void {
        const physics = cc.director.getPhysicsManager();
        physics.debugDrawFlags = enable ? debugDrawFlags : 0;
        enable && physics._debugDrawer.lineWidth = 5;
        cc.debug.setDisplayStats(enable);
    }
}
