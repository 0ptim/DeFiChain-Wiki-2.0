"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1235],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,D=p["".concat(d,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(D,o(o({ref:n},u),{},{components:t})):r.createElement(D,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={title:"DEX",description:"TODO - Kurze Beschreibung dieser Seite."},o=void 0,s={unversionedId:"auto/DEX",id:"auto/DEX",title:"DEX",description:"TODO - Kurze Beschreibung dieser Seite.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/DEX.md",sourceDirName:"auto",slug:"/auto/DEX",permalink:"/de/docs/auto/DEX",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/i18n/de/docusaurus-plugin-content-docs/current/auto/DEX.md",tags:[],version:"current",lastUpdatedAt:1671139928,formattedLastUpdatedAt:"15. Dez. 2022",frontMatter:{title:"DEX",description:"TODO - Kurze Beschreibung dieser Seite."},sidebar:"tutorialSidebar",previous:{title:"Decentralized Exchange",permalink:"/de/docs/category/decentralized-exchange"},next:{title:"DEX Geb\xfchrenstruktur",permalink:"/de/docs/auto/DEX_Fee_Structure"}},d={},l=[{value:"DEX und dezentraler Handel von Tokens",id:"dex-und-dezentraler-handel-von-tokens",level:2},{value:"Trading Pools",id:"trading-pools",level:2},{value:"Liquidity Mining",id:"liquidity-mining",level:2}],u={toc:l};function c(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dex-und-dezentraler-handel-von-tokens"},"DEX und dezentraler Handel von Tokens"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Was ist \u201edie DEX\u201c \xfcberhaupt und wie kommt ein Handel zu Stande?")),(0,i.kt)("p",null,"DEX steht f\xfcr ",(0,i.kt)("strong",{parentName:"p"},"d"),"ezentrale ",(0,i.kt)("strong",{parentName:"p"},"Ex"),"change und ist der Handelsplatz im Defichainsystem. Im Gegensatz zu einer Zentralen Exchange gibt es auf der DEX kein Orderbuch, sondern der Handel findet \xfcber Pools statt. Diese Pools sind jeweils mit 2 Assets bef\xfcllt. Das Verh\xe4ltnis dieser beiden Tokens im Pool legt den aktuellen Preis f\xfcr den Wechsel eines Assets in das andere fest. Das Verh\xe4ltnis bestimmt also quasi den Wechselkurs."),(0,i.kt)("h2",{id:"trading-pools"},"Trading Pools"),(0,i.kt)("p",null,"Auf der DeFiChain unterscheidet man zwischen Krypto- und dStock-Pools."),(0,i.kt)("p",null,"Die Krypto Pools handeln immer mit DFI, dem nativen coin der DeFiChain, zB dETH-DFI oder dBTC-DFI. Eine Unterkategorie davon sind die Stablecoin Pools dUSDT-DFI und dUSDC-DFI."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6659).Z,width:"3547",height:"2497"})),(0,i.kt)("p",null,"Die dStock-Pools handeln immer mit DUSD, dem stablecoin der DeFiChain. zB sTSLA-DUSD, dQQQ-DUSD, usw. Auch von DUSD aus kann direkt mit den Stablecoins getauscht werden - dUSDT-DUSD und dUSDC-DUSD Eine Lister der handelspaare nach Anlagekategorien finet sich hier: ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/auto/Tradable_dAssets_on_DeFiChain"},"Tradable dAssets on DeFiChain")),(0,i.kt)("p",null,"Ein Pool verbindet die beiden Poolarten: DFI-DUSD"),(0,i.kt)("h2",{id:"liquidity-mining"},"Liquidity Mining"),(0,i.kt)("p",null,"An den Pools kann man sich beteiligen und Liquidity Mining betreiben. Dazu w\xe4hlt man einen Pool f\xfcr den man beide Token besitzt (zB dTSLA und DUSD). Die beiden Assets k\xf6nnen nur entsprechend dem aktuellen Poolverh\xe4ltnis hinzugef\xfcgt werden. Der Anteil am Pool wird wiederum als ein separater Pool Token der Wallet gutgeschrieben. Block f\xfcr Block bekommt man f\xfcr diesen Pool Token nun Belohnungen/Rewards (in DFI) und einen Teil der Wechselgeb\xfchren/Commission (im jeweiligen Asset das geswapped wurde)."),(0,i.kt)("p",null,"Ein Risiko, das man bei Bereitstellung von Liquidit\xe4t zu den Pools, also beim Betreiben von Liquidity Mining, beachten muss ist die des ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/auto/Impermanent_Loss"},"Impermanent Loss"),"."))}c.isMDXComponent=!0},6659:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dex_DE_pool-pairs-3c431c7bbb725d85ac204931069051ca.png"}}]);