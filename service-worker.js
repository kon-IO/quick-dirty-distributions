/* Qwik Service Worker */
const appBundles=[["..\\service-worker.js",[]],["q-B9QEuOuD.js",[24]],["q-BHxSzJmo.js",[9],["WPgylH4hyV8"]],["q-BRn3sCeD.js",[20],["VDqPqA5DNQw"]],["q-BVzmj325.js",[5],["nqL7EVUnsMM"]],["q-BYA8T4g6.js",[24],["KkI4nJj9cwk"]],["q-BfU2ZxYn.js",[43],["rNr5py8zhKg"]],["q-BjEL-ZII.js",[24]],["q-Bm1QQkBt.js",[],["p0Vlu0dolB8"]],["q-BmR0iTRI.js",[16,22],["wbQX7wbHsgw"]],["q-BpSRt4u-.js",[5],["U0ndZuwRKiQ"]],["q-BvOBEpXN.js",[24]],["q-BvwxmOt_.js",[20],["vnYWD8ogqw8"]],["q-BwA7bDKG.js",[43],["nMxMm50nP4o"]],["q-Bwu1-TDh.js",[24],["jeQuV6l6tUY"]],["q-C4AiT7ke.js",[5],["pdhm0G4aOvU"]],["q-C98_8rbn.js",[17],["4d0znAhIsRE"]],["q-CIURbKsG.js",[24],["AJBdv4ZRYJM"]],["q-CKXdQpxt.js",[24],["PQj86roFneE"]],["q-CWPr1-LI.js",[24]],["q-CeGbb2qi.js",[24],["iPpvQVoOjAI"]],["q-CgrLhnUB.js",[43],["xffnu1Y4Lis"]],["q-CkHT-f8_.js",[17],["dUL5teGNAIY"]],["q-Cr5xunWA.js",[43],["1HUcVRMRTf0"]],["q-Ct-eihlq.js",[43],["pf8Vin3dnyY"]],["q-D-hpPosP.js",[24],["D1BAwhCfWZ0"]],["q-D0hvQ8Xt.js",[2],["0UsQrSeHMH0"]],["q-D6cQY-lQ.js",[24]],["q-D795Njpi.js",[2],["YB0x11gEn8g"]],["q-D7x9N9kh.js",[9],["qoZDuoOq1Js"]],["q-DABkSInw.js",[24],["06Hg5FudZf0"]],["q-DBN309vS.js",[24],["rsqHgYhLn8Q"]],["q-DELNP5WS.js",[43],["SJclcjIQ8ds"]],["q-DFqsZkhX.js",[43],["xrCgZlaTUjI"]],["q-DHB6PZfQ.js",[24]],["q-DZCe3zm3.js",[31],["wf3ESdl1G08"]],["q-DeLIdjqz.js",[43],["oaJlbjovwkE"]],["q-DriT1Mbf.js",[24]],["q-DtIXa2_w.js",[43],["xOVqabkH8Fg"]],["q-FoVXitXv.js",[24],["Pg6M3BwCRX0"]],["q-JRQHE4JI.js",[43],["0oM3HLcVr7U"]],["q-Pd3PgI4Y.js",[43],["KygJm7rpdy8"]],["q-Sdz9oOxh.js",[5],["Cjd8Ub9jW68"]],["q-ZVWWrhjk.js",[],["0HsRDWIHunc"]],["q-aiFh5nUu.js",[43],["ZM3yQf9DSRw"]],["q-eQ_0s0Gl.js",[24],["8Sx8b57eFv0"]],["q-ncJapmXB.js",[24]]];
const libraryBundleIds=[5];
const linkBundles=[[/^\/quick-dirty-distributions\/$/,[7,32,1,9]],[/^\/quick-dirty-distributions\/binomial\/?$/,[7,32,19,17]],[/^\/quick-dirty-distributions\/exponential\/?$/,[7,32,11,22]],[/^\/quick-dirty-distributions\/geometric\/?$/,[7,32,37,16]],[/^\/quick-dirty-distributions\/normal\/?$/,[7,32,2]],[/^\/quick-dirty-distributions\/poisson\/?$/,[7,32,27,29]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
