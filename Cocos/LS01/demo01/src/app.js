
// var HelloWorldLayer = cc.Layer.extend({
//     sprite:null,
//     ctor:function () {
//         //////////////////////////////
//         // 1. super init first
//         this._super();
//
//         /////////////////////////////
//         // 2. add a menu item with "X" image, which is clicked to quit the program
//         //    you may modify it.
//         // ask the window size
//         var size = cc.winSize;
//
//         /////////////////////////////
//         // 3. add your codes below...
//         // add a label shows "Hello World"
//         // create and initialize a label
//         var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
//         // position the label on the center of the screen
//         helloLabel.x = size.width / 2;
//         helloLabel.y = size.height / 2 + 200;
//         // add the label as a child to this layer
//         this.addChild(helloLabel, 5);
//
//         // add "HelloWorld" splash screen"
//         this.sprite = new cc.Sprite(res.Red_png);
//         this.sprite.attr({
//             x: size.width / 2,
//             y: size.height / 2
//         });
//         this.addChild(this.sprite, 0);
//         var sp2=new cc.Sprite(res.Yellow_png);
//         sp2.x=this.sprite.x+100;
//         sp2.y=this.sprite.y+100;
//         this.addChild(sp2);
//         // this.sprite.runAction(cc.rotateBy(3,300,11).repeatForever());
//         return true;
//     }
// });
var SecondLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size=cc.winSize;
        var bg=new cc.Sprite(res.Bg);
        bg.x=size.width / 2;
        bg.y=size.height / 2;
        this.addChild(bg);
        var plane=new cc.Sprite(res.plane);
        plane.x=this.sprite.x+100;
        plane.y=this.sprite.y+100;
        this.addChild(plane);
        plane.setAnchorPoint(1,0,5);
        plane.runAction(cc.rotateBy(1,90).repeatForever());
        return true;
    }
});
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SecondLayer();
        this.addChild(layer);
    }
});

