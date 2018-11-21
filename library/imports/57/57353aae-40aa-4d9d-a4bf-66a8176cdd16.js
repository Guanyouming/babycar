"use strict";
cc._RF.push(module, '57353quQKpNnaS/ZqgXbN0W', 'backHome');
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