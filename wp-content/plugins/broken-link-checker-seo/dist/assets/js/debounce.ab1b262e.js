import{ag as J}from"./dynamic-import-helper.2b0a28d1.js";function q(t,e){var r=0,n,s;e=e||{};function c(){var o=n,l=arguments.length,d,a;t:for(;o;){if(o.args.length!==arguments.length){o=o.next;continue}for(a=0;a<l;a++)if(o.args[a]!==arguments[a]){o=o.next;continue t}return o!==n&&(o===s&&(s=o.prev),o.prev.next=o.next,o.next&&(o.next.prev=o.prev),o.next=n,o.prev=null,n.prev=o,n=o),o.val}for(d=new Array(l),a=0;a<l;a++)d[a]=arguments[a];return o={args:d,val:t.apply(null,d)},n?(n.prev=o,o.next=n):s=o,r===e.maxSize?(s=s.prev,s.next=null):r++,n=o,o.val}return c.clear=function(){n=null,s=null,r=0},c}var U={};(function(t){(function(){var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function r(l){return s(o(l),arguments)}function n(l,d){return r.apply(null,[l].concat(d||[]))}function s(l,d){var a=1,_=l.length,i,w="",y,x,f,A,m,S,E,u;for(y=0;y<_;y++)if(typeof l[y]=="string")w+=l[y];else if(typeof l[y]=="object"){if(f=l[y],f.keys)for(i=d[a],x=0;x<f.keys.length;x++){if(i==null)throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"',f.keys[x],f.keys[x-1]));i=i[f.keys[x]]}else f.param_no?i=d[f.param_no]:i=d[a++];if(e.not_type.test(f.type)&&e.not_primitive.test(f.type)&&i instanceof Function&&(i=i()),e.numeric_arg.test(f.type)&&typeof i!="number"&&isNaN(i))throw new TypeError(r("[sprintf] expecting number but found %T",i));switch(e.number.test(f.type)&&(E=i>=0),f.type){case"b":i=parseInt(i,10).toString(2);break;case"c":i=String.fromCharCode(parseInt(i,10));break;case"d":case"i":i=parseInt(i,10);break;case"j":i=JSON.stringify(i,null,f.width?parseInt(f.width):0);break;case"e":i=f.precision?parseFloat(i).toExponential(f.precision):parseFloat(i).toExponential();break;case"f":i=f.precision?parseFloat(i).toFixed(f.precision):parseFloat(i);break;case"g":i=f.precision?String(Number(i.toPrecision(f.precision))):parseFloat(i);break;case"o":i=(parseInt(i,10)>>>0).toString(8);break;case"s":i=String(i),i=f.precision?i.substring(0,f.precision):i;break;case"t":i=String(!!i),i=f.precision?i.substring(0,f.precision):i;break;case"T":i=Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),i=f.precision?i.substring(0,f.precision):i;break;case"u":i=parseInt(i,10)>>>0;break;case"v":i=i.valueOf(),i=f.precision?i.substring(0,f.precision):i;break;case"x":i=(parseInt(i,10)>>>0).toString(16);break;case"X":i=(parseInt(i,10)>>>0).toString(16).toUpperCase();break}e.json.test(f.type)?w+=i:(e.number.test(f.type)&&(!E||f.sign)?(u=E?"+":"-",i=i.toString().replace(e.sign,"")):u="",m=f.pad_char?f.pad_char==="0"?"0":f.pad_char.charAt(1):" ",S=f.width-(u+i).length,A=f.width&&S>0?m.repeat(S):"",w+=f.align?u+i+A:m==="0"?u+A+i:A+u+i)}return w}var c=Object.create(null);function o(l){if(c[l])return c[l];for(var d=l,a,_=[],i=0;d;){if((a=e.text.exec(d))!==null)_.push(a[0]);else if((a=e.modulo.exec(d))!==null)_.push("%");else if((a=e.placeholder.exec(d))!==null){if(a[2]){i|=1;var w=[],y=a[2],x=[];if((x=e.key.exec(y))!==null)for(w.push(x[1]);(y=y.substring(x[0].length))!=="";)if((x=e.key_access.exec(y))!==null)w.push(x[1]);else if((x=e.index_access.exec(y))!==null)w.push(x[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");a[2]=w}else i|=2;if(i===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");_.push({placeholder:a[0],param_no:a[1],keys:a[2],sign:a[3],pad_char:a[4],align:a[5],width:a[6],precision:a[7],type:a[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");d=d.substring(a[0].length)}return c[l]=_}t.sprintf=r,t.vsprintf=n,typeof window<"u"&&(window.sprintf=r,window.vsprintf=n)})()})(U);const B=J(U),Q=q(console.error);function at(t,...e){try{return B.sprintf(t,...e)}catch(r){return r instanceof Error&&Q(`sprintf error: 

`+r.toString()),t}}var O,X,T,Z;O={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1};X=["(","?"];T={")":["("],":":["?","?:"]};Z=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;function V(t){for(var e=[],r=[],n,s,c,o;n=t.match(Z);){for(s=n[0],c=t.substr(0,n.index).trim(),c&&e.push(c);o=r.pop();){if(T[s]){if(T[s][0]===o){s=T[s][1]||s;break}}else if(X.indexOf(o)>=0||O[o]<O[s]){r.push(o);break}e.push(o)}T[s]||r.push(s),t=t.substr(n.index+s.length)}return t=t.trim(),t&&e.push(t),e.concat(r.reverse())}var W={"!":function(t){return!t},"*":function(t,e){return t*e},"/":function(t,e){return t/e},"%":function(t,e){return t%e},"+":function(t,e){return t+e},"-":function(t,e){return t-e},"<":function(t,e){return t<e},"<=":function(t,e){return t<=e},">":function(t,e){return t>e},">=":function(t,e){return t>=e},"==":function(t,e){return t===e},"!=":function(t,e){return t!==e},"&&":function(t,e){return t&&e},"||":function(t,e){return t||e},"?:":function(t,e,r){if(t)throw e;return r}};function Y(t,e){var r=[],n,s,c,o,l,d;for(n=0;n<t.length;n++){if(l=t[n],o=W[l],o){for(s=o.length,c=Array(s);s--;)c[s]=r.pop();try{d=o.apply(null,c)}catch(a){return a}}else e.hasOwnProperty(l)?d=e[l]:d=+l;r.push(d)}return r[0]}function N(t){var e=V(t);return function(r){return Y(e,r)}}function tt(t){var e=N(t);return function(r){return+e({n:r})}}var D={contextDelimiter:"",onMissingKey:null};function et(t){var e,r,n;for(e=t.split(";"),r=0;r<e.length;r++)if(n=e[r].trim(),n.indexOf("plural=")===0)return n.substr(7)}function R(t,e){var r;this.data=t,this.pluralForms={},this.options={};for(r in D)this.options[r]=e!==void 0&&r in e?e[r]:D[r]}R.prototype.getPluralForm=function(t,e){var r=this.pluralForms[t],n,s,c;return r||(n=this.data[t][""],c=n["Plural-Forms"]||n["plural-forms"]||n.plural_forms,typeof c!="function"&&(s=et(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),c=tt(s)),r=this.pluralForms[t]=c),r(e)};R.prototype.dcnpgettext=function(t,e,r,n,s){var c,o,l;return s===void 0?c=0:c=this.getPluralForm(t,s),o=r,e&&(o=e+this.options.contextDelimiter+r),l=this.data[t][o],l&&l[c]?l[c]:(this.options.onMissingKey&&this.options.onMissingKey(r,t),c===0?r:n)};const j={"":{plural_forms(t){return t===1?0:1}}},nt=/^i18n\.(n?gettext|has_translation)(_|$)/,rt=(t,e,r)=>{const n=new R({}),s=new Set,c=()=>{s.forEach(u=>u())},o=u=>(s.add(u),()=>s.delete(u)),l=(u="default")=>n.data[u],d=(u,p="default")=>{var h;n.data[p]={...n.data[p],...u},n.data[p][""]={...j[""],...(h=n.data[p])==null?void 0:h[""]},delete n.pluralForms[p]},a=(u,p)=>{d(u,p),c()},_=(u,p="default")=>{var h;n.data[p]={...n.data[p],...u,"":{...j[""],...(h=n.data[p])==null?void 0:h[""],...u==null?void 0:u[""]}},delete n.pluralForms[p],c()},i=(u,p)=>{n.data={},n.pluralForms={},a(u,p)},w=(u="default",p,h,b,v)=>(n.data[u]||d(void 0,u),n.dcnpgettext(u,p,h,b,v)),y=(u="default")=>u,x=(u,p)=>{let h=w(p,void 0,u);return r?(h=r.applyFilters("i18n.gettext",h,u,p),r.applyFilters("i18n.gettext_"+y(p),h,u,p)):h},f=(u,p,h)=>{let b=w(h,p,u);return r?(b=r.applyFilters("i18n.gettext_with_context",b,u,p,h),r.applyFilters("i18n.gettext_with_context_"+y(h),b,u,p,h)):b},A=(u,p,h,b)=>{let v=w(b,void 0,u,p,h);return r?(v=r.applyFilters("i18n.ngettext",v,u,p,h,b),r.applyFilters("i18n.ngettext_"+y(b),v,u,p,h,b)):v},m=(u,p,h,b,v)=>{let F=w(v,b,u,p,h);return r?(F=r.applyFilters("i18n.ngettext_with_context",F,u,p,h,b,v),r.applyFilters("i18n.ngettext_with_context_"+y(v),F,u,p,h,b,v)):F},S=()=>f("ltr","text direction")==="rtl",E=(u,p,h)=>{var F,L;const b=p?p+""+u:u;let v=!!((L=(F=n.data)==null?void 0:F[h??"default"])!=null&&L[b]);return r&&(v=r.applyFilters("i18n.has_translation",v,u,p,h),v=r.applyFilters("i18n.has_translation_"+y(h),v,u,p,h)),v};if(t&&a(t,e),r){const u=p=>{nt.test(p)&&c()};r.addAction("hookAdded","core/i18n",u),r.addAction("hookRemoved","core/i18n",u)}return{getLocaleData:l,setLocaleData:a,addLocaleData:_,resetLocaleData:i,subscribe:o,__:x,_x:f,_n:A,_nx:m,isRTL:S,hasTranslation:E}};function G(t){return typeof t!="string"||t===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function I(t){return typeof t!="string"||t===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function P(t,e){return function(n,s,c,o=10){const l=t[e];if(!I(n)||!G(s))return;if(typeof c!="function"){console.error("The hook callback must be a function.");return}if(typeof o!="number"){console.error("If specified, the hook priority must be a number.");return}const d={callback:c,priority:o,namespace:s};if(l[n]){const a=l[n].handlers;let _;for(_=a.length;_>0&&!(o>=a[_-1].priority);_--);_===a.length?a[_]=d:a.splice(_,0,d),l.__current.forEach(i=>{i.name===n&&i.currentIndex>=_&&i.currentIndex++})}else l[n]={handlers:[d],runs:0};n!=="hookAdded"&&t.doAction("hookAdded",n,s,c,o)}}function k(t,e,r=!1){return function(s,c){const o=t[e];if(!I(s)||!r&&!G(c))return;if(!o[s])return 0;let l=0;if(r)l=o[s].handlers.length,o[s]={runs:o[s].runs,handlers:[]};else{const d=o[s].handlers;for(let a=d.length-1;a>=0;a--)d[a].namespace===c&&(d.splice(a,1),l++,o.__current.forEach(_=>{_.name===s&&_.currentIndex>=a&&_.currentIndex--}))}return s!=="hookRemoved"&&t.doAction("hookRemoved",s,c),l}}function z(t,e){return function(n,s){const c=t[e];return typeof s<"u"?n in c&&c[n].handlers.some(o=>o.namespace===s):n in c}}function C(t,e,r=!1){return function(s,...c){const o=t[e];o[s]||(o[s]={handlers:[],runs:0}),o[s].runs++;const l=o[s].handlers;if(!l||!l.length)return r?c[0]:void 0;const d={name:s,currentIndex:0};for(o.__current.push(d);d.currentIndex<l.length;){const _=l[d.currentIndex].callback.apply(null,c);r&&(c[0]=_),d.currentIndex++}if(o.__current.pop(),r)return c[0]}}function $(t,e){return function(){var c;var n;const s=t[e];return(n=(c=s.__current[s.__current.length-1])==null?void 0:c.name)!==null&&n!==void 0?n:null}}function K(t,e){return function(n){const s=t[e];return typeof n>"u"?typeof s.__current[0]<"u":s.__current[0]?n===s.__current[0].name:!1}}function M(t,e){return function(n){const s=t[e];if(I(n))return s[n]&&s[n].runs?s[n].runs:0}}class it{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=P(this,"actions"),this.addFilter=P(this,"filters"),this.removeAction=k(this,"actions"),this.removeFilter=k(this,"filters"),this.hasAction=z(this,"actions"),this.hasFilter=z(this,"filters"),this.removeAllActions=k(this,"actions",!0),this.removeAllFilters=k(this,"filters",!0),this.doAction=C(this,"actions"),this.applyFilters=C(this,"filters",!0),this.currentAction=$(this,"actions"),this.currentFilter=$(this,"filters"),this.doingAction=K(this,"actions"),this.doingFilter=K(this,"filters"),this.didAction=M(this,"actions"),this.didFilter=M(this,"filters")}}function st(){return new it}const ot=st(),g=rt(void 0,void 0,ot);g.getLocaleData.bind(g);g.setLocaleData.bind(g);g.resetLocaleData.bind(g);g.subscribe.bind(g);const ct=g.__.bind(g);g._x.bind(g);g._n.bind(g);g._nx.bind(g);g.isRTL.bind(g);g.hasTranslation.bind(g);let H;const lt=function(t,e){H&&clearTimeout(H),H=setTimeout(t,e)};export{ct as _,lt as d,at as s};
