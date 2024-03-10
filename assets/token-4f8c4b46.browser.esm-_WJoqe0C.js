var w=Object.defineProperty;var C=(i,e,t)=>e in i?w(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>(C(i,typeof e!="symbol"?e+"":e,t),t);import{d1 as y,d2 as T,d3 as b,eK as E,d5 as S,di as m,d6 as v,aG as l,d7 as p,d8 as g,B as f,dS as R}from"./index-4DoMYjDR.js";import{C as A,a as B,b as O,G as F}from"./contract-appuri-feedfaed.browser.esm-HRqEbkK6.js";import{C as V}from"./contract-interceptor-d7b164a7.browser.esm-GcKghK7J.js";import{C as M}from"./contract-platform-fee-b11f0288.browser.esm-1gIl028k.js";import{C as P}from"./contract-roles-8b5830e1.browser.esm-x65gItGp.js";import{C as x}from"./contract-sales-7d8735a3.browser.esm-kjj4YLW8.js";import{a as D}from"./erc-20-af2fa47f.browser.esm-VWZGik7q.js";import{S as G}from"./erc-20-standard-de6cb099.browser.esm-h-ugIXE6.js";import"./assertEnabled-9932cdf6.browser.esm-lMZxCdHk.js";import"./drop-claim-conditions-bd48701e.browser.esm-LmyqlRHT.js";import"./index-0gIMV788.js";import"./signature-3d223e74.browser.esm-I1jZMqDv.js";import"./setErc20Allowance-001b07da.browser.esm-dqvKM4BN.js";class H{constructor(e,t){this.contractWrapper=e,this.events=t}async getAllHolderBalances(){const t=(await this.events.getEvents("Transfer")).map(a=>a.data),r={};t.forEach(a=>{const n=a==null?void 0:a.from,c=a==null?void 0:a.to,u=a==null?void 0:a.value;n!==l&&(n in r||(r[n]=f.from(0)),r[n]=r[n].sub(u)),c!==l&&(c in r||(r[c]=f.from(0)),r[c]=r[c].add(u))});const s=Object.entries(r),d=await Promise.all(s.map(a=>{let[,n]=a;return R(this.contractWrapper.getProvider(),this.contractWrapper.address,n)}));return s.map((a,n)=>{let[c]=a;return{holder:c,balance:d[n]}})}}const h=class h extends G{constructor(t,r,s){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new T(t,r,a,d,s);super(c,s,n);o(this,"mint",p(async t=>this.erc20.mint.prepare(t)));o(this,"mintTo",p(async(t,r)=>this.erc20.mintTo.prepare(t,r)));o(this,"mintBatchTo",p(async t=>this.erc20.mintBatchTo.prepare(t)));o(this,"delegateTo",p(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await m(t)]})));o(this,"burn",p(t=>this.erc20.burn.prepare(t)));o(this,"burnFrom",p(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=b.parse(a||[]),this.metadata=new A(this.contractWrapper,E,this.storage),this.app=new B(this.contractWrapper,this.metadata,this.storage),this.roles=new P(this.contractWrapper,h.contractRoles),this.sales=new x(this.contractWrapper),this.events=new O(this.contractWrapper),this.history=new H(this.contractWrapper,this.events),this.encoder=new S(this.contractWrapper),this.estimator=new F(this.contractWrapper),this.platformFees=new M(this.contractWrapper),this.interceptor=new V(this.contractWrapper),this.signature=new D(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[t]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await m(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[v("transfer"),l])}async getMintTransaction(t,r){return this.erc20.getMintTransaction(t,r)}async prepare(t,r,s){return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:s})}async call(t,r,s){return this.contractWrapper.call(t,r,s)}};o(h,"contractRoles",y);let W=h;export{W as Token};
