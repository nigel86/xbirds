function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bg5E_DId.js","assets/index-Oc4W_B_p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as l,m as w}from"./index-Bg5E_DId.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-Bg5E_DId.js").then(d=>d.dy),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),i=await e.getSignerAddress(),o=e.address;return(await s.read("allowance",[i,o])).gte(t)}export{g as h};