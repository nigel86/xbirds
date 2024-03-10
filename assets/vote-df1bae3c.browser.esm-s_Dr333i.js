var W=Object.defineProperty;var v=(o,t,a)=>t in o?W(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;var i=(o,t,a)=>(v(o,typeof t!="symbol"?t+"":t,a),a);import{d2 as w,d3 as f,eL as A,d5 as y,B as b,di as u,G as g,ap as C,e as P,av as k,dS as V,dV as x,d7 as d,d8 as p}from"./index-4DoMYjDR.js";import{C as E,a as _,G as T,b as S}from"./contract-appuri-feedfaed.browser.esm-HRqEbkK6.js";import{C as D}from"./contract-interceptor-d7b164a7.browser.esm-GcKghK7J.js";let l=function(o){return o[o.Against=0]="Against",o[o.For=1]="For",o[o.Abstain=2]="Abstain",o}({});class R{constructor(t,a,r){i(this,"propose",d(async(t,a)=>{a||(a=[{toAddress:this.contractWrapper.address,nativeTokenValue:0,transactionData:"0x"}]);const r=a.map(s=>s.toAddress),n=a.map(s=>s.nativeTokenValue),c=a.map(s=>s.transactionData);return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:"propose",args:[r,n,c,t],parse:s=>({id:this.contractWrapper.parseLogs("ProposalCreated",s==null?void 0:s.logs)[0].args.proposalId,receipt:s})})}));i(this,"vote",d((()=>{var t=this;return async function(a,r){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";return await t.ensureExists(a),p.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[a,r,n]})}})()));i(this,"execute",d(async t=>{await this.ensureExists(t);const a=await this.get(t),r=a.executions.map(e=>e.toAddress),n=a.executions.map(e=>e.nativeTokenValue),c=a.executions.map(e=>e.transactionData),s=g(a.description);return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:"execute",args:[r,n,c,s]})}));let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,e=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,a,c,n,r);this._chainId=s,this.abi=f.parse(c||[]),this.contractWrapper=e,this.storage=r,this.metadata=new E(this.contractWrapper,A,this.storage),this.app=new _(this.contractWrapper,this.metadata,this.storage),this.encoder=new y(this.contractWrapper),this.estimator=new T(this.contractWrapper),this.events=new S(this.contractWrapper),this.interceptor=new D(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const r=(await this.getAll()).filter(n=>n.proposalId.eq(b.from(t)));if(r.length===0)throw new Error("proposal not found");return r[0]}async getAll(){const t=await this.contractWrapper.read("getAllProposals",[])??[];return(await Promise.all(t.map(r=>Promise.all([this.contractWrapper.read("state",[r.proposalId]),this.getProposalVotes(r.proposalId)])))).map((r,n)=>{let[c,s]=r;const e=t[n];return{proposalId:e.proposalId,proposer:e.proposer,description:e.description,startBlock:e.startBlock,endBlock:e.endBlock,state:c,votes:s,executions:e[3].map((m,h)=>({toAddress:e.targets[h],nativeTokenValue:m,transactionData:e.calldatas[h]}))}})}async getProposalVotes(t){const a=await this.contractWrapper.read("proposalVotes",[t]);return[{type:l.Against,label:"Against",count:a.againstVotes},{type:l.For,label:"For",count:a.forVotes},{type:l.Abstain,label:"Abstain",count:a.abstainVotes}]}async hasVoted(t,a){return a||(a=await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("hasVoted",[t,await u(a)])}async canExecute(t){await this.ensureExists(t);const a=await this.get(t),r=a.executions.map(e=>e.toAddress),n=a.executions.map(e=>e.nativeTokenValue),c=a.executions.map(e=>e.transactionData),s=g(a.description);try{return await this.contractWrapper.callStatic().execute(r,n,c,s),!0}catch{return!1}}async balance(){const t=await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:C(t,18)}}async balanceOfToken(t){const a=(await P(()=>import("./index-4DoMYjDR.js").then(n=>n.fq),__vite__mapDeps([0,1]))).default,r=new k(await u(t),a,this.contractWrapper.getProvider());return await V(this.contractWrapper.getProvider(),t,await r.balanceOf(this.contractWrapper.address))}async ensureExists(t){try{await this.contractWrapper.read("state",[t])}catch{throw Error(`Proposal ${t} not found`)}}async settings(){const[t,a,r,n,c]=await Promise.all([this.contractWrapper.read("votingDelay",[]),this.contractWrapper.read("votingPeriod",[]),this.contractWrapper.read("token",[]),this.contractWrapper.read("quorumNumerator",[]),this.contractWrapper.read("proposalThreshold",[])]),s=await x(this.contractWrapper.getProvider(),r);return{votingDelay:t.toString(),votingPeriod:a.toString(),votingTokenAddress:r,votingTokenMetadata:s,votingQuorumFraction:n.toString(),proposalTokenThreshold:c.toString()}}async prepare(t,a,r){return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}export{R as Vote};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-4DoMYjDR.js","assets/index-rBWc323G.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
