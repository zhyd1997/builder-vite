var b=Object.defineProperty;var i=(n,o)=>b(n,"name",{value:o,configurable:!0});import{e as a,W as m,d as k}from"./iframe.04e38e28.js";var w={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},D={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},P={textAlign:"center"},v=i(function(){return a("div",{style:w,className:"sb-nodocs sb-wrapper",children:a("div",{style:D,children:[a("h1",{style:P,children:"No Docs"}),a("p",{children:["Sorry, but there are no docs for the selected story. To add them, set the story's\xA0",a("code",{children:"docs"})," parameter. If you think this is an error:"]}),a("ul",{children:[a("li",{children:"Please check the story definition."}),a("li",{children:"Please check the Storybook config."}),a("li",{children:"Try reloading the page."})]}),a("p",{children:"If the problem persists, check the browser console, or the terminal you've run Storybook from."})]})})},"NoDocs");v.displayName="NoDocs";function g(n,o,s,d,c,l,r){try{var u=n[l](r),t=u.value}catch(h){s(h);return}u.done?o(t):Promise.resolve(t).then(d,c)}i(g,"asyncGeneratorStep");function N(n){return function(){var o=this,s=arguments;return new Promise(function(d,c){var l=n.apply(o,s);function r(t){g(l,d,c,r,u,"next",t)}i(r,"_next");function u(t){g(l,d,c,r,u,"throw",t)}i(u,"_throw"),r(void 0)})}}i(N,"_asyncToGenerator");function I(n,o,s,d){return S(n,o,s).then(d)}i(I,"renderDocs");function S(n,o,s){return f.apply(this,arguments)}i(S,"renderDocsAsync");function f(){return f=N(regeneratorRuntime.mark(i(function n(o,s,d){var c,l,r,u,t,h;return regeneratorRuntime.wrap(i(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.parameters.docs,!((r!=null&&r.getPage||r!=null&&r.page)&&!(r!=null&&r.getContainer||r!=null&&r.container))){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=r.container,e.t1){e.next=8;break}return e.next=7,(c=r.getContainer)===null||c===void 0?void 0:c.call(r);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(p){var y=p.children;return a(k,{children:y})};case 11:if(u=e.t0,e.t3=r.page,e.t3){e.next=17;break}return e.next=16,(l=r.getPage)===null||l===void 0?void 0:l.call(r);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=v;case 20:return t=e.t2,h=a(u,{context:s,children:a(t,{})},o.componentId),e.next=24,new Promise(function(p){m.render(h,d,p)});case 24:case"end":return e.stop()}},"_callee$"),n)},"_callee"))),f.apply(this,arguments)}i(f,"_renderDocsAsync");function T(n){m.unmountComponentAtNode(n)}i(T,"unmountDocs");export{I as renderDocs,T as unmountDocs};
//# sourceMappingURL=renderDocs.712a5c92.js.map
