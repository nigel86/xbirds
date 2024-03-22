function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D01ZbWDS.js","assets/index-BMbbzlRR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{f as l,k as w}from"./index-D01ZbWDS.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-D01ZbWDS.js").then(i=>i.dw),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};
