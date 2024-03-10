import{bx as l,by as _,a1 as n,bz as c,aF as f,e as x,a4 as N}from"./index-4DoMYjDR.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),h=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}),p=h.extend({external_url:l.nullable().optional(),background_color:_.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),I=n.union([p,n.string()]),O=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function S(a,t,e,o){if(f(e))o.value=t;else{const b=(await x(()=>import("./index-4DoMYjDR.js").then(w=>w.fq),__vite__mapDeps([0,1]))).default,g=a.getSigner(),m=a.getProvider(),i=new N(g||m,e,b,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{h as B,p as C,I as N,O as a,S as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-4DoMYjDR.js","assets/index-rBWc323G.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
