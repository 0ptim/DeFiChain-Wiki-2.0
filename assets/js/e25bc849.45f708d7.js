"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3905],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},44209:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={title:"Proposals",description:"Official proposal mechanisms to improve DeFiChain and its ecosystem. DFIPs vs. DFPs. Learn how to make a proposal."},i=void 0,s={unversionedId:"auto/Proposals",id:"auto/Proposals",title:"Proposals",description:"Official proposal mechanisms to improve DeFiChain and its ecosystem. DFIPs vs. DFPs. Learn how to make a proposal.",source:"@site/docs/auto/Proposals.md",sourceDirName:"auto",slug:"/auto/Proposals",permalink:"/docs/auto/Proposals",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Proposals.md",tags:[],version:"current",lastUpdatedAt:1673718321,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"Proposals",description:"Official proposal mechanisms to improve DeFiChain and its ecosystem. DFIPs vs. DFPs. Learn how to make a proposal."},sidebar:"tutorialSidebar",previous:{title:"Community",permalink:"/docs/category/community"},next:{title:"Taxes",permalink:"/docs/auto/Taxes"}},l={},p=[{value:"DFIPs and CFPs",id:"dfips-and-cfps",level:2},{value:"DFIPs",id:"dfips",level:3},{value:"CFPs",id:"cfps",level:3},{value:"Discussions about CFPs",id:"discussions-about-cfps",level:4},{value:"DFIPs and CFPs (TEMP FROM TUTORIAL)",id:"dfips-and-cfps-verify",level:2},{value:"DFIPs (help needed)",id:"dfips-help-needed",level:3},{value:"CFPs",id:"cfps",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"dfips-and-cfps"},"DFIPs and CFPs"),(0,r.kt)("p",null,"DFIP = DeFiChain Improvement Proposal - CFP = Community Fund Proposal"),(0,r.kt)("p",null,"DFIPs and CFPs are a part of community's commitment to DeFiChain. Aside from normal development activity from the core developers, there is also activity within the community. This is an important part of decentralization when the community joins the development, not only a centralized team deciding on the development."),(0,r.kt)("p",null,"Both DFIPs and CFPs are supposed to be discussed first on Reddit to get an overview about the community's sentiment concerning that idea. After that the requester can put the CFP/DFIP on github. Usually once a month the masternodes vote on the CFP/DFIPs and confirm or reject them."),(0,r.kt)("h3",{id:"dfips"},"DFIPs"),(0,r.kt)("p",null,"DFIPs are made to improve DeFiChain itself in general with improvements to features, new features or new rules. After a DFIP is approved the developers take care of the implementation."),(0,r.kt)("p",null,"An example of a DFIP was using futures contracts to solve the premium of tokenized stocks on DeFiChain (read more about DFIP-2203-A), or allowing tokenized Ethereum to be used in a vault (read more about DFIP-2203-B). You can read through all DFIPs on ",(0,r.kt)("a",{parentName:"p",href:"https://www.defichain-votings.com"},"www.defichain-votings.com")),(0,r.kt)("p",null,"To avoid not-serious DFIPs there is a fee of 50 DFI to be paid as soon as a DFIP is put online."),(0,r.kt)("h3",{id:"cfps"},"CFPs"),(0,r.kt)("p",null,"CFPs are proposals by community members. Community proposals are used to get funding from DeFiChain's Community Fund, which is created by masternodes' block rewards. Community members can request funding for an idea with which they want to add value to the ecosystem. Many community projects in the DeFiChain ecosystem are partly funded by our community fund. You can read through all CFPs on ",(0,r.kt)("a",{parentName:"p",href:"https://www.defichain-votings.com"},"www.defichain-votings.com")),(0,r.kt)("p",null,"The current progress of every CFP can be monitored on ",(0,r.kt)("a",{parentName:"p",href:"https://www.defichain-cfp-tracker.com/b/7Qcqu3xl/defichain-cfp-projects"},"defichain-cfp-tracker.com"),"."),(0,r.kt)("p",null,"To avoid not-serious CFPs there is a fee of 1% of the requested amount of DFI to be paid as soon as a CFP is put online."),(0,r.kt)("h4",{id:"discussions-about-cfps"},"Discussions about CFPs"),(0,r.kt)("p",null,"Currently there are discussions within the community how to proceed with for-profit-CFPs. The main question is if they should be funded as the community would take the risk and the requester gets the upside. On the other hand a for-profit project can create indirect value to the DeFiChain-Ecosystem by bringing new users and funds to the chain. There is no final decision or rules-framework yet. You can follow the discussions on ",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/defiblockchain/"},"reddit"),"."),(0,r.kt)("h2",{id:"dfips-and-cfps-verify"},"DFIPs and CFPs (TEMP FROM TUTORIAL)"),(0,r.kt)("p",null,"DFIPs and CFPs are a large part of DeFiChain. Aside from normal development activity from the developers, there is also activity from the community, which should happen either way, as the point of decentralization is that the community eventually does all of the development, not a centralized team overseeing the development."),(0,r.kt)("h3",{id:"dfips-help-needed"},"DFIPs (help needed)"),(0,r.kt)("p",null,"DFIPs are made to improve DeFiChain itself in general with improvements to features/new features, implemented by the developers."),(0,r.kt)("p",null,"An example of a DFIP would be using futures contracts to solve the premium of tokenized stocks on DeFiChain (read more about ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/127"},"DFIP-2203-A"),"), or allowing tokenized Ethereum to be used in a vault (read more about ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/128"},"DFIP-2203-B"),")."),(0,r.kt)("h3",{id:"cfps"},"CFPs"),(0,r.kt)("p",null,"CFPs are community proposals that community members create. Community proposals are used to get funding from DeFiChain's Community Fund, which is created by masternodes' block rewards. Community members can request funding for a DeFiChain project that are completing/would like to undertake. Many community projects that are found in DeFiChain are partly funded by our community fund."))}d.isMDXComponent=!0}}]);