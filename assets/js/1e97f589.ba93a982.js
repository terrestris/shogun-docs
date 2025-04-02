"use strict";(self.webpackChunkshogun_docs=self.webpackChunkshogun_docs||[]).push([[27],{7015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"gis-client/toolbox/query-map-features","title":"Query map features / Feature Info","description":"*","source":"@site/docs/gis-client/toolbox/04-query-map-features.md","sourceDirName":"gis-client/toolbox","slug":"/gis-client/toolbox/query-map-features","permalink":"/shogun-docs/docs/gis-client/toolbox/query-map-features","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Draw","permalink":"/shogun-docs/docs/gis-client/toolbox/draw"},"next":{"title":"Print/Export","permalink":"/shogun-docs/docs/gis-client/toolbox/print"}}');var A=n(4848),s=n(8453);const o={},i="Query map features / Feature Info",r={},l=[];function c(e){const t={admonition:"admonition",h1:"h1",header:"header",hr:"hr",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(t.header,{children:(0,A.jsx)(t.h1,{id:"query-map-features--feature-info",children:"Query map features / Feature Info"})}),"\n",(0,A.jsx)(t.hr,{}),"\n",(0,A.jsx)(t.p,{children:'The "Query map features" tool can be used to query detailed information on the objects of the displayed layers in the map, provided that the topics in the map are active and available for querying.'}),"\n",(0,A.jsx)(t.p,{children:"Clicking on the tool activates the factual data query."}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"gis-client",src:n(7756).A+"",width:"390",height:"73"})}),"\n",(0,A.jsx)(t.p,{children:"The desired layer object can be selected in the map with a mouse click. If information on this object is found, it is displayed directly in the tool window."}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"gis-client",src:n(5541).A+"",width:"576",height:"492"})}),"\n",(0,A.jsx)(t.p,{children:'If objects from several levels are found at the clicked location in the map, the results for the individual levels are displayed in different tabs. These tabs can be clicked on individually. In the example above, only one result was found for the "Countries" layer.'}),"\n",(0,A.jsx)(t.p,{children:"If several objects are found at a clicked point within a layer, these can be scrolled through in the corresponding tab of the layer. It is also displayed there for how many\nobjects the attribute data query is currently open:"}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"gis-client",src:n(6112).A+"",width:"175",height:"40"})}),"\n",(0,A.jsx)(t.admonition,{type:"info",children:(0,A.jsx)(t.p,{children:"Please note that the levels you wish to query must contain this additional information and must be configured as queryable in the application."})}),"\n",(0,A.jsx)(t.p,{children:"If you close the tool, it is automatically deactivated."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(c,{...e})}):c(e)}},6112:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAAoCAIAAAAHRT1CAAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAA95JREFUeJzt209II1ccB/AXp+wEpYGNCUg0KdJDoIeQqS47uwudrbLBhfaghLJQQmHRgyxbGgqlrayFgl2W5iA96EXjIRUvqx6EbR3LmqyIqQYSlpJASqFqAoFZDM0hzBuI2cO2fYe6k9dx4kz09zn/mPcL+fL+ZWKp1+sIAIQQQm1GNwBMBNIACEgDICANgIA0AALSAIg3dHlKpVKRJKlWq+nyNPNjGMbpdNpsNqMb0Zk+aZAkqbu722q16vI085NluVgsnr806LNS1Gq1ixMFhJDVaj2XEyHsGwABaQAEpOFM4d/WZmPJF0a38TpUaVAUJZPJNLuVC6CSWPj2xxx+86zGC4VCBwcH9PWN01Aul/f29ux2+ym6appqdnH8hu9zERvdCJVKUty+dO19nqWsx9no3SvewKO01g2rIAgjIyPr6+uU9Q1OmIVCYX9/3+v1OhwOjR01Cy48jU7/EF3LV9jbRvdCB/8q7jDXvrlBGYYXaw/uL/55iT3FJcDo6Ghvb+/ExEQ2mw2Hww3r1eaGfD4vSVJfX5/5ooBQWZz+XkQfRCZvt8qhHyc2dhQ+wLdTVf8R+3q69HHk3runHHVwcHBlZWV3d3dsbKxUKqkXn5yGarWaTqcRQhzHmfQi4fKHkZ9WI6NCD+20a7RqQtxWhFs8VXh/n51YQOMP777TocPHc7lcS0tLLpcrGAxubm6qVKrNDRaL5fStgFdwMrFT44XrNGEoLD58bBubDHbr2UBbW1u9Xld/1e3kNLS3t3Mcd3x8nMlkMG6NLZq54eQvceVqQKAIQ+Xn6ehfwc8+6tFr7FKpFAqFDg8Pl5eXBwYGVCrV5gav19vZ2ZlKpY6OjvTq7IKqJsWEwg/QhAEnN8RCbvYO5/P5fFe+WMP70U/4+4/LGkfe2toaHh72+/1zc3NdXV3qxQ02rG63u6OjI5fLeTwet9utsaMLD6fEuMJ/+R7NMsEKXz15cu/v+RhvP7oz55xaCAcuaxl3fn5+ZmZmampqaGiIpr7x8cVut/f39+dyOUiDVji5EVeuhgW6b5R19Lz9zxkO522ItfW85dC2mYzH46urqx6Ph7Ke6jDLsqzf79fUD0AIp8VnCvfpzbM/Csdisf9Vr8/7DQYSvtt7bnQP6nBKTFa5cUHLnQ07FHlONcfrA361ajac3khI/sBN813g/RekoclwWnwm8bdaIgytv1KYHctPPjX5UkbA3AAIfdLAMIwsy7o8qiXIsswwjNFd6E+flcLpdBaLxXP54uiJXr1Bb3QX+rPAP/bBv2DfAAhIAyAgDYCANAAC0gAISAMgIA2AgDQA4iUsszloGPu8PQAAAABJRU5ErkJggg=="},5541:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/query_result-e9009945892a1da785ca9e7277fb3531.png"},7756:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const A={},s=a.createContext(A);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);