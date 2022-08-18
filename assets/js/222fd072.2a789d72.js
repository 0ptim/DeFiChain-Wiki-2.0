"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),f=i,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={title:"Kill defid Daemon",permalink:"/Kill_defid_Daemon/"},a=void 0,l={unversionedId:"auto/Kill_defid_Daemon",id:"auto/Kill_defid_Daemon",title:"Kill defid Daemon",description:"Kill defid on Mac",source:"@site/docs/auto/Kill_defid_Daemon.md",sourceDirName:"auto",slug:"/auto/Kill_defid_Daemon",permalink:"/DeFiChain-Wiki/docs/auto/Kill_defid_Daemon",draft:!1,editUrl:"https://github.com/0ptim/DeFiChain-Wiki/tree/main/docs/auto/Kill_defid_Daemon.md",tags:[],version:"current",frontMatter:{title:"Kill defid Daemon",permalink:"/Kill_defid_Daemon/"},sidebar:"tutorialSidebar",previous:{title:"Jellyfish tutorial",permalink:"/DeFiChain-Wiki/docs/auto/Jellyfish_tutorial"},next:{title:"Lightwallet change Ocean",permalink:"/DeFiChain-Wiki/docs/auto/Lightwallet_change_Ocean"}},c={},d=[{value:"Kill defid on Mac",id:"kill-defid-on-mac",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kill-defid-on-mac"},"Kill defid on Mac"),(0,i.kt)("p",null,"If you need to stop a running DefiChain Daemon (defid), you need to kill the corresponding process. You can do that by looking for the current PID in the terminal running the command 'top'."),(0,i.kt)("p",null,"Why you should need to stop it manually? Just in case an error occured e.g. in the DefiChain Wallet App or another app like defi-portfolio which I stopped somehow wrong and the Daemon was still running afterwards."),(0,i.kt)("p",null,"The top command is listing all current processes on your mac. There you can look for defid in the COMMAND column. The pick the corresponding PID you will need to run the 'kill' command. After stopping the top command pressing 'q' you can run the command"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kill pid-from-defid")," (e.g. 'kill 15913')"),(0,i.kt)("p",null,"This will stop the DefiChain Daemon process as you can verify in the debug.log (normally using ",(0,i.kt)("inlineCode",{parentName:"p"},"tail -f ./Library/Application\\ Support/DeFi/debug.log"),")"))}u.isMDXComponent=!0}}]);