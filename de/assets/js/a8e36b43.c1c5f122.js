"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1660],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),d=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(t),g=r,m=p["".concat(u,".").concat(g)]||p[g]||c[g]||a;return t?i.createElement(m,s(s({ref:n},l),{},{components:t})):i.createElement(m,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={title:"Liquidity Mining",description:"TODO - Kurze Beschreibung dieser Seite."},s=void 0,o={unversionedId:"auto/Liquidity_Mining",id:"auto/Liquidity_Mining",title:"Liquidity Mining",description:"TODO - Kurze Beschreibung dieser Seite.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/Liquidity_Mining.md",sourceDirName:"auto",slug:"/auto/Liquidity_Mining",permalink:"/de/docs/auto/Liquidity_Mining",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/i18n/de/docusaurus-plugin-content-docs/current/auto/Liquidity_Mining.md",tags:[],version:"current",lastUpdatedAt:1670256308,formattedLastUpdatedAt:"5. Dez. 2022",frontMatter:{title:"Liquidity Mining",description:"TODO - Kurze Beschreibung dieser Seite."},sidebar:"tutorialSidebar",previous:{title:"Pink Paper",permalink:"/de/docs/auto/Pink_Paper"},next:{title:"Vaults und Loans",permalink:"/de/docs/auto/Vaults_Loans"}},u={},d=[{value:"Block Rewards",id:"block-rewards",level:2},{value:"Handelsgeb\xfchren von DEX-Nutzern",id:"handelsgeb\xfchren-von-dex-nutzern",level:2}],l={toc:d};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Damit die Dezentrale B\xf6rse (DEX) auf DeFiChain korrekt funktionieren kann, m\xfcssen Investoren in sogenannten Liquidit\xe4tspools Token der beiden Pool-Paare im gleichen Wert hinzuf\xfcgen (z.B. DFI im Wert von 50$ und dBTC im Wert von 50$) . Dies bezeichnet man als Liquidity Mining."),(0,r.kt)("p",null,"Damit dies geschieht, muss es einen Anreiz geben, der die Preisschwankungen, die zu einem Impermanent Loss f\xfchren k\xf6nnen, mindestens ausgleicht."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sogenannte \"Rewards\" ('Belohnungen') pro Block werden aktuell ausgesch\xfcttet, weil es noch nicht gen\xfcgend Handel auf der DEX gibt, um \xfcber Geb\xfchren einen ausreichenden Anreiz zu bieten."),(0,r.kt)("li",{parentName:"ul"},"Fees/Commissions ('Handelsgeb\xfchren') f\xfcr jeden Swap ('Pool-Transaktion') auf der DEX.")),(0,r.kt)("h2",{id:"block-rewards"},"Block Rewards"),(0,r.kt)("p",null,"Die Aussch\xfcttungsh\xf6he der Block Rewards \xe4ndert sich regelm\xe4\xdfig. Ungef\xe4hr alle 11 Tage reduzieren sich diese um 1,6%. Die jeweils g\xfcltige Verteilung kann man sich auf der DeFiChain-Analytics-Website ansehen. Daf\xfcr einfach diesem Link folgen ",(0,r.kt)("a",{parentName:"p",href:"https://www.defichain-analytics.com/general?entry=emission"},"https://www.defichain-analytics.com/general?entry=emission")),(0,r.kt)("p",null,"Block Rewards f\xfcr dToken-Pools (z.B. dTSLA-DUSD; dURTH-DUSD, ....) m\xfcssen monatlich neu angepasst werden, da wir normalerweise monatlich vier neue dToken ins \xd6kosystem einf\xfchren. Die Verteilung wird derzeit von einer Gruppe von Personen aus der DeFiChain-Community, dem sogenannten Ticker-Council, festgelegt, da es daf\xfcr noch keine dezentrale L\xf6sung gibt. Die aktuelle Verteilung der Rewards findest du ",(0,r.kt)("a",{parentName:"p",href:"https://www.krypto-sprungbrett.com/stock-token-apr/"},"hier"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(1999).Z,width:"1473",height:"725"})),(0,r.kt)("h2",{id:"handelsgeb\xfchren-von-dex-nutzern"},"Handelsgeb\xfchren von DEX-Nutzern"),(0,r.kt)("p",null,"Der zweite, derzeit noch kleinere Anteil am Ertrag des Liquidity Providers resultiert aus ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/auto/DEX_Fee_Structure"},"Handelsgeb\xfchren"),' ("Commissions), die die Nutzer f\xfcr jede Pool-Transaktion ("Swap") zahlen m\xfcssen. Diese Geb\xfchr wird anteilig unter den Liquidity-Providern aufgeteilt. Das Ziel ist, dass es in Zukunft deutlich mehr Handel als bisher auf der DEX gibt. Dadurch soll der regul\xe4r sinkende Anreiz aus Block Rewards durch einen Anstieg von Commissions in Zukunft mindestens ausgeglichen werden. Dadurch ist sichergestellt, dass es weiterhin Anreize f\xfcr das Bereitstellen von Liquidit\xe4t gibt, auch wenn es keine Block Rewards mehr gibt.'))}c.isMDXComponent=!0},1999:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/liquiditymining_DE_reward-reduction-ff8c5ad1b3b372154309ebc5e2adec86.png"}}]);