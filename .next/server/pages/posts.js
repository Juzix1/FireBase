"use strict";(()=>{var e={};e.id=679,e.ids=[679,660],e.modules={323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},655:(e,t,r)=>{r.r(t),r.d(t,{config:()=>g,default:()=>d,getServerSideProps:()=>f,getStaticPaths:()=>c,getStaticProps:()=>P,reportWebVitals:()=>S,routeModule:()=>h,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>A,unstable_getStaticParams:()=>m,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>b});var n={};r.r(n);var a=r(93),o=r(244),s=r(323),l=r(388),u=r.n(l),i=r(769),p=r.n(i);require("react/jsx-runtime");let d=(0,s.l)(n,"default"),P=(0,s.l)(n,"getStaticProps"),c=(0,s.l)(n,"getStaticPaths"),f=(0,s.l)(n,"getServerSideProps"),g=(0,s.l)(n,"config"),S=(0,s.l)(n,"reportWebVitals"),b=(0,s.l)(n,"unstable_getStaticProps"),_=(0,s.l)(n,"unstable_getStaticPaths"),m=(0,s.l)(n,"unstable_getStaticParams"),v=(0,s.l)(n,"unstable_getServerProps"),A=(0,s.l)(n,"unstable_getServerSideProps"),h=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/posts",pathname:"/posts",bundlePath:"",filename:""},components:{App:p(),Document:u()},userland:n})},769:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(167)._(r(689)),a=r(221);async function o(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,a.loadGetInitialProps)(t,r)}}class s extends n.default.Component{render(){let{Component:e,pageProps:t}=this.props;return n.default.createElement(e,t)}}s.origGetInitialProps=o,s.getInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},689:e=>{e.exports=require("react")},17:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[388],()=>r(655));module.exports=n})();