var f=Object.defineProperty;var C=(p,o,t)=>o in p?f(p,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[o]=t;var n=(p,o,t)=>(C(p,typeof o!="symbol"?o+"":o,t),t);import{D as h}from"./QueryParams-e7d3e4f3.browser.esm-Ba1I7BWP.js";import{N as w,k as W,A,$ as T,l as y,a0 as b,B as i,m as S,o as E,p as s,T as d}from"./index-DoOeQNHV.js";import{C as R,a as k,G as N,b as v}from"./contract-appuri-6fe9aa25.browser.esm-S-yj5UWT.js";import{C as I}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as U,D as x,a as O}from"./contract-owner-6f0acaff.browser.esm-Vnnm4Pfr.js";import{C as F}from"./contract-platform-fee-4a052f76.browser.esm-BgB0VV-l.js";import{C as M}from"./contract-roles-e775ba00.browser.esm-DfSqq5EB.js";import{C as _}from"./contract-sales-040b4893.browser.esm-B2ySKG0Z.js";import{D as L}from"./drop-claim-conditions-448e3579.browser.esm-C3qi6J7q.js";import{S as B}from"./erc-721-standard-69619833.browser.esm-TRqZeMwo.js";import{P as D}from"./thirdweb-checkout-1c18b191.browser.esm-B1h72BFA.js";import"./setErc20Allowance-4d5b772d.browser.esm-BMa3_033.js";import"./index-CGMn-SJt.js";import"./treeify-Ci4jjWxE.js";import"./assertEnabled-f3a1d1e6.browser.esm-Dx0mj4LF.js";import"./erc-721-45d9e775.browser.esm-CTA-3IS0.js";const l=class l extends B{constructor(t,r,e){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,c,a,e);super(g,e,m);n(this,"createBatch",s(async(t,r)=>this.erc721.lazyMint.prepare(t,r)));n(this,"claimTo",s((()=>{var t=this;return async function(r,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc721.claimTo.prepare(r,e,{checkERC20Allowance:a})}})()));n(this,"claim",s((()=>{var t=this;return async function(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,e)}})()));n(this,"burn",s(async t=>this.erc721.burn.prepare(t)));n(this,"transfer",s(async(t,r)=>this.erc721.transfer.prepare(t,r)));n(this,"setApprovalForAll",s(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)));n(this,"setApprovalForToken",s(async(t,r)=>d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]})));this.abi=A.parse(c||[]),this.metadata=new R(this.contractWrapper,T,this.storage),this.app=new k(this.contractWrapper,this.metadata,this.storage),this.roles=new M(this.contractWrapper,l.contractRoles),this.royalties=new U(this.contractWrapper,this.metadata),this.sales=new _(this.contractWrapper),this.claimConditions=new L(this.contractWrapper,this.metadata,this.storage),this.encoder=new y(this.contractWrapper),this.estimator=new N(this.contractWrapper),this.events=new v(this.contractWrapper),this.platformFees=new F(this.contractWrapper),this.revealer=new x(this.contractWrapper,this.storage,b.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new I(this.contractWrapper),this.owner=new O(this.contractWrapper),this.checkout=new D(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),e=i.from((t==null?void 0:t.count)||h).toNumber(),a=Math.min((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r+e);return await Promise.all(Array.from(Array(a).keys()).map(c=>this.get(c.toString())))}async getAllUnclaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),e=i.from((t==null?void 0:t.count)||h).toNumber(),a=i.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r)),c=i.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),a.toNumber()+e));return await Promise.all(Array.from(Array(c.sub(a).toNumber()).keys()).map(m=>this.erc721.getTokenMetadata(a.add(m).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[S("transfer"),E])}async getClaimTransaction(t,r){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:e})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async prepare(t,r,e){return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};n(l,"contractRoles",w);let u=l;export{u as NFTDrop};
