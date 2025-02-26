System.register("chunks:///_virtual/Gameplay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Sound.ts","./Item.ts","./TypingEffect.ts","./StarCtrl.ts"],(function(t){var e,n,i,o,c,r,a,l,s,u,h,d,g,p,f,m,v,S,k,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){c=t.cclegacy,r=t._decorator,a=t.ScrollView,l=t.Node,s=t.Vec3,u=t.tween,h=t.UITransform,d=t.Widget,g=t.Animation,p=t.screen,f=t.Size,m=t.Component},function(t){v=t.Sound},function(t){S=t.Item},function(t){k=t.TypingEffect},function(t){y=t.StarCtrl}],execute:function(){var w,b,z,I,C,O,P,T,A,B,D,R,E,G,N,W,_,L;c._RF.push({},"411359ydZBK4o4XNX8vkNvS","Gameplay",void 0);var M=r.ccclass,x=r.property;t("Gameplay",(w=M("Gameplay"),b=x(a),z=x(l),I=x(a),C=x(l),O=x(l),P=x(l),T=x(l),w(((L=function(t){function e(){for(var e,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return e=t.call.apply(t,[this].concat(c))||this,i(e,"bg",D,o(e)),i(e,"ui",R,o(e)),i(e,"scrollItem",E,o(e)),i(e,"khung",G,o(e)),i(e,"title",N,o(e)),i(e,"tutorial",W,o(e)),i(e,"nat",_,o(e)),e.step=0,e.isSelected=!1,e.time=20,e.isSound=!1,e}n(e,t);var c=e.prototype;return c.start=function(){var t=this;e.instance=this,this.ui.setScale(new s(0,0,0)),this.scheduleOnce((function(){t.AniBg()}),1)},c.AniBg=function(){var t=this;this.bg.scrollToBottomRight(4),this.scheduleOnce((function(){t.bg.scrollToPercentHorizontal(.5,1,!0),t.scheduleOnce((function(){t.ui.setScale(new s(1,1,1)),t.btnSound(),k.instance.startText(),t.khung.active=!1,t.scrollItem.node.active=!1,t.scheduleOnce((function(){t.khung.active=!0,t.scrollItem.node.active=!0}),6)}),1)}),2)},c.update=function(t){var n=this;(this.time-=t,this.time<0&&this.step<5&&(this.time=10,this.tutorial.active=!0,this.scrollItem.content.children.forEach((function(t){t.getComponent(S).key==n.step&&(n.tutorial.setWorldPosition(t.getComponent(S).icon.worldPosition),u(n.tutorial).to(1,{worldPosition:e.instance.khung.worldPosition}).call((function(){n.tutorial.active=!1})).start())}))),this.node.getComponent(h).setContentSize(this.getSizeWindow(1366,1025)),this.scrollItem.node.getComponent(h).width>this.scrollItem.content.getComponent(h).width)&&(this.scrollItem.content.getComponent(d).isAlignLeft=!1,this.scrollItem.content.setPosition(new s(0,0,0)))},c.SetStep=function(){var t=this;switch(this.step){case 0:this.khung.children[0].active=!0,v.instance.playSound1(0);break;case 1:this.khung.children[1].active=!0,v.instance.playSound1(1);break;case 2:this.khung.children[2].active=!0,v.instance.playSound1(2);break;case 3:this.khung.children[3].active=!0,this.scrollItem.content.children.forEach((function(t){1==t.getComponent(S).key&&(t.getComponent(S).key=5),2==t.getComponent(S).key&&(t.getComponent(S).key=4)})),v.instance.playSound1(3);break;case 4:this.khung.children[4].active=!0,v.instance.playSound1(2);break;case 5:this.isSelected=!0,v.instance.playSound1(1),this.khung.children[5].active=!0,this.scheduleOnce((function(){t.khung.children[0].active=!1,t.khung.children[1].active=!1,t.khung.children[2].active=!1,t.khung.children[3].active=!1,t.khung.children[4].active=!1,t.khung.children[5].active=!1,t.khung.children[6].active=!0,t.khung.children[6].getComponent(g).play("goi"),t.scheduleOnce((function(){t.khung.children[6].active=!1,t.khung.children[7].active=!0,t.isSelected=!1}),.8)}),.6);break;case 6:this.isSelected=!0,v.instance.playSound1(4),this.khung.children[8].active=!0,this.scheduleOnce((function(){t.scrollItem.node.active=!1,t.title.active=!1,u(t.khung).to(1,{scale:new s(1.3,1.3,1.3)}).start(),u(t.khung).to(1,{position:new s(0,0,0)}).start(),t.scheduleOnce((function(){k.instance.timeCurrent>0?y.instance.SetDiem(3):y.instance.SetDiem(2),y.instance.showNode()}),2)}),1)}this.step++},c.btnSound=function(){var t=this;1!=this.isSound&&(this.isSound=!0,v.instance.playThoai(0),this.scheduleOnce((function(){t.isSound=!1}),6))},c.getSizeWindow=function(t,e){var n=0,i=0,o=p.windowSize.width/t,c=p.windowSize.height/e;return o>c?(i=p.windowSize.width/c,n=e):(n=p.windowSize.height/o,i=t),new f(i,n)},c.shuffleArray=function(t){for(var e=t.length-1;e>0;e--){var n=this.getRandomInt(0,e+1),i=[t[n],t[e]];t[e]=i[0],t[n]=i[1]}return t},c.getRandomInt=function(t,e){return Math.floor(Math.random()*(e-t))+t},e}(m)).instance=void 0,D=e((B=L).prototype,"bg",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(B.prototype,"ui",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(B.prototype,"scrollItem",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=e(B.prototype,"khung",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=e(B.prototype,"title",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=e(B.prototype,"tutorial",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=e(B.prototype,"nat",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=B))||A));c._RF.pop()}}}));

System.register("chunks:///_virtual/Item.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Gameplay.ts","./Sound.ts"],(function(n){var e,t,i,o,c,a,s,r,l,u,d,p,h,y;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,i=n.initializerDefineProperty,o=n.assertThisInitialized},function(n){c=n.cclegacy,a=n._decorator,s=n.Node,r=n.CCInteger,l=n.Input,u=n.tween,d=n.UITransform,p=n.Component},function(n){h=n.Gameplay},function(n){y=n.Sound}],execute:function(){var f,g,v,m,S,I,T;c._RF.push({},"13d6cOkNuhJhaYqAQXbDI72","Item",void 0);var w=a.ccclass,P=a.property;n("Item",(f=w("Item"),g=P(s),v=P(r),f((I=e((S=function(n){function e(){for(var e,t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return e=n.call.apply(n,[this].concat(c))||this,i(e,"icon",I,o(e)),i(e,"key",T,o(e)),e}t(e,n);var c=e.prototype;return c.start=function(){this.node.on(l.EventType.TOUCH_START,this.TouchEnd,this)},c.TouchMove=function(n){},c.TouchEnd=function(){var n=this;1!=h.instance.isSelected&&(h.instance.isSelected=!0,this.key==h.instance.step?(y.instance.playDung(),h.instance.time=10,6==this.key?(h.instance.nat.active=!0,h.instance.nat.setWorldPosition(this.node.worldPosition),u(h.instance.nat).to(.6,{worldPosition:h.instance.khung.worldPosition}).call((function(){h.instance.nat.active=!1,h.instance.SetStep(),h.instance.scrollItem.enabled=!0,h.instance.isSelected=!1})).start()):h.instance.khung.children.forEach((function(e,t){t==h.instance.step&&(e.active=!0,e.setWorldPosition(n.node.worldPosition),u(e).to(.6,{worldPosition:h.instance.khung.worldPosition}).call((function(){h.instance.SetStep(),h.instance.scrollItem.enabled=!0,h.instance.isSelected=!1})).start())}))):(y.instance.playThoai(1),this.scheduleOnce((function(){y.instance.playSai()}),1),h.instance.isSelected=!1))},c.isNodeInsideTarget=function(n,e){var t=e.getComponent(d),i=n.getWorldPosition();console.log(i);var o=t.convertToNodeSpaceAR(i);console.log(o);var c=t.width/2,a=t.height/2;return console.log(o.x,-c,o.x,c,o.y,-a,o.y<=a),o.x>=-c&&o.x<=c&&o.y>=-a&&o.y<=a},e}(p)).prototype,"icon",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=e(S.prototype,"key",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),m=S))||m));c._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SoundManager.ts","./StarCtrl.ts","./Gameplay.ts","./Item.ts","./Sound.ts","./TypingEffect.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Sound.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var n,e,t,o,r,a,u,c,l,s;return{setters:[function(i){n=i.applyDecoratedDescriptor,e=i.inheritsLoose,t=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){r=i.cclegacy,a=i._decorator,u=i.AudioSource,c=i.AudioClip,l=i.randomRangeInt,s=i.Component}],execute:function(){var p,h,d,f,y,b,g,S,m,v,z,x,w,O;r._RF.push({},"6d18f+z5+JJJJbtgT715Om5","Sound",void 0);var D=a.ccclass,J=a.property;i("Sound",(p=D("Sound"),h=J(u),d=J(c),f=J(c),y=J(c),b=J(c),p(((O=function(i){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return n=i.call.apply(i,[this].concat(r))||this,t(n,"source",m,o(n)),t(n,"clip",v,o(n)),t(n,"thoai",z,o(n)),t(n,"sai",x,o(n)),t(n,"dung",w,o(n)),n.index=0,n.index1=0,n}e(n,i);var r=n.prototype;return r.onLoad=function(){n.instance=this},r.playSound1=function(i){this.source.playOneShot(this.clip[i],.3)},r.playThoai=function(i){this.source.playOneShot(this.thoai[i],1)},r.playSai=function(){this.index>2||(this.source.playOneShot(this.sai[l(0,2)],.2),this.index++)},r.playDung=function(){this.index1>2||(this.source.playOneShot(this.dung[l(0,3)],.2),this.index1++)},r.update=function(i){},n}(s)).instance=void 0,m=n((S=O).prototype,"source",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=n(S.prototype,"clip",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=n(S.prototype,"thoai",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=n(S.prototype,"sai",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=n(S.prototype,"dung",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g=S))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/SoundManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,i,t,r,o,a,u,l,c;return{setters:[function(n){e=n.applyDecoratedDescriptor,i=n.inheritsLoose,t=n.initializerDefineProperty,r=n.assertThisInitialized},function(n){o=n.cclegacy,a=n._decorator,u=n.AudioSource,l=n.AudioClip,c=n.Component}],execute:function(){var s,p,d,f,g,y,h,m,b,S;o._RF.push({},"67f65S9g4NP37ZdgmmLBncW","SoundManager",void 0);var v=a.ccclass,_=a.property;n("SoundManager",(s=v("SoundManager"),p=_(u),d=_(l),f=_(l),s(((S=function(n){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o))||this,t(e,"audio",h,r(e)),t(e,"sao",m,r(e)),t(e,"Endgame",b,r(e)),e}i(e,n);var o=e.prototype;return o.__preload=function(){e.instance=this},o.playSao=function(){this.audio.playOneShot(this.sao,.2)},o.playEndgame=function(){this.audio.playOneShot(this.Endgame,.2)},e}(c)).instance=void 0,h=e((y=S).prototype,"audio",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(y.prototype,"sao",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(y.prototype,"Endgame",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/StarCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SoundManager.ts"],(function(t){var n,e,o,i,a,r,c,l,s,u,f,p;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,c=t.Node,l=t.tween,s=t.Vec3,u=t.Animation,f=t.Component},function(t){p=t.SoundManager}],execute:function(){var d,h,b,g,m,S,y,v,w,C;a._RF.push({},"66c26VKi6dFdZP42VJLPg7G","StarCtrl",void 0);var A=r.ccclass,N=r.property;t("StarCtrl",(d=A("StarCtrl"),h=N(c),b=N(c),g=N(c),d(((C=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return n=t.call.apply(t,[this].concat(a))||this,o(n,"nodetinhsao",y,i(n)),o(n,"board",v,i(n)),o(n,"stars",w,i(n)),n.diem=0,n}e(n,t);var a=n.prototype;return a.__preload=function(){null==n.instance&&(n.instance=this)},a.start=function(){},a.showNode=function(){var t=this;p.instance.playEndgame(),this.nodetinhsao.active=!0,l(this.nodetinhsao).to(.5,{scale:new s(.4,.4,1)}).call((function(){l(t.board).to(.5,{scale:new s(1,1,1)}).call((function(){t.ShowStars()})).start()})).start()},a.btnReset=function(){p.instance=null,n.instance=null},a.btnBackGame=function(){console.log("[ACTION]: BACK")},a.btnNextGame=function(){console.log("[ACTION]: NEXTGAME")},a.btnListgame=function(){console.log("[ACTION]: SHOWLISTGAME")},a.ShowStars=function(){var t=this;this.stars.forEach((function(n,e){e<t.diem&&t.scheduleOnce((function(){l(n).to(.2,{scale:new s(1,1,1)}).call((function(){n.getComponent(u).play("scale"),p.instance.playSao()})).start()}),.2*e)}))},a.SetDiem=function(t){this.diem=t},n}(f)).instance=void 0,y=n((S=C).prototype,"nodetinhsao",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=n(S.prototype,"board",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=n(S.prototype,"stars",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=S))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/TypingEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,r,o,u,l,a,c,s,h,f,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,u=t._decorator,l=t.Label,a=t.CCInteger,c=t.Sprite,s=t.Tween,h=t.Color,f=t.tween,p=t.Component}],execute:function(){var g,b,d,m,y,T,w,x,v,C,L,z,D,I;o._RF.push({},"00762RfvG1Bm5/i7C5VTgWd","TypingEffect",void 0);var S=u.ccclass,B=u.property;t("TypingEffect",(g=S("TypingEffect"),b=B(l),d=B(a),m=B(c),y=B(a),T=B(a),g(((I=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o))||this,i(e,"textLabel",v,r(e)),e.currentIndex=0,e.fullText="Bé hãy thử tài gói bánh chưng ngày Tết bằng cách dùng tay kéo \ncác nguyên liệu theo thứ tự để gói bánh nào.",i(e,"duration",C,r(e)),i(e,"time",L,r(e)),i(e,"timeDuration",z,r(e)),i(e,"timeCurrent",D,r(e)),e.tweenTime=void 0,e}n(e,t);var o=e.prototype;return o.onLoad=function(){e.instance=this},o.startText=function(){var t=this;this.textLabel.string="",this.showTextWithDuration(this.fullText,this.duration),this.scheduleOnce((function(){t.SetTween()}),this.duration)},o.StopTime=function(){s.stopAllByTarget(this.time),this.unscheduleAllCallbacks(),console.log("den dayS")},o.SetTween=function(){var t=this;this.schedule((function(){t.timeCurrent--,t.timeCurrent<30&&t.timeCurrent>10&&(t.time.color=new h(232,21,25,100)),t.timeCurrent<10&&(t.time.color=new h(255,104,106,255))}),1),f(this.time).to(this.timeCurrent,{fillRange:1}).call((function(){})).start()},o.showTextWithDuration=function(t,e){var n=this,i=t.length,r=e/i;this.schedule((function e(){n.currentIndex<i?(n.textLabel.string+=t[n.currentIndex],n.currentIndex++):n.unschedule(e)}),r)},e}(p)).instance=void 0,v=e((x=I).prototype,"textLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(x.prototype,"duration",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),L=e(x.prototype,"time",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=e(x.prototype,"timeDuration",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 90}}),D=e(x.prototype,"timeCurrent",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 90}}),w=x))||w));o._RF.pop()}}}));

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