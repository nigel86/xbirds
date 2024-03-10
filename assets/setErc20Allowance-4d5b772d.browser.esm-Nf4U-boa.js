import{t as _,f,k as N,a1 as n,aV as l,aW as h,aX as c}from"./index-1xJA19-R.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),x=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}),p=x.extend({external_url:l.nullable().optional(),background_color:h.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),O=n.union([p,n.string()]),S=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function k(a,t,e,o){if(_(e))o.value=t;else{const g=(await f(()=>import("./index-1xJA19-R.js").then(w=>w.dw),__vite__mapDeps([0,1]))).default,b=a.getSigner(),m=a.getProvider(),i=new N(b||m,e,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{x as B,p as C,O as N,S as a,k as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-1xJA19-R.js","assets/index-rBWc323G.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
