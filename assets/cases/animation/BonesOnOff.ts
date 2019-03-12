const {ccclass, property} = cc._decorator;

@ccclass
export default class BonesOnOff extends cc.Component {

    @property(dragonBones.ArmatureDisplay)
    dragonBones: dragonBones.ArmatureDisplay = null;

    @property(sp.Skeleton)
    spine: sp.Skeleton = null;

    toggleBones(): void {
        this.dragonBones.debugBones = !this.dragonBones.debugBones;
        this.spine.debugBones = !this.spine.debugBones;

        if (this.dragonBones.debugBones)
            this.dragonBones._debugDraw.lineWidth = 9;
    }
}
