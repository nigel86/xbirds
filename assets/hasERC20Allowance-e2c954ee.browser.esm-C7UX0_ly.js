function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D_nK-qMc.js","assets/index-BK2DZNNS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{f as l,k as w}from"./index-D_nK-qMc.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-D_nK-qMc.js").then(i=>i.dw),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};
