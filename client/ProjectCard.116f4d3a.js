import{S as a,i as s,s as o,e as r,t as e,a as t,p as l,c,b as i,g as n,d,f as m,r as p,h as f,j as u,k as h,u as g,m as x,v as b,w as v,x as $,o as j}from"./client.01ab69e3.js";import{T as E}from"./TagList.3281d0df.js";function w(a){let s,o,j,w,T,k,L,q,D,P,y,A,C,S,I,V,H,M,N,z;return M=new E({props:{tags:a[4]}}),{c(){s=r("div"),o=r("small"),j=e(a[2]),T=t(),k=r("h3"),L=r("a"),q=e(a[0]),y=t(),A=r("p"),C=e(a[1]),S=t(),I=r("span"),V=t(),H=r("div"),l(M.$$.fragment),this.h()},l(r){s=c(r,"DIV",{class:!0});var e=i(s);o=c(e,"SMALL",{class:!0});var t=i(o);j=n(t,a[2]),t.forEach(d),T=m(e),k=c(e,"H3",{class:!0});var l=i(k);L=c(l,"A",{class:!0,href:!0});var f=i(L);q=n(f,a[0]),f.forEach(d),l.forEach(d),y=m(e),A=c(e,"P",{class:!0});var u=i(A);C=n(u,a[1]),u.forEach(d),S=m(e),I=c(e,"SPAN",{class:!0}),i(I).forEach(d),V=m(e),H=c(e,"DIV",{class:!0});var h=i(H);p(M.$$.fragment,h),h.forEach(d),e.forEach(d),this.h()},h(){f(o,"class",w=a[5]+" font-bold uppercase py-1 border-t-2 max-w-max"),f(L,"class",D="hover:underline hover:"+a[5]+" transition-colors"),f(L,"href",P="projects/"+a[3]),f(k,"class","text-xl font-bold py-4"),f(A,"class","description line-clamp-4"),f(I,"class","flex-auto"),f(H,"class","tags pt-4"),f(s,"class",N=a[6]+" project-card border-l-4  p-8 rounded bg-corporateDark-dark w-full h-full flex flex-col")},m(a,r){u(a,s,r),h(s,o),h(o,j),h(s,T),h(s,k),h(k,L),h(L,q),h(s,y),h(s,A),h(A,C),h(s,S),h(s,I),h(s,V),h(s,H),g(M,H,null),z=!0},p(a,[r]){(!z||4&r)&&x(j,a[2]),(!z||32&r&&w!==(w=a[5]+" font-bold uppercase py-1 border-t-2 max-w-max"))&&f(o,"class",w),(!z||1&r)&&x(q,a[0]),(!z||32&r&&D!==(D="hover:underline hover:"+a[5]+" transition-colors"))&&f(L,"class",D),(!z||8&r&&P!==(P="projects/"+a[3]))&&f(L,"href",P),(!z||2&r)&&x(C,a[1]);const e={};16&r&&(e.tags=a[4]),M.$set(e),(!z||64&r&&N!==(N=a[6]+" project-card border-l-4  p-8 rounded bg-corporateDark-dark w-full h-full flex flex-col"))&&f(s,"class",N)},i(a){z||(b(M.$$.fragment,a),z=!0)},o(a){v(M.$$.fragment,a),z=!1},d(a){a&&d(s),$(M)}}}function T(a,s,o){let{title:r="Project name here"}=s,{description:e="Cillum esse sint ea sunt labore quis dolore dolor mollit minim. Commodo\n    laboris commodo culpa exercitation non enim officia ut sint anim Lorem ex\n    deserunt cupidatat. Culpa officia magna quis magna ullamco do. Laboris enim\n    reprehenderit esse aliquip consequat occaecat commodo."}=s,{mainTool:t="angular"}=s,{slug:l=""}=s,c="",i="";j((()=>{o(5,c="text-tools-"+t),o(6,i="border-tools-"+t)}));let{tags:n=[]}=s;return a.$$set=a=>{"title"in a&&o(0,r=a.title),"description"in a&&o(1,e=a.description),"mainTool"in a&&o(2,t=a.mainTool),"slug"in a&&o(3,l=a.slug),"tags"in a&&o(4,n=a.tags)},[r,e,t,l,n,c,i]}class k extends a{constructor(a){super(),s(this,a,T,w,o,{title:0,description:1,mainTool:2,slug:3,tags:4})}}export{k as P};