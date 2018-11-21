var flag;
cc.Class({
    extends: cc.Component,

    properties: {
       button: cc.Button
    },

    onLoad: function () {
      

       this.button.node.on('click', this.callback, this);
    },

    start: function () {
      flag=true;
  },

  update: function(dt) {
  
   if(this.node.scale<=1||flag)
   {
       this.node.scale+=0.001;
       flag=true;
   }
   if(this.node.scale>=1.1||!flag)
   {
       this.node.scale-=0.001;
       flag=false;
   }
   this.node.setScale(this.node.scale);
},


    callback: function (button) {
        cc.director.loadScene("Choose Scene");
       //do whatever you want with button
       //另外，注意这种方式注册的事件，也无法传递 customEventData
    }
});