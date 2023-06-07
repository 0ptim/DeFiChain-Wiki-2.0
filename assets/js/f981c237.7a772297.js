"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,f=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={title:"DEX Fee Structure",description:"DEX fee structure. Commissions, dBTC fee, dUSD/dToken fee and DEX stabilizing fee."},a=void 0,s={unversionedId:"auto/DEX_Fee_Structure",id:"auto/DEX_Fee_Structure",title:"DEX Fee Structure",description:"DEX fee structure. Commissions, dBTC fee, dUSD/dToken fee and DEX stabilizing fee.",source:"@site/docs/auto/DEX_Fee_Structure.md",sourceDirName:"auto",slug:"/auto/DEX_Fee_Structure",permalink:"/docs/auto/DEX_Fee_Structure",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/DEX_Fee_Structure.md",tags:[],version:"current",lastUpdatedAt:1673628739,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{title:"DEX Fee Structure",description:"DEX fee structure. Commissions, dBTC fee, dUSD/dToken fee and DEX stabilizing fee."},sidebar:"tutorialSidebar",previous:{title:"DEX",permalink:"/docs/auto/DEX"},next:{title:"Liquidity Mining",permalink:"/docs/category/liquidity-mining"}},d={},l=[{value:"Fees",id:"fees",level:2},{value:"Overview",id:"overview",level:3},{value:"Commissions",id:"commissions",level:3},{value:"DEX stabilizing fee",id:"dex-stabilizing-fee",level:3},{value:"dUSD/dToken fee",id:"dusddtoken-fee",level:3},{value:"BTC fee",id:"btc-fee",level:3}],p={toc:l},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you are swapping tokens on DeFiChain a fee is conducted. At the beginning only the part for liquidity providers - commissions - were the fee in each pool. But after successful voting on several DFIPs other fee parts were introduced for specific purposes. This article describes the current DEX fee structure on DeFiChain."),(0,r.kt)("h2",{id:"fees"},"Fees"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The following diagram shows the different pool swaps on DeFiChain. In general there is a commission fee for every single swap (black arrows). Additionally there is the DEX stabilizing fee (red arrow), the BTC fee (purple arrow) and the dUSD/dToken fee (blue arrow). Summary in short:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commissions: 0.2%"),(0,r.kt)("li",{parentName:"ul"},"dBTC fee: 0.1%"),(0,r.kt)("li",{parentName:"ul"},"dUSD/dToken fee: 0.2%"),(0,r.kt)("li",{parentName:"ul"},"DEX stabilizing fee: 0...","~","31.75% (in dependence of the algo dUSD part)")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DeFiChain DEX swaps and fees"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"DeFiChain DEX swaps and fees",src:n(19275).Z,width:"781",height:"452"})),(0,r.kt)("h3",{id:"commissions"},"Commissions"),(0,r.kt)("p",null,"The commissions fee is currently 0.2% and is deducted from the tokens users want to swap on the DEX. These tokens are distributed to theholders of the liquidity token and are part of the incentive to provide liquidity. The commission fee is the same overall pools on DeFiChain - crypto and dToken."),(0,r.kt)("p",null,"On ",(0,r.kt)("a",{parentName:"p",href:"https://defiscan.live/dex"},"defiscan.live")," you can see the APR of each pool and with moving the mouse over the three blue dots the distribution between block rewards and commissions part is shown. High trading volume (e.g. in volatile market phases) will drive the commissions part."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Defiscan showing the APR splitted into block reward and commissions part"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Defiscan showing the APR splitted into block reward and commissions part",src:n(58374).Z,width:"217",height:"204"})),(0,r.kt)("h3",{id:"dex-stabilizing-fee"},"DEX stabilizing fee"),(0,r.kt)("p",null,"The DEX stabilizing fee depends on the relative part of the algo dUSD token on DeFiChain. Below 30% this fee is 0% and increases with values higher than 30% (see graph below)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DEX stabilizing fee"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"DEX stabilizing fee",src:n(95320).Z,width:"468",height:"281"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The formula behind this dependency is:"),(0,r.kt)("p",{parentName:"admonition"},"Ratio > 30%: Dex Fee = (2 ^ ((Ratio \u2013 30)/10) -1) / 4"),(0,r.kt)("p",{parentName:"admonition"},"Ratio <= 30%: Dex Fee = 0")),(0,r.kt)("p",null,"Currently the Ticker-Council adjusts the DEX-fee manually to smoothen out the effects and avoid large jumps after the implementation of DFIP 2208-A. The details can be found here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/defiblockchain/comments/x7bojp/ticker_council_vote_to_smoothen_out_dex/"},"https://www.reddit.com/r/defiblockchain/comments/x7bojp/ticker_council_vote_to_smoothen_out_dex/")),(0,r.kt)("p",null,"The currently charged fee can be found real-time here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/11yTO43MBi3WQhtrIwUSpnNMaPVIy8zVVEz8TUyI46VI/edit#gid=2139878934"},"https://docs.google.com/spreadsheets/d/11yTO43MBi3WQhtrIwUSpnNMaPVIy8zVVEz8TUyI46VI/edit#gid=2139878934"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.krypto-sprungbrett.com/dex-fees/"},"https://www.krypto-sprungbrett.com/dex-fees/")),(0,r.kt)("h3",{id:"dusddtoken-fee"},"dUSD/dToken fee"),(0,r.kt)("p",null,"With introducing the DFI payback function for dUSD loans an additional fee of 0.1% in dUSD was introduced for each swap with dUSD, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/99"},"DFIP-2112-A"),". This was the first measure to remove the algo dUSD after closing the corresponding loans."),(0,r.kt)("p",null,"With the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/127"},"DFIP-2203-A")," Futures Swaps to handle the premium and discount of the dTokens were introduced. In the same DFIP a fee of 0.1% paid in the dTokens was activated."),(0,r.kt)("p",null,"Both parts (in sum 0.2%) are now applied for each dUSD-dToken pool and results in an overall fee of 0.4% for a swap with dTokens. The dUSD-DFI also had the 0.1% in the beginning, but due to newer DFIPs has now a different fee structure (see ",(0,r.kt)("a",{parentName:"p",href:"#dex-stabilizing-fee"},"DEX stabilizing fee"),"."),(0,r.kt)("h3",{id:"btc-fee"},"BTC fee"),(0,r.kt)("p",null,"In the first version of the Atomic-Swap on DeFiChain there was a bug and one or more users exploited it to create dBTC. Normally CakeDefi is the gateway for the crypto assets on DeFiChain and they put the native coin on a public known address of the corresponding blockchain when minting dTokens. The dBTC from this exploit were minted without a collateral and the community decided to introduce mechanisms to remove them from the system on a longer time frame. For more details have a look on the corresponding ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/101"},"DFIP"),"."),(0,r.kt)("p",null,"One part is an additional fee for using the dBTC-DFI pool. From each swap a 0.1% fee is deducted as dBTC and burned. The overall fee of this dBTC-DFI pool is: 0.3%"))}u.isMDXComponent=!0},19275:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dexfeestructure_EN_DefiChainDEXFees-b5968569c2fa5c6594f35ca437d21786.png"},58374:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dexfeestructure_EN_Defiscan_APR_rewardCommissions-8c7099bff95db39f3433ff3fb5a64055.jpg"},95320:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dexfeestructure_EN_stabilizingFee-ea8ccec7903111393c9cb6ddd9a7be88.png"}}]);