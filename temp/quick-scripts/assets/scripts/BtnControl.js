(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/BtnControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b0d566Xo7tB8ZKNIbIbworN', 'BtnControl', __filename);
// scripts/BtnControl.js

"use strict";

var flag;
cc.Class({
    extends: cc.Component,

    properties: {
        button: cc.Button
    },

    onLoad: function onLoad() {

        this.button.node.on('click', this.callback, this);
    },

    start: function start() {
        flag = true;
    },

    update: function update(dt) {

        if (this.node.scale <= 1 || flag) {
            this.node.scale += 0.001;
            flag = true;
        }
        if (this.node.scale >= 1.1 || !flag) {
            this.node.scale -= 0.001;
            flag = false;
        }
        this.node.setScale(this.node.scale);
    },

    callback: function callback(button) {
        cc.director.loadScene("Choose Scene");
        //do whatever you want with button
        //另外，注意这种方式注册的事件，也无法传递 customEventData
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=BtnControl.js.map
        