import{InjectedConnector as e}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-hPps06d0.js";import{af as s}from"./index-DBFl1J3w.js";class p extends e{constructor(n){const t={...{name:"Zerion",getProvider(){var r;function i(o){if(o!=null&&o.isZerion)return o}if(s(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(i):i(globalThis.window.ethereum)}},...n.options};super({chains:n.chains,options:t,connectorStorage:n.connectorStorage})}}export{p as ZerionConnector};