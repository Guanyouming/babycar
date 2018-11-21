"use strict";
cc._RF.push(module, '9df59JrUQBON5MdA5XnLTjl', 'fullscreenVideoPlayer');
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