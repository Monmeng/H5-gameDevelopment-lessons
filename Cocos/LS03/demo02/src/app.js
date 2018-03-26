
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        var startMenuItem = new cc.MenuItemFont("开始",function(){
            cc.log("开始按钮点击了！");
        },this);

        var setMenuItem = new cc.MenuItemFont("设置",function(){
            cc.log("设置按钮点击了！");
        },this);

        var ttfLabel = new cc.LabelTTF("其他","",30);
        ttfLabel.setFontFillColor(cc.color.RED);
        ttfLabel.enableStroke(cc.color.YELLOW,2);
        ttfLabel.enableShadow(cc.color.WHITE,15,15,15);

        var otherMenuItem = new cc.MenuItemLabel(ttfLabel,function(){
            cc.log("其他按钮点击了！");
        },this);

        var menu = new cc.Menu(startMenuItem,setMenuItem,otherMenuItem);
        menu.alignItemsHorizontally();    //设置菜单对齐方式
        menu.y = size.height*0.3;

        //位置二
        // menu.setPosition(cc.p(0,0));
        // startMenuItem.x = size.width*0.4;
        // startMenuItem.y = size.height*0.5;
        //
        // setMenuItem.x = size.width*0.5;
        // setMenuItem.y = size.height*0.5;
        //
        // otherMenuItem.x = size.width*0.6;
        // otherMenuItem.y = size.height*0.5;
        this.addChild(menu);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

