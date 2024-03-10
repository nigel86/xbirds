import{B,cC as v,cD as _,cE as y,cF as E,cG as P,cH as F,cl as m,cI as L,bc as g,cr as S}from"./index-Xs8o5W5v.js";const T=Object.freeze(Object.defineProperty({__proto__:null,BigNumber:B,FixedFormat:v,FixedNumber:_,_base16To36:y,_base36To16:E,formatFixed:P,parseFixed:F},Symbol.toStringTag,{value:"Module"})),M=m(L),O=m(T);var a={},j=g&&g.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});a.getLength=a.decode=a.encode=void 0;var A=j(S);function b(e){if(Array.isArray(e)){for(var r=[],n=0;n<e.length;n++)r.push(b(e[n]));var t=Buffer.concat(r);return Buffer.concat([x(t.length,192),t])}else{var f=h(e);return f.length===1&&f[0]<128?f:Buffer.concat([x(f.length,128),f])}}a.encode=b;function d(e,r){if(e[0]==="0"&&e[1]==="0")throw new Error("invalid RLP: extra zeros");return parseInt(e,r)}function x(e,r){if(e<56)return Buffer.from([e+r]);var n=c(e),t=n.length/2,f=c(r+55+t);return Buffer.from(f+n,"hex")}function R(e,r){if(r===void 0&&(r=!1),!e||e.length===0)return Buffer.from([]);var n=h(e),t=u(n);if(r)return t;if(t.remainder.length!==0)throw new Error("invalid remainder");return t.data}a.decode=R;function $(e){if(!e||e.length===0)return Buffer.from([]);var r=h(e),n=r[0];if(n<=127)return r.length;if(n<=183)return n-127;if(n<=191)return n-182;if(n<=247)return n-191;var t=n-246,f=d(r.slice(1,t).toString("hex"),16);return t+f}a.getLength=$;function u(e){var r,n,t,f,o,l=[],i=e[0];if(i<=127)return{data:e.slice(0,1),remainder:e.slice(1)};if(i<=183){if(r=i-127,i===128?t=Buffer.from([]):t=e.slice(1,r),r===2&&t[0]<128)throw new Error("invalid rlp encoding: byte must be less 0x80");return{data:t,remainder:e.slice(r)}}else if(i<=191){if(n=i-182,e.length-1<n)throw new Error("invalid RLP: not enough bytes for string length");if(r=d(e.slice(1,n).toString("hex"),16),r<=55)throw new Error("invalid RLP: expected string length to be greater than 55");if(t=e.slice(n,r+n),t.length<r)throw new Error("invalid RLP: not enough bytes for string");return{data:t,remainder:e.slice(r+n)}}else if(i<=247){for(r=i-191,f=e.slice(1,r);f.length;)o=u(f),l.push(o.data),f=o.remainder;return{data:l,remainder:e.slice(r)}}else{n=i-246,r=d(e.slice(1,n).toString("hex"),16);var s=n+r;if(s>e.length)throw new Error("invalid rlp: total length is larger than the data");if(f=e.slice(n,s),f.length===0)throw new Error("invalid rlp, List has a invalid length");for(;f.length;)o=u(f),l.push(o.data),f=o.remainder;return{data:l,remainder:e.slice(s)}}}function w(e){return e.slice(0,2)==="0x"}function H(e){return typeof e!="string"?e:w(e)?e.slice(2):e}function c(e){if(e<0)throw new Error("Invalid integer as argument, must be unsigned!");var r=e.toString(16);return r.length%2?"0"+r:r}function I(e){return e.length%2?"0"+e:e}function N(e){var r=c(e);return Buffer.from(r,"hex")}function h(e){if(!Buffer.isBuffer(e)){if(typeof e=="string")return w(e)?Buffer.from(I(H(e)),"hex"):Buffer.from(e);if(typeof e=="number"||typeof e=="bigint")return e?N(e):Buffer.from([]);if(e==null)return Buffer.from([]);if(e instanceof Uint8Array)return Buffer.from(e);if(A.default.isBN(e))return Buffer.from(e.toArray());throw new Error("invalid type")}return e}export{M as a,a as d,O as r};
