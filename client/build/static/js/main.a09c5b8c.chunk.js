(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(t,e,n){t.exports=n(20)},17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),i=(n(17),n(6)),s=n(7),l=n(11),u=n(10),h=n(8),m=n.n(h),d=(n(18),n(1)),p=n.n(d),f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={title:"",author:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/api/server").then((function(t){return t.json()})).then((function(e){t.setState({title:e.text,author:e.author})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),this.state.title?this.state.title:o.a.createElement(p.a,{width:100}),"  From  ",this.state.author?this.state.author:o.a.createElement(p.a,{width:100})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.a09c5b8c.chunk.js.map