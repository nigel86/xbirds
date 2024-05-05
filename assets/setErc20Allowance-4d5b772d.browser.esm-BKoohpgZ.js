function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CCMN8V31.js","assets/index-BtagMluQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{x as _,i as f,m as x,a3 as n,aV as l,aW as N,aX as c}from"./index-CCMN8V31.js";const r=n.object({}).catchall(n.union([c,n.unknown()])),u=n.union([n.array(r),r]).optional().nullable(),h=n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}),p=h.extend({external_url:l.nullable().optional(),background_color:N.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])),O=n.union([p,n.string()]),S=p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()});async function F(a,t,e,i){if(_(e))i.value=t;else{const g=(await f(()=>import("./index-CCMN8V31.js").then(w=>w.dy),__vite__mapDeps([0,1]))).default,m=a.getSigner(),b=a.getProvider(),o=new x(m||b,e,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await o.read("allowance",[d,s])).lt(t)&&await o.sendTransaction("approve",[s,t]),i}}export{h as B,p as C,O as N,S as a,F as s};
