import{InjectedConnector as e}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-O7xr5urP.js";import{k as s}from"./index-4DoMYjDR.js";import"./url-a45219bd.browser.esm-TmggQQgL.js";class w extends e{constructor(n){const t={...{name:"Zerion",getProvider(){var r;function i(o){if(o!=null&&o.isZerion)return o}if(s(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(i):i(globalThis.window.ethereum)}},...n.options};super({chains:n.chains,options:t,connectorStorage:n.connectorStorage})}}export{w as ZerionConnector};
