function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DYrDwapy.js","assets/index-O8rLxTsG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var V=Object.defineProperty;var z=(f,t,r)=>t in f?V(f,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):f[t]=r;var i=(f,t,r)=>(z(f,typeof t!="symbol"?t+"":t,r),r);import{M as x,m as G,A as H,t as K,o as I,q as w,L as W,B as s,p as C,r as d,v as A,x as _,y as Q,T as h,z as q,E as y,F as L,G as Y,H as J,I as D,J as Z,K as O,O as P,P as j,i as S,Q as E}from"./index-DYrDwapy.js";import{D as X,f as N,I as tt,a as rt}from"./QueryParams-e7d3e4f3.browser.esm-BYr44Afv.js";import{m as B,v as F,h as $,i as et,a as at}from"./marketplace-2a8b4422.browser.esm-DwiyNZ-Q.js";import{C as nt,a as st,G as ot,b as M}from"./contract-appuri-6fe9aa25.browser.esm-lN7VoUsV.js";import{C as ct}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as it}from"./contract-platform-fee-4a052f76.browser.esm-C_7ehbiu.js";import{C as dt}from"./contract-roles-e775ba00.browser.esm-DSGY0xmR.js";import{c as U}from"./cleanCurrencyAddress-4b44fe49.browser.esm-CywLGr9H.js";import{s as b}from"./setErc20Allowance-4d5b772d.browser.esm-D0vLWnUi.js";let m=function(f){return f[f.Direct=0]="Direct",f[f.Auction=1]="Auction",f}({});class pt{constructor(t,r){i(this,"createListing",d(async t=>{F(t);const r=await y(t.assetContractAddress),e=await y(t.currencyContractAddress);await $(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await L(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),n=await L(this.contractWrapper.getProvider(),t.reservePricePerToken,e);let o=Math.floor(t.startTimestamp.getTime()/1e3);const u=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return o<u&&(o=u),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:U(e),listingType:m.Auction,quantityToList:t.quantity,reservePricePerToken:n,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(o)}],parse:p=>({id:this.contractWrapper.parseLogs("ListingAdded",p==null?void 0:p.logs)[0].args.listingId,receipt:p})})}));i(this,"createListingsBatch",d(async t=>{const r=(await Promise.all(t.map(e=>this.createListing.prepare(e)))).map(e=>e.encode());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("ListingAdded",e==null?void 0:e.logs).map(n=>({id:n.args.listingId,receipt:e}))})}));i(this,"buyoutListing",d(async t=>{const r=await this.validateListing(s.from(t)),e=await Y(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,J(r.buyoutPrice,e.decimals))}));i(this,"makeBid",d(async(t,r)=>{const e=await this.validateListing(s.from(t)),a=await L(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(s.from(0)))throw new Error("Cannot make a bid with 0 value");const n=await this.contractWrapper.read("bidBufferBps",[]),o=await this.getWinningBid(t);if(o){const g=et(o.pricePerToken,a,n);A(g)}else{const g=a,l=s.from(e.reservePrice);A(g.gte(l))}const c=s.from(e.quantity),u=a.mul(c),p=await this.contractWrapper.getCallOverrides()||{};return await b(this.contractWrapper,u,e.currencyContractAddress,p),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,D],overrides:p})}));i(this,"cancelListing",d(async t=>{const r=await this.validateListing(s.from(t)),e=s.from(Math.floor(Date.now()/1e3)),a=s.from(r.startTimeInEpochSeconds),n=await this.contractWrapper.read("winningBid",[t]);if(e.gt(a)&&n.offeror!==w)throw new Z(t.toString());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),await this.contractWrapper.getSignerAddress()]})}));i(this,"closeListing",d(async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateListing(s.from(t));try{return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),r]})}catch(a){throw a.message.includes("cannot close auction before it has ended")?new O(t.toString(),e.endTimeInEpochSeconds.toString()):a}}));i(this,"executeSale",d(async t=>{const r=await this.validateListing(s.from(t));try{const e=await this.getWinningBid(t);A(e,"No winning bid found");const a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),n=this.encoder.encode("closeAuction",[t,e.buyerAddress]);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,n]})}catch(e){throw e.message.includes("cannot close auction before it has ended")?new O(t.toString(),r.endTimeInEpochSeconds.toString()):e}}));i(this,"updateListing",d(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]})));this.contractWrapper=t,this.storage=r,this.encoder=new I(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.listingId.toString()!==t.toString())throw new W(this.getAddress(),t.toString());if(r.listingType!==m.Auction)throw new q(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(s.from(t));const r=await this.contractWrapper.read("winningBid",[t]);if(r.offeror!==w)return await B(this.contractWrapper.getProvider(),s.from(t),r)}async getWinner(t){const r=await this.validateListing(s.from(t)),e=await this.contractWrapper.read("winningBid",[t]),a=s.from(Math.floor(Date.now()/1e3)),n=s.from(r.endTimeInEpochSeconds);if(a.gt(n)&&e.offeror!==w)return e.offeror;const u=(await new M(this.contractWrapper).getEvents("AuctionClosed")).find(p=>p.data.listingId.eq(s.from(t)));if(!u)throw new Error(`Could not find auction with listingId ${t} in closed auctions`);return u.data.winningBidder}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),this.validateListing(s.from(t))]),n=e?e.currencyValue.value:a.reservePrice,o=n.add(n.mul(r).div(1e4));return P(this.contractWrapper.getProvider(),a.currencyContractAddress,o)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await N(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:s.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:m.Auction}}}class ut{constructor(t,r){i(this,"createListing",d(async t=>{F(t);const r=await y(t.assetContractAddress),e=await y(t.currencyContractAddress);await $(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await L(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e);let n=Math.floor(t.startTimestamp.getTime()/1e3);const c=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return n<c&&(n=c),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:U(e),listingType:m.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(n)}],parse:u=>({id:this.contractWrapper.parseLogs("ListingAdded",u==null?void 0:u.logs)[0].args.listingId,receipt:u})})}));i(this,"createListingsBatch",d(async t=>{const r=(await Promise.all(t.map(e=>this.createListing.prepare(e)))).map(e=>e.encode());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("ListingAdded",e==null?void 0:e.logs).map(n=>({id:n.args.listingId,receipt:e}))})}));i(this,"makeOffer",d(async(t,r,e,a,n)=>{if(_(e))throw new Error("You must use the wrapped native token address when making an offer with a native token");const o=await L(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(l){throw console.error("Failed to get listing, err =",l),new Error(`Error getting the listing with id ${t}`)}const c=s.from(r),u=s.from(o).mul(c),p=await this.contractWrapper.getCallOverrides()||{};await b(this.contractWrapper,u,e,p);let g=D;return n&&(g=s.from(Math.floor(n.getTime()/1e3))),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,o,g],overrides:p})}));i(this,"acceptOffer",d(async(t,r)=>{await this.validateListing(s.from(t));const e=await y(r),a=await this.contractWrapper.read("offers",[t,e]);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]})}));i(this,"buyoutListing",d(async(t,r,e)=>{const a=await this.validateListing(s.from(t)),{valid:n,error:o}=await this.isStillValidListing(a,r);if(!n)throw new Error(`Listing ${t} is no longer valid. ${o}`);const c=e||await this.contractWrapper.getSignerAddress(),u=s.from(r),p=s.from(a.buyoutPrice).mul(u),g=await this.contractWrapper.getCallOverrides()||{};return await b(this.contractWrapper,p,a.currencyContractAddress,g),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,c,u,a.currencyContractAddress,p],overrides:g})}));i(this,"updateListing",d(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await y(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]})));i(this,"cancelListing",d(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]})));this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===w)throw new W(this.getAddress(),t.toString());if(r.listingType!==m.Direct)throw new q(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(s.from(t)),A(j(r));const e=await this.contractWrapper.read("offers",[t,await y(r)]);if(e.offeror!==w)return await B(this.contractWrapper.getProvider(),s.from(t),e)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await N(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:m.Direct}}async isStillValidListing(t,r){if(!await at(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress))return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};const a=this.contractWrapper.getProvider(),n=(await S(()=>import("./IERC165-bKJSsN7u.js"),__vite__mapDeps([]))).default,o=new E(t.assetContractAddress,n,a),c=await o.supportsInterface(tt),u=await o.supportsInterface(rt);if(c){const p=(await S(()=>import("./index-DYrDwapy.js").then(T=>T.dz),__vite__mapDeps([0,1]))).default,g=new E(t.assetContractAddress,p,a);let l;try{l=await g.ownerOf(t.tokenId)}catch{}const v=(l==null?void 0:l.toLowerCase())===t.sellerAddress.toLowerCase();return{valid:v,error:v?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}else if(u){const p=(await S(()=>import("./index-DYrDwapy.js").then(T=>T.dB),__vite__mapDeps([0,1]))).default,v=(await new E(t.assetContractAddress,p,a).balanceOf(t.sellerAddress,t.tokenId)).gte(r||t.quantity);return{valid:v,error:v?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}else return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}}const k=class k{constructor(t,r,e){i(this,"getAll",this.getAllListings);i(this,"buyoutListing",d(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new W(this.getAddress(),t.toString());switch(a.listingType){case m.Direct:return A(r!==void 0),await this.direct.buyoutListing.prepare(t,r,e);case m.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error(`Unknown listing type: ${a.listingType}`)}}));i(this,"makeOffer",d(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new W(this.getAddress(),t.toString());const n=await this.contractWrapper.getChainID();switch(a.listingType){case m.Direct:return A(e),await this.direct.makeOffer.prepare(t,e,_(a.currency)?Q[n].wrapped.address:a.currency,r);case m.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error(`Unknown listing type: ${a.listingType}`)}}));i(this,"setBidBufferBps",d(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getTimeBufferInSeconds();return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,s.from(t)]})}));i(this,"setTimeBufferInSeconds",d(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getBidBufferBps();return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[s.from(t),r]})}));i(this,"allowListingFromSpecificAssetOnly",d(async t=>{const r=[];return(await this.roles.get("asset")).includes(w)&&r.push(this.encoder.encode("revokeRole",[C("asset"),w])),r.push(this.encoder.encode("grantRole",[C("asset"),t])),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}));i(this,"allowListingFromAnyAsset",d(async()=>{const t=[],r=await this.roles.get("asset");for(const e in r)t.push(this.encoder.encode("revokeRole",[C("asset"),e]));return t.push(this.encoder.encode("grantRole",[C("asset"),w])),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})}));let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new G(t,r,n,a,e);this._chainId=o,this.abi=H.parse(n||[]),this.contractWrapper=c,this.storage=e,this.metadata=new nt(this.contractWrapper,K,this.storage),this.app=new st(this.contractWrapper,this.metadata,this.storage),this.roles=new dt(this.contractWrapper,k.contractRoles),this.encoder=new I(this.contractWrapper),this.estimator=new ot(this.contractWrapper),this.direct=new ut(this.contractWrapper,this.storage),this.auction=new pt(this.contractWrapper,this.storage),this.events=new M(this.contractWrapper),this.platformFees=new it(this.contractWrapper),this.interceptor=new ct(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===w)throw new W(this.getAddress(),t.toString());switch(r.listingType){case m.Auction:return await this.auction.mapListing(r);case m.Direct:return await this.direct.mapListing(r);default:throw new Error(`Unknown listing type: ${r.listingType}`)}}async getActiveListings(t){const r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=s.from(Math.floor(Date.now()/1e3));return e.filter(n=>n.type===m.Auction&&s.from(n.endTimeInEpochSeconds).gt(a)&&s.from(n.startTimeInEpochSeconds).lte(a)||n.type===m.Direct&&s.from(n.quantity).gt(0))}async getAllListings(t){const r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.read("hasRole",[C("lister"),w])}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getTimeBufferInSeconds(){return this.contractWrapper.read("timeBuffer",[])}async getOffers(t){const r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map(e=>B(this.contractWrapper.getProvider(),s.from(t),{quantityWanted:e.data.quantityWanted,pricePerToken:e.data.quantityWanted.gt(0)?e.data.totalOfferAmount.div(e.data.quantityWanted):e.data.totalOfferAmount,currency:e.data.currency,offeror:e.data.offeror})))}async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings",[])).toNumber()).keys()).map(async e=>{let a;try{a=await this.getListing(e)}catch(n){if(n instanceof W)return;console.warn(`Failed to get listing ${e}' - skipping. Try 'marketplace.getListing(${e})' to get the underlying error.`);return}if(a.type===m.Auction)return a;if(t){const{valid:n}=await this.direct.isStillValidListing(a);if(!n)return}return a}))).filter(e=>e!==void 0)}applyFilter(t,r){let e=[...t];const a=s.from((r==null?void 0:r.start)||0).toNumber(),n=s.from((r==null?void 0:r.count)||X).toNumber();return r&&(r.seller&&(e=e.filter(o=>{var c;return o.sellerAddress.toString().toLowerCase()===((c=r==null?void 0:r.seller)==null?void 0:c.toString().toLowerCase())})),r.tokenContract&&(e=e.filter(o=>{var c;return o.assetContractAddress.toString().toLowerCase()===((c=r==null?void 0:r.tokenContract)==null?void 0:c.toString().toLowerCase())})),r.tokenId!==void 0&&(e=e.filter(o=>{var c;return o.tokenId.toString()===((c=r==null?void 0:r.tokenId)==null?void 0:c.toString())})),e=e.filter((o,c)=>c>=a),e=e.slice(0,n)),e}async prepare(t,r,e){return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};i(k,"contractRoles",x);let R=k;export{R as Marketplace};
