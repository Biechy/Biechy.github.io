"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[643],{1920:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(758);var r=a(3526),n=a(9960),s=a(4911),i=a(428),l=a(840),o=a(6383),c=a(600),d=a(2049),m=a(2430),g=a(3738),u=a(6070);function h(e){const t=(0,g.kJ)(e);return(0,u.jsx)(m.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.A)(),{blogDescription:r,blogTitle:i,permalink:l}=t,o="/"===l?a:i;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.be,{title:o,description:r}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:a,sidebar:r}=e;return(0,u.jsxs)(l.A,{sidebar:r,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(o.A,{metadata:t})]})}function j(e){return(0,u.jsxs)(s.e3,{className:(0,r.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,u.jsx)(x,{...e}),(0,u.jsx)(h,{...e}),(0,u.jsx)(p,{...e})]})}},6383:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var r=a(5545),n=a(2029),s=a(6070);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,s.jsx)(n.A,{permalink:a,title:(0,s.jsx)(r.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,s.jsx)(n.A,{permalink:i,title:(0,s.jsx)(r.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},7390:(e,t,a)=>{a.d(t,{A:()=>R});a(758);var r=a(3526),n=a(3738),s=a(6070);function i(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})}var l=a(256);const o={title:"title_hMZT"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,n.e7)(),{permalink:c,title:d}=a,m=i?"h1":"h2";return(0,s.jsx)(m,{className:(0,r.A)(o.title,t),children:i?d:(0,s.jsx)(l.A,{to:c,children:d})})}var d=a(5545),m=a(7878),g=a(8921);const u={container:"container_Ynxu"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,s.jsx)(s.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,s.jsx)("time",{dateTime:t,children:a})}function p(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:i,readingTime:l}=a,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,r.A)(u.container,"margin-vert--md",t),children:[(0,s.jsx)(x,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(h,{readingTime:l})]})]});var c}var A=a(9843);const f={authorCol:"authorCol_GFoa",imageOnlyAuthorRow:"imageOnlyAuthorRow_o2iF",imageOnlyAuthorCol:"imageOnlyAuthorCol_c1IM"};function b(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,n.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,s.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,s.jsx)("div",{className:(0,r.A)(!l&&(o?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,s.jsx)(A.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(j,{}),(0,s.jsx)(b,{})]})}var w=a(8854),N=a(7993);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,n.e7)();return(0,s.jsx)("div",{id:i?w.LU:void 0,className:(0,r.A)("markdown",a),children:(0,s.jsx)(N.A,{children:t})})}var k=a(428),C=a(6172),y=a(8467);function P(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function M(e){const{blogPostTitle:t,...a}=e;return(0,s.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,s.jsx)(P,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,g=a.length>0;if(!(g||m||l))return null;if(t){const e=!!(l||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,s.jsx)("div",{className:(0,r.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(y.A,{tags:a})})}),e&&(0,s.jsx)(C.A,{className:(0,r.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,s.jsx)("div",{className:(0,r.A)("col",{"col--9":m}),children:(0,s.jsx)(y.A,{tags:a})}),m&&(0,s.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":g}),children:(0,s.jsx)(M,{blogPostTitle:i,to:e.permalink})})]})}function R(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(i,{className:(0,r.A)(l,a),children:[(0,s.jsx)(v,{}),(0,s.jsx)(T,{children:t}),(0,s.jsx)(U,{})]})}},2049:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var r=a(3738),n=a(7390),s=a(6070);function i(e){let{items:t,component:a=n.A}=e;return(0,s.jsx)(s.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,s.jsx)(r.in,{content:t,children:(0,s.jsx)(a,{children:(0,s.jsx)(t,{})})},t.metadata.permalink)}))})}},5583:(e,t,a)=>{a.d(t,{A:()=>n});a(758);var r=a(6070);function n(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:(0,r.jsx)("path",{d:"M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"})})}},4223:(e,t,a)=>{a.d(t,{A:()=>n});a(758);var r=a(6070);function n(e){return(0,r.jsx)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"})})}}}]);