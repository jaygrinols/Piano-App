(this["webpackJsonppiano-app"]=this["webpackJsonppiano-app"]||[]).push([[0],[,,function(e,t,a){},,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),s=(a(10),a(11),a(4));a(2);function i(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],o=a[1],i="note"+e.character,p=document.getElementById(i);return document.addEventListener("keydown",(function(t){t.code==e.character&&(o(!0),p&&p.play())})),document.addEventListener("keyup",(function(t){t.code==e.character&&(o(!1),p&&(p.pause(),p.currentTime=0))})),r?"black"==e.type?c.a.createElement("div",{className:e.type+"-key-pressed",style:{left:e.position}},c.a.createElement("audio",{id:i,src:e.audio})):c.a.createElement("div",{className:e.type+"-key-pressed"},c.a.createElement("audio",{id:i,src:e.audio})):"black"==e.type?c.a.createElement("div",{className:e.type+"-key-unpressed",style:{left:e.position}},c.a.createElement("audio",{id:i,src:e.audio})):c.a.createElement("div",{className:e.type+"-key-unpressed"},c.a.createElement("audio",{id:i,src:e.audio}))}a(12);function p(e){return c.a.createElement("div",{className:"piano"},c.a.createElement(i,{character:"KeyA",audio:"https://sndup.net/9tqm/C4.mp3",type:"white"}),c.a.createElement(i,{character:"KeyS",audio:"https://sndup.net/4hhm/D4.mp3",type:"white"}),c.a.createElement(i,{character:"KeyD",audio:"https://sndup.net/5ycf/E4.mp3",type:"white"}),c.a.createElement(i,{character:"KeyF",audio:"https://sndup.net/2xdz/F4.mp3",type:"white"}),c.a.createElement(i,{character:"KeyG",audio:"https://sndup.net/2m9k/G4.mp3",type:"white"}),c.a.createElement(i,{character:"KeyH",audio:"https://sndup.net/98g8/A4.mp3",type:"white"}),c.a.createElement(i,{character:"KeyJ",audio:"https://sndup.net/6gq9/B4.mp3",type:"white"}),c.a.createElement(i,{character:"KeyW",audio:"https://sndup.net/4pnb/Cs4.mp3",type:"black",position:"9.3%"}),c.a.createElement(i,{character:"KeyE",audio:"https://sndup.net/4s7k/Ds4.mp3",type:"black",position:"25%"}),c.a.createElement(i,{character:"KeyT",audio:"https://sndup.net/9tkc/Fs4.mp3",type:"black",position:"52%"}),c.a.createElement(i,{character:"KeyY",audio:"https://sndup.net/9nhm/Gs4.mp3",type:"black",position:"67.35%"}),c.a.createElement(i,{character:"KeyU",audio:"https://sndup.net/437d/As4.mp3",type:"black",position:"83%"}))}var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.75bc79f0.chunk.js.map