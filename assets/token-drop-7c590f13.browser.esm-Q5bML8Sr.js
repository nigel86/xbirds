var d=Object.defineProperty;var f=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);import{bI as C,q as w,r as W,bJ as y,s as R,J as p,t as T,v as b,x as c,T as m}from"./index-WHlFM_aG.js";import{C as A,a as E,G as S,b as O}from"./contract-appuri-aa7b4e53.browser.esm-qTM0MAzg.js";import{C as v}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as D}from"./contract-platform-fee-9c2cf702.browser.esm-X9ADHHLz.js";import{C as F}from"./contract-roles-c0a15ff2.browser.esm-rXnUNni-.js";import{C as V}from"./contract-sales-0845e211.browser.esm-asrTSct2.js";import{D as I}from"./drop-claim-conditions-a4ae76be.browser.esm-y3tXdIFw.js";import{S as x}from"./erc-20-standard-177cd02d.browser.esm-lT266DFv.js";import"./index-5L3ICibO.js";import"./assertEnabled-4d3448fa.browser.esm-5FqztZao.js";import"./setErc20Allowance-5ac91ab4.browser.esm-uURVazAj.js";import"./erc-20-b6471621.browser.esm-N0HiCPCs.js";const o=class o extends x{constructor(t,r,a){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,r,h,i,a);super(g,a,u);n(this,"claim",c((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"claimTo",c((()=>{var t=this;return async function(r,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc20.claimTo.prepare(r,a,{checkERC20Allowance:i})}})()));n(this,"delegateTo",c(async t=>m.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await p(t)]})));n(this,"burnTokens",c(async t=>this.erc20.burn.prepare(t)));n(this,"burnFrom",c(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=W.parse(h||[]),this.metadata=new A(this.contractWrapper,y,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new F(this.contractWrapper,o.contractRoles),this.encoder=new R(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new O(this.contractWrapper),this.sales=new V(this.contractWrapper),this.platformFees=new D(this.contractWrapper),this.interceptor=new v(this.contractWrapper),this.claimConditions=new I(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await p(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await p(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[T("transfer"),b])}async prepare(t,r,a){return m.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};n(o,"contractRoles",C);let l=o;export{l as TokenDrop};
