(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/fullscreenVideoPlayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9df59JrUQBON5MdA5XnLTjl', 'fullscreenVideoPlayer', __filename);
// scripts/fullscreenVideoPlayer.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        tempVidePlay: cc.Prefab

    },

    start: function start() {
        var _this = this;

        this.node.on('touchend', function () {
            var node = cc.instantiate(_this.tempVidePlay);
            node.parent = cc.find('Canvas');
            var videoPlayer = node.getComponent(cc.VideoPlayer);
            videoPlayer.enabled = true;
            videoPlayer.isFullscreen = true;
            videoPlayer.play();
        });
    },


    update: function update(dt) {
        component.scheduleOnce(function () {
            // 这里的 this 指向 component
            this.doSomething(cc.director.loadScene("GameStart"));
        }, 7);
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
        //# sourceMappingURL=fullscreenVideoPlayer.js.map
        