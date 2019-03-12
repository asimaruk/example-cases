const {ccclass, property} = cc._decorator;

@ccclass
export default class Configuration extends cc.Component {

    onLoad () {
        const physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_pairBit
                               | cc.PhysicsManager.DrawBits.e_jointBit
                               | cc.PhysicsManager.DrawBits.e_shapeBit;
        cc.director.getPhysicsManager()._debugDrawer.lineWidth = 5
        cc.debug.setDisplayStats(false);
    }
}
