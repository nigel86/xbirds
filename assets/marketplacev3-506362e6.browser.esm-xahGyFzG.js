var m=Object.defineProperty;var g=(a,t,r)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var o=(a,t,r)=>(g(a,typeof t!="symbol"?t+"":t,r),r);import{a as n}from"./assertEnabled-f3a1d1e6.browser.esm-DiGapVz3.js";import{C as f,a as l,G as W,b as C,d as i}from"./contract-appuri-6fe9aa25.browser.esm-DYtx6qX_.js";import{M as E,P as A,Q as w,V as R,k as I,A as T,r as L,l as O,T as S}from"./index-MvUayZ6t.js";import{C as F}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as _}from"./contract-platform-fee-4a052f76.browser.esm-DXr-KGlf.js";import{C as b}from"./contract-roles-e775ba00.browser.esm-D-WRubPs.js";import{M,a as U,b as D}from"./marketplacev3-offers-a504dd82.browser.esm-DeHCZdxB.js";import"./cleanCurrencyAddress-4b44fe49.browser.esm-C0yPgxxV.js";import"./setErc20Allowance-4d5b772d.browser.esm-CUOWLM6W.js";import"./marketplace-2a8b4422.browser.esm-CfKoKecu.js";import"./QueryParams-e7d3e4f3.browser.esm-DffnXXD2.js";const s=class s{get directListings(){return n(this.detectDirectListings(),A)}get englishAuctions(){return n(this.detectEnglishAuctions(),w)}get offers(){return n(this.detectOffers(),R)}get chainId(){return this._chainId}constructor(t,r,e){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new I(t,r,c,h,e);this._chainId=d,this.abi=T.parse(c||[]),this.contractWrapper=u,this.storage=e,this.metadata=new f(this.contractWrapper,L,this.storage),this.app=new l(this.contractWrapper,this.metadata,this.storage),this.roles=new b(this.contractWrapper,s.contractRoles),this.encoder=new O(this.contractWrapper),this.estimator=new W(this.contractWrapper),this.events=new C(this.contractWrapper),this.platformFees=new _(this.contractWrapper),this.interceptor=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,r,e){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if(i(this.contractWrapper,"DirectListings"))return new M(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(i(this.contractWrapper,"EnglishAuctions"))return new U(this.contractWrapper,this.storage)}detectOffers(){if(i(this.contractWrapper,"Offers"))return new D(this.contractWrapper,this.storage)}};o(s,"contractRoles",E);let p=s;export{p as MarketplaceV3};