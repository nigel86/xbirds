var u=Object.defineProperty;var d=(s,a,t)=>a in s?u(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var o=(s,a,t)=>(d(s,typeof a!="symbol"?a+"":a,t),t);import{N as g,p as C,A as f,D as w,q as y,r as W,s as T,t as i,T as A,B as R}from"./index-kPsqViNo.js";import{C as E,a as k,b as S,G as b}from"./contract-appuri-aa7b4e53.browser.esm-kvFp3paC.js";import{C as v}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as N,a as O}from"./contract-owner-3af4e40b.browser.esm-A4mJNaXU.js";import{C as B}from"./contract-platform-fee-9c2cf702.browser.esm-HuNbtOfi.js";import{C as I}from"./contract-roles-c0a15ff2.browser.esm-woP0SfHM.js";import{C as P}from"./contract-sales-0845e211.browser.esm-ePqQ19hv.js";import{D as F}from"./erc-1155-4712d8f3.browser.esm-_63OE_KR.js";import{S as D}from"./erc-1155-standard-aeb481d4.browser.esm-R37qXuTC.js";import{P as _}from"./thirdweb-checkout-b9cf9d3a.browser.esm-OuImGGlc.js";import"./setErc20Allowance-5ac91ab4.browser.esm-ZVIMM6e0.js";import"./QueryParams-69496316.browser.esm-oJlM9Kxa.js";import"./index-OLErEi8u.js";import"./assertEnabled-4d3448fa.browser.esm-QZDBw-n7.js";class q{constructor(a){this.events=a}async getAllClaimerAddresses(a){const t=(await this.events.getEvents("TokensClaimed")).filter(r=>r.data&&R.isBigNumber(r.data.tokenId)?r.data.tokenId.eq(a):!1);return Array.from(new Set(t.filter(r=>{var e;return typeof((e=r.data)==null?void 0:e.claimer)=="string"}).map(r=>r.data.claimer)))}}const p=class p extends D{constructor(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,n,e);super(l,e,m);o(this,"createBatch",i(async(t,r)=>this.erc1155.lazyMint.prepare(t,r)));o(this,"claimTo",i((()=>{var t=this;return async function(r,e,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return t.erc1155.claimTo.prepare(r,e,n,{checkERC20Allowance:c})}})()));o(this,"claim",i((()=>{var t=this;return async function(r,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(c,r,e,n)}})()));o(this,"burnTokens",i(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=f.parse(c),this.metadata=new E(this.contractWrapper,w,this.storage),this.app=new k(this.contractWrapper,this.metadata,this.storage),this.roles=new I(this.contractWrapper,p.contractRoles),this.royalties=new N(this.contractWrapper,this.metadata),this.sales=new P(this.contractWrapper),this.claimConditions=new F(this.contractWrapper,this.metadata,this.storage),this.events=new S(this.contractWrapper),this.history=new q(this.events),this.encoder=new y(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.platformFees=new B(this.contractWrapper),this.interceptor=new v(this.contractWrapper),this.checkout=new _(this.contractWrapper),this.owner=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[W("transfer"),T])}async getClaimTransaction(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return this.erc1155.getClaimTransaction(t,r,e,{checkERC20Allowance:n})}async prepare(t,r,e){return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};o(p,"contractRoles",g);let h=p;export{h as EditionDrop};