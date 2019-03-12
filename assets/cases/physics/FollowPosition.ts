const {ccclass, property} = cc._decorator;

@ccclass
export default class FollowPosition extends cc.Component {

    @property(cc.Node)
    followNode: cc.Node = null;

    private followDistance: cc.Vec2 = cc.v2();

    onLoad(): void {
        if (this.followNode) {
            this.followDistance = this.followNode.position.sub(this.node.position);
        }
    }

    update(dt: number): void {
        this.node.setPosition(this.followNode.position.sub(this.followDistance));
    }
}
