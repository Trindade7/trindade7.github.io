import{S as s,i as a,s as t,B as r,e as o,t as e,a as l,p as c,c as p,b as n,g as i,d as f,f as d,r as h,h as u,j as g,k as m,u as x,m as b,v,w as $,x as j,o as y}from"./client.70f61f43.js";import{T as E}from"./TagList.8f6f8460.js";function w(s){let a,t,y,w,k,D,T,A,P,S,I,L,V,N,B,H,M,q,z,C,F,G,J,K;return P=new r({props:{href:s[4],scale:"scale-75"}}),G=new E({props:{tags:s[5]}}),{c(){a=o("div"),t=o("div"),y=o("small"),w=e(s[3]),D=l(),T=o("span"),A=l(),c(P.$$.fragment),S=l(),I=o("h3"),L=o("a"),V=e(s[1]),B=l(),H=o("p"),M=e(s[2]),q=l(),z=o("span"),C=l(),F=o("div"),c(G.$$.fragment),this.h()},l(r){a=p(r,"DIV",{class:!0});var o=n(a);t=p(o,"DIV",{class:!0});var e=n(t);y=p(e,"SMALL",{class:!0});var l=n(y);w=i(l,s[3]),l.forEach(f),D=d(e),T=p(e,"SPAN",{class:!0}),n(T).forEach(f),A=d(e),h(P.$$.fragment,e),e.forEach(f),S=d(o),I=p(o,"H3",{class:!0});var c=n(I);L=p(c,"A",{class:!0,href:!0,rel:!0});var u=n(L);V=i(u,s[1]),u.forEach(f),c.forEach(f),B=d(o),H=p(o,"P",{class:!0});var g=n(H);M=i(g,s[2]),g.forEach(f),q=d(o),z=p(o,"SPAN",{class:!0}),n(z).forEach(f),C=d(o),F=p(o,"DIV",{class:!0});var m=n(F);h(G.$$.fragment,m),m.forEach(f),o.forEach(f),this.h()},h(){u(y,"class",k=s[6]+" font-bold uppercase py-1 border-t-2 max-w-max"),u(T,"class","flex-auto"),u(t,"class","flex flex-row gap-2 pb-1"),u(L,"class","hover:underline hover:text-corporateDark-primary transition-colors"),u(L,"href",N="projects/"+s[0]),u(L,"rel","prefetch"),u(I,"class","text-xl font-bold py-4"),u(H,"class","description line-clamp-4"),u(z,"class","flex-auto"),u(F,"class","tags pt-5"),u(a,"class",J=s[7]+" project-card border-l-4  p-8 rounded bg-corporateDark-dark w-full h-full flex flex-col")},m(s,r){g(s,a,r),m(a,t),m(t,y),m(y,w),m(t,D),m(t,T),m(t,A),x(P,t,null),m(a,S),m(a,I),m(I,L),m(L,V),m(a,B),m(a,H),m(H,M),m(a,q),m(a,z),m(a,C),m(a,F),x(G,F,null),K=!0},p(s,[t]){(!K||8&t)&&b(w,s[3]),(!K||64&t&&k!==(k=s[6]+" font-bold uppercase py-1 border-t-2 max-w-max"))&&u(y,"class",k);const r={};16&t&&(r.href=s[4]),P.$set(r),(!K||2&t)&&b(V,s[1]),(!K||1&t&&N!==(N="projects/"+s[0]))&&u(L,"href",N),(!K||4&t)&&b(M,s[2]);const o={};32&t&&(o.tags=s[5]),G.$set(o),(!K||128&t&&J!==(J=s[7]+" project-card border-l-4  p-8 rounded bg-corporateDark-dark w-full h-full flex flex-col"))&&u(a,"class",J)},i(s){K||(v(P.$$.fragment,s),v(G.$$.fragment,s),K=!0)},o(s){$(P.$$.fragment,s),$(G.$$.fragment,s),K=!1},d(s){s&&f(a),j(P),j(G)}}}function k(s,a,t){let{slug:r=""}=a,{title:o="Project name here"}=a,{description:e="A summary of the app"}=a,{mainTool:l="angular"}=a,{github:c=""}=a;const p={typescript:"text-tools-typescript",javascript:"text-tools-javascript",python:"text-tools-python",angular:"text-tools-angular",svelte:"text-tools-svelte",nodejs:"text-tools-nodejs",sapper:"text-tools-sapper","c/c++":"text-tools-python"},n={typescript:"border-tools-typescript",javascript:"border-tools-javascript",python:"border-tools-python",angular:"border-tools-angular",svelte:"border-tools-svelte",nodejs:"border-tools-nodejs",sapper:"border-tools-sapper","c/c++":"border-tools-python"};let i="",f="";y((()=>{t(6,i=p[l]),t(7,f=n[l])}));let{tags:d=[]}=a;return s.$$set=s=>{"slug"in s&&t(0,r=s.slug),"title"in s&&t(1,o=s.title),"description"in s&&t(2,e=s.description),"mainTool"in s&&t(3,l=s.mainTool),"github"in s&&t(4,c=s.github),"tags"in s&&t(5,d=s.tags)},[r,o,e,l,c,d,i,f]}class D extends s{constructor(s){super(),a(this,s,k,w,t,{slug:0,title:1,description:2,mainTool:3,github:4,tags:5})}}export{D as P};