"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[658],{7895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>k,default:()=>R,frontMatter:()=>E,metadata:()=>D,toc:()=>V});var r=n(6070),a=n(8355);var i=n(758),s=n(3526),l=n(5195),o=n(5557),c=n(6779),u=n(8236),d=n(2997),h=n(4907);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=f(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,u]=b({queryString:n,groupId:r}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,h.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=o??d;return m({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var x=n(5001);const v={tabList:"tabList_U_DZ",tabItem:"tabItem_i8qJ"};function y(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==a&&(u(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=g(e);return(0,r.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,r.jsx)(y,{...t,...e}),(0,r.jsx)(j,{...t,...e})]})}function A(e){const t=(0,x.A)();return(0,r.jsx)(w,{...e,children:p(e.children)},String(t))}const T={tabItem:"tabItem_QHLN"};function I(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(T.tabItem,a),hidden:n,children:t})}var N=n(2442);const E={sidebar_position:2},k="Machine Learning",D={id:"machine-learning/index",title:"Machine Learning",description:"FAIRE PAR TYPE DE DONNEES POUR STATISTICAL LEARNING",source:"@site/knowledge/machine-learning/index.md",sourceDirName:"machine-learning",slug:"/machine-learning/",permalink:"/biechy.github.io/knowledge/machine-learning/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to my Mental Palace",permalink:"/biechy.github.io/knowledge/welcome"},next:{title:"Statistical Modeling",permalink:"/biechy.github.io/knowledge/category/statistical-modeling"}},S={},V=[];function C(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"machine-learning",children:"Machine Learning"})}),"\n",(0,r.jsx)(t.p,{children:"FAIRE PAR TYPE DE DONNEES POUR STATISTICAL LEARNING"}),"\n",(0,r.jsx)(t.p,{children:"et faire les cas particuliers (missing values + high dimensions)"}),"\n",(0,r.jsxs)(A,{children:[(0,r.jsx)(I,{value:"orange",label:"Proof",attributes:{type:"theorem"},children:(0,r.jsx)("div",{class:"tab-content","data-type":"theorem",children:(0,r.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})})}),(0,r.jsx)(I,{value:"banan",label:"Definiton",attributes:{type:"definition"},children:(0,r.jsx)("div",{class:"tab-content","data-type":"definition",children:(0,r.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})})}),(0,r.jsx)(I,{value:"bann",label:"Definiton",attributes:{type:"tips"},children:(0,r.jsx)("div",{class:"tab-content","data-type":"tips",children:(0,r.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})})}),(0,r.jsx)(I,{value:"bana",label:"Definiton",attributes:{type:"proof"},children:(0,r.jsx)("div",{class:"tab-content","data-type":"proof",children:(0,r.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})})}),(0,r.jsx)(I,{value:"bnan",label:"Definiton",attributes:{type:"exercise"},children:(0,r.jsx)("div",{class:"tab-content","data-type":"exercise",children:(0,r.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})})}),(0,r.jsx)(I,{value:"ba",label:"Definiton",attributes:{type:"proposition"},children:(0,r.jsx)("div",{class:"tab-content","data-type":"proposition",children:(0,r.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})})})]}),"\n",(0,r.jsx)(N.A,{})]})}function R(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}},2442:(e,t,n)=>{n.d(t,{A:()=>x});n(758);var r=n(3526),a=n(686),i=n(256),s=n(7878),l=n(4376),o=n(5545),c=n(1091);const u={cardContainer:"cardContainer_E_wU",cardTitle:"cardTitle_ApXF",cardDescription:"cardDescription_ifMK"};var d=n(6070);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:a,description:i}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:a,children:[n," ",a]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const n=(0,a.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function m(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const i=(0,a.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(b,{item:e})},t)))})}},7878:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(758),a=n(9960);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),i=n.pluralForms.indexOf(a);return r[Math.min(i,r.length-1)]}(n,t,e)}}},8355:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(758);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);