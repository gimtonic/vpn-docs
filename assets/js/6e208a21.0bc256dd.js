"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="IOS",p={unversionedId:"Openvpn/IOS",id:"Openvpn/IOS",title:"IOS",description:"1. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 OpenVPN Connect \u0421\u043a\u0430\u0447\u0430\u0442\u044c",source:"@site/docs/Openvpn/IOS.md",sourceDirName:"Openvpn",slug:"/Openvpn/IOS",permalink:"/docs/Openvpn/IOS",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Android",permalink:"/docs/Openvpn/Android"},next:{title:"MacOs",permalink:"/docs/Openvpn/MacOs"}},l={},c=[],s={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios"},"IOS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 OpenVPN Connect ",(0,a.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/openvpn-connect/id590379981"},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f OpenVPN (\u0444\u0430\u0439\u043b .ovpn).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0441\u043a\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 share(\u0438\u043a\u043e\u043d\u043a\u0430 \u0432 \u043f\u0440\u0430\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443) \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 OpenVPN"))),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"android",src:n(3384).Z,width:"591",height:"1280"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD"))),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"android",src:n(4157).Z,width:"591",height:"1280"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0433\u0430\u043b\u043a\u0443 ",(0,a.kt)("inlineCode",{parentName:"li"},"Connect after import")," \u0438 \u043f\u043e\u0442\u043e\u043c \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,a.kt)("inlineCode",{parentName:"li"},"ADD"))),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"android",src:n(5514).Z,width:"591",height:"1280"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u0414\u0430\u0439\u0442\u0435 \u043f\u0440\u0430\u0432\u0430")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"android",src:n(3743).Z,width:"591",height:"1280"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"Yes"))),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"android",src:n(9949).Z,width:"591",height:"1280"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"VPN \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"android",src:n(6952).Z,width:"591",height:"1280"})))}m.isMDXComponent=!0},3384:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-eae9ca5bef135237ec573097b9c024f2.jpg"},4157:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2-9a91ff3a0b59f5db8d1779389210c470.jpg"},5514:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3-23f6f572abe15127acbdc3e6f50e6b32.jpg"},3743:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/4-cd72955b30e712f2b368636fa328722f.jpg"},9949:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/5-ea2fd5fb968f07a7c59ef588e0a934a9.jpg"},6952:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/6-9c14c9d898fe01a8d565b00168c8f12b.jpg"}}]);