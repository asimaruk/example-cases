const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    retry(): void {
        cc.director.loadScene(cc.director.getScene().name);
    }
}
