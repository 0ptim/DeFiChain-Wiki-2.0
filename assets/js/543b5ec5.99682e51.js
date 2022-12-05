"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7315],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=i.createContext({}),c=function(t){var e=i.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=c(t.components);return i.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=c(a),h=n,f=m["".concat(o,".").concat(h)]||m[h]||s[h]||r;return a?i.createElement(f,p(p({ref:e},d),{},{components:a})):i.createElement(f,p({ref:e},d))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,p=new Array(r);p[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var c=2;c<r;c++)p[c]=a[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7759:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const r={title:"API",description:"TODO - Short description of this page."},p=void 0,l={unversionedId:"auto/API",id:"auto/API",title:"API",description:"TODO - Short description of this page.",source:"@site/docs/auto/API.md",sourceDirName:"auto",slug:"/auto/API",permalink:"/docs/auto/API",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/API.md",tags:[],version:"current",lastUpdatedAt:1670256308,formattedLastUpdatedAt:"Dec 5, 2022",frontMatter:{title:"API",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docs/category/advanced-usage"},next:{title:"CLI Commands",permalink:"/docs/auto/CLI_Commands"}},o={},c=[{value:"General",id:"general",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Addresses",id:"addresses",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Blocks",id:"blocks",level:3},{value:"DEX (Decentraliced Exchange)",id:"dex-decentraliced-exchange",level:2},{value:"General",id:"general-1",level:3},{value:"Important IDs",id:"important-ids",level:3}],d={toc:c};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/stats"},"https://api.defichain.io/v1/stats")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/stats?q=tokens.supply&pretty"},"https://api.defichain.io/v1/stats?q=tokens.supply&pretty")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/stats?network=mainnet&pretty"},"https://api.defichain.io/v1/stats?network=mainnet&pretty"))),(0,n.kt)("h2",{id:"blockchain"},"Blockchain"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://api.defichain.io/v1/getanchorlist?network=mainnet"},"https://api.defichain.io/v1/getanchorlist?network=mainnet")),(0,n.kt)("h3",{id:"addresses"},"Addresses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/balance"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/balance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/txs"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD/txs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD?limit=20"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/8RUNjYgCHkT56t4C38YaaDvUQcY4HozdcD?limit=20")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/address/stats/rich-list?pageno=1&pagesize=200"},"http://mainnet-api.defichain.io/api/DFI/mainnet/address/stats/rich-list?pageno=1&pagesize=200")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.blockchain.com/btc/address/1FtZwEZKknoquUb6DyQHFZ6g6oomXJYEcb"},"https://www.blockchain.com/btc/address/1FtZwEZKknoquUb6DyQHFZ6g6oomXJYEcb"),"\naddress held by all DeFi nodes")),(0,n.kt)("h3",{id:"transactions"},"Transactions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92"},"http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92/coins"},"http://mainnet-api.defichain.io/api/DFI/mainnet/tx/923bfa3e400d841baa88a566bf3a348a181f1d16881fb36dd46cb8561db5dc92/coins"))),(0,n.kt)("h3",{id:"blocks"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getBlockActivity?network=mainnet"},"https://api.defichain.io/v1/getBlockActivity?network=mainnet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/block/12345"},"http://mainnet-api.defichain.io/api/DFI/mainnet/block/12345")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=true"},"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=true")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=false"},"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=100&anchorsOnly=false")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=500000&anchorsOnly=false"},"http://mainnet-api.defichain.io/api/DFI/mainnet/block?limit=500000&anchorsOnly=false"),"\n\\<--response 200MB!")),(0,n.kt)("h2",{id:"dex-decentraliced-exchange"},"DEX (Decentraliced Exchange)"),(0,n.kt)("h3",{id:"general-1"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/listyieldfarming"},"https://api.defichain.io/v1/listyieldfarming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/listswaps"},"https://api.defichain.io/v1/listswaps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getsubgraphswaps"},"https://api.defichain.io/v1/getsubgraphswaps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getdfisupply"},"https://api.defichain.io/v1/getdfisupply")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/listpoolpairs"},"https://api.defichain.io/v1/listpoolpairs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/listtokens"},"https://api.defichain.io/v1/listtokens")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getaccount?including_start=true&owner=dDgnpwmZJ2XnDXRVuqrBbbfoL5x953fP3b"},"https://api.defichain.io/v1/getaccount?including_start=true&owner=dDgnpwmZJ2XnDXRVuqrBbbfoL5x953fP3b"),"\n(the option including_start=true is needed to show the DFI-tokens)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/gettokenrichlist?id=2&network=mainnet"},"https://api.defichain.io/v1/gettokenrichlist?id=2&network=mainnet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.defichain.io/v1/getpoolpair?id=4&network=mainnet"},"https://api.defichain.io/v1/getpoolpair?id=4&network=mainnet"))),(0,n.kt)("h3",{id:"important-ids"},"Important IDs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DFI: id=0"),(0,n.kt)("li",{parentName:"ul"},"ETH: id=1"),(0,n.kt)("li",{parentName:"ul"},"BTC: id=2"),(0,n.kt)("li",{parentName:"ul"},"USDT: id=3"),(0,n.kt)("li",{parentName:"ul"},"ETH-DFI: id=4"),(0,n.kt)("li",{parentName:"ul"},"BTC-DFI: id=5"),(0,n.kt)("li",{parentName:"ul"},"USDT-DFI: id=6"),(0,n.kt)("li",{parentName:"ul"},"DOGE: id=7"),(0,n.kt)("li",{parentName:"ul"},"DOGE-DFI: id=8"),(0,n.kt)("li",{parentName:"ul"},"LTC: id=9"),(0,n.kt)("li",{parentName:"ul"},"LTC-DFI: id=10"),(0,n.kt)("li",{parentName:"ul"},"BCH: id=11"),(0,n.kt)("li",{parentName:"ul"},"BCH-DFI: id = 12"),(0,n.kt)("li",{parentName:"ul"},"USDC: id=13"),(0,n.kt)("li",{parentName:"ul"},"USDC-DFI: id=14")))}s.isMDXComponent=!0}}]);