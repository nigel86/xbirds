import{l,p as w}from"./index-zMP2bLP5.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-zMP2bLP5.js").then(i=>i.dl),__vite__mapDeps([0,1]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-zMP2bLP5.js","assets/index-JS6bZ8M5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
