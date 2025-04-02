"use strict";(self.webpackChunkshogun_docs=self.webpackChunkshogun_docs||[]).push([[335],{1489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"gis-client/crs","title":"Angaben zu Ma\xdfstab und Bezugssystem","description":"*","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/gis-client/05-crs.md","sourceDirName":"gis-client","slug":"/gis-client/crs","permalink":"/shogun-docs/de/docs/gis-client/crs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Copyright-Informationen Dienste","permalink":"/shogun-docs/de/docs/gis-client/copyright"},"next":{"title":"Weiterf\xfchrende Links","permalink":"/shogun-docs/de/docs/gis-client/footer"}}');var a=n(4848),r=n(8453);const i={},d="Angaben zu Ma\xdfstab und Bezugssystem",u={},o=[{value:"Bezugssystem und aktuelle Mausposition",id:"bezugssystem-und-aktuelle-mausposition",level:3}];function l(e){const t={h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"angaben-zu-ma\xdfstab-und-bezugssystem",children:"Angaben zu Ma\xdfstab und Bezugssystem"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:'In der Fu\xdfzeile werden links die Informationen zum Ma\xdfstab der Karte angezeigt, zum einen als Ma\xdfstabsbalken, zum anderen \xfcber den aktuell aktiven Ma\xdfstab als Zahlenangabe. Hier hat der Nutzer die M\xf6glichkeit, per Klick auf die Zahlenangabe einen anderen Wert aus der sich ausklappenden Liste zu w\xe4hlen. Au\xdferdem ist es m\xf6glich, den gew\xfcnschten Ma\xdfstab \xfcber direktes Eintippen in das Textfeld einzugeben. Dabei ist zu beachten, dass nur die hintere Ma\xdfstabszahl, also z.B. 50.000, ohne das f\xfchrende "1 :" angegeben werden muss. Als Eingabema\xdfst\xe4be sind nur die zur Verf\xfcgung stehenden Ma\xdfst\xe4be aus der Liste verf\xfcgbar.'}),"\n",(0,a.jsx)(t.h3,{id:"bezugssystem-und-aktuelle-mausposition",children:"Bezugssystem und aktuelle Mausposition"}),"\n",(0,a.jsx)(t.p,{children:"Neben den Ma\xdfstabsangaben in der Fu\xdfzeile finden sich die Anzeige des Bezugssystems und der aktuellen Mausposition, sofern die Maus in einem Bereich der Hauptkarte platziert ist."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"gis-client",src:n(7412).A+"",width:"807",height:"38"})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7412:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(6540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);