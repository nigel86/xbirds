import{dI as _,e as f,d2 as N,a1 as n,dM as l,dN as I,dO as c}from"./index-4DoMYjDR.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),O=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}),p=O.extend({external_url:l.nullable().optional(),background_color:I.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),C=n.union([p,n.string()]),S=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function F(a,t,e,o){if(_(e))o.value=t;else{const g=(await f(()=>import("./index-4DoMYjDR.js").then(w=>w.fq),__vite__mapDeps([0,1]))).default,d=a.getSigner(),b=a.getProvider(),i=new N(d||b,e,g,a.options,a.storage),m=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[m,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{O as B,p as C,C as N,S as a,F as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-4DoMYjDR.js","assets/index-rBWc323G.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
