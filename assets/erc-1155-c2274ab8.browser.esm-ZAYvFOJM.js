function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-0LU5wYHi.js","assets/index-CRe2lkki.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var rt=Object.defineProperty;var et=(E,t,a)=>t in E?rt(E,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):E[t]=a;var p=(E,t,a)=>(et(E,typeof t!="symbol"?t+"":t,a),a);import{aC as nt,B as y,o as G,aj as D,aD as st,y as g,p as h,T as W,l as S,aE as v,aF as I,aG as Y,aH as P,aI as K,aJ as it,aK as x,aL as J,aM as X,aN as q,aO as ot,a1 as N,aP as ct,G as R,s as pt,aQ as tt,z as lt,as as B,aR as F,aS as _,aT as ht,t as dt,f as ut,k as mt,aU as gt,a4 as ft,a3 as wt}from"./index-0LU5wYHi.js";import{a as T}from"./assertEnabled-f3a1d1e6.browser.esm-P748H01s.js";import{d as C,h as k,C as Ct}from"./contract-appuri-6fe9aa25.browser.esm-BPpG4wES.js";import{F as Wt,b as yt,c as L,D as O,u as bt}from"./QueryParams-e7d3e4f3.browser.esm-Cae3SQ5M.js";import{c as Et,D as Tt}from"./contract-owner-6f0acaff.browser.esm-CkFxFOaR.js";import{S as At,b as Mt,M as St,t as U,l as z,n as V,C as b,c as $,f as vt,p as It,d as Pt,e as Q,g as H,u as Nt,h as Rt,i as Z}from"./index-DO7ylCTU.js";import{s as Dt}from"./setErc20Allowance-4d5b772d.browser.esm-D3F8S2gP.js";class kt{constructor(t,a,r){p(this,"set",h((()=>{var t=this;return async function(a,r){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t.setBatch.prepare([{tokenId:a,claimConditions:r}],e)}})()));p(this,"setBatch",h((()=>{var t=this;return async function(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const e={},n=await Promise.all(a.map(async o=>{let{tokenId:l,claimConditions:d}=o,f=d;if(t.isLegacySinglePhaseDrop(t.contractWrapper)){if(r=!0,d.length===0)f=[{startTime:new Date(0),currencyAddress:G,price:0,maxClaimableSupply:0,maxClaimablePerWallet:0,waitInSeconds:0,merkleRootHash:gt([0],32),snapshot:[]}];else if(d.length>1)throw new Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed")}(t.isNewSinglePhaseDrop(t.contractWrapper)||t.isNewMultiphaseDrop(t.contractWrapper))&&f.forEach(i=>{var w;if(i.snapshot&&i.snapshot.length>0&&(i.maxClaimablePerWallet===void 0||i.maxClaimablePerWallet==="unlimited"))throw new Error(`maxClaimablePerWallet must be set to a specific value when an allowlist is set.
Set it to 0 to only allow addresses in the allowlist to claim the amount specified in the allowlist.

ex:
contract.claimConditions.set(tokenId, [{ snapshot: [{ address: '0x...', maxClaimable: 1 }], maxClaimablePerWallet: 0 }])`);if(i.snapshot&&i.snapshot.length>0&&((w=i.maxClaimablePerWallet)==null?void 0:w.toString())==="0"&&i.snapshot.map(A=>{var M;return typeof A=="string"?0:Number(((M=A.maxClaimable)==null?void 0:M.toString())||0)}).reduce((A,M)=>A+M,0)===0)throw new Error("maxClaimablePerWallet is set to 0, and all addresses in the allowlist have max claimable 0. This means that no one can claim.")});const{snapshotInfos:m,sortedConditions:u}=await It(f,0,t.contractWrapper.getProvider(),t.storage,t.getSnapshotFormatVersion());return m.forEach(i=>{e[i.merkleRoot]=i.snapshotUri}),{tokenId:l,sortedConditions:u}})),s=await t.metadata.get(),c=[];for(const o of Object.keys(s.merkle||{}))e[o]=s.merkle[o];if(!Pt(s.merkle,e)){const o=await t.metadata.parseInputMetadata({...s,merkle:e}),l=await t.metadata._parseAndUploadMetadata(o);if(k("setContractURI",t.contractWrapper)){const d=new S(t.contractWrapper);c.push(d.encode("setContractURI",[l]))}else throw new Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.")}if(n.forEach(o=>{let{tokenId:l,sortedConditions:d}=o;const f=new S(t.contractWrapper);if(t.isLegacySinglePhaseDrop(t.contractWrapper)){const m=new S(t.contractWrapper);c.push(m.encode("setClaimConditions",[l,Q(d[0]),r]))}else if(t.isLegacyMultiPhaseDrop(t.contractWrapper))c.push(f.encode("setClaimConditions",[l,d.map(Q),r]));else if(t.isNewSinglePhaseDrop(t.contractWrapper))c.push(f.encode("setClaimConditions",[l,H(d[0]),r]));else if(t.isNewMultiphaseDrop(t.contractWrapper))c.push(f.encode("setClaimConditions",[l,d.map(H),r]));else throw new Error("Contract does not support claim conditions")}),k("multicall",t.contractWrapper))return W.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[c]});throw new Error("Contract does not support multicall")}})()));p(this,"update",h(async(t,a,r)=>{const e=await this.getAll(t),n=await Nt(a,r,e);return await this.set.prepare(t,n)}));this.storage=r,this.contractWrapper=t,this.metadata=a}async getActive(t,a){const r=await this.get(t),e=await this.metadata.get();return await U(r,0,this.contractWrapper.getProvider(),e.merkle,this.storage,(a==null?void 0:a.withAllowList)||!1)}async get(t,a){if(this.isLegacySinglePhaseDrop(this.contractWrapper)){const r=await this.contractWrapper.read("claimCondition",[t]);return z(r)}else if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){const r=a!==void 0?a:await this.contractWrapper.read("getActiveClaimConditionId",[t]),e=await this.contractWrapper.read("getClaimConditionById",[t,r]);return z(e)}else if(this.isNewSinglePhaseDrop(this.contractWrapper)){const r=await this.contractWrapper.read("claimCondition",[t]);return V(r)}else if(this.isNewMultiphaseDrop(this.contractWrapper)){const r=a!==void 0?a:await this.contractWrapper.read("getActiveClaimConditionId",[t]),e=await this.contractWrapper.read("getClaimConditionById",[t,r]);return V(e)}else throw new Error("Contract does not support claim conditions")}async getAll(t,a){if(this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)){const r=await this.contractWrapper.read("claimCondition",[t]),e=r.currentStartId.toNumber(),n=r.count.toNumber(),s=[];for(let o=e;o<e+n;o++)s.push(await this.get(t,o));const c=await this.metadata.get();return Promise.all(s.map(o=>U(o,0,this.contractWrapper.getProvider(),c.merkle,this.storage,(a==null?void 0:a.withAllowList)||!1)))}else return[await this.getActive(t,a)]}async canClaim(t,a,r){return r&&(r=await g(r)),(await this.getClaimIneligibilityReasons(t,a,r)).length===0}async getClaimIneligibilityReasons(t,a,r){const e=[];let n,s;if(r===void 0)try{r=await this.contractWrapper.getSignerAddress()}catch(i){console.warn("failed to get signer address",i)}if(!r)return[b.NoWallet];const c=await g(r);try{s=await this.getActive(t)}catch(i){return F(i,"!CONDITION")||F(i,"no active mint condition")?(e.push(b.NoClaimConditionSet),e):(e.push(b.Unknown),e)}if(s.availableSupply!=="unlimited"&&y.from(s.availableSupply).lt(a))return e.push(b.NotEnoughSupply),e;const l=_(s.merkleRootHash).length>0;let d=null;if(l){if(d=await this.getClaimerProofs(t,c),!d&&(this.isLegacySinglePhaseDrop(this.contractWrapper)||this.isLegacyMultiPhaseDrop(this.contractWrapper)))return e.push(b.AddressNotAllowed),e;if(d)try{const i=await this.prepareClaim(t,a,!1,c);let w;if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){if(n=await this.contractWrapper.read("getActiveClaimConditionId",[t]),[w]=await this.contractWrapper.read("verifyClaimMerkleProof",[n,c,t,a,i.proofs,i.maxClaimable]),!w)return e.push(b.AddressNotAllowed),e}else if(this.isLegacySinglePhaseDrop(this.contractWrapper)){if([w]=await this.contractWrapper.read("verifyClaimMerkleProof",[t,c,a,{proof:i.proofs,maxQuantityInAllowlist:i.maxClaimable}]),!w)return e.push(b.AddressNotAllowed),e}else this.isNewSinglePhaseDrop(this.contractWrapper)?await this.contractWrapper.read("verifyClaim",[t,c,a,i.currencyAddress,i.price,{proof:i.proofs,quantityLimitPerWallet:i.maxClaimable,currency:i.currencyAddressInProof,pricePerToken:i.priceInProof}]):this.isNewMultiphaseDrop(this.contractWrapper)&&(n=await this.contractWrapper.read("getActiveClaimConditionId",[t]),await this.contractWrapper.read("verifyClaim",[n,c,t,a,i.currencyAddress,i.price,{proof:i.proofs,quantityLimitPerWallet:i.maxClaimable,currency:i.currencyAddressInProof,pricePerToken:i.priceInProof}]))}catch(i){switch(console.warn("Merkle proof verification failed:","reason"in i?i.reason:i),i.reason){case"!Qty":e.push(b.OverMaxClaimablePerWallet);break;case"!PriceOrCurrency":e.push(b.WrongPriceOrCurrency);break;case"!MaxSupply":e.push(b.NotEnoughSupply);break;case"cant claim yet":e.push(b.ClaimPhaseNotStarted);break;default:{e.push(b.AddressNotAllowed);break}}return e}}if(this.isNewSinglePhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)){let i=y.from(0),w=$(s.maxClaimablePerWallet,0);try{i=await this.getSupplyClaimedByWallet(t,c)}catch{}if(d&&(w=$(d.maxClaimable,0)),w.gt(0)&&w.lt(i.add(a)))return e.push(b.OverMaxClaimablePerWallet),e;if((!l||l&&!d)&&(w.lte(i)||w.eq(0)))return e.push(b.AddressNotAllowed),e}let[f,m]=[y.from(0),y.from(0)];this.isLegacyMultiPhaseDrop(this.contractWrapper)?(n=await this.contractWrapper.read("getActiveClaimConditionId",[t]),[f,m]=await this.contractWrapper.read("getClaimTimestamp",[t,n,c])):this.isLegacySinglePhaseDrop(this.contractWrapper)&&([f,m]=await this.contractWrapper.read("getClaimTimestamp",[t,c]));const u=y.from(Date.now()).div(1e3);if(f.gt(0)&&u.lt(m))return m.eq(R)?e.push(b.AlreadyClaimed):e.push(b.WaitBeforeNextClaimTransaction),e;if(s.price.gt(0)&&ht()){const i=s.price.mul(a),w=this.contractWrapper.getProvider();if(dt(s.currencyAddress))(await w.getBalance(c)).lt(i)&&e.push(b.NotEnoughTokens);else{const A=(await ut(()=>import("./index-0LU5wYHi.js").then(at=>at.dw),__vite__mapDeps([0,1]))).default;(await new mt(w,s.currencyAddress,A,{},this.storage).read("balanceOf",[c])).lt(i)&&e.push(b.NotEnoughTokens)}}return e}async getClaimerProofs(t,a,r){const n=(await this.get(t,r)).merkleRoot;if(_(n).length>0){const c=await this.metadata.get(),o=await g(a);return await vt(o,n.toString(),c.merkle,this.contractWrapper.getProvider(),this.storage,this.getSnapshotFormatVersion())}else return null}async getSupplyClaimedByWallet(t,a){const r=await g(a);if(this.isNewSinglePhaseDrop(this.contractWrapper))return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,r]);if(this.isNewMultiphaseDrop(this.contractWrapper)){const e=await this.contractWrapper.read("getActiveClaimConditionId",[t]);return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,e,r])}throw new Error("This contract does not support the getSupplyClaimedByWallet function")}async prepareClaim(t,a,r,e){const n=await g(e||await this.contractWrapper.getSignerAddress());return Rt(n,a,await this.getActive(t),async()=>(await this.metadata.get()).merkle,0,this.contractWrapper,this.storage,r,this.getSnapshotFormatVersion())}async getClaimArguments(t,a,r,e){const n=await g(a);return this.isLegacyMultiPhaseDrop(this.contractWrapper)?[n,t,r,e.currencyAddress,e.price,e.proofs,e.maxClaimable]:this.isLegacySinglePhaseDrop(this.contractWrapper)?[n,t,r,e.currencyAddress,e.price,{proof:e.proofs,maxQuantityInAllowlist:e.maxClaimable},B("")]:[n,t,r,e.currencyAddress,e.price,{proof:e.proofs,quantityLimitPerWallet:e.maxClaimable,pricePerToken:e.priceInProof,currency:e.currencyAddressInProof},B("")]}async getClaimTransaction(t,a,r,e){if(e!=null&&e.pricePerToken)throw new Error("Price per token should be set via claim conditions by calling `contract.erc1155.claimConditions.set()`");const n=await this.prepareClaim(a,r,(e==null?void 0:e.checkERC20Allowance)||!0);return W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:await this.getClaimArguments(a,t,r,n),overrides:n.overrides})}isNewSinglePhaseDrop(t){return C(t,"ERC1155ClaimConditionsV2")}isNewMultiphaseDrop(t){return C(t,"ERC1155ClaimPhasesV2")}isLegacySinglePhaseDrop(t){return C(t,"ERC1155ClaimConditionsV1")}isLegacyMultiPhaseDrop(t){return C(t,"ERC1155ClaimPhasesV1")}getSnapshotFormatVersion(){return this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isLegacySinglePhaseDrop(this.contractWrapper)?Z.V1:Z.V2}}const j=N.object({address:ft,quantity:wt.default(1)}),Lt=N.union([N.array(N.string()).transform(async E=>await Promise.all(E.map(t=>j.parseAsync({address:t})))),N.array(j)]);class xt{constructor(t){p(this,"featureName",x.name);p(this,"to",h(async(t,a,r,e)=>await this.getClaimTransaction(t,a,r,e)));this.contractWrapper=t}async getClaimTransaction(t,a,r,e){let n={};return e&&e.pricePerToken&&(n=await Et(this.contractWrapper,e.pricePerToken,r,e.currencyAddress,e.checkERC20Allowance)),W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[await g(t),a,r],overrides:n})}}class Bt{constructor(t,a){p(this,"featureName",J.name);p(this,"to",h(async(t,a,r,e)=>await this.conditions.getClaimTransaction(t,a,r,e)));this.contractWrapper=t,this.storage=a;const r=new Ct(this.contractWrapper,ct,this.storage);this.conditions=new kt(t,r,this.storage)}}class Ft{constructor(t,a,r){p(this,"featureName",X.name);p(this,"mint",h(async t=>{const a=t.payload,r=t.signature,[e,n]=await Promise.all([this.mapPayloadToContractStruct(a),this.contractWrapper.getCallOverrides()]);return await Dt(this.contractWrapper,e.pricePerToken.mul(e.quantity),a.currencyAddress,n),W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[e,r],overrides:n,parse:s=>{const c=this.contractWrapper.parseLogs("TokensMintedWithSignature",s.logs);if(c.length===0)throw new Error("No MintWithSignature event found");return{id:c[0].args.tokenIdMinted,receipt:s}}})}));p(this,"mintBatch",h(async t=>{const a=await Promise.all(t.map(s=>this.mapPayloadToContractStruct(s.payload))),r=t.map((s,c)=>{const o=a[c],l=s.signature,d=s.payload.price;if(y.from(d).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:o,signature:l}}),e=new S(this.contractWrapper),n=r.map(s=>e.encode("mintWithSignature",[s.message,s.signature]));if(k("multicall",this.contractWrapper))return W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[n],parse:s=>{const c=this.contractWrapper.parseLogs("TokensMintedWithSignature",s.logs);if(c.length===0)throw new Error("No MintWithSignature event found");return c.map(o=>({id:o.args.tokenIdMinted,receipt:s}))}});throw new Error("Multicall not supported on this contract!")}));this.contractWrapper=t,this.storage=a,this.roles=r}async verify(t){const a=t.payload,r=t.signature,e=await this.mapPayloadToContractStruct(a);return(await this.contractWrapper.read("verify",[e,r]))[0]}async generate(t){const a={...t,tokenId:R};return this.generateFromTokenId(a)}async generateFromTokenId(t){return(await this.generateBatchFromTokenIds([t]))[0]}async generateBatch(t){const a=t.map(r=>({...r,tokenId:R}));return this.generateBatchFromTokenIds(a)}async generateBatchFromTokenIds(t){var m;const a=this.contractWrapper.getSigner();pt(a),await((m=this.roles)==null?void 0:m.verify(["minter"],await a.getAddress()));const r=await Promise.all(t.map(u=>At.parseAsync(u))),e=r.map(u=>u.metadata),[n,s,c]=await Promise.all([L(e,this.storage),this.contractWrapper.getChainID(),tt(this.contractWrapper.address,this.contractWrapper.getProvider())]),o=await Promise.all(r.map((u,i)=>Mt.parseAsync({...u,uri:n[i]}))),l=await Promise.all(o.map(u=>this.mapPayloadToContractStruct(u))),d=(c==null?void 0:c.type)==="TokenERC1155";return(await Promise.all(l.map(u=>this.contractWrapper.signTypedData(a,{name:d?"TokenERC1155":"SignatureMintERC1155",version:"1",chainId:s,verifyingContract:this.contractWrapper.address},{MintRequest:St},u)))).map((u,i)=>({payload:o[i],signature:u.toString()}))}async mapPayloadToContractStruct(t){const a=await lt(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,tokenId:t.tokenId,uri:t.uri,quantity:t.quantity,pricePerToken:a,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}}class _t{constructor(t){p(this,"featureName",P.name);p(this,"tokens",h(async(t,a)=>{const r=await this.contractWrapper.getSignerAddress();return this.from.prepare(r,t,a)}));p(this,"from",h(async(t,a,r)=>W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await g(t),a,r]})));p(this,"batch",h(async(t,a)=>{const r=await this.contractWrapper.getSignerAddress();return this.batchFrom.prepare(r,t,a)}));p(this,"batchFrom",h(async(t,a,r)=>W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnBatch",args:[await g(t),a,r]})));this.contractWrapper=t}}class Ot{constructor(t,a){p(this,"featureName",v.name);this.erc1155=t,this.contractWrapper=a}async all(t){const a=y.from((t==null?void 0:t.start)||0).toNumber(),r=y.from((t==null?void 0:t.count)||O).toNumber(),e=Math.min((await this.totalCount()).toNumber(),a+r);return await Promise.all([...Array(e-a).keys()].map(n=>this.erc1155.get((a+n).toString())))}async totalCount(){return await this.contractWrapper.read("nextTokenIdToMint",[])}async totalCirculatingSupply(t){return await this.contractWrapper.read("totalSupply",[t])}async owned(t,a){const[r,e]=await Promise.all([g(t||await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("nextTokenIdToMint",[])]);let s=(await this.contractWrapper.read("balanceOfBatch",[Array(e.toNumber()).fill(r),Array.from(Array(e.toNumber()).keys())])).map((o,l)=>({tokenId:l,balance:o})).filter(o=>o.balance.gt(0));if(a){const o=(a==null?void 0:a.start)||0,l=(a==null?void 0:a.count)||O;s=s.slice(o,o+l)}return(await Promise.all(s.map(o=>this.erc1155.get(o.tokenId.toString())))).map((o,l)=>({...o,owner:r,quantityOwned:s[l].balance.toString()}))}}class Ut{constructor(t,a,r){p(this,"featureName",K.name);p(this,"lazyMint",h(async(t,a)=>{const r=await this.erc1155.nextTokenIdToMint(),e=await L(t,this.storage,r.toNumber(),a),n=e[0].substring(0,e[0].lastIndexOf("/"));for(let o=0;o<e.length;o++){const l=e[o].substring(0,e[o].lastIndexOf("/"));if(n!==l)throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${n}' but got '${l}'`)}const s=o=>{const l=this.contractWrapper.parseLogs("TokensLazyMinted",o==null?void 0:o.logs),d=l[0].args.startTokenId,f=l[0].args.endTokenId,m=[];for(let u=d;u.lte(f);u=u.add(1))m.push({id:u,receipt:o,data:()=>this.erc1155.getTokenMetadata(u)});return m},c=await tt(this.contractWrapper.address,this.contractWrapper.getProvider());return this.isLegacyEditionDropContract(this.contractWrapper,c)?W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,`${n.endsWith("/")?n:`${n}/`}`],parse:s}):W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,`${n.endsWith("/")?n:`${n}/`}`,B("")],parse:s})}));p(this,"updateMetadata",h(async(t,a,r)=>{const e=await this.contractWrapper.read("getBaseURICount",[]);if(e.eq(0))throw new Error("No base URI set. Please set a base URI before updating metadata");const n=y.from(t);let s=y.from(0),c=y.from(0),o=0;for(let i=0;i<e.toNumber()&&(o=i,c=await this.contractWrapper.read("getBatchIdAtIndex",[o]),!c.gt(n));i++)s=c;const l=Array.from({length:c.sub(s).toNumber()},(i,w)=>w+s.toNumber()),d=await Promise.all(l.map(i=>this.erc1155.getTokenMetadata(i))),f=[];for(let i=0;i<d.length;i++){const{id:w,uri:A,...M}=d[i];y.from(n).eq(y.from(w))?f.push(a):f.push(M)}const m=await L(f,this.storage,s.toNumber(),r),u=m[0].substring(0,m[0].lastIndexOf("/"));return W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateBatchBaseURI",args:[o,`${u.endsWith("/")?u:`${u}/`}`]})}));this.erc1155=t,this.contractWrapper=a,this.storage=r,this.revealer=this.detectErc1155Revealable()}detectErc1155Revealable(){if(C(this.contractWrapper,"ERC1155Revealable"))return new Tt(this.contractWrapper,this.storage,q.name,()=>this.erc1155.nextTokenIdToMint())}isLegacyEditionDropContract(t,a){return a&&a.type==="DropERC1155"&&a.version<3||!1}}class zt{constructor(t,a,r){p(this,"featureName",Y.name);p(this,"to",h(async(t,a)=>{const r=a.map(l=>l.metadata),e=a.map(l=>l.supply),n=await L(r,this.storage),s=await g(t),c=new S(this.contractWrapper),o=await Promise.all(n.map(async(l,d)=>c.encode("mintTo",[s,R,l,e[d]])));return W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[o],parse:l=>{const d=this.contractWrapper.parseLogs("TokensMinted",l.logs);if(d.length===0||d.length<r.length)throw new Error("TokenMinted event not found, minting failed");return d.map(f=>{const m=f.args.tokenIdMinted;return{id:m,receipt:l,data:()=>this.erc1155.get(m)}})}})}));this.erc1155=t,this.contractWrapper=a,this.storage=r}}class Vt{constructor(t,a,r){p(this,"featureName",I.name);p(this,"to",h(async(t,a)=>{const r=await this.getMintTransaction(t,a);return r.setParse(e=>{const n=this.contractWrapper.parseLogs("TransferSingle",e==null?void 0:e.logs);if(n.length===0)throw new Error("TransferSingleEvent event not found");const s=n[0].args.id;return{id:s,receipt:e,data:()=>this.erc1155.get(s.toString())}}),r}));p(this,"additionalSupplyTo",h(async(t,a,r)=>{const e=await this.erc1155.getTokenMetadata(a);return W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[await g(t),a,e.uri,r],parse:n=>({id:y.from(a),receipt:n,data:()=>this.erc1155.get(a)})})}));this.erc1155=t,this.contractWrapper=a,this.storage=r,this.batch=this.detectErc1155BatchMintable()}async getMintTransaction(t,a){const r=await bt(a.metadata,this.storage);return W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[await g(t),R,r,a.supply]})}detectErc1155BatchMintable(){if(C(this.contractWrapper,"ERC1155BatchMintable"))return new zt(this.erc1155,this.contractWrapper,this.storage)}}class Xt{constructor(t,a,r){p(this,"featureName",nt.name);p(this,"transfer",h((()=>{var t=this;return async function(a,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[0];const s=await t.contractWrapper.getSignerAddress();return W.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeTransferFrom",args:[s,await g(a),r,e,n]})}})()));p(this,"transferBatch",h((()=>{var t=this;return async function(a,r,e,n){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0];const c=n?await g(n):await t.contractWrapper.getSignerAddress();return W.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeBatchTransferFrom",args:[c,await g(a),r,e,s]})}})()));p(this,"transferFrom",h((()=>{var t=this;return async function(a,r,e,n){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0];return W.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeTransferFrom",args:[await g(a),await g(r),e,n,s]})}})()));p(this,"setApprovalForAll",h(async(t,a)=>W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[t,a]})));p(this,"airdrop",h((()=>{var t=this;return async function(a,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[0];const s=e?await g(e):await t.contractWrapper.getSignerAddress(),c=await t.balanceOf(s,a),o=await Lt.parseAsync(r),l=o.reduce((m,u)=>y.from(m).add(y.from((u==null?void 0:u.quantity)||1)),y.from(0));if(c.lt(y.from(l)))throw new Error(`The caller owns ${c.toString()} NFTs, but wants to airdrop ${l.toString()} NFTs.`);const d=new S(t.contractWrapper),f=o.map(m=>{let{address:u,quantity:i}=m;return d.encode("safeTransferFrom",[s,u,a,i,n])});return W.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[f]})}})()));p(this,"mint",h(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)));p(this,"mintTo",h(async(t,a)=>T(this.mintable,I).to.prepare(t,a)));p(this,"mintAdditionalSupply",h(async(t,a)=>T(this.mintable,I).additionalSupplyTo.prepare(await this.contractWrapper.getSignerAddress(),t,a)));p(this,"mintAdditionalSupplyTo",h(async(t,a,r)=>T(this.mintable,I).additionalSupplyTo.prepare(t,a,r)));p(this,"mintBatch",h(async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t)));p(this,"mintBatchTo",h(async(t,a)=>{var r;return T((r=this.mintable)==null?void 0:r.batch,Y).to.prepare(t,a)}));p(this,"burn",h(async(t,a)=>T(this.burnable,P).tokens.prepare(t,a)));p(this,"burnFrom",h(async(t,a,r)=>T(this.burnable,P).from.prepare(t,a,r)));p(this,"burnBatch",h(async(t,a)=>T(this.burnable,P).batch.prepare(t,a)));p(this,"burnBatchFrom",h(async(t,a,r)=>T(this.burnable,P).batchFrom.prepare(t,a,r)));p(this,"lazyMint",h(async(t,a)=>T(this.lazyMintable,K).lazyMint.prepare(t,a)));p(this,"updateMetadata",h(async(t,a)=>{if(this.lazyMintable)return this.lazyMintable.updateMetadata.prepare(t,a);if(C(this.contractWrapper,"ERC1155UpdatableMetadata")){const r=await this.storage.upload(a);return W.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setTokenURI",args:[t,r]})}else throw new D(it)}));p(this,"claim",h(async(t,a,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,a,r)));p(this,"claimTo",h(async(t,a,r,e)=>{const n=this.claimWithConditions,s=this.claimCustom;if(n)return n.to.prepare(t,a,r,e);if(s)return s.to.prepare(t,a,r,e);throw new D(x)}));this.contractWrapper=t,this.storage=a,this.query=this.detectErc1155Enumerable(),this.mintable=this.detectErc1155Mintable(),this.burnable=this.detectErc1155Burnable(),this.lazyMintable=this.detectErc1155LazyMintable(),this.signatureMintable=this.detectErc1155SignatureMintable(),this.claimCustom=this.detectErc1155Claimable(),this.claimWithConditions=this.detectErc1155ClaimableWithConditions(),this._chainId=r}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const[a,r]=await Promise.all([this.contractWrapper.read("totalSupply",[t]).catch(()=>y.from(0)),this.getTokenMetadata(t).catch(()=>({id:t.toString(),uri:"",...Wt}))]);return{owner:G,metadata:r,type:"ERC1155",supply:a.toString()}}async totalSupply(t){if(C(this.contractWrapper,"ERC1155Supply"))return await this.contractWrapper.read("totalSupply",[t]);throw new D(st)}async balanceOf(t,a){return await this.contractWrapper.read("balanceOf",[await g(t),a])}async balance(t){return await this.balanceOf(await this.contractWrapper.getSignerAddress(),t)}async isApproved(t,a){return await this.contractWrapper.read("isApprovedForAll",[await g(t),await g(a)])}async nextTokenIdToMint(){if(k("nextTokenIdToMint",this.contractWrapper))return await this.contractWrapper.read("nextTokenIdToMint",[]);throw new Error("Contract requires the `nextTokenIdToMint` function available to determine the next token ID to mint")}async getAll(t){return T(this.query,v).all(t)}async totalCount(){return T(this.query,v).totalCount()}async totalCirculatingSupply(t){return T(this.query,v).totalCirculatingSupply(t)}async getOwned(t,a){return t&&(t=await g(t)),T(this.query,v).owned(t,a)}async getMintTransaction(t,a){return T(this.mintable,I).getMintTransaction(t,a)}async getClaimTransaction(t,a,r,e){const n=this.claimWithConditions,s=this.claimCustom;if(n)return n.conditions.getClaimTransaction(t,a,r,e);if(s)return s.getClaimTransaction(t,a,r,e);throw new D(x)}get claimConditions(){return T(this.claimWithConditions,J).conditions}get signature(){return T(this.signatureMintable,X)}get revealer(){var t;return T((t=this.lazyMintable)==null?void 0:t.revealer,q)}async getTokenMetadata(t){const a=await this.contractWrapper.read("uri",[t]);if(!a)throw new ot;return yt(t,a,this.storage)}detectErc1155Enumerable(){if(C(this.contractWrapper,"ERC1155Enumerable"))return new Ot(this,this.contractWrapper)}detectErc1155Mintable(){if(C(this.contractWrapper,"ERC1155Mintable"))return new Vt(this,this.contractWrapper,this.storage)}detectErc1155Burnable(){if(C(this.contractWrapper,"ERC1155Burnable"))return new _t(this.contractWrapper)}detectErc1155LazyMintable(){if(C(this.contractWrapper,"ERC1155LazyMintableV1")||C(this.contractWrapper,"ERC1155LazyMintableV2"))return new Ut(this,this.contractWrapper,this.storage)}detectErc1155SignatureMintable(){if(C(this.contractWrapper,"ERC1155SignatureMintable"))return new Ft(this.contractWrapper,this.storage)}detectErc1155Claimable(){if(C(this.contractWrapper,"ERC1155ClaimCustom"))return new xt(this.contractWrapper)}detectErc1155ClaimableWithConditions(){if(C(this.contractWrapper,"ERC1155ClaimConditionsV1")||C(this.contractWrapper,"ERC1155ClaimConditionsV2")||C(this.contractWrapper,"ERC1155ClaimPhasesV1")||C(this.contractWrapper,"ERC1155ClaimPhasesV2"))return new Bt(this.contractWrapper,this.storage)}}export{kt as D,Ft as E,Xt as a};