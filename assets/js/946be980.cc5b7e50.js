"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={title:"DEX",description:"TODO - Short description of this page."},i=void 0,s={unversionedId:"auto/DEX",id:"auto/DEX",title:"DEX",description:"TODO - Short description of this page.",source:"@site/docs/auto/DEX.md",sourceDirName:"auto",slug:"/auto/DEX",permalink:"/docs/auto/DEX",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/DEX.md",tags:[],version:"current",lastUpdatedAt:1671139928,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{title:"DEX",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"DEX TEMP FROM TUTORIAL",permalink:"/docs/auto/DEX_TMP"},next:{title:"DEX Fee Structure",permalink:"/docs/auto/DEX_Fee_Structure"}},l={},d=[{value:"DEX and decentral trading",id:"dex-and-decentral-trading",level:2},{value:"Trading Pools",id:"trading-pools",level:2},{value:"Liquidity Mining",id:"liquidity-mining",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dex-and-decentral-trading"},"DEX and decentral trading"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What is \u201ethe DEX\u201c and how does it enable trading?")),(0,a.kt)("p",null,"DEX is short for decentral Exchange and describes the feature on the DefiChain that enables the trading of dTokens. Other than on a central exchange (CEX) there is no orderbook managed by a central entity. The trades are handled via trading pools instead. Such a pool is filled with two types of assets. The ratio between the amount of those assets in the pool results in the price of the assets. The exchange rate gets more or less calculated from this ratio."),(0,a.kt)("h2",{id:"trading-pools"},"Trading Pools"),(0,a.kt)("p",null,"On the DeFiChain you can distinguish between crypto- und dStock-pools."),(0,a.kt)("p",null,"The crypto-pools always trade with DFI, the native coin of the DeFiChain, e.g. dETH-DFI or dBTC-DFI. A subcategory of that are the stablecoin pools dUSDT-DFI and dUSDC-DFI."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9557).Z,width:"3547",height:"2497"})),(0,a.kt)("p",null,"The dStock-pools on the other hand, always trade with DUSD, the stablecoin of the DeFiChain. E.g. sTSLA-DUSD, dQQQ-DUSD, and so on. Also the DUSD can be traded directly with the stablecoins - dUSDT-DUSD and dUSDC-DUSD. A list of the dStocks grouped by asset categories: ",(0,a.kt)("a",{parentName:"p",href:"/docs/auto/Tradable_dAssets_on_DeFiChain"},"Tradable dAssets on DeFiChain")),(0,a.kt)("p",null,"One pool combines the two worlds: DFI-DUSD"),(0,a.kt)("h2",{id:"liquidity-mining"},"Liquidity Mining"),(0,a.kt)("p",null,"You can participate in the trading pools and provide liquidity. For that you have to own both assets and add them to the pool with the same value of asset A and asset B, for example dTSLA and DUSD both for a value of 100$. The amount of the pool that you participate in gets added to your wallet as a separate pool token. Block by block you will now receive rewards (in DFI) and a part of the exchange fees (commission in the asset that got swapped)."),(0,a.kt)("p",null,"A risk one has to consider when providing liquidity to a pool (meaning to do liquidity mining) is the ",(0,a.kt)("a",{parentName:"p",href:"/docs/auto/Impermanent_Loss"},"Impermanent Loss"),"."))}p.isMDXComponent=!0},9557:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dex_EN_pool-pairs-3c431c7bbb725d85ac204931069051ca.png"}}]);