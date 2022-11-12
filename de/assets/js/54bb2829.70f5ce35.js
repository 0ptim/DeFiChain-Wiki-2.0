"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),p=i,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={title:"Besicherungsverh\xe4ltnis",description:"TODO - Short description of this page."},l=void 0,o={unversionedId:"auto/Collateral_Ratio",id:"auto/Collateral_Ratio",title:"Besicherungsverh\xe4ltnis",description:"TODO - Short description of this page.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/Collateral_Ratio.md",sourceDirName:"auto",slug:"/auto/Collateral_Ratio",permalink:"/de/docs/auto/Collateral_Ratio",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/i18n/de/docusaurus-plugin-content-docs/current/auto/Collateral_Ratio.md",tags:[],version:"current",lastUpdatedAt:1668278178,formattedLastUpdatedAt:"12. Nov. 2022",frontMatter:{title:"Besicherungsverh\xe4ltnis",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Vaults und Loans",permalink:"/de/docs/auto/Vaults_Loans"},next:{title:"Block-Belohnungen",permalink:"/de/docs/auto/Block_Rewards"}},s={},u=[{value:"Berechnung",id:"berechnung",level:2},{value:"Minimum collateralization ratio",id:"minimum-collateralization-ratio",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"berechnung"},"Berechnung"),(0,i.kt)("p",null,"Das Besicherungsverh\xe4ltnis berechnet sich durch die Summe der Werte, die dem Vault als Kollateral bereitgestellt wurden, dividiert durch die Summe der aufgenommenen Kredite."),(0,i.kt)("p",null,"Das hei\xdft, wenn der Wert im Kollateral steigt, so steigt auch das Besicherungsverh\xe4ltnis. Andererseits w\xfcrde das Besicherungsverh\xe4ltnis sinken, sollten die geminteten Assets im Wert steigen, also die H\xf6he der Kredite zunehmen. Zur Berechnung des Verh\xe4ltnisses werden immer die aktuellen Oraclepreise herangezogen."),(0,i.kt)("h2",{id:"minimum-collateralization-ratio"},"Minimum collateralization ratio"),(0,i.kt)("p",null,"Abh\xe4ngig vom gew\xe4hlten Kreditschema hat jeder Vault ein minimum collateralization ratio. Es ist zwingend notwendig, den Vault zu jeder zeit \xfcber diesem Mindestwert zu betreiben, da anderenfalls bei Unterscheitung dieses Mindest-Besicherungsverh\xe4ltnisses der Vault liquidiert wird."),(0,i.kt)("p",null,"Die Zur Verf\xfcgung stehenden minimum collateralization ratios sind"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"150% min. ratio ",">"," 5% APR"),(0,i.kt)("li",{parentName:"ul"},"175% min. ratio ",">"," 3% APR"),(0,i.kt)("li",{parentName:"ul"},"200% min. ratio ",">"," 2% APR"),(0,i.kt)("li",{parentName:"ul"},"350% min. ratio ",">"," 1.5% APR"),(0,i.kt)("li",{parentName:"ul"},"500% min. ratio ",">"," 1% APR"),(0,i.kt)("li",{parentName:"ul"},"1000% min. ratio ",">"," 0.5% APR")),(0,i.kt)("p",null,"Zum Beispiel kann man beim 150% Schema und als Kollateral hinterlegten DFI im Wert von 1000$ dTSLA im Wert von bis zu 666$ als Kredit aufnehmen. Je h\xf6her das minimum collateralization ratio (die Prozentzahl) ist, desto geringer werden die Zinsraten f\xfcr die Kredite. Der Nachteil dieser h\xf6heren Mindest-Verh\xe4ltnisse ist jedoch, das man nicht so viele Assets minten kann, bzw mehr Kollateral f\xfcr den gleichen Kredit br\xe4uchte. In diesem Beispiel k\xf6nnte man mit dem 1000% Schema und DFI im Wert von 1000$ nur dTSLA im Wert von 100$ als Kredit aufnehmen."))}d.isMDXComponent=!0}}]);