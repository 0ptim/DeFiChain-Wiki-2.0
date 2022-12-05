"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||n;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(7462),o=(r(7294),r(3905));const n={title:"Masternode service",description:"TODO - Short description of this page."},i=void 0,l={unversionedId:"auto/Masternode_service",id:"auto/Masternode_service",title:"Masternode service",description:"TODO - Short description of this page.",source:"@site/docs/auto/Masternode_service.md",sourceDirName:"auto",slug:"/auto/Masternode_service",permalink:"/docs/auto/Masternode_service",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Masternode_service.md",tags:[],version:"current",lastUpdatedAt:1670256308,formattedLastUpdatedAt:"Dec 5, 2022",frontMatter:{title:"Masternode service",description:"TODO - Short description of this page."},sidebar:"tutorialSidebar",previous:{title:"Community Calendar",permalink:"/docs/auto/Community_Calendar"},next:{title:"LOCK Staking",permalink:"/docs/auto/LOCK_Staking"}},s={},d=[{value:"Create a Masternode with a local APP wallet and a Masternode from a Service Provider:",id:"create-a-masternode-with-a-local-app-wallet-and-a-masternode-from-a-service-provider",level:2},{value:"For this setup you need",id:"for-this-setup-you-need",level:3},{value:"Setting up your APP wallet",id:"setting-up-your-app-wallet",level:3},{value:"Check status",id:"check-status",level:3},{value:"HowTo monitor your Masternode",id:"howto-monitor-your-masternode",level:3},{value:"Benefits to use a Service-Provider",id:"benefits-to-use-a-service-provider",level:3},{value:"List of Service-Providers",id:"list-of-service-providers",level:3}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-masternode-with-a-local-app-wallet-and-a-masternode-from-a-service-provider"},"Create a Masternode with a local APP wallet and a Masternode from a Service Provider:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"26 April 2021.")),(0,o.kt)("h3",{id:"for-this-setup-you-need"},"For this setup you need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"20,011 DFI (20,000 as collateral, 10 DFI for creating the masternode and 1 DFI for applicable fees)."),(0,o.kt)("li",{parentName:"ul"},"A Windows, MacBook or Linux machine with a wallet installed and synced."),(0,o.kt)("li",{parentName:"ul"},"a Legacy Operatoraddress from a Service-Provider")),(0,o.kt)("h3",{id:"setting-up-your-app-wallet"},"Setting up your APP wallet"),(0,o.kt)("p",null,"We assume that you already have a working and synchronized wallet running on your computer at home. Start it and create a new receiving address in legacy format. To do this, open the CLI (command line) in the APP and type the following command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'getnewaddress "<label>" legacy'),"."),(0,o.kt)("p",null,'Enter a freely selectable name as the label, e.g. "Masternode1". Alternatively, you can also create the legacy address in the GUI. To do this, go to your DFI wallet, select "Receive" and + New address. Don\'t forget to select the address type Legacy under the advanced options. The newly created address will then start with an ',(0,o.kt)("em",{parentName:"p"},"8"),". Please make a note of this as the ",(0,o.kt)("em",{parentName:"p"},'"Owner Address"'),"."),(0,o.kt)("p",null,"Now you need the Operatoraddress from your Service-Provider. Switch to the command line (CLI) in the DeFi Wallet and enter:"),(0,o.kt)("p",null,"Unlocked Masternode:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createmasternode OWNER_ADDRESS OPERATOR_ADDRESS"),"."),(0,o.kt)("p",null,"5-Year locked Masternode (1,5x Rewards):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] FIVEYEARTIMELOCK"),"."),(0,o.kt)("p",null,"10-Year Masternode (2x Rewards):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createmasternode OWNER_ADDRESS OPERATOR_ADDRESS [] TENYEARTIMELOCK"),"."),(0,o.kt)("p",null,"Replace the addresses again, of course: Owner is the One of the local wallet with 20.000 DFI, Operator is the One provided by your Service-Provider."),(0,o.kt)("p",null,"And watch out and don't get scared, if the Masternode was created with the command above, a few blocks later you will see an outgoing and incoming transaction with 20000 DFI on your owner address, but these 20000 DFI are no longer visible in the wallet."),(0,o.kt)("p",null,"To check your balance and see the locked 20.000 DFI in the wallet, use the command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"listaddressgroupings")),(0,o.kt)("p",null,"Done, congratulations, you've made it."),(0,o.kt)("h3",{id:"check-status"},"Check status"),(0,o.kt)("p",null,"Wait a maximum of 5 minutes and check at ",(0,o.kt)("a",{parentName:"p",href:"http://mydeficha.in/masternodes.php"},"mydeficha.in/masternodes.php")," if your addresses show up there. After a while the status should go from Pre-Enabled to Enabled, then you have done everything right."),(0,o.kt)("h3",{id:"howto-monitor-your-masternode"},"HowTo monitor your Masternode"),(0,o.kt)("p",null,"Please contact your Service-Provider about the Status. ",(0,o.kt)("strong",{parentName:"p"},"DO NOT USE YOUR LOCAL APP WALLET TO ENABLE OR TRY TO MANAGE YOUR MASTERNODE IN THE GUI, UNLESS YOU WANT TO RESIGN IT.")),(0,o.kt)("p",null,"To monitor your Rewards, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://chainz.cryptoid.info/dfi/"},"DFI-Explorer")," and search for your Owner-Address."),(0,o.kt)("h3",{id:"benefits-to-use-a-service-provider"},"Benefits to use a Service-Provider"),(0,o.kt)("p",null,"With a Service-Provider which offer a Operatornode for you, you own your Keys and dont send your Coins to another Institution. You dont need to setup a VPS, update the Node or monitor if the Node is working. You only have to hold your Collateral in your own Wallet, create the Masternode with the Infos from the Provider and receive the Rewards directly to your Wallet."),(0,o.kt)("h3",{id:"list-of-service-providers"},"List of Service-Providers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mydeficha.in/"},"mydeficha.in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.allnodes.com/"},"https://www.allnodes.com/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodehub.io/"},"https://nodehub.io/"))))}u.isMDXComponent=!0}}]);