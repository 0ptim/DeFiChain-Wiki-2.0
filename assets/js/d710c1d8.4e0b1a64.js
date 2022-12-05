"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8369],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(i),k=r,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||a;return i?n.createElement(m,l(l({ref:t},d),{},{components:i})):n.createElement(m,l({ref:t},d))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7839:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=i(7462),r=(i(7294),i(3905));const a={title:"Liquidity Mining versus Staking",description:"TODO - Short description of this page."},l=void 0,o={unversionedId:"auto/Liquidity_Mining_versus_Staking",id:"auto/Liquidity_Mining_versus_Staking",title:"Liquidity Mining versus Staking",description:"TODO - Short description of this page.",source:"@site/docs/auto/Liquidity_Mining_versus_Staking.md",sourceDirName:"auto",slug:"/auto/Liquidity_Mining_versus_Staking",permalink:"/docs/auto/Liquidity_Mining_versus_Staking",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Liquidity_Mining_versus_Staking.md",tags:[],version:"current",lastUpdatedAt:1670256308,formattedLastUpdatedAt:"Dec 5, 2022",frontMatter:{title:"Liquidity Mining versus Staking",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Block Rewards",permalink:"/docs/auto/Block_Rewards"},next:{title:"Impermanent Loss",permalink:"/docs/auto/Impermanent_Loss"}},s={},u=[{value:"Liquidity Mining (LM)",id:"liquidity-mining-lm",level:2},{value:"Staking (Solo)",id:"staking-solo",level:2},{value:"Staking (Indirect vs. Direct)",id:"staking-indirect-vs-direct",level:2},{value:"Cake",id:"cake",level:3},{value:"DFX.swiss",id:"dfxswiss",level:3},{value:"DefiChain Wallet (Solo Staking with Masternode)",id:"defichain-wallet-solo-staking-with-masternode",level:3}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This small guide should help you decide whether to use Liquidity Mining or Staking, if you are debating the two. In addition, it also indicates the advantages and disadvantages whether you should directly use the DeFiChain or use a service provider like CakeDeFi (commonly referred to as Cake)."),(0,r.kt)("h2",{id:"liquidity-mining-lm"},"Liquidity Mining (LM)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rewards are displayed as APR (before compounding)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantages")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The risk is more diversified, as investment and rewards are in DFI or DUSD and another coin or token. However, if one side of the pool goes to 0, it is possible that you will lose all of your capital.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disadvantages")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Possible impermanent loss. However, this is negligible if you use liquidity mining as a cash flow strategy, and rewards are designed to prevent loss of capital from impermanent loss.")),(0,r.kt)("h2",{id:"staking-solo"},"Staking (Solo)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rewards are described as APY (after compounding)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantages")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DFI price is the only risk"),(0,r.kt)("li",{parentName:"ul"},"It is possible to freeze or lock masternodes, in order to receive 50% more rewards (5 year) or double rewards (10 years)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disadvantages")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20,000 DFI is required to make a masternode"),(0,r.kt)("li",{parentName:"ul"},"Rewards are not consistent, some days the masternode may earn multiple block rewards, others none at all")),(0,r.kt)("h2",{id:"staking-indirect-vs-direct"},"Staking (Indirect vs. Direct)"),(0,r.kt)("h3",{id:"cake"},"Cake"),(0,r.kt)("p",null,"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User-friendly, designed for an investor with little experience"),(0,r.kt)("li",{parentName:"ul"},"There is no minimum stake amount"),(0,r.kt)("li",{parentName:"ul"},"May have additional VIP benefits"),(0,r.kt)("li",{parentName:"ul"},"Run mainly by Dr. Julian Hosp and U-Zyn Chua, the founders of DeFiChain")),(0,r.kt)("p",null,"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"15% fee on rewards (reduction possible through freezer lockup)"),(0,r.kt)("li",{parentName:"ul"},"Platform and centralization risk"),(0,r.kt)("li",{parentName:"ul"},"KYC required"),(0,r.kt)("li",{parentName:"ul"},"Longer withdrawal due to processing by Cake and transaction time on blockchain")),(0,r.kt)("h3",{id:"dfxswiss"},"DFX.swiss"),(0,r.kt)("p",null,"See separate ",(0,r.kt)("a",{parentName:"p",href:"/docs/auto/DFX_FAQ#staking-at-dfx"},"Wiki-entry"),"."),(0,r.kt)("p",null,"Additional Pro:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Participate in CFP/DFIP-Voting even with less than 20.000 DFI in staking")),(0,r.kt)("h3",{id:"defichain-wallet-solo-staking-with-masternode"},"DefiChain Wallet (Solo Staking with Masternode)"),(0,r.kt)("p",null,"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rapid withdrawal (only transaction time in the blockchain is necessary."),(0,r.kt)("li",{parentName:"ul"},"No fees on income"),(0,r.kt)("li",{parentName:"ul"},"No KYC required"),(0,r.kt)("li",{parentName:"ul"},"Non-custodial, investors hold their own keys")),(0,r.kt)("p",null,"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20,000 DFI minimum stake amount"),(0,r.kt)("li",{parentName:"ul"},"Smart contract risk"),(0,r.kt)("li",{parentName:"ul"},"Less user-friendly")))}p.isMDXComponent=!0}}]);