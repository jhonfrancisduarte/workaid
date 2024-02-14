import{o,c as s,I as _,a as c,y as v,l as C,m as h,q as u,d as L,x as p,D as y}from"./vue.esm-bundler.f425fb9b.js";import{_ as l}from"./_plugin-vue_export-helper.c114f5e4.js";const w={props:{dark:Boolean}},b=c("div",{class:"double-bounce1"},null,-1),$=c("div",{class:"double-bounce2"},null,-1),x=[b,$];function B(t,n,e,r,f,g){return o(),s("div",{class:_(["aioseo-loading-spinner",{dark:e.dark}])},x,2)}const k=l(w,[["render",B]]);const S={name:"base-button",components:{CoreLoader:k},props:{color:String,tag:{type:String,default:"button",description:"Button html tag"},block:Boolean,loading:Boolean,wide:Boolean,disabled:Boolean,type:{type:String,default:"default",description:"Button type (blue|black|green|red|gray|wp-blue)"},nativeType:{type:String,default:"button",description:"Button native type (e.g button, input etc)"},size:{type:String,default:"",description:"Button size (small-table|small|medium|large)"},link:{type:Boolean,description:"Whether button is a link (no borders or background)"},to:{type:[Object,String],description:"The router link object or string"}}};function M(t,n,e,r,f,g){const i=v("core-loader");return o(),C(p(e.tag),{type:e.tag==="button"?e.nativeType:"",disabled:e.disabled||e.loading,to:e.tag==="router-link"?e.to:"",onMouseenter:n[0]||(n[0]=a=>t.$emit("mouseenter",a)),onMouseleave:n[1]||(n[1]=a=>t.$emit("mouseleave",a)),class:_(["aioseo-button",[{[e.type]:e.type},{[e.size]:e.size},{"btn-link":e.link},{disabled:e.disabled&&e.tag!=="button"},{color:e.color},{loading:e.loading}]])},{default:h(()=>[u(t.$slots,"loading",{},()=>[e.loading?(o(),C(i,{key:0,dark:e.type==="gray"},null,8,["dark"])):L("",!0)]),u(t.$slots,"default")]),_:3},40,["type","disabled","to","class"])}const ue=l(S,[["render",M]]),Z={},z={viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-close"},T=c("path",{d:"M11.8211 1.3415L10.6451 0.166504L5.98305 4.82484L1.32097 0.166504L0.14502 1.3415L4.80711 5.99984L0.14502 10.6582L1.32097 11.8332L5.98305 7.17484L10.6451 11.8332L11.8211 10.6582L7.159 5.99984L11.8211 1.3415Z",fill:"currentColor"},null,-1),V=[T];function A(t,n){return o(),s("svg",z,V)}const N=l(Z,[["render",A]]);const j={emits:["close-alert"],components:{SvgClose:N},props:{type:{type:String,default(){return"blue"}},size:{type:String,default(){return"medium"}},showClose:Boolean}};function D(t,n,e,r,f,g){const i=v("svg-close");return o(),s("div",{class:_(["aioseo-alert",{[e.type]:e.type,[e.size]:e.size}])},[u(t.$slots,"default"),e.showClose?(o(),s("span",{key:0,onClick:n[0]||(n[0]=a=>t.$emit("close-alert")),class:"aioseo-alert-close"},[y(i)])):L("",!0)],2)}const _e=l(j,[["render",D]]),H={},I={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-circle-check"},P=c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM10 14.17L16.59 7.58L18 9L10 17L6 13L7.41 11.59L10 14.17Z",fill:"currentColor"},null,-1),q=[P];function E(t,n){return o(),s("svg",I,q)}const fe=l(H,[["render",E]]),O={},R={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-circle-close"},U=c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 2.00006C6.47 2.00006 2 6.47006 2 12.0001C2 17.5301 6.47 22.0001 12 22.0001C17.53 22.0001 22 17.5301 22 12.0001C22 6.47006 17.53 2.00006 12 2.00006ZM14.59 8.00006L12 10.5901L9.41 8.00006L8 9.41006L10.59 12.0001L8 14.5901L9.41 16.0001L12 13.4101L14.59 16.0001L16 14.5901L13.41 12.0001L16 9.41006L14.59 8.00006ZM4 12.0001C4 16.4101 7.59 20.0001 12 20.0001C16.41 20.0001 20 16.4101 20 12.0001C20 7.59006 16.41 4.00006 12 4.00006C7.59 4.00006 4 7.59006 4 12.0001Z",fill:"currentColor"},null,-1),W=[U];function F(t,n){return o(),s("svg",R,W)}const ge=l(O,[["render",F]]),G={},J={viewBox:"0 0 15 16",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-search"},K=c("path",{d:"M14.8828 14.6152L11.3379 11.0703C11.25 11.0117 11.1621 10.9531 11.0742 10.9531H10.6934C11.6016 9.89844 12.1875 8.49219 12.1875 6.96875C12.1875 3.62891 9.43359 0.875 6.09375 0.875C2.72461 0.875 0 3.62891 0 6.96875C0 10.3379 2.72461 13.0625 6.09375 13.0625C7.61719 13.0625 8.99414 12.5059 10.0781 11.5977V11.9785C10.0781 12.0664 10.1074 12.1543 10.166 12.2422L13.7109 15.7871C13.8574 15.9336 14.0918 15.9336 14.209 15.7871L14.8828 15.1133C15.0293 14.9961 15.0293 14.7617 14.8828 14.6152ZM6.09375 11.6562C3.48633 11.6562 1.40625 9.57617 1.40625 6.96875C1.40625 4.39062 3.48633 2.28125 6.09375 2.28125C8.67188 2.28125 10.7812 4.39062 10.7812 6.96875C10.7812 9.57617 8.67188 11.6562 6.09375 11.6562Z",fill:"currentColor"},null,-1),Q=[K];function X(t,n){return o(),s("svg",J,Q)}const Ce=l(G,[["render",X]]),Y={},ee={viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-pencil"},te=c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.71515 0.919167L11.0802 2.28417C11.3077 2.51167 11.3077 2.87917 11.0802 3.10667L10.0126 4.17417L7.82515 1.98667L8.89265 0.919167C9.00348 0.808333 9.14932 0.75 9.30098 0.75C9.45265 0.75 9.59848 0.8025 9.71515 0.919167ZM0.749268 11.25V9.06252L7.20093 2.61086L9.38843 4.79836L2.93677 11.25H0.749268Z",fill:"currentColor"},null,-1),ne=[te];function oe(t,n){return o(),s("svg",ee,ne)}const me=l(Y,[["render",oe]]);let m,d;const ve=(t,n)=>((...e)=>{const r=()=>t(...e);clearTimeout(m),m=setTimeout(r,n)}).call(),Le=function(t,n){d&&clearTimeout(d),d=setTimeout(t,n)},se={},le={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-caret"},ce=c("path",{d:"M16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492L16.59 8.29492Z",fill:"currentColor"},null,-1),re=[ce];function ae(t,n){return o(),s("svg",le,re)}const he=l(se,[["render",ae]]);export{ue as B,_e as C,N as S,he as a,k as b,fe as c,Le as d,ge as e,me as f,Ce as g,ve as h};
