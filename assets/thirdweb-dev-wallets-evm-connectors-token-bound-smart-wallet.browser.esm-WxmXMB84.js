import{SmartWalletConnector as o}from"./thirdweb-dev-wallets-evm-connectors-smart-wallet.browser.esm-V252KiJZ.js";import{c$ as a,aw as n}from"./index-PZRpoEeF.js";import"./url-a45219bd.browser.esm-cdQ303JV.js";class i extends o{constructor(t){super({...t,factoryAddress:t.registryAddress||a}),this.tbaConfig=t}defaultFactoryInfo(){return{createAccount:async t=>t.prepare("createAccount",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt,n("")]),getAccountAddress:async t=>await t.call("account",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt])}}}export{i as TokenBoundSmartWalletConnector};