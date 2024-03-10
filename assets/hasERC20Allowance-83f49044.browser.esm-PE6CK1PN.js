import{f as l,l as w}from"./index-aMUXh-4r.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-aMUXh-4r.js").then(i=>i.dp),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-aMUXh-4r.js","assets/index-AQUmr87M.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
