import{SmartWalletConnector as o}from"./thirdweb-dev-wallets-evm-connectors-smart-wallet.browser.esm-CH7GH4hI.js";import{d2 as a,as as n}from"./index-0LU5wYHi.js";class c extends o{constructor(t){super({...t,factoryAddress:t.registryAddress||a}),this.tbaConfig=t}defaultFactoryInfo(){return{createAccount:async t=>t.prepare("createAccount",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt,n("")]),getAccountAddress:async t=>await t.call("account",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt])}}}export{c as TokenBoundSmartWalletConnector};