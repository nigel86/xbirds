import{o as r}from"./index-4DoMYjDR.js";function o(n){const t=new URL(n).hostname;return t.endsWith(".thirdweb.com")||t.endsWith(".thirdweb-dev.com")||t==="localhost"||t==="0.0.0.0"}function s(n){return r(n).map(t=>{try{const e=new URL(t);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch{return t}})}export{s as g,o as i};
