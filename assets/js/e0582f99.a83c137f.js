"use strict";(self.webpackChunkshogun_docs=self.webpackChunkshogun_docs||[]).push([[693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Toolbox: Draw",l={unversionedId:"gis-client/draw",id:"gis-client/draw",title:"Toolbox: Draw",description:"*",source:"@site/docs/gis-client/02-draw.md",sourceDirName:"gis-client",slug:"/gis-client/draw",permalink:"/shogun-docs/docs/gis-client/draw",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Toolbox: Measure",permalink:"/shogun-docs/docs/gis-client/measure"},next:{title:"Toolbox: Query map features",permalink:"/shogun-docs/docs/gis-client/query-map-features"}},c={},s=[{value:"Steps:",id:"steps",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"toolbox-draw"},"Toolbox: Draw"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The draw-tools can be used to annotate the map, draw geometries to highlight certain areas or can be downloaded as an area-of-interest."),(0,o.kt)("p",null,"Open a web GIS application and add new geometries to the map using the Draw function from the toolbar"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Choose a geometry type among the following three types: point, line, polygon. To deselect a geometry you need untoggle the selected geometry.")),(0,o.kt)("h3",{id:"steps"},"Steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The "Modify color scheme" button can be used to modify the color of the different geometry types'),(0,o.kt)("li",{parentName:"ul"},"The created features can be exported and imported as geoJSON"),(0,o.kt)("li",{parentName:"ul"},"Additionally all features can be edited or deleted")))}d.isMDXComponent=!0}}]);