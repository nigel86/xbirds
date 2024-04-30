function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B1ohhVxs.js","assets/index-b6vIp4U6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as l,m as w}from"./index-B1ohhVxs.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-B1ohhVxs.js").then(d=>d.dy),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),i=await e.getSignerAddress(),o=e.address;return(await s.read("allowance",[i,o])).gte(t)}export{g as h};
