(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/backHome.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '57353quQKpNnaS/ZqgXbN0W', 'backHome', __filename);
// scripts/backHome.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        button: cc.Button
    },

    onLoad: function onLoad() {
        this.button.node.on('click', this.callback, this);
    },

    callback: function callback(button) {
        cc.director.loadScene('GameStart');
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
        //# sourceMappingURL=backHome.js.map
        