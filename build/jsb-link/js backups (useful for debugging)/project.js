window.__require = function e(n, c, t) {
function o(i, l) {
if (!c[i]) {
if (!n[i]) {
var a = i.split("/");
a = a[a.length - 1];
if (!n[a]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + i + "'");
}
}
var u = c[i] = {
exports: {}
};
n[i][0].call(u.exports, function(e) {
return o(n[i][1][e] || e);
}, u, u.exports, e, n, c, t);
}
return c[i].exports;
}
for (var r = "function" == typeof __require && __require, i = 0; i < t.length; i++) o(t[i]);
return o;
}({
BtnControl: [ function(e, n, c) {
"use strict";
cc._RF.push(n, "b0d566Xo7tB8ZKNIbIbworN", "BtnControl");
cc.Class({
extends: cc.Component,
properties: {
button: cc.Button
},
onLoad: function() {
this.button.node.on("click", this.callback, this);
},
callback: function(e) {
cc.director.loadScene("Choose Scene");
}
});
cc._RF.pop();
}, {} ],
FullscreenVideoPlayerEvent: [ function(e, n, c) {
"use strict";
cc._RF.push(n, "c522blbRKFBv7rKt6D8cgUF", "FullscreenVideoPlayerEvent");
var t = null;
cc.Class({
extends: cc.Component,
videoPlayerEvent: function(e, n) {
t || (t = this.node.getComponent(cc.VideoPlayer));
if (n === cc.VideoPlayer.EventType.COMPLETED) {
t.isFullscreen = !1;
t.node.removeFromParent();
t = null;
}
}
});
cc._RF.pop();
}, {} ],
backHome: [ function(e, n, c) {
"use strict";
cc._RF.push(n, "57353quQKpNnaS/ZqgXbN0W", "backHome");
cc.Class({
extends: cc.Component,
properties: {
button: cc.Button
},
onLoad: function() {
this.button.node.on("click", this.callback, this);
},
callback: function(e) {
cc.director.loadScene("GameStart");
}
});
cc._RF.pop();
}, {} ],
fullscreenVideoPlayer: [ function(e, n, c) {
"use strict";
cc._RF.push(n, "9df59JrUQBON5MdA5XnLTjl", "fullscreenVideoPlayer");
cc.Class({
extends: cc.Component,
properties: {
tempVidePlay: cc.Prefab
},
start: function() {
var e = this;
this.node.on("touchend", function() {
var n = cc.instantiate(e.tempVidePlay);
n.parent = cc.find("Canvas");
var c = n.getComponent(cc.VideoPlayer);
c.enabled = !0;
c.isFullscreen = !0;
c.play();
});
},
update: function(e) {
component.scheduleOnce(function() {
this.doSomething(cc.director.loadScene("GameStart"));
}, 7);
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "BtnControl", "FullscreenVideoPlayerEvent", "backHome", "fullscreenVideoPlayer" ]);