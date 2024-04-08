function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Ci2lCYLh.js","assets/index-BJqcV4xN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as l,m as w}from"./index-Ci2lCYLh.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-Ci2lCYLh.js").then(d=>d.dy),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),i=await e.getSignerAddress(),o=e.address;return(await s.read("allowance",[i,o])).gte(t)}export{g as h};
