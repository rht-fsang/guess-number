System.register("chunks:///_virtual/game.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,a,n,s,o,r,h,c,l,m,u,g,p,d,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,a=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,o=t._decorator,r=t.AudioClip,h=t.resources,c=t.SpriteFrame,l=t.Sprite,m=t.find,u=t.EditBox,g=t.assert,p=t.director,d=t.Label,f=t.Component}],execute:function(){var v,y,k,C,T;s._RF.push({},"b5d46sNVVBI/6LKNB9FE0gS","game",void 0);var B=o.ccclass,b=o.property;t("game",(v=B("game"),y=b([r]),v((T=e((C=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s))||this,a(e,"audioList",T,n(e)),e.time=0,e.answer="",e}i(e,t);var s=e.prototype;return s.changeTalk=function(t){var e=this;h.load("play/talk"+t+"/spriteFrame",c,(function(t,i){e.node.getChildByName("npc-talk").getComponent(l).spriteFrame=i}))},s.isAnswer=function(){var t=this;if(m("Canvas/number").getComponent(u).string===this.answer){this.changeTalk(8),setTimeout((function(){t.changeTalk(9)}),1e3);var e=this.audioList[1];g(e),e.play();var i=this.audioList[2];g(i),i.pause(),setTimeout((function(){p.loadScene("main")}),4e3)}else{this.changeTalk(10);var a=this.audioList[0];g(a),a.play(),setTimeout((function(){m("Canvas/number").getComponent(u).string="",t.changeTalk(12)}),1e3)}},s.start=function(){var t=this.audioList[2];g(t),t.play()},s.toDo=function(){p.loadScene("process")},s.update=function(t){(this.time+=t,this.time>1&&this.time<1.02&&(this.node.getChildByName("role-talk").active=!0),this.time>1.5&&this.time<1.52&&(this.node.getChildByName("npc-talk").active=!0),this.time>2&&this.time<2.02&&(this.node.getChildByName("role-talk").active=!1,this.node.getChildByName("npc-talk").setPosition(50,28),this.changeTalk(2)),this.time>3&&this.time<3.02&&this.changeTalk(3),this.time>4&&this.time<4.02&&this.changeTalk(4),this.time>5&&this.time<5.02&&this.changeTalk(5),this.time>6&&this.time<6.02&&this.changeTalk(6),this.time>7&&this.time<7.02&&this.changeTalk(7),this.time>8&&this.time<8.02)&&(this.answer=Math.floor(100*Math.random()).toString(),this.changeTalk(12),this.node.getChildByName("result").active=!0,m("Canvas/result/bigo").getComponent(d).string=this.answer,this.node.getChildByName("number").active=!0)},e}(f)).prototype,"audioList",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),k=C))||k));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./game.ts","./process1.ts","./start.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/process1.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,n,a,o,s,r,c,h,l,u,d,m,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,r=e.AudioClip,c=e.assert,h=e.resources,l=e.SpriteFrame,u=e.Sprite,d=e.Vec3,m=e.director,p=e.Component}],execute:function(){var g,v,y,f,N;o._RF.push({},"6784dZ7+qRKG7riiNKE8hso","process1",void 0);var C=s.ccclass,B=s.property;e("process1",(g=C("process1"),v=B([r]),g((N=t((f=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,n(t,"audioList",N,a(t)),t.time=0,t}i(t,e);var o=t.prototype;return o.start=function(){var e=this.audioList[2];c(e),e.play()},o.changeTalk=function(e){var t=this;h.load("talk"+e+"/spriteFrame",l,(function(e,i){t.node.getChildByName("talk").getComponent(u).spriteFrame=i}))},o.onNext=function(e,t,i,n){if("1"===n){var a=this.audioList[1];c(a),a.play(),this.changeTalk(e),this.node.getChildByName(t).active=!1,this.node.getChildByName(i).active=!0}else{var o=this.audioList[0];c(o),o.play()}},o.changeBroundback=function(e,t){var i=this;h.load("broundback"+t+"/spriteFrame",l,(function(e,t){i.node.getChildByName("mainBroundback").getComponent(u).spriteFrame=t,i.node.getChildByName("mainBroundback").scale=new d(3,3,3)})),this.changeTalk(3),this.node.getChildByName("broundback").active=!1,this.node.getChildByName("roles").active=!0},o.changeRole=function(e,t){var i=this;h.load("role"+t+"/spriteFrame",l,(function(e,t){i.node.getChildByName("role").getComponent(u).spriteFrame=t})),this.changeTalk(4),this.node.getChildByName("roles").active=!1,this.node.getChildByName("button").active=!0},o.onYes=function(){this.changeTalk(5),this.node.getChildByName("button").active=!1,this.node.getChildByName("action").active=!0},o.binggo=function(e,t){if("1"===t){var i=this.audioList[1];c(i),i.play(),this.changeTalk(6),this.node.getChildByName("action").active=!1,this.node.getChildByName("num").active=!0}else{var n=this.audioList[0];c(n),n.play()}},o.onNum=function(e,t){var i=this;if("2"===t){this.changeTalk(7),this.node.getChildByName("num").active=!1;var n=this.audioList[1];c(n),n.play(),setTimeout((function(){i.changeTalk(8),i.node.getChildByName("speak").active=!0}),2e3)}else{var a=this.audioList[0];c(a),a.play()}},o.onSpeak=function(e,t){this.onNext(9,"speak","change",t)},o.onchange=function(e,t){this.onNext(10,"change","size",t)},o.onSize=function(e,t){this.onNext(17,"size","number",t)},o.onNumber=function(e,t){this.onNext(11,"number","random",t)},o.onRandom=function(e,t){this.onNext(12,"random","isyes",t)},o.isYes=function(e,t){this.onNext(13,"isyes","isno",t)},o.isNO=function(e,t){this.onNext(14,"isno","over",t)},o.over=function(e,t){this.onNext(16,"over","every",t)},o.every=function(e,t){var i=this;h.load("last/spriteFrame",l,(function(e,t){i.node.getChildByName("talk").getComponent(u).spriteFrame=t}));var n=this.audioList[3];c(n),n.play(),this.node.getChildByName("every").active=!1,setTimeout((function(){var e=i.audioList[2];c(e),e.pause(),m.loadScene("main")}),2e3)},o.onNO=function(){this.changeTalk(3),this.node.getChildByName("roles").active=!0,this.node.getChildByName("button").active=!1},o.update=function(e){this.time+=e,this.time>2&&this.time<2.02&&(this.changeTalk(2),this.node.getChildByName("broundback").active=!0)},t}(p)).prototype,"audioList",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=f))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/start.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,r,n,c;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy,r=t._decorator,n=t.director,c=t.Component}],execute:function(){var s;o._RF.push({},"2701eqtj1BDRozWqLY3vh6N","start",void 0);var a=r.ccclass;r.property,t("start",a("start")(s=function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var r=o.prototype;return r.start=function(){},r.toPaly=function(){n.loadScene("play")},r.toMake=function(){n.loadScene("process1")},r.update=function(t){},o}(c))||s);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});