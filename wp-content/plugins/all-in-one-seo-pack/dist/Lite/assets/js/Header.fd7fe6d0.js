import{o as t,c as o,a as u,q as i,d as g,F as m,L as v,I as y,y as l,D as d}from"./vue.esm-bundler.f425fb9b.js";import{_}from"./_plugin-vue_export-helper.c114f5e4.js";import{g as h}from"./links.6fea55de.js";import{S as $}from"./Logo.15d8c305.js";const z={},S={class:"aioseo-wizard-body"},C={class:"body-content"},W={key:0,class:"cta"},x={class:"body-footer"};function A(e,s){return t(),o("div",S,[u("div",C,[i(e.$slots,"default")]),e.$slots.cta?(t(),o("div",W,[i(e.$slots,"cta")])):g("",!0),u("div",x,[i(e.$slots,"footer")])])}const T=_(z,[["render",A]]);const w={},B={class:"aioseo-wizard-container"};function L(e,s){return t(),o("div",B,[i(e.$slots,"default")])}const U=_(w,[["render",L]]);const b={props:{steps:{type:Array,required:!0}},computed:{getSteps(){const e={spacer:!0};return[...this.steps].map((s,r)=>r<this.steps.length-1?[s,{...e}]:[s]).reduce((s,r)=>s.concat(r))}},methods:{getActiveClass(e,s){return e.spacer?!!this.getSteps[s+1].active:e.active}}},k={class:"aioseo-wizard-progress"};function N(e,s,r,p,f,a){return t(),o("div",k,[(t(!0),o(m,null,v(a.getSteps,(n,c)=>(t(),o("div",{key:c,class:y([{circle:!n.spacer},{spacer:n.spacer},{active:a.getActiveClass(n,c)}])},null,2))),128))])}const P=_(b,[["render",N]]);const V={setup(){return{setupWizardStore:h()}},components:{SvgAioseoLogo:$,WizardProgress:P},computed:{steps(){const e=[];for(let s=0;s<this.setupWizardStore.getTotalStageCount;s++)s<this.setupWizardStore.getCurrentStageCount?e.push({active:!0}):e.push({active:!1});return e}}},q={class:"aioseo-wizard-header"},F={class:"logo"};function H(e,s,r,p,f,a){const n=l("svg-aioseo-logo"),c=l("wizard-progress");return t(),o("div",q,[u("div",F,[d(n)]),d(c,{steps:a.steps},null,8,["steps"])])}const j=_(V,[["render",H]]);export{T as W,U as a,j as b};
