const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property
    speed = 0;

    private rb: cc.RigidBody;
    private direction = 0;
    private anim: cc.Animation;
    private moveAnimState: cc.AnimationState;

    onLoad(): void {
        this.rb = this.getComponent(cc.RigidBody);
        this.anim = this.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    }

    update(dt: number): void {
        const sideSpeed = this.direction * this.speed;
        this.rb.linearVelocity = cc.v2(sideSpeed, this.rb.linearVelocity.y);
    }

    onKeyPressed(event: cc.Event.EventKeyboard) {
        let keyCode = event.keyCode;
        cc.log(event);
        switch(keyCode) {
            case cc.macro.KEY.left:
                this.playMove();
                this.direction = -1;
                break;
            case cc.macro.KEY.right:
                this.playMove();
                this.direction = 1;
                break;
        }
    }

    onKeyReleased(event: cc.Event.EventKeyboard) {
        let keyCode = event.keyCode;
        switch(keyCode) {
            case cc.macro.KEY.left:
            case cc.macro.KEY.right:
                this.anim.stop("player_move");
                this.direction = 0;
                break;
            case cc.macro.KEY.up:
                this.rb.linearVelocity = this.rb.linearVelocity.scale(cc.v2(1, 0));
                this.rb.applyLinearImpulse(cc.v2(0, 1000), this.rb.getWorldCenter(), true);
                break;
        }
    }

    private playMove(): void {
        if (this.moveAnimState && this.moveAnimState.isPlaying)
            return;

        this.moveAnimState = this.anim.play("player_move");
    }
}
