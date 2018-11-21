"use strict";
cc._RF.push(module, 'b0d566Xo7tB8ZKNIbIbworN', 'BtnControl');
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