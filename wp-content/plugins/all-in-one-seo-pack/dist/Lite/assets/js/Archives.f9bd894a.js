import{a as f,u as b,e as v}from"./links.6fea55de.js";import{A,T as y}from"./TitleDescription.260246b8.js";import{C as S}from"./Card.79833296.js";import{C}from"./Tabs.d9517892.js";import{P as T}from"./PostTypes.e5795f0f.js";import{y as i,c,F as D,L as x,o,l as p,m as s,a as l,I as $,t as k,D as m,x as P,T as B}from"./vue.esm-bundler.f425fb9b.js";import{_ as w}from"./_plugin-vue_export-helper.c114f5e4.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.a77a8422.js";import"./JsonValues.870a4901.js";import"./MaxCounts.12b45bab.js";import"./RadioToggle.2bcafbe9.js";import"./Caret.660dc2fe.js";import"./ProBadge.08f04af1.js";import"./RobotsMeta.62be52e5.js";import"./Checkbox.092c2ef0.js";import"./Checkmark.600c9af3.js";import"./Row.c43f487a.js";import"./SettingsRow.aef25413.js";import"./tags.37883cf5.js";import"./Tags.78fa7710.js";import"./postSlug.83f811b4.js";import"./metabox.3871c104.js";import"./cleanForSlug.ccab0383.js";import"./toString.eb8a9d40.js";import"./_baseTrim.8725856f.js";import"./_stringToArray.4de3b1f3.js";import"./get.9bd7b8f2.js";import"./GoogleSearchPreview.81adb22a.js";import"./strings.a3cb2fa1.js";import"./isString.c452d40b.js";import"./constants.2883a7a9.js";import"./HtmlTagsEditor.d8759be9.js";import"./Editor.4280cb48.js";import"./index.c4983756.js";import"./UnfilteredHtml.1675524c.js";import"./Tooltip.7040733e.js";import"./Slide.ab12a8fa.js";import"./TruSeoScore.b474bf15.js";import"./Ellipse.61f2058b.js";import"./Information.dd77e1c6.js";const L={setup(){return{optionsStore:f(),rootStore:b(),settingsStore:v()}},components:{Advanced:A,CoreCard:S,CoreMainTabs:C,TitleDescription:y},mixins:[T],data(){return{internalDebounce:null,tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}],archives:[{label:"Author Archives",name:"author",singular:"Author",icon:"dashicons-admin-users"},{label:"Date Archives",name:"date",singular:"Date",icon:"dashicons-calendar-alt"},{label:"Search Page",name:"search",singular:"Search Page",icon:"dashicons-search"}]}},computed:{getArchives(){return this.archives.concat(this.rootStore.aioseo.postData.archives.map(e=>({label:`${e.label} Archives`,name:`${e.name}Archive`,icon:"dashicons-category",singular:e.singular,dynamic:!0})))}},methods:{processChangeTab(e,n){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:`${e}Archives`,value:n}),setTimeout(()=>{this.internalDebounce=!1},50))},getOptions(e){return e.dynamic?this.optionsStore.dynamicOptions.searchAppearance.archives[e.name.replace("Archive","")]:this.optionsStore.options.searchAppearance.archives[e.name]}}},O={class:"aioseo-search-appearance-archives"};function j(e,n,F,r,u,a){const h=i("core-main-tabs"),_=i("core-card");return o(),c("div",O,[(o(!0),c(D,null,x(a.getArchives,(t,d)=>(o(),p(_,{key:d,slug:`${t.name}Archives`},{header:s(()=>[l("div",{class:$(["icon dashicons",e.getPostIconClass(t.icon)])},null,2),l("div",null,k(t.label),1)]),tabs:s(()=>[m(h,{tabs:u.tabs,showSaveButton:!1,active:r.settingsStore.settings.internalTabs[`${t.name}Archives`],internal:"",onChanged:g=>a.processChangeTab(t.name,g)},null,8,["tabs","active","onChanged"])]),default:s(()=>[m(B,{name:"route-fade",mode:"out-in"},{default:s(()=>[(o(),p(P(r.settingsStore.settings.internalTabs[`${t.name}Archives`]),{object:t,separator:r.optionsStore.options.searchAppearance.global.separator,options:a.getOptions(t),type:"archives","show-bulk":!1,"no-meta-box":"","include-keywords":""},null,8,["object","separator","options"]))]),_:2},1024)]),_:2},1032,["slug"]))),128))])}const Ce=w(L,[["render",j]]);export{Ce as default};
