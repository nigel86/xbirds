var l=Object.defineProperty;var d=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>(d(o,typeof e!="symbol"?e+"":e,t),t);import{bG as g,a4 as C,z as y,bJ as W,a5 as f,az as w,aG as T,q as s,T as S}from"./index-4DoMYjDR.js";import{a as A,b,G as R,C as E}from"./contract-appuri-feedfaed.browser.esm-DE7xxwU3.js";import{C as O}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as B,a as F}from"./contract-owner-045152d5.browser.esm-nBdzc2Ea.js";import{C as G}from"./contract-platform-fee-b11f0288.browser.esm-Sd7E0oWJ.js";import{C as M}from"./contract-roles-8b5830e1.browser.esm-TzOqg07E.js";import{C as v}from"./contract-sales-7d8735a3.browser.esm-HxeQ9zL2.js";import{a as I}from"./erc-1155-dc27fac1.browser.esm-lrnpHTDp.js";import{S as N}from"./erc-1155-standard-7a2cefac.browser.esm-fVH_f8cu.js";import"./setErc20Allowance-001b07da.browser.esm-x-dAPP5B.js";import"./QueryParams-0b9674a5.browser.esm-V6xP1_FF.js";import"./signature-3d223e74.browser.esm-AZGy8EPF.js";import"./index-0gIMV788.js";import"./assertEnabled-9932cdf6.browser.esm-2yA8JHoA.js";const i=class i extends N{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,h,n);super(u,n,m);a(this,"mint",s(async t=>this.erc1155.mint.prepare(t)));a(this,"mintTo",s(async(t,r)=>this.erc1155.mintTo.prepare(t,r)));a(this,"mintAdditionalSupply",s(async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r)));a(this,"mintAdditionalSupplyTo",s(async(t,r,n)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,n)));a(this,"mintBatch",s(async t=>this.erc1155.mintBatch.prepare(t)));a(this,"mintBatchTo",s(async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r)));a(this,"burn",s(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=y.parse(c||[]),this.metadata=new A(this.contractWrapper,W,this.storage),this.app=new b(this.contractWrapper,this.metadata,this.storage),this.roles=new M(this.contractWrapper,i.contractRoles),this.royalties=new B(this.contractWrapper,this.metadata),this.sales=new v(this.contractWrapper),this.encoder=new f(this.contractWrapper),this.estimator=new R(this.contractWrapper),this.events=new E(this.contractWrapper),this.platformFees=new G(this.contractWrapper),this.interceptor=new O(this.contractWrapper),this.signature=new I(this.contractWrapper,this.storage,this.roles),this.owner=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[w("transfer"),T])}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async prepare(t,r,n){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};a(i,"contractRoles",g);let p=i;export{p as Edition};
