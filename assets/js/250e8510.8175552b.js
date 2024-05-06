"use strict";(self.webpackChunkshogun_docs=self.webpackChunkshogun_docs||[]).push([[699],{1416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(4848),s=n(8453);const o={},a="Maps",r={id:"gis-client/toolbox/layertree",title:"Maps",description:"*",source:"@site/docs/gis-client/toolbox/06-layertree.md",sourceDirName:"gis-client/toolbox",slug:"/gis-client/toolbox/layertree",permalink:"/shogun-docs/docs/gis-client/toolbox/layertree",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Print/Export",permalink:"/shogun-docs/docs/gis-client/toolbox/print"},next:{title:"Share",permalink:"/shogun-docs/docs/gis-client/toolbox/share"}},l={},d=[{value:"Layer tree",id:"layer-tree",level:2},{value:"Add WMS services",id:"add-wms-services",level:2},{value:"Upload data",id:"upload-data",level:2}];function h(e){const t={admonition:"admonition",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"maps",children:"Maps"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:'This menu item, called "Maps", contains the layer tree of the application as well as other functions for adding data.'}),"\n",(0,i.jsx)(t.h2,{id:"layer-tree",children:"Layer tree"}),"\n",(0,i.jsxs)(t.p,{children:["The layertree contains all the layers configured for the application in a folder structure. The layer tree organises the layer hierarchy. Layers that are at the top of the layer tree are displayed on the top level of the map.\n",(0,i.jsx)(t.img,{alt:"gis-client",src:n(3938).A+"",width:"374",height:"299"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Activation/deactivation"}),": The checkbox in front of the respective element can be used to activate or deactivate layers or folders for the map."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transparency"}),": It is possible to adjust the transparency of an activated layer in the map using a slider. If the slider is moved to the right, the transparency increases. This makes information that lies under the objects of this layer visible. When the application is started, the transparency is zero for all layers."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Change order"}),": The layers can be moved within the layer tree using drag & drop to change the order of the layers in the map. To do this, a layer can be selected with a mouse click and moved to the desired position by holding down the left mouse button."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"These changes are not persistent and therefore only apply to the current session."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Context menu"}),": An additional context menu can be opened for each level using the icon ",(0,i.jsx)(t.img,{alt:"gis-client",src:n(3650).A+"",width:"13",height:"20"})," behind each level. Depending on the configuration of the layer, this menu can contain the following functions:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'the option to zoom the map to the standard scale of the theme ("Zoom to layer extent"); the map section is set so that all objects of the layer are included.'}),"\n",(0,i.jsx)(t.li,{children:'the option to display the legend; the legend is then displayed below the transparency slider of the layer and can also be deactivated again using the same method in the context menu ("Hide legend")'}),"\n",(0,i.jsx)(t.li,{children:'the option to download/export the theme, if configured ("Export layer")'}),"\n",(0,i.jsx)(t.li,{children:'the option to edit the theme, if configured ("Edit layer")'}),"\n",(0,i.jsx)(t.li,{children:'the option to view the properties of the layer ("Properties")'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"add-wms-services",children:"Add WMS services"}),"\n",(0,i.jsx)(t.p,{children:'It is also possible to add new WMS services to the layertree. The "Add WMS" button below the theme tree is provided for this purpose.'}),"\n",(0,i.jsx)(t.p,{children:"Click on the button to open the corresponding window."}),"\n",(0,i.jsx)(t.p,{children:'Firstly, a valid WMS URL must be entered or copied into the text field. The basic URL of the WMS is sufficient; it is not necessary to add the SERVICE, VERSION and REQUEST parameters to the URL. They are added automatically. The user can then either click on the "magnifying glass icon" behind the text field or press the Enter key to obtain a list of available levels.'}),"\n",(0,i.jsx)(t.p,{children:"If the service URL is invalid and/or no layers could be read, the user is informed by an error message."}),"\n",(0,i.jsx)(t.p,{children:"If the WMS URL is valid and the available layers could be read, these are displayed in a selection list below the text field."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gis-client",src:n(7182).A+"",width:"597",height:"398"})}),"\n",(0,i.jsx)(t.p,{children:'The user now has the option of selecting the desired layers by clicking on the respective checkboxes in order to add them to the map. The desired layers are loaded into the map using the "Add selection" button and are available in the "External services" folder in the theme tree. You can also add all layers of the WMS service without preselection using the "Add all" button. The window closes automatically after the desired layers have been added to the map.'}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Added external layers are only available within the current session."})}),"\n",(0,i.jsx)(t.h2,{id:"upload-data",children:"Upload data"}),"\n",(0,i.jsx)(t.p,{children:'The "Upload data" button is also located below the topic tree.'}),"\n",(0,i.jsx)(t.p,{children:"Click on the button to open the corresponding window."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gis-client",src:n(8518).A+"",width:"591",height:"224"})}),"\n",(0,i.jsx)(t.p,{children:"It is possible to add a shapefile as a Zipfile or GeoTIFF. Once the data has been successfully uploaded, it is displayed on the map."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Uploaded data is only available within the current session."})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7182:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add_wms-49ffb2747408d0579cd33fe487644205.png"},3650:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAIAAADZUCB4AAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAAJ1JREFUKJHNkiEOxCAQRemehcw5Sm/AaeAy9XWQgGyCrweFhKS1BM+KVQukVG121OTxYD7JTKUU9KBeT6QfeMaYZVk45wNPShljFEJ47++8eZ4/Dcb466A0dV1XCzv/2Pc9pVTT6t66rgAAAIP3zvNsJ/TzKaVyzhXseCGEFtbetm0AQCkd5NNaI4Sstcdx3OVzzhFCGGMVn8p/798bLf77IjJGEhgAAAAASUVORK5CYII="},3938:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/layertree-5298888686224efc45ba69fff30eb2ef.png"},8518:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/upload-47a311521f03d01cad3cb2c6ac02100a.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);