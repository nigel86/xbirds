import{v as _,f,l as N,a2 as n,aU as l,aV as h,aW as c}from"./index-aMUXh-4r.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),x=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}),p=x.extend({external_url:l.nullable().optional(),background_color:h.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),O=n.union([p,n.string()]),S=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function F(a,t,e,o){if(_(e))o.value=t;else{const g=(await f(()=>import("./index-aMUXh-4r.js").then(w=>w.dp),__vite__mapDeps([0,1]))).default,b=a.getSigner(),m=a.getProvider(),i=new N(b||m,e,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{x as B,p as C,O as N,S as a,F as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-aMUXh-4r.js","assets/index-AQUmr87M.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
