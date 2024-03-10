var b=Object.defineProperty;var F=(i,e,t)=>e in i?b(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var m=(i,e,t)=>(F(i,typeof e!="symbol"?e+"":e,t),t);import{az as N,s as l,m as p,p as w,l as M,y as d,T as R,aA as S}from"./index-0LU5wYHi.js";import{h as k}from"./contract-appuri-6fe9aa25.browser.esm-BPpG4wES.js";class x{constructor(e,t){m(this,"featureName",N.name);m(this,"setAll",w(async(e,t)=>{var A,y;const r=t||await this.contractWrapper.getSignerAddress(),o=new M(this.contractWrapper),a=Object.keys(e);l(a.length),l(a.every(n=>this.roles.includes(n)));const h=await this.getAll(),g=[],v=a.sort(n=>n==="admin"?1:-1);for(let n=0;n<v.length;n++){const u=v[n],[W,C]=await Promise.all([Promise.all(((A=e[u])==null?void 0:A.map(s=>d(s)))||[]),Promise.all(((y=h[u])==null?void 0:y.map(s=>d(s)))||[])]),P=W.filter(s=>!C.includes(s)),c=C.filter(s=>!W.includes(s));if(c.length>1){const s=c.indexOf(r);s>-1&&(c.splice(s,1),c.push(r))}P.length&&P.forEach(s=>{g.push(o.encode("grantRole",[p(u),s]))}),c.length&&(await Promise.all(c.map(f=>this.getRevokeRoleFunctionName(f)))).forEach((f,E)=>g.push(o.encode(f,[p(u),c[E]])))}return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[g]})}));m(this,"grant",w(async(e,t)=>{l(this.roles.includes(e));const r=await d(t);return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:"grantRole",args:[p(e),r]})}));m(this,"revoke",w(async(e,t)=>{l(this.roles.includes(e));const r=await d(t),o=await this.getRevokeRoleFunctionName(r);return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:o,args:[p(e),r]})}));this.contractWrapper=e,this.roles=t}async getAll(){l(this.roles.length);const e={},t=Object.entries(this.roles);return(await Promise.all(t.map(r=>{let[,o]=r;return this.get(o)}))).forEach((r,o)=>e[t[o][1]]=r),e}async get(e){l(this.roles.includes(e));const t=this.contractWrapper;if(k("getRoleMemberCount",t)&&k("getRoleMember",t)){const r=p(e),o=(await t.read("getRoleMemberCount",[r])).toNumber();return await Promise.all(Array.from(Array(o).keys()).map(a=>t.read("getRoleMember",[r,a])))}throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.")}async verify(e,t){await Promise.all(e.map(async r=>{const[o,a]=await Promise.all([this.get(r),d(t)]);if(!o.map(h=>h.toLowerCase()).includes(a.toLowerCase()))throw new S(a,r)}))}async getRevokeRoleFunctionName(e){const[t,r]=await Promise.all([d(e),this.contractWrapper.getSignerAddress()]);return r.toLowerCase()===t.toLowerCase()?"renounceRole":"revokeRole"}}export{x as C};