"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7119],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},A=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),A=n,h=c["".concat(s,".").concat(A)]||c[A]||u[A]||l;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=A;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}A.displayName="MDXCreateElement"},1013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Wallet Encryption",description:"Wallet encryption and why it is important. Keep the seed and a backup wallet.dat in a safe place."},i=void 0,o={unversionedId:"auto/Wallet_Encryption",id:"auto/Wallet_Encryption",title:"Wallet Encryption",description:"Wallet encryption and why it is important. Keep the seed and a backup wallet.dat in a safe place.",source:"@site/docs/auto/Wallet_Encryption.md",sourceDirName:"auto",slug:"/auto/Wallet_Encryption",permalink:"/docs/auto/Wallet_Encryption",draft:!1,editUrl:"https://github.com/0ptim/DeFiChainWiki/tree/main/docs/auto/Wallet_Encryption.md",tags:[],version:"current",lastUpdatedAt:1673718321,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"Wallet Encryption",description:"Wallet encryption and why it is important. Keep the seed and a backup wallet.dat in a safe place."},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/category/security"},next:{title:"Backup Wallet",permalink:"/docs/auto/Backup_Wallet"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Why encryption matters",id:"why-encryption-matters",level:2},{value:"Encryption in the DeFiChain App",id:"encryption-in-the-defichain-app",level:2},{value:"App Version up to 2.1.17",id:"app-version-up-to-2117",level:4},{value:"App version 2.3.0 and later (last checked with 2.3.3)",id:"app-version-230-and-later-last-checked-with-233",level:4}],d={toc:p},c="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Disclaimer: The following might contain incorrect or incomplete information. Unfortunately, the following information will only describe and explain a certain scenario and prevention but cannot provide a solution for common problems that have been reported."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"If you created your wallet in version 2.3.0 (and did not restore from a seed phrase) backup your wallet in .dat files and store them at a safe place. Every time you change your password, backup wallet.dat again. It is recommend to backup from time to time even without changing password."),(0,n.kt)("p",null,"If you created your wallet in an older version using a seed phrase and encrypted the wallet thereafter (either by using the command line or GUI in version 2.3.0), keep your seed phrase and backup in .dat files in a safe place. The seed used to determine addresses changes with the encryption. Every time you change your password, backup wallet.dat again. It is recommend to backup from time to time even without changing password."),(0,n.kt)("h2",{id:"why-encryption-matters"},"Why encryption matters"),(0,n.kt)("p",null,'The DeFiChain App stores relevant data of your wallet in a file called "wallet.dat", which is located at:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Linux: ",(0,n.kt)("inlineCode",{parentName:"li"},"\\~/.defi/wallets")),(0,n.kt)("li",{parentName:"ul"},"Mac: ",(0,n.kt)("inlineCode",{parentName:"li"},"\\~/Library/Application Support/DeFi/wallets")),(0,n.kt)("li",{parentName:"ul"},"Windows: ",(0,n.kt)("inlineCode",{parentName:"li"},"<root>\\Users\\\\<username>\\AppData\\Roaming\\DeFi")," Blockchain\\wallets")),(0,n.kt)("p",null,"This file works in many aspects just as in Bitcoin core since DeFiChain is a fork of Bitcoin. The wallet.dat stores your seed and private keys, as well as all public keys and addresses. All keys and addresses are determined from the seed using cryptographic methods (so called hierarchical deterministic wallet, short HD wallet according to BIP). If the wallet.dat file is unencrypted (this has been the standard up to version 2.3.0 of the app), all data stored in the file was openly available to everybody who was getting access to that file. So in case the file got in the wrong hands, all funds can be moved to another address and therefore be stolen."),(0,n.kt)("p",null,"So users should be advised to encrypt their wallet and since version 2.3.0 the app is actively encouraging that."),(0,n.kt)("p",null,"After encryption of wallet.dat all data in the file is encrypted and can only be used in the app after unlocking the wallet.dat by entering the password. Before 2.3.0 initial encryption of the wallet.dat and temporary decryption by entering the password could be done in the command line only. Version 2.3.0 added GUI support for this."),(0,n.kt)("h2",{id:"encryption-in-the-defichain-app"},"Encryption in the DeFiChain App"),(0,n.kt)("h4",{id:"app-version-up-to-2117"},"App Version up to 2.1.17"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Seed before &amp; after encryption",src:a(97542).Z,width:"250",height:"155"})),(0,n.kt)("p",null,"In app versions ",(0,n.kt)("em",{parentName:"p"},"before"),' 2.3.0 (i.e. up to 2.1.17) the creation of a new wallet started with the creation a mnemonic or seed phrase, consisting of 24 words. This is what most users refer to as their "seed". Technically the app derived a seed from that phrase and private/public keys and addresses from the seed. The general expectation of users is that having the phrase would be enough to recover the wallet (after computer crash, reinstallation, ...) including all keys and addresses. The DeFiChain GitHub Wiki contains an article about ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/DeFiCh/app/wiki/Wallet-Encryption"},"Wallet encryption")," using the command line of the app. The article contains a notice that using the encryption function will change the seed. In consequence the phrase created at the beginning is useless since it can only re-create the status ",(0,n.kt)("strong",{parentName:"p"},"before")," the encryption was turned on. This seems to be an explanation for the reported issue that after restoring the wallet with the seed phrase users are missing the addresses, which are created after the encryption of the Wallet. When checking with 'getaddressinfo' ",(0,n.kt)("inlineCode",{parentName:"p"},"<address>")," ",(0,n.kt)("em",{parentName:"p"},"it shows")," ",(0,n.kt)("inlineCode",{parentName:"p"},"ismine:false"),". Fair enough since this address was not created by the seed derived from the phrase but from the seed created during encryption."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backup wallet in app",src:a(93798).Z,width:"250",height:"141"})),(0,n.kt)("p",null,"Even after encryption is enabled, the app keeps the keys and addresses derived from the original seed in the wallet. So access to the funds is still possible. However, the old addresses have been marked with a warning that they a not saved by the seed (the new seed after encryption)."),(0,n.kt)("p",null,"How to backup with enabled encryption: Keep the mnemonic phrase and a copy of wallet.dat or a backup made with the backup function of the app. The backup function in 2.1.16 and 2.1.17 creates a backup in .dat format which is useful to restore also in newer version. Former versions created unencrypted backup in .txt files that are deemed to be not secure and are not feasible for restoring a wallet in new versions."),(0,n.kt)("p",null,"In short: for encrypted wallets the seed phrase is usually not enough to recover a wallet from scratch. The phrase can be used to restore the keys and addresses before encryption was turned on. Keep the phrase and a backup of wallet.dat at a safe place."),(0,n.kt)("h4",{id:"app-version-230-and-later-last-checked-with-233"},"App version 2.3.0 and later (last checked with 2.3.3)"),(0,n.kt)("p",null,"The version 2.3.0 does not use seed phrases anymore. Instead the creation of a wallet starts with setting a password and with that an encrypted wallet is created. You still can restore an existing wallet by using the old seed phrase or using a .dat file."),(0,n.kt)("p",null,"If you did not set a password your .dat file and decide to do this now, make sure to create a new backup of your .dat file since in general the same problem occurs as if the wallet was created with a seed phrase and encrypted later."))}u.isMDXComponent=!0},93798:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},97542:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/jpeg;base64,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"}}]);