var m=Object.defineProperty;var g=(a,t,r)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var o=(a,t,r)=>(g(a,typeof t!="symbol"?t+"":t,r),r);import{a as n}from"./assertEnabled-4d3448fa.browser.esm-QZDBw-n7.js";import{C as f,a as l,G as W,b as C,d as i}from"./contract-appuri-aa7b4e53.browser.esm-kvFp3paC.js";import{M as E,Y as A,Z as w,$ as R,p as I,A as T,x as L,q as O,T as S}from"./index-kPsqViNo.js";import{C as F}from"./contract-interceptor-d7b164a7.browser.esm-amNiAGmN.js";import{C as _}from"./contract-platform-fee-9c2cf702.browser.esm-HuNbtOfi.js";import{C as b}from"./contract-roles-c0a15ff2.browser.esm-woP0SfHM.js";import{M,a as U,b as D}from"./marketplacev3-offers-1421cca7.browser.esm-C59gKzUj.js";import"./cleanCurrencyAddress-1358a791.browser.esm-gMCojOR8.js";import"./setErc20Allowance-5ac91ab4.browser.esm-ZVIMM6e0.js";import"./marketplace-f5da1d27.browser.esm-JNqJB2B6.js";import"./QueryParams-69496316.browser.esm-oJlM9Kxa.js";const s=class s{get directListings(){return n(this.detectDirectListings(),A)}get englishAuctions(){return n(this.detectEnglishAuctions(),w)}get offers(){return n(this.detectOffers(),R)}get chainId(){return this._chainId}constructor(t,r,e){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new I(t,r,c,h,e);this._chainId=d,this.abi=T.parse(c||[]),this.contractWrapper=u,this.storage=e,this.metadata=new f(this.contractWrapper,L,this.storage),this.app=new l(this.contractWrapper,this.metadata,this.storage),this.roles=new b(this.contractWrapper,s.contractRoles),this.encoder=new O(this.contractWrapper),this.estimator=new W(this.contractWrapper),this.events=new C(this.contractWrapper),this.platformFees=new _(this.contractWrapper),this.interceptor=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,r,e){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if(i(this.contractWrapper,"DirectListings"))return new M(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(i(this.contractWrapper,"EnglishAuctions"))return new U(this.contractWrapper,this.storage)}detectOffers(){if(i(this.contractWrapper,"Offers"))return new D(this.contractWrapper,this.storage)}};o(s,"contractRoles",E);let p=s;export{p as MarketplaceV3};
