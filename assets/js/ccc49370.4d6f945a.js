"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[249],{7390:(e,t,n)=>{n.d(t,{A:()=>M});n(758);var a=n(3526),r=n(3738),s=n(6070);function i(e){let{children:t,className:n}=e;return(0,s.jsx)("article",{className:n,children:t})}var o=n(256);const l={title:"title_hMZT"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,r.e7)(),{permalink:c,title:d}=n,m=i?"h1":"h2";return(0,s.jsx)(m,{className:(0,a.A)(l.title,t),children:i?d:(0,s.jsx)(o.A,{to:c,children:d})})}var d=n(5545),m=n(7878),u=n(8921);const h={container:"container_Ynxu"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,s.jsx)(s.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,s.jsx)("time",{dateTime:t,children:n})}function f(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:n}=(0,r.e7)(),{date:i,readingTime:o}=n,l=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,a.A)(h.container,"margin-vert--md",t),children:[(0,s.jsx)(x,{date:i,formattedDate:(c=i,l.format(new Date(c)))}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{}),(0,s.jsx)(g,{readingTime:o})]})]});var c}var v=n(9843);const j={authorCol:"authorCol_GFoa",imageOnlyAuthorRow:"imageOnlyAuthorRow_o2iF",imageOnlyAuthorCol:"imageOnlyAuthorCol_c1IM"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,r.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,s.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",o?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,s.jsx)("div",{className:(0,a.A)(!o&&(l?"col col--12":"col col--6"),o?j.imageOnlyAuthorCol:j.authorCol),children:(0,s.jsx)(v.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(p,{}),(0,s.jsx)(b,{})]})}var N=n(8854),L=n(7993);function w(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,r.e7)();return(0,s.jsx)("div",{id:i?N.LU:void 0,className:(0,a.A)("markdown",n),children:(0,s.jsx)(L.A,{children:t})})}var C=n(428),y=n(6172),T=n(8467);function k(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function _(e){const{blogPostTitle:t,...n}=e;return(0,s.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,s.jsx)(k,{})})}function H(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:n,title:i,editUrl:o,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&l,u=n.length>0;if(!(u||m||o))return null;if(t){const e=!!(o||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,a.A)("row","margin-top--sm",C.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(T.A,{tags:n})})}),e&&(0,s.jsx)(y.A,{className:(0,a.A)("margin-top--sm",C.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,s.jsx)("div",{className:(0,a.A)("col",{"col--9":m}),children:(0,s.jsx)(T.A,{tags:n})}),m&&(0,s.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":u}),children:(0,s.jsx)(_,{blogPostTitle:i,to:e.permalink})})]})}function M(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(i,{className:(0,a.A)(o,n),children:[(0,s.jsx)(A,{}),(0,s.jsx)(w,{children:t}),(0,s.jsx)(H,{})]})}},165:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(758);var a=n(3526),r=n(4911),s=n(428),i=n(3738),o=n(840),l=n(7390),c=n(5545),d=n(2029),m=n(6070);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,i.e7)(),{title:n,description:a,date:s,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(r.be,{title:n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:s}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var g=n(2430);function x(){const e=(0,i.J_)();return(0,m.jsx)(g.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=n(6131),p=n(359);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:r}=(0,i.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:x}=d;return(0,m.jsxs)(o.A,{sidebar:t,toc:!h&&r.length>0?(0,m.jsx)(f.A,{toc:r,minHeadingLevel:g,maxHeadingLevel:x}):void 0,children:[(0,m.jsx)(p.A,{metadata:a}),(0,m.jsx)(l.A,{children:n}),(s||c)&&(0,m.jsx)(u,{nextItem:s,prevItem:c})]})}function j(e){const t=e.content;return(0,m.jsx)(i.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(r.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(x,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},1853:(e,t,n)=>{n.d(t,{A:()=>c});n(758);var a=n(3526),r=n(2761),s=n(428),i=n(3291),o=n(6070);function l(e){let{className:t}=e;return(0,o.jsx)(i.A,{type:"caution",title:(0,o.jsx)(r.Rc,{}),className:(0,a.A)(t,s.G.common.unlistedBanner),children:(0,o.jsx)(r.Uh,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.AE,{}),(0,o.jsx)(l,{...e})]})}},359:(e,t,n)=>{n.d(t,{A:()=>d});n(758);var a=n(3526),r=n(2761),s=n(428),i=n(3291),o=n(6070);function l(e){let{className:t}=e;return(0,o.jsx)(i.A,{type:"caution",title:(0,o.jsx)(r.Yh,{}),className:(0,a.A)(t,s.G.common.draftBanner),children:(0,o.jsx)(r.TT,{})})}var c=n(1853);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||a.unlisted)&&(0,o.jsx)(c.A,{}),a.draft&&(0,o.jsx)(l,{})]})}},5344:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(758),r=n(6139);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(256),u=n(6070);function h(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?(0,u.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const x=(0,r.p)(),f=c??x.tableOfContents.minHeadingLevel,p=m??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>i({toc:s(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:p}}),[o,l,f,p])),(0,u.jsx)(g,{toc:v,className:n,linkClassName:o,...h})}},6131:(e,t,n)=>{n.d(t,{A:()=>c});n(758);var a=n(3526),r=n(5344);const s={tableOfContents:"tableOfContents_M9xX",docItemContainer:"docItemContainer_iAEB"};var i=n(6070);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(r.A,{...n,linkClassName:o,linkActiveClassName:l})})}},2761:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>i,TT:()=>d,Uh:()=>o,Yh:()=>c});n(758);var a=n(5545),r=n(2430),s=n(6070);function i(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(r.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},5583:(e,t,n)=>{n.d(t,{A:()=>r});n(758);var a=n(6070);function r(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:(0,a.jsx)("path",{d:"M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"})})}},4223:(e,t,n)=>{n.d(t,{A:()=>r});n(758);var a=n(6070);function r(e){return(0,a.jsx)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"})})}}}]);