"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=r,h=s["".concat(p,".").concat(f)]||s[f]||c[f]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Dual setup (App + Node)",description:"How to setup the DeFiChain app and node. Download directly from Github and then install."},i=void 0,l={unversionedId:"auto/Dual_setup_App_and_Node",id:"auto/Dual_setup_App_and_Node",title:"Dual setup (App + Node)",description:"How to setup the DeFiChain app and node. Download directly from Github and then install.",source:"@site/docs/auto/Dual_setup_App_and_Node.md",sourceDirName:"auto",slug:"/auto/Dual_setup_App_and_Node",permalink:"/docs/auto/Dual_setup_App_and_Node",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Dual_setup_App_and_Node.md",tags:[],version:"current",lastUpdatedAt:1673718321,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"Dual setup (App + Node)",description:"How to setup the DeFiChain app and node. Download directly from Github and then install."},sidebar:"tutorialSidebar",previous:{title:"Blockchain folder",permalink:"/docs/auto/Blockchain_folder"},next:{title:"Fullnode",permalink:"/docs/auto/Fullnode"}},p={},d=[{value:"Draft for Dual Setup",id:"draft-for-dual-setup",level:2},{value:"Steps:",id:"steps",level:3}],u={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"draft-for-dual-setup"},"Draft for Dual Setup"),(0,r.kt)("h3",{id:"steps"},"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest App version and Ain version from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/DeFiCh/"},"github"),"."),(0,r.kt)("li",{parentName:"ol"},"Start the App and wait till the full sync has finished (You can speed up this process by downloading a blockchain snapshot: ...)"),(0,r.kt)("li",{parentName:"ol"},"Close the App after the synchronization has finished"),(0,r.kt)("li",{parentName:"ol"},"Create a copy of the ","`",".defi","`"," folder. Eg: ","`","cp -r .defi .defi-node","`"," (Note: This folder contains the whole blockchain and requires a lot of space!)"),(0,r.kt)("li",{parentName:"ol"},"Edit the ","`","defi.conf","`"," in the new .defi folder",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"change the rpcport to an unused port, eg: ","`","rpcport=8553","`"),(0,r.kt)("li",{parentName:"ol"},"add the bind command and use an unused port: eg: ","`","bind=0.0.0.0:8554","`"),(0,r.kt)("li",{parentName:"ol"},"update the walletdir, so that it points to the new directory: eg: ","`","walletdir=/home/user/.defi_node","`"))),(0,r.kt)("li",{parentName:"ol"},"Start the node with the ","`","datadir","`"," option. Eg: ","`","./defid -datadir=/home/user/.defi_node","`"),(0,r.kt)("li",{parentName:"ol"},"Start the app"),(0,r.kt)("li",{parentName:"ol"},"Congrats! The App (with an integrated node) and separate node are now running simultaneously",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"You can use this setup to run as many nodes as you like!"),(0,r.kt)("li",{parentName:"ol"},"This can be useful if u like to have separate nodes for anchors/masternodes/different wallets")))))}c.isMDXComponent=!0}}]);