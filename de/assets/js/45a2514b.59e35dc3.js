"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),d=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(u.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,m=c["".concat(u,".").concat(p)]||c[p]||h[p]||a;return t?i.createElement(m,s(s({ref:n},l),{},{components:t})):i.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={title:"DEX Geb\xfchrenstruktur",description:"TODO - Kurze Beschreibung dieser Seite."},s=void 0,o={unversionedId:"auto/DEX_Fee_Structure",id:"auto/DEX_Fee_Structure",title:"DEX Geb\xfchrenstruktur",description:"TODO - Kurze Beschreibung dieser Seite.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/auto/DEX_Fee_Structure.md",sourceDirName:"auto",slug:"/auto/DEX_Fee_Structure",permalink:"/de/docs/auto/DEX_Fee_Structure",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/i18n/de/docusaurus-plugin-content-docs/current/auto/DEX_Fee_Structure.md",tags:[],version:"current",lastUpdatedAt:1671139928,formattedLastUpdatedAt:"15. Dez. 2022",frontMatter:{title:"DEX Geb\xfchrenstruktur",description:"TODO - Kurze Beschreibung dieser Seite."},sidebar:"tutorialSidebar",previous:{title:"DEX",permalink:"/de/docs/auto/DEX"},next:{title:"Liquidity Mining",permalink:"/de/docs/category/liquidity-mining"}},u={},d=[{value:"Geb\xfchren",id:"fees",level:2},{value:"\xdcberblick",id:"overview",level:3},{value:"Kommisionen / Provisionen",id:"commissions",level:3},{value:"DEX stabilizing fee",id:"dex-stabilizing-fee",level:3},{value:"DUSD/dToken Geb\xfchr",id:"dusddtoken-fee",level:3},{value:"BTC Geb\xfchr",id:"btc-fee",level:3}],l={toc:d},c="wrapper";function h(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,i.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wenn Du Token auf DeFiChain tauschst, wird eine Geb\xfchr erhoben. Am Anfang war nur der Teil f\xfcr Liquidit\xe4tsanbieter \u2013 Provisionen \u2013 die Geb\xfchr in jedem Pool. Aber nach erfolgreicher Abstimmung \xfcber mehrere DFIPs wurden andere Geb\xfchrenteile f\xfcr bestimmte Zwecke eingef\xfchrt. Dieser Artikel beschreibt die aktuelle DEX-Geb\xfchrenstruktur auf DeFiChain."),(0,r.kt)("h2",{id:"fees"},"Geb\xfchren"),(0,r.kt)("h3",{id:"overview"},"\xdcberblick"),(0,r.kt)("p",null,"Das folgende Diagramm zeigt die verschiedenen Pool-Swaps (Tasuch) auf DeFiChain. Generell f\xe4llt f\xfcr jeden einzelnen Swap eine Provision an (schwarze Pfeile). Hinzu kommen die DEX-Stabilisierungsgeb\xfchr (roter Pfeil), die BTC-Geb\xfchr (lila Pfeil) und die dUSD/dToken-Geb\xfchr (blauer Pfeil). Kurz zusammengefasst:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provisionen: 0,2 %"),(0,r.kt)("li",{parentName:"ul"},"dBTC-Geb\xfchr: 0,1 %"),(0,r.kt)("li",{parentName:"ul"},"DUSD/dToken-Geb\xfchr: 0,2 %"),(0,r.kt)("li",{parentName:"ul"},"DEX-Stabilisierungsgeb\xfchr: 0...~31,75% (in Abh\xe4ngigkeit des Algo-dUSD-Anteils)")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DeFiChain DEX-Swaps und Geb\xfchren"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"DeFiChain DEX-Swaps und Geb\xfchren",src:t(5450).Z,width:"781",height:"452"})),(0,r.kt)("h3",{id:"commissions"},"Kommisionen / Provisionen"),(0,r.kt)("p",null,"Die Kommissions- oder Provisionsgeb\xfchr betr\xe4gt derzeit 0,2 % und wird von den Token abgezogen, die Benutzer auf dem DEX tauschen m\xf6chten. Diese Token werden an die Inhaber des Liquidit\xe4tstokens verteilt und sind Teil des Anreizes, Liquidit\xe4t bereitzustellen. Die Provisionsgeb\xfchr ist der gleiche Gesamtpool auf DeFiChain - Krypto und dToken."),(0,r.kt)("p",null,"Auf ",(0,r.kt)("a",{parentName:"p",href:"https://defiscan.live/dex"},"defiscan.live")," kannst du den effektiven Jahreszins jedes Pools sehen und wenn du mit der Maus \xfcber die drei blauen Punkte f\xe4hrst, wird die Verteilung zwischen Blockbelohnungen und Provisionsanteil angezeigt. Hohe Handelsvolumina (z. B. in volatilen Marktphasen) werden den Provisionsteil antreiben."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Defiscan zeigt den effektiven Jahreszins, aufgeteilt in Blockbelohnung (Rewards) und Provisionsteil (Commissions)"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Defiscan zeigt den effektiven Jahreszins, aufgeteilt in Blockbelohnung (Rewards) und Provisionsteil (Commissions)",src:t(6405).Z,width:"217",height:"204"})),(0,r.kt)("h3",{id:"dex-stabilizing-fee"},"DEX stabilizing fee"),(0,r.kt)("p",null,"Die DEX-Stabilisierungsgeb\xfchr h\xe4ngt vom relativen Anteil des Algo-dUSD-Tokens auf DeFiChain ab. Unter 30 % betr\xe4gt diese Geb\xfchr 0 % und erh\xf6ht sich bei Werten \xfcber 30 % (siehe Grafik unten)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DEX Stabilisierungsgeb\xfchr"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"DEX Stabilisierungsgeb\xfchr",src:t(2618).Z,width:"468",height:"281"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Die Formel lautet:"),(0,r.kt)("p",{parentName:"admonition"},"Ratio > 30%: Dex Fee = (2 ^ ((Ratio \u2013 30)/10) -1) / 4"),(0,r.kt)("p",{parentName:"admonition"},"Ratio <= 30%: Dex Fee = 0")),(0,r.kt)("p",null,"Derzeit legt das Ticker-Council die DEX-Fee manuell fest um ein sprunghaftes Verhalten zu verhindern und einen sanften \xdcbergang von der alten zur neuen Geb\xfchrenformel sicherzustellen, nachdem DFIP 2208-A implementiert wurde. Details k\xf6nnen hier nachgelesen werden:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/defiblockchain/comments/x7bojp/ticker_council_vote_to_smoothen_out_dex"},"https://www.reddit.com/r/defiblockchain/comments/x7bojp/ticker_council_vote_to_smoothen_out_dex")),(0,r.kt)("p",null,"Die aktuell g\xfcltige Geb\xfchr findest du hier:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/11yTO43MBi3WQhtrIwUSpnNMaPVIy8zVVEz8TUyI46VI/edit#gid=2139878934"},"https://docs.google.com/spreadsheets/d/11yTO43MBi3WQhtrIwUSpnNMaPVIy8zVVEz8TUyI46VI/edit#gid=2139878934"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.krypto-sprungbrett.com/dex-fees/"},"https://www.krypto-sprungbrett.com/dex-fees/")),(0,r.kt)("h3",{id:"dusddtoken-fee"},"DUSD/dToken Geb\xfchr"),(0,r.kt)("p",null,"Mit der Einf\xfchrung der DFI-Payback-Funktion f\xfcr DUSD-Darlehen wurde eine zus\xe4tzliche Geb\xfchr von 0,1 % in DUSD f\xfcr jeden Swap mit DUSD eingef\xfchrt, siehe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/99"},"DFIP-2112-A"),". Dies war die erste Ma\xdfnahme, um den Algo DUSD nach Schlie\xdfung der entsprechenden Kredite zu entfernen."),(0,r.kt)("p",null,"Mit dem ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/127"},"DFIP-2203-A")," wurden Futures Swaps zur Abwicklung des Auf- und Abschlags der dTokens eingef\xfchrt. Im selben DFIP wurde eine in den dTokens bezahlte Geb\xfchr von 0,1% aktiviert."),(0,r.kt)("p",null,"Beide Teile (in Summe 0,2%) werden nun f\xfcr jeden DUSD-dToken-Pool aufgebracht und ergeben eine Gesamtgeb\xfchr von 0,4% f\xfcr einen Swap mit dTokens. Der DUSD-DFI hatte am Anfang auch die 0,1%, hat aber aufgrund neuerer DFIPs jetzt eine andere Geb\xfchrenstruktur (siehe ",(0,r.kt)("a",{parentName:"p",href:"#dex-stabilizing-fee"},"DEX Stabilisierungsgeb\xfchr"),")."),(0,r.kt)("h3",{id:"btc-fee"},"BTC Geb\xfchr"),(0,r.kt)("p",null,"In der ersten Version des Atomic-Swap auf DeFiChain gab es einen Fehler und ein oder mehrere Benutzer nutzten ihn aus, um dBTC zu erstellen. Normalerweise ist CakeDefi das Gateway f\xfcr die Krypto-Assets auf DeFiChain und sie legen den nativen Coin beim Minten (Pr\xe4gen) von dTokens auf eine \xf6ffentlich bekannte Adresse der entsprechenden Blockchain. Die dBTC aus diesem Exploit wurden ohne Sicherheiten gepr\xe4gt und die Community beschloss, Mechanismen einzuf\xfchren, um sie \xfcber einen l\xe4ngeren Zeitraum aus dem System zu entfernen. Weitere Details findest du im entsprechenden ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/dfips/issues/101"},"DFIP"),"."),(0,r.kt)("p",null,"Ein Teil ist eine zus\xe4tzliche Geb\xfchr f\xfcr die Nutzung des dBTC-DFI-Pools. Von jedem Swap wird eine Geb\xfchr von 0,1 % als dBTC abgezogen und verbrannt. Die Gesamtgeb\xfchr dieses dBTC-DFI-Pools betr\xe4gt: 0,3 %"))}h.isMDXComponent=!0},5450:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dexfeestructure_DE_DefiChainDEXFees-b5968569c2fa5c6594f35ca437d21786.png"},6405:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dexfeestructure_DE_Defiscan_APR_rewardCommissions-8c7099bff95db39f3433ff3fb5a64055.jpg"},2618:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dexfeestructure_DE_stabilizingFee-ea8ccec7903111393c9cb6ddd9a7be88.png"}}]);