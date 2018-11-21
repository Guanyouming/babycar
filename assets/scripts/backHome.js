cc.Class({
    extends: cc.Component,

    properties: {
       button: cc.Button
    },

    onLoad: function () {
       this.button.node.on('click', this.callback, this);
    },

    callback: function (button) {
        cc.director.loadScene('GameStart');
       //do whatever you want with button
       //另外，注意这种方式注册的事件，也无法传递 customEventData
    }
});