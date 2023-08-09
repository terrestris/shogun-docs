"use strict";(self.webpackChunkshogun_docs=self.webpackChunkshogun_docs||[]).push([[238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Toolbox: Maps",l={unversionedId:"gis-client/layertree",id:"gis-client/layertree",title:"Toolbox: Maps",description:"*",source:"@site/docs/gis-client/05-layertree.md",sourceDirName:"gis-client",slug:"/gis-client/layertree",permalink:"/docs/gis-client/layertree",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Toolbox: Export",permalink:"/docs/gis-client/export"},next:{title:"Toolbox: Share",permalink:"/docs/gis-client/share"}},s={},c=[{value:"Steps:",id:"steps",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"toolbox-maps"},"Toolbox: Maps"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The layertree organizes the layer hierarchy. Layers that are listed first in the layertree are displayed at the top level of the map. The hierarchy can be adjusted via dragging a layer to another position, existing layers can be hidden or shown. Furthermore, it is possible to add new WMS services to the layertree and thus to the map, or to delete them."),(0,o.kt)("h3",{id:"steps"},"Steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change the layer hierarchy"),(0,o.kt)("li",{parentName:"ul"},"add a WMS-layer to the map via the Button ",(0,o.kt)("inlineCode",{parentName:"li"},"+ Add WMS")),(0,o.kt)("li",{parentName:"ul"},"Change a layers opacity"),(0,o.kt)("li",{parentName:"ul"},"zoom to a layers extent")))}y.isMDXComponent=!0}}]);