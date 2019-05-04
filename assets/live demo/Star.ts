const {ccclass, property} = cc._decorator;

@ccclass
export default class Star extends cc.Component {

    @property(cc.Node)
    gameMenu: cc.Node = null;

    onBeginContact(contact: cc.PhysicsContact, self: cc.PhysicsCollider, other: cc.PhysicsCollider) {
        this.gameMenu.active = true;
    }
}
