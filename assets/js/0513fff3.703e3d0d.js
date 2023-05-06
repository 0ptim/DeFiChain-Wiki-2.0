"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(y,i(i({ref:t},l),{},{components:r})):a.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Private key read out of the app",description:"Read out the private key from the DeFiChain app. Use VPN for extra security."},i=void 0,p={unversionedId:"auto/Read_out_private_key",id:"auto/Read_out_private_key",title:"Private key read out of the app",description:"Read out the private key from the DeFiChain app. Use VPN for extra security.",source:"@site/docs/auto/Read_out_private_key.md",sourceDirName:"auto",slug:"/auto/Read_out_private_key",permalink:"/docs/auto/Read_out_private_key",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Read_out_private_key.md",tags:[],version:"current",lastUpdatedAt:1673718321,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"Private key read out of the app",description:"Read out the private key from the DeFiChain app. Use VPN for extra security."},sidebar:"tutorialSidebar",previous:{title:"Masternode installation extended",permalink:"/docs/auto/Masternode_installation_extended"},next:{title:"Import BTC private key to Electrum",permalink:"/docs/auto/Import_BTC_private_key_to_Electrum"}},s={},c=[],l={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Description of how the private key can be read out of the app."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Copy the DFI address to which you want to read the private key",src:r(27457).Z,width:"900",height:"673"})),(0,n.kt)("p",null,"Copy the DFI address to which you want to read the private key."),(0,n.kt)("p",null,"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://dex.defichain.com/"},"dex.defichain.com")," and search for this address."),(0,n.kt)("p",null,"Note: The website operator can theoretically link your IP address with this DFI address. It may be useful to use a VPN or a TOR browser."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Check if this address really contains all coins!"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{src:r(66906).Z,width:"900",height:"413"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Go to the console and Unlock your wallet."),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{src:r(25295).Z,width:"900",height:"676"})),(0,n.kt)("p",null,"Go to the console."),(0,n.kt)("p",null,"Enter the following command: ",(0,n.kt)("inlineCode",{parentName:"p"},"dumpprivkey "),(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},'"your address"')),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Note"),": For reading the native BTC private key instead of a DFI key, use command ",(0,n.kt)("inlineCode",{parentName:"p"},"spv_dumpprivkey "),(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},'"your address"'))," instead. You can use the BTC key for example in Electrum, see here: ",(0,n.kt)("a",{parentName:"p",href:"/docs/auto/Import_BTC_private_key_to_Electrum"},"Import BTC private key to Electrum"),".")),(0,n.kt)("p",null,"Confirm with Enter \u23ce"),(0,n.kt)("p",null,"(Should I explain here where the Enter key is located?)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The private key is displayed. L4d4AisBuCcQxyB6Be2BRh2fbuBZ6F9v6oos9uzvTWDovNvaw6rr"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"The private key is displayed.",src:r(40058).Z,width:"900",height:"675"})))}d.isMDXComponent=!0},27457:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/readprivatekey_EN_01-43dab8be0ae2551b6b5f1caa7219164d.png"},66906:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/readprivatekey_EN_02-300ac7c60579e14cf5a5555683b73d07.png"},25295:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/readprivatekey_EN_03-8a0883983a27c0cca99002cdbe484f2d.png"},40058:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/readprivatekey_EN_04-c9e031f1c5dc80444e3902569be1ca8a.png"}}]);