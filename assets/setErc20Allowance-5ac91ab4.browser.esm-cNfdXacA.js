import{G as w,m as f,q as N,a8 as n,aZ as l,a_ as h,a$ as c}from"./index-JUjgtMm3.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),x=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}),p=x.extend({external_url:l.nullable().optional(),background_color:h.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),O=n.union([p,n.string()]),S=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function F(a,t,e,o){if(w(e))o.value=t;else{const g=(await f(()=>import("./index-JUjgtMm3.js").then(_=>_.dl),__vite__mapDeps([0,1]))).default,m=a.getSigner(),b=a.getProvider(),i=new N(m||b,e,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{x as B,p as C,O as N,S as a,F as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-JUjgtMm3.js","assets/index-mr3y8Bm4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
