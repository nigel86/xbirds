import{e as l,d2 as w}from"./index-4DoMYjDR.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-4DoMYjDR.js").then(i=>i.fq),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-4DoMYjDR.js","assets/index-rBWc323G.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
