import{InjectedConnector as i}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-s9TMlqu1.js";import{aj as e}from"./index-kPsqViNo.js";import"./url-a45219bd.browser.esm-8g7EJfWx.js";class f extends i{constructor(t){const s={...{name:"Trust",getProvider(){var r;function n(o){if(o!=null&&o.isTrust)return o}if(e(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(n):n(globalThis.window.ethereum)}},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage})}}export{f as TrustConnector};