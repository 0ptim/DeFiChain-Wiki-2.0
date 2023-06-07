"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,u(u({ref:t},p),{},{components:n})):r.createElement(h,u({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,u[1]=l;for(var o=2;o<i;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={title:"Future Swap",description:"TODO - Short description of this page."},u=void 0,l={unversionedId:"auto/Future_Swap",id:"auto/Future_Swap",title:"Future Swap",description:"TODO - Short description of this page.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/Future_Swap.md",sourceDirName:"auto",slug:"/auto/Future_Swap",permalink:"/de/docs/auto/Future_Swap",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/i18n/de/docusaurus-plugin-content-docs/current/auto/Future_Swap.md",tags:[],version:"current",lastUpdatedAt:1671139928,formattedLastUpdatedAt:"15. Dez. 2022",frontMatter:{title:"Future Swap",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Besicherungsverh\xe4ltnis",permalink:"/de/docs/auto/Collateral_Ratio"},next:{title:"Guides",permalink:"/de/docs/category/guides"}},s={},o=[{value:"Future Swap",id:"future-swap",level:2},{value:"Hintergrund",id:"hintergrund",level:3},{value:"Zeitpunkt",id:"zeitpunkt",level:3},{value:"Strategie",id:"strategie",level:3},{value:"Future Swap im Light Wallet",id:"future-swap-im-light-wallet",level:3},{value:"Future Swap in der Desktop Wallet",id:"future-swap-in-der-desktop-wallet",level:3}],p={toc:o},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"future-swap"},"Future Swap"),(0,a.kt)("h3",{id:"hintergrund"},"Hintergrund"),(0,a.kt)("p",null,"Nach der Einf\xfchrung der Stock Tokens wurden diese mit einem Premium gehandelt. Die Preise auf der DEX waren also h\xf6her als die Oracle Preise der jeweiligen Aktien. Um dem Premium (aber auch einem m\xf6glichen Discount) entgegenzuwirken wurden mit DFIP-2203-A die Future Swaps eingef\xfchrt."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/127"},"https://github.com/DeFiCh/dfips/issues/127")),(0,a.kt)("p",null,"Durch diesen Swap, der ca jede Woche (alle 7","*","2880 blocks) durchgef\xfchrt wird, kann man zu Oracle Preis + 5% kaufen bzw Oracle Preis -5% verkaufen. Kauf/Verkauf ist dabei ein Tausch von/in DUSD."),(0,a.kt)("h3",{id:"zeitpunkt"},"Zeitpunkt"),(0,a.kt)("p",null,"Wann der n\xe4chste Future Swap durchgef\xfchrt wird zeigt defiscan.live unter folgendem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://defiscan.live/blocks/countdown/NextFutureSwap"},"https://defiscan.live/blocks/countdown/NextFutureSwap")),(0,a.kt)("p",null,"Der Block l\xe4sst sich in der Desktop Wallet mit dem Befehl ",(0,a.kt)("strong",{parentName:"p"},"getfutureswapblock")," abfragen"),(0,a.kt)("p",null,'Um das aktuelle Premium der einzelnen dToken abzufragen eignet sich die Seite "dStocks Quickcheck" unter'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dstocks-defichain.web.app/"},"https://dstocks-defichain.web.app/")),(0,a.kt)("p",null,"Auf defichain-analytics kann man den Verlauf des Premiums \xfcber die Zeit als Diagramm verfolgen"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.defichain-analytics.com/vaultsLoans?entry=premium"},"https://www.defichain-analytics.com/vaultsLoans?entry=premium")),(0,a.kt)("h3",{id:"strategie"},"Strategie"),(0,a.kt)("p",null,"Durch diese Ma\xdfnahme l\xe4sst sich der Preis der dTokens in der +-5% Bandbreite halten. Sollte es zu einem h\xf6heren Premium bzw Discount kommen kann wie folgt arbitragiert werden. F\xfcr den Fall Premium Fall kurz vor dem Future Swap:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mittels Vault den dToken minten (einen Kredit aufnehmen)"),(0,a.kt)("li",{parentName:"ul"},"F\xfcr das Besicherungsverh\xe4ltnis des Vaults wird der Oracle Preis (echter Preis ohne Premium) herangezogen"),(0,a.kt)("li",{parentName:"ul"},"Die geminteten dToken \xfcber den DEX Pool verkaufen (also in DUSD tauschen)"),(0,a.kt)("li",{parentName:"ul"},"Durch das Premium erh\xe4lt man \u201ezu viele\u201c DUSD"),(0,a.kt)("li",{parentName:"ul"},"Mit diese DUSD einen Future Swap einstellen um die dToken zum Oracle Preis (also g\xfcnstiger, da ohne Premium) zur\xfcck zu kaufen."),(0,a.kt)("li",{parentName:"ul"},"Bei Ausf\xfchrung des Future Swaps erh\xe4lt man mehr dToken als man gemintet hat."),(0,a.kt)("li",{parentName:"ul"},"Der Kredit (gemintete dToken) k\xf6nne zur\xfcckgezahlt werden und die zus\xe4tzlich erhaltenen dToken bleiben als Gewinn in der Wallet.")),(0,a.kt)("h3",{id:"future-swap-im-light-wallet"},"Future Swap im Light Wallet"),(0,a.kt)("p",null,"In der Light Wallet im Reiter DEX den gew\xfcnschten Pool ausw\xe4hlen. Im Swap Men\xfc von Instant auf Future wechseln."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Future Swap im light wallet",src:n(9080).Z,width:"828",height:"1060"})),(0,a.kt)("h3",{id:"future-swap-in-der-desktop-wallet"},"Future Swap in der Desktop Wallet"),(0,a.kt)("p",null,"In der Konsole kann der Future Swap mit dem Befehl ",(0,a.kt)("strong",{parentName:"p"},"futureswap")," eingegeben werden."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},'futureswap "address" "amount" ( "destination" [{"txid":"hex","vout":n},...] )\n')),(0,a.kt)("p",null,"Zum Beispiel wenn 500 DUSD in kannNetflix Token getauscht werden sollen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},'futureswap "dVvPfdjhfdjhfjd32dPWZoNYno7uBUn1KyU" "500@DUSD" dNFLX)\n')),(0,a.kt)("p",null,"Mit ",(0,a.kt)("strong",{parentName:"p"},"getpendingfutureswaps")," kann abgefragt werden welche Future Swaps bereits eingemeldet worden sind."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},'getpendingfutureswaps "address"\n')))}c.isMDXComponent=!0},9080:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/future_swap_01-ce76bc672018c3ac35936e8475c851e5.jpg"}}]);