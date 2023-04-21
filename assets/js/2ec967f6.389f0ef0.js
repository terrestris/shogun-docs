"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"Glossary",title:"Glossary",description:"Glossary",sidebar_position:6,sidebar_label:"Glossary"},o="Glossary",s={unversionedId:"glossar/Glossary",id:"glossar/Glossary",title:"Glossary",description:"Glossary",source:"@site/docs/glossar/index.md",sourceDirName:"glossar",slug:"/glossar/",permalink:"/shogun-docs/docs/glossar/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"Glossary",title:"Glossary",description:"Glossary",sidebar_position:6,sidebar_label:"Glossary"},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/shogun-docs/docs/workflows/"}},l={},c=[{value:"Permission",id:"permission",level:2},{value:"Application",id:"application",level:2},{value:"Subject",id:"subject",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("h2",{id:"permission"},"Permission"),(0,a.kt)("p",null,"In the first place permissions are used to grant a user access to an application. In addition, various restrictions for the individual ",(0,a.kt)("strong",{parentName:"p"},"Applications")," can be applied. Since only the admin-user has access to the admin client, the restrictions mainly impact the admin-user."),(0,a.kt)("p",null,"The following permissions can be granted to each user:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Read")),(0,a.kt)("td",{parentName:"tr",align:null},"If corresponding to the users role, the user can read the JSON-files configuring the Web-GIS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Update")),(0,a.kt)("td",{parentName:"tr",align:null},"If corresponding to the users role, the user can modify the JSON-files configuring the Web-GIS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Update & Delete")),(0,a.kt)("td",{parentName:"tr",align:null},"If corresponding to the users role, the user can modify and delete the JSON-files configuring the Web-GIS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Owner")),(0,a.kt)("td",{parentName:"tr",align:null},"If corresponding to the users role, the user can modify and delete the JSON-files configuring the Web-GIS and grant permissions to new users")))),(0,a.kt)("p",null,"We would recommend granting every user the ",(0,a.kt)("inlineCode",{parentName:"p"},"Read")," permission except for the owner of the application."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Every user listed within the permission grid has access to the Web-GIS application. The permissions granted mainly affect users who also have the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," role, as only these users can access the admin client and thus modify the configurations.")),(0,a.kt)("h2",{id:"application"},"Application"),(0,a.kt)("p",null,"An application is a defined configuration of a Web-GIS. It can be determined which user should have access rights to the Web-GIS, as well as which layers should be displayed by default in which zoom level for which extent. It can be individually defined which tools should be available, as well as which color, name and logo the Web-GIS should have."),(0,a.kt)("h2",{id:"subject"},"Subject"),(0,a.kt)("p",null,"A predefined list of layers that can be added to an instance and can be available by default according to the properties set."))}u.isMDXComponent=!0}}]);