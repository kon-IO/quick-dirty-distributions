/* Qwik Service Worker */
const appBundles=[["..\\service-worker.js",[]],["q-1UWNE6Qj.js",[45],["4d0znAhIsRE"]],["q-8JYKCzEr.js",[18],["U0ndZuwRKiQ"]],["q-B5zTBUgx.js",[5],["06Hg5FudZf0"]],["q-BEJoc1rB.js",[18],["Cjd8Ub9jW68"]],["q-BJQuZTm2.js",[40],["pf8Vin3dnyY"]],["q-BLjEdTGI.js",[35],["qoZDuoOq1Js"]],["q-BMkXP4G6.js",[28],["YB0x11gEn8g"]],["q-BRRb_PNN.js",[5]],["q-BWA4BtRn.js",[28]],["q-Bb8OFtit.js",[18],["nqL7EVUnsMM"]],["q-BfU2ZxYn.js",[40],["rNr5py8zhKg"]],["q-Bm1QQkBt.js",[],["p0Vlu0dolB8"]],["q-Bvo1xD7y.js",[5]],["q-BwA7bDKG.js",[40],["nMxMm50nP4o"]],["q-By4znOu3.js",[43],["wf3ESdl1G08"]],["q-C19cEAtY.js",[5],["jeQuV6l6tUY"]],["q-C4eYF99g.js",[18],["pdhm0G4aOvU"]],["q-CMGwLf8d.js",[5],["KkI4nJj9cwk"]],["q-CMJUUawE.js",[5],["PQj86roFneE"]],["q-CasRMdYJ.js",[28]],["q-CdeBb_Oh.js",[28]],["q-CgrLhnUB.js",[40],["xffnu1Y4Lis"]],["q-Cr5xunWA.js",[40],["1HUcVRMRTf0"]],["q-D-pwsC6B.js",[5],["Pg6M3BwCRX0"]],["q-DEEFkA_u.js",[5]],["q-DELNP5WS.js",[40],["SJclcjIQ8ds"]],["q-DFqsZkhX.js",[40],["xrCgZlaTUjI"]],["q-DJaXfgft.js",[35],["WPgylH4hyV8"]],["q-DQSeeouB.js",[28]],["q-DRp4AAV2.js",[46],["vnYWD8ogqw8"]],["q-DVatvFmX.js",[5],["8Sx8b57eFv0"]],["q-DWkYat2v.js",[45],["dUL5teGNAIY"]],["q-DeLIdjqz.js",[40],["oaJlbjovwkE"]],["q-DjRX4W8D.js",[28]],["q-Dp5ZIhLO.js",[1,32],["wbQX7wbHsgw"]],["q-DtIXa2_w.js",[40],["xOVqabkH8Fg"]],["q-JRQHE4JI.js",[40],["0oM3HLcVr7U"]],["q-Pd3PgI4Y.js",[40],["KygJm7rpdy8"]],["q-V3NblSFL.js",[28],["0UsQrSeHMH0"]],["q-ZVWWrhjk.js",[],["0HsRDWIHunc"]],["q-aiFh5nUu.js",[40],["ZM3yQf9DSRw"]],["q-qSSSr8PX.js",[46],["VDqPqA5DNQw"]],["q-qYJI0qRu.js",[5],["rsqHgYhLn8Q"]],["q-sTs1FxI0.js",[5],["D1BAwhCfWZ0"]],["q-spxPkwJJ.js",[5],["AJBdv4ZRYJM"]],["q-vuQ2lT7W.js",[5],["iPpvQVoOjAI"]]];
const libraryBundleIds=[18];
const linkBundles=[[/^\/quick-dirty-distributions\/$/,[13,26,21,35]],[/^\/quick-dirty-distributions\/binomial\/?$/,[13,26,9,45]],[/^\/quick-dirty-distributions\/exponential\/?$/,[13,26,29,32]],[/^\/quick-dirty-distributions\/geometric\/?$/,[13,26,20,1]],[/^\/quick-dirty-distributions\/normal\/?$/,[13,26,28]],[/^\/quick-dirty-distributions\/poisson\/?$/,[13,26,34,6]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
