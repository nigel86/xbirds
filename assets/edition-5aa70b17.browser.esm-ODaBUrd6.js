var l=Object.defineProperty;var d=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>(d(o,typeof e!="symbol"?e+"":e,t),t);import{N as g,p as C,A as y,v as W,q as f,r as w,s as T,t as s,T as A}from"./index-kPsqViNo.js";import{C as S,a as R,G as b,b as E}from"./contract-appuri-aa7b4e53.browser.esm-kvFp3paC.js";import{C as O}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as B,a as v}from"./contract-owner-3af4e40b.browser.esm-A4mJNaXU.js";import{C as F}from"./contract-platform-fee-9c2cf702.browser.esm-HuNbtOfi.js";import{C as M}from"./contract-roles-c0a15ff2.browser.esm-woP0SfHM.js";import{C as N}from"./contract-sales-0845e211.browser.esm-ePqQ19hv.js";import{E as I}from"./erc-1155-4712d8f3.browser.esm-_63OE_KR.js";import{S as P}from"./erc-1155-standard-aeb481d4.browser.esm-R37qXuTC.js";import"./setErc20Allowance-5ac91ab4.browser.esm-ZVIMM6e0.js";import"./QueryParams-69496316.browser.esm-oJlM9Kxa.js";import"./index-OLErEi8u.js";import"./assertEnabled-4d3448fa.browser.esm-QZDBw-n7.js";const c=class c extends P{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,i,h,n);super(u,n,m);a(this,"mint",s(async t=>this.erc1155.mint.prepare(t)));a(this,"mintTo",s(async(t,r)=>this.erc1155.mintTo.prepare(t,r)));a(this,"mintAdditionalSupply",s(async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r)));a(this,"mintAdditionalSupplyTo",s(async(t,r,n)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,n)));a(this,"mintBatch",s(async t=>this.erc1155.mintBatch.prepare(t)));a(this,"mintBatchTo",s(async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r)));a(this,"burn",s(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=y.parse(i||[]),this.metadata=new S(this.contractWrapper,W,this.storage),this.app=new R(this.contractWrapper,this.metadata,this.storage),this.roles=new M(this.contractWrapper,c.contractRoles),this.royalties=new B(this.contractWrapper,this.metadata),this.sales=new N(this.contractWrapper),this.encoder=new f(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new E(this.contractWrapper),this.platformFees=new F(this.contractWrapper),this.interceptor=new O(this.contractWrapper),this.signature=new I(this.contractWrapper,this.storage,this.roles),this.owner=new v(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[w("transfer"),T])}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async prepare(t,r,n){return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};a(c,"contractRoles",g);let p=c;export{p as Edition};