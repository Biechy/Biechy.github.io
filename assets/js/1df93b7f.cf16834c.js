"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[583],{4933:(e,t,a)=>{a.d(t,{Y8:()=>l,Or:()=>c,eZ:()=>m,t$:()=>w,eL:()=>y,BJ:()=>N});var r=a(758),s=a(7898),n=a(6070);const i=e=>{let{degree:t,school:a,date:r,location:i,description:l,tags:o,honors:c}=e;return(0,n.jsxs)("div",{className:"w-full space-y-2 relative overflow-hidden group bg-background-color dark:bg-background-color-dark hover:bg-neutral-50 dark:hover:bg-neutral-950 transition duration-0 rounded-lg shadow px-3 py-4 sm:p-4 border-solid border border-stone-200 dark:border-stone-600",children:[(0,n.jsxs)("p",{className:"absolute text-sm right-2 top-3",children:[r.start,"-",r.end||"Present"]}),(0,n.jsx)("p",{className:"absolute text-sm right-2 top-6",children:i}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"relative flex items-center justify-between w-3/4 xl:w-full",children:(0,n.jsx)("a",{className:"text-md font-bold hover:underline",href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.title})}),(0,n.jsx)("div",{className:"relative flex flex-wrap flex-row gap-2 sm:gap-5",children:a.map(((e,t)=>(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)(s.A,{className:"w-12 rounded-sm",sources:{light:e.logo,dark:e.logo.replace(".png","-dark.png")},alt:e.name}),(0,n.jsx)("a",{className:"text-sm font-semibold hover:underline",href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.name})]},t)))})]}),(0,n.jsx)("p",{className:"text-xs text-neutral-600 dark:text-neutral-400 w-full",children:l}),(0,n.jsx)("p",{className:"text-xs font-bold text-neutral-600 dark:text-neutral-400 w-full",children:"none"!==c&&c}),(0,n.jsx)("div",{className:"flex flex-wrap flex-row items-center gap-2",children:o&&o.map((e=>(0,n.jsx)("span",{className:"px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md",children:e},e)))})]})},l=e=>{let{educations:t}=e;return(0,n.jsxs)("div",{className:"relative flex flex-wrap gap-4",children:[(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none",children:(0,n.jsx)("div",{className:"absolute top-0 left-[10%] w-2 h-full bg-stone-300 dark:bg-stone-600 shadow-lg"})}),t.map(((e,t)=>(0,n.jsx)(i,{degree:e.degree,school:e.school,date:e.date,location:e.location,description:e.description,tags:e.tags,honors:e.honors},t)))]})},o=e=>{let{title:t,company:a,date:r,location:i,description:l,results:o,tags:c}=e;return(0,n.jsxs)("div",{className:"w-full space-y-2 relative overflow-hidden group bg-background-color dark:bg-background-color-dark hover:bg-neutral-50 dark:hover:bg-neutral-900 transition duration-0 rounded-lg shadow px-3 py-4 sm:p-4 border-solid border border-stone-200 dark:border-stone-600",children:[(0,n.jsx)("p",{className:"absolute text-sm right-2 top-3",children:r.end?r.end===r.start?`${r.start} (${r.information})`:`${r.start} - ${r.end}`:`${r.start} - Present`}),(0,n.jsx)("p",{className:"absolute text-sm right-2 top-6",children:i}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"relative flex items-center justify-between w-3/4",children:(0,n.jsx)("a",{className:"text-md font-bold",children:t})}),(0,n.jsx)("div",{className:"relative flex flex-wrap flex-row gap-5",children:(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)(s.A,{className:"max-w-12 rounded-sm",sources:{light:a.logo,dark:a.logo.replace(".png","-dark.png")},alt:a.name}),(0,n.jsx)("a",{className:"text-sm font-semibold hover:underline",href:a.link,target:"_blank",rel:"noopener noreferrer",children:a.name})]},a.name)})]}),(0,n.jsxs)("p",{className:"text-xs text-neutral-600 dark:text-neutral-400 w-full",children:["Mission: ",l]}),(0,n.jsx)("p",{className:"text-xs text-neutral-600 dark:text-neutral-400 w-full",children:o&&`Results: ${o}`}),(0,n.jsx)("div",{className:"flex flex-row flex-wrap items-center gap-2",children:c&&c.map((e=>(0,n.jsx)("span",{className:"px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md",children:e},e)))})]})},c=e=>{let{experiences:t}=e;return(0,n.jsxs)("div",{className:"relative flex flex-wrap gap-4",children:[(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none",children:(0,n.jsx)("div",{className:"absolute top-0 right-[10%] w-2 h-full bg-stone-300 dark:bg-stone-600 shadow-lg"})}),t.map(((e,t)=>(0,n.jsx)(o,{title:e.title,company:e.company,date:e.date,location:e.location,description:e.description,results:e.results,tags:e.tags},t)))]})};var d=a(2443);const m=e=>{let{news:t}=e;const[a,s]=(0,r.useState)(5);return(0,n.jsxs)("div",{className:"-space-y-2",children:[t.slice(0,a).map(((e,t)=>(0,n.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,n.jsx)("p",{className:"text-sm min-w-14",children:e.date}),(0,n.jsx)("p",{className:"min-w-5",children:e.emoji}),(0,n.jsx)(d.o,{className:"text-sm",children:e.description})]},t))),(0,n.jsx)("a",{className:"text-sm hover:underline cursor-pointer block text-right mr-10",onClick:()=>s(-1===a?5:-1),children:-1===a?"Show less":"Show all"})]})},p=e=>{let{activeButton:t,onButtonChange:a}=e;const r=["all","AI","software"];return(0,n.jsxs)("div",{className:"relative mt-12 flex bg-neutral-100 dark:bg-neutral-900  rounded-md overflow-hidden  text-sm shadow-xl",style:{width:45*r.length+"px"},children:[(0,n.jsx)("div",{className:"absolute top-0 left-0 h-full bg-primary-light dark:bg-primary-dark transform transition-transform duration-300 ease-in-out",style:{width:100/r.length+"%",transform:`translateX(${100*r.indexOf(t)}%)`}}),r.map((e=>(0,n.jsx)("div",{className:"relative flex-1 py-0.5 px-1 text-center cursor-pointer transition-all text-neutral-800 dark:text-neutral-300",onClick:()=>a(e),children:"software"===e?"Soft":e.charAt(0).toUpperCase()+e.slice(1)},e)))]})};var h=a(1917);const g=e=>{let{name:t,size:a,clickable:r}=e;const s=h.J.find((e=>e.name===t));return(0,n.jsx)("div",{className:"flex cursor-pointer place-items-center ",title:t,onClick:()=>r&&window.open(s.link,"_blank","noopener noreferrer"),children:(0,n.jsx)("img",{src:s.png,alt:t,className:"max-w-8 max-h-max-w-8 object-contain"})})},x=e=>{let{size:t,message:a,category:r,degrees:s,random:i,sizeIcon:l}=e;const o=a.toLowerCase(),c=i,d=1^c,m=[`animate-spin-${o}`,`animate-spin-${o}-reverse`],p=[`group-hover:animate-spin-${o}-pause`,`group-hover:animate-spin-${o}-reverse-pause`],x=t/2,u=h.J.filter((e=>e.level===o)),f=Array.from({length:u.length},((e,t)=>{const a=t/u.length*2*Math.PI;return{x:x+x*Math.cos(a),y:x+x*Math.sin(a)}}));return(0,n.jsxs)("div",{className:"absolute flex flex-wrap justify-center align-center",children:[(0,n.jsxs)("svg",{width:t,height:t,className:"absolute",style:{transform:`rotate(-${s}deg)`},children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:`circlePath-${a}`,d:`M ${x},${x} m -${x-l/2},0 a ${x-l/2},${x-l/2} 0 1,1 ${2*(x-l/2)},0 a ${x-l/2},${x-l/2} 0 1,1 -${2*(x-l/2)},0`})}),(0,n.jsx)("text",{fontSize:"20",className:"text-sm fill-stone-300 dark:fill-stone-600",children:(0,n.jsx)("textPath",{href:`#circlePath-${a}`,startOffset:"50%",textAnchor:"middle",children:a})})]}),(0,n.jsx)("div",{className:`relative rounded-full border-solid border-1 border-stone-200 dark:border-stone-600 ${m[c]} ${p[c]}`,style:{width:t,height:t},children:f.map(((e,t)=>(0,n.jsx)("div",{className:`absolute ${m[d]} ${p[d]}`,style:{left:e.x-l/2,top:e.y-l/2},children:(0,n.jsx)(g,{name:u[t].name,size:r===u[t].category||"all"===r?l:0,clickable:!0})},t)))})]})},u=e=>{let{children:t,className:a}=e;const s=(0,r.useRef)(null),i=(0,r.useRef)(!1),l=(0,r.useRef)(0),o=(0,r.useRef)(0),c=()=>{i.current=!1};return(0,r.useEffect)((()=>{const e=e=>{s.current&&s.current.contains(e.target)&&e.preventDefault()};return document.addEventListener("wheel",e,{passive:!1}),()=>{document.removeEventListener("wheel",e)}}),[]),(0,n.jsx)("div",{className:"relative flex "+a,children:(0,n.jsxs)("div",{ref:s,className:"flex overflow-x-scroll scrollbar-hide",onWheel:e=>{s.current&&s.current.scrollBy({left:2*e.deltaY,behavior:"smooth"})},onMouseDown:e=>{i.current=!0,l.current=e.pageX-s.current.offsetLeft,o.current=s.current.scrollLeft},onMouseMove:e=>{if(!i.current)return;const t=e.pageX-s.current.offsetLeft-l.current;s.current.scrollLeft=o.current-t},onMouseUp:c,onMouseLeave:c,children:[(0,n.jsx)("div",{className:"flex gap-4 mr-24 sm:mr-32",children:t}),(0,n.jsx)("div",{className:"flex right-0 absolute w-24 sm:w-36 h-full  bg-gradient-to-r from-transparent to-background-color dark:to-background-color-dark  group-hover:to-neutral-50 dark:group-hover:to-neutral-900 "})]})})},f=e=>{let{name:t,description:a,date:r,technos:i,link:l,repo_link:o,img:c}=e;return(0,n.jsxs)("div",{className:"w-full space-y-4 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition duration-0 rounded-lg shadow px-3 py-4 sm:p-4 border-solid border border-stone-200 dark:border-stone-600",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,n.jsx)("a",{className:"text-lg font-bold hover:underline",href:l,target:"_blank",rel:"noopener noreferrer",children:t}),(0,n.jsx)("p",{className:"text-sm",children:r.start===r.end?`${r.start}`:`${r.start} - ${r.end||"Present"}`})]}),(0,n.jsx)(u,{className:"sm:w-2/3",children:i.map(((e,t)=>(0,n.jsx)(g,{name:e,size:36,clickable:!1},t)))})]}),(0,n.jsx)("p",{className:"text-xs text-neutral-600 dark:text-neutral-400 w-full  sm:w-3/5",children:a.en}),(0,n.jsxs)("div",{className:"flex flex-row items-center gap-2 w-1/2",children:[(0,n.jsxs)("div",{onClick:()=>window.open(o,"_blank","noopener noreferrer"),className:"flex items-center justify-between px-2.5 py-1.5 shadow-sm text-sm text-neutral-800 dark:text-neutral-300 bg-primary-light dark:bg-primary-dark hover:bg-primary-lighter dark:hover:bg-primary-darker rounded-md cursor-pointer",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",width:"18",height:"18",children:(0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12c0 4.4 2.86 8.13 6.84 9.44.5.09.68-.22.68-.48v-1.69c-2.8.61-3.39-1.35-3.39-1.35-.46-1.17-1.13-1.48-1.13-1.48-.92-.62.07-.61.07-.61 1.02.07 1.55 1.05 1.55 1.05.9 1.55 2.35 1.1 2.91.85.09-.65.35-1.1.64-1.35-2.28-.26-4.68-1.14-4.68-5.08 0-1.12.4-2.04 1.07-2.76-.11-.26-.47-1.31.1-2.73 0 0 .86-.28 2.82 1.06.82-.23 1.69-.34 2.56-.34.87 0 1.74.12 2.56.34 1.96-1.34 2.82-1.06 2.82-1.06.57 1.42.21 2.48.1 2.73.67.72 1.07 1.64 1.07 2.76 0 3.96-2.4 4.82-4.68 5.08.36.31.68.92.68 1.85v2.75c0 .26.18.57.68.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"})}),(0,n.jsx)("span",{className:"ml-2",children:"Code"})]}),(0,n.jsxs)("div",{onClick:()=>window.open(l,"_blank","noopener noreferrer"),className:"flex items-center justify-between px-2.5 py-1.5 shadow-sm text-sm text-neutral-800 dark:text-neutral-300 bg-primary-light dark:bg-primary-dark hover:bg-primary-lighter dark:hover:bg-primary-darker rounded-md cursor-pointer",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-globe-europe-africa",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.81.81 0 0 1 1.034-.275.81.81 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34q.118.04.243.054c.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.33.33 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501"})}),(0,n.jsx)("span",{className:"ml-2 ",children:"Web"})]})]}),(0,n.jsx)(s.A,{sources:{light:c,dark:c.replace(".webp","-dark.webp")},alt:"project page",className:"max-w-0 sm:max-w-xs absolute -bottom-10 -right-40 xl:-right-20 shadow-xl rounded-t-xl  transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"})]})},w=e=>{let{projects:t}=e;return(0,n.jsx)("div",{className:"flex flex-wrap gap-4",children:t.map(((e,t)=>(0,n.jsx)(f,{name:e.name,description:e.description,tag:e.tag,date:e.date,technos:e.technos,link:e.link,repo_link:e.repo_link,img:e.img},t)))})},v=[{name:"lambda",png:"./img/letters/lambda.png"},{name:"pi",png:"./img/letters/pi.png"},{name:"gamma",png:"./img/letters/gamma.png"},{name:"alpha",png:"./img/letters/alpha.png"},{name:"beta",png:"./img/letters/beta.png"},{name:"epsilon",png:"./img/letters/epsilon.png"}],j=e=>{let{title:t,description:a,date:r,link:s,authors:i,journal:l,letter:o}=e;const c=v.find((e=>e.name===o));return(0,n.jsxs)("div",{className:"w-full space-y-2 relative overflow-hidden group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 rounded-lg shadow px-3 py-4 sm:p-4 border-solid border border-stone-200 dark:border-stone-600",children:[(0,n.jsx)("div",{className:"flex w-full",children:(0,n.jsx)("a",{className:"text-xs sm:text-base font-bold hover:underline w-2/3 sm:w-3/4",href:s,target:"_blank",rel:"noopener noreferrer",children:t})}),(0,n.jsx)("div",{className:"flex flex-row items-center gap-2 w-full",children:i.map(((e,t)=>(0,n.jsx)("a",{href:e.permalink,target:"_blank",rel:"noopener noreferrer",className:"text-xs hover:underline",children:e.name},t)))}),(0,n.jsx)("p",{className:"text-xs text-neutral-600 dark:text-neutral-400 w-3/4",children:a.en}),l&&(0,n.jsxs)("p",{className:"italic text-xs text-neutral-600 dark:text-neutral-400 w-2/3",children:["Journal: ",l]}),(0,n.jsx)("img",{src:c.png,className:"absolute flex -right-4 -bottom-2 h-1/2 -rotate-6 transition group-hover:-translate-x-1 group-hover:translate-y-3 group-hover:-rotate-12"}),(0,n.jsx)("p",{className:"absolute text-xs right-2 top-2",children:r})]})},y=e=>{let{publications:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:t.map(((e,t)=>(0,n.jsx)(j,{title:e.title,description:e.description,date:e.date,link:e.link,authors:e.authors,journal:e.journal,letter:e.letter},t)))}),(0,n.jsx)("a",{className:"text-sm hover:underline cursor-pointer block text-right mr-10",href:"/publications",children:"All Publications"})]})};var b=a(3774);const k=[Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())],N=()=>{const[e,t]=(0,r.useState)("all"),a=[400,300,200];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"hidden sm:flex group h-[425px] items-center justify-center",children:[(0,n.jsx)(x,{size:a[0],category:e,message:"Intermediate",degrees:45,random:k[0],sizeIcon:36},"intermediate"),(0,n.jsx)(x,{size:a[1],category:e,message:"Advanced",degrees:130,random:k[1],sizeIcon:36},"advanced"),(0,n.jsx)(x,{size:a[2],category:e,message:"Expert",degrees:70,random:k[2],sizeIcon:36},"expert"),(0,n.jsx)("img",{src:"./img/memojie/computer.png",className:"absolute w-24 aspect-square rounded-full cursor-pointer mb-10",title:"Me ! :)"}),(0,n.jsx)("div",{className:"relative inline-flex",children:(0,n.jsx)(p,{activeButton:e,onButtonChange:t})})]}),(0,n.jsxs)("div",{className:"flex flex-col sm:hidden gap-10",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"AI"}),(0,n.jsx)(u,{className:"flex",children:b.Jp.map(((e,t)=>"AI"===e.category&&(0,n.jsx)(g,{name:e.name,size:36,clickable:!0},t)))})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Software"}),(0,n.jsx)(u,{className:"flex",children:b.Jp.map(((e,t)=>"software"===e.category&&(0,n.jsx)(g,{name:e.name,size:36,clickable:!0},t)))})]})]})]})}},3774:(e,t,a)=>{a.d(t,{WX:()=>r,aN:()=>s,wI:()=>n,dt:()=>i,Mu:()=>l,Jp:()=>o.J});const r=[{degree:{title:"PhD in Artificial Intelligence",link:"https://edips.lisn.upsaclay.fr/"},school:[{name:"University of Paris-Saclay",link:"https://www.universite-paris-saclay.fr/",logo:"./img/logo/upsaclay.png"}],date:{start:"2024",end:"2027"},location:"Paris, France",description:"Courses in computer science, artificial intelligence and developements.",tags:["Machine Learning","Deep Learning","Computer Science","MLOps"],honors:"none"},{degree:{title:"MSc in Mathematics (spec. in Artificial Intelligence)",link:"https://www.imo.universite-paris-saclay.fr/fr/etudiants/masters/mathematiques-et-applications/m2/m2-mathematique-et-intelligence-artificielle/"},school:[{name:"University of Paris-Saclay",link:"https://www.universite-paris-saclay.fr/",logo:"./img/logo/upsaclay.png"},{name:"CentraleSup\xe9lec",link:"https://www.centralesupelec.fr/",logo:"./img/logo/centralesupelec.png"}],date:{start:"2022",end:"2024"},location:"Orsay, France",description:"One of the best programs in France for mathematics and artificial intelligence. Customisable program of shared courses with Polytechnique (Stat&ML) and ENS Paris-Saclay (MVA).",tags:["Machine Learning","Statistics","Optimization","Probability"],honors:"High Honors"},{degree:{title:"BSc Double Major in Mathematics and Physics Minor in Engineering",link:"https://www.universite-paris-saclay.fr/formation/licence-double-diplome/mathematiques-physique-et-sciences-pour-lingenieur"},school:[{name:"University of Paris-Saclay",link:"https://www.universite-paris-saclay.fr/",logo:"./img/logo/upsaclay.png"}],date:{start:"2019",end:"2022"},location:"Orsay, France",description:"Best university program in France for mathematics and physics. Physics courses are shared with ENS Paris-Saclay.",tags:["Mathematics","Theorical Physics","Engineering"],honors:"Honors"}],s=[{title:"AI Researcher (PhD)",company:{name:"Institut National de Recherche en Informatique et en Automatique",link:"https://www.inria.fr/",logo:"./img/logo/inria.png"},date:{start:"2024",end:null,information:null},location:"Palaiseau, France",description:"Create a privacy enhancement tool for content using LLMs.",tags:["Machine Learning","Deep Learning","NLP","Metric creation","LLM","Fine-tuning","Privacy"]},{title:"AI Researcher (internship)",company:{name:"National Center of High-performance Computing",link:"https://www.nchc.org.tw/",logo:"./img/logo/nchc.png"},date:{start:"2024",end:"2024",information:"5 months"},location:"Hsinchu, Taiwan",description:"Create and implement deep learning networks to improve traffic forcasting of Taichung.",results:"Improved traffic forcasting accuracy by two. Creation of a new model state of the art named xGRU (inspired by xLSTM and GRU). Paper in progress...",tags:["Research","Time Series Forecasting","Deep Learning","xLSTM","xGRU","Python","PyTorch"]},{title:"Data Engineer (internship)",company:{name:"Exotrail",link:"https://www.exotrail.com/",logo:"./img/logo/exotrail.png"},date:{start:"2023",end:"2023",information:"6 months"},location:"Massy, France",description:"Create and implement a data processing pipeline, from test bench trials to computer analysis on employees' computers.",results:"Every 15 minutes, the data is processed, stored without duplication in two separate databases (production or development) and can be loaded onto IT tools. Data can be processed retrospectively.",tags:["Data","Pipeline","Docker","Python","MongoDB","Apache Nifi"]}],n=[{description:"I start my PhD at Inria and Paris-Saclay as NLP Researcher.",category:"career",date:"10/2024",emoji:"\ud83e\uddd9"},{description:"I have finish my MSc in Mathematics and AI with high honors.",category:"scholar",date:"09/2024",emoji:"\ud83d\udc68\u200d\ud83c\udf93"},{description:"The PETSCRAFT team accepted me as PhD to work on privacy and LLM !",category:"career",date:"07/2024",emoji:"\ud83c\udf89"},{description:"I start my internship at NCHC (Taiwan) as AI Researcher. End in September.",category:"career",date:"05/2024",emoji:"\ud83d\udc68\u200d\ud83d\udd2c"},{description:"I have been accepted in the funded internship program of NARLabs (Taiwan). Thanks to the DataIA Institute for the additional grant.",category:"career",date:"03/2024",emoji:"\u2708\ufe0f"},{description:"My MixtAI scholarship from the DataIA Institute has been renewed.",category:"scholar",date:"09/2023",emoji:"\ud83d\udcb0"},{description:"I start my internship at Exotrail as Data Engineer. End in August.",category:"career",date:"03/2023",emoji:"\ud83e\uddd1\u200d\ud83d\udcbb"},{description:"I have received the MixtAI scholarship from the DataIA Institute.",category:"scholar",date:"09/2022",emoji:"\ud83d\udcb0"},{description:"I have finish my double major licence degree in Mathematics and Physics with honors.",category:"scholar",date:"08/2022",emoji:"\ud83d\udc68\u200d\ud83c\udf93"},{description:"I have been accepted in the Master of Science in Mathematics and AI at the University of Paris-Saclay",category:"scholar",date:"07/2022",emoji:"\ud83c\udf93"}],i=[{name:"Portfolio",description:{en:"My personal portfolio website, showcasing my projects, skills, professionnal experience, and even more!"},tag:["web","main"],date:{start:2024,end:2024},technos:["React","TailwindCSS","TypeScript"],link:"https://biechy.github.io/",repo_link:"https://github.com/biechy/portfolio",img:"./img/projects/portfolio.webp"}],l=[{title:"Vehicule Trafic Forecasting in Taichung",description:{en:"In coming..."},authors:[{name:"Biechy",permalink:"/publications/authors/all-biechy-articles"}],date:"2021-01-01",link:"https://github.com",tags:["DL"],letter:"gamma"}];var o=a(1917)},539:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(5108),s=a(2443),n=a(4933),i=a(3774),l=a(6070);function o(){return(0,l.jsx)(r.A,{children:(0,l.jsxs)("main",{className:"flex flex-col items-center justify-center gap-y-20 sm:gap-y-40 py-10 sm:py-20",children:[(0,l.jsxs)("div",{className:"flex w-3/4",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full sm:w-2/3",children:[(0,l.jsx)("h1",{className:"ml-3",children:"\ud83d\udc4b About Me"}),(0,l.jsx)(s.o,{className:"text-sm",children:"I am a PhD student at the University of Paris-Saclay and Inria Saclay under the supervision of [Nicolas Anciaux](https://pages.saclay.inria.fr/nicolas.anciaux/) and the [PETSCRAFT](https://www.inria.fr/fr/petscraft) team. I work on adding privacy metrics to NLP and LLM models. I work also on some [side projects](/projects) in Software Engineer and MLOps. I like learning new things and sharing my knowledge [here](/knowledge/welcome), especially for machine learning, economics, finance and computer science. I am convinced that the ability to make theoretical links between all these areas will speed up research in AI. Please, do not hesitate to contact me by email."})]}),(0,l.jsx)("div",{className:"hidden sm:flex w-1/3 justify-center items-center",children:(0,l.jsx)("img",{src:"./img/memojie/hey.png",alt:"Profile Picture",className:"h-48"})})]}),(0,l.jsxs)("div",{className:"flex w-3/4",children:[(0,l.jsx)("div",{className:"hidden sm:flex w-1/3 justify-center items-center",children:(0,l.jsx)("img",{src:"./img/memojie/news.png",alt:"Profile Picture",className:"h-48"})}),(0,l.jsxs)("div",{className:"flex flex-col w-full sm:w-2/3",children:[(0,l.jsx)("h1",{className:"ml-3",children:"News"}),(0,l.jsx)(n.eZ,{news:i.wI})]})]})]})})}},1917:(e,t,a)=>{a.d(t,{J:()=>r});const r=[{name:"React",link:"https://reactjs.org/",category:"software",level:"advanced",png:"./img/technos/react.png"},{name:"TailwindCSS",link:"https://tailwindcss.com/",category:"software",level:"advanced",png:"./img/technos/tailwindcss.png"},{name:"TypeScript",link:"https://www.typescriptlang.org/",category:"software",level:"advanced",png:"./img/technos/typescript.png"},{name:"Python",link:"https://www.python.org/",category:"AI",level:"expert",png:"./img/technos/python.png"},{name:"R",link:"https://www.r-project.org/",category:"AI",level:"intermediate",png:"./img/technos/r.png"},{name:"PostgreSQL",link:"https://www.postgresql.org/",category:"software",level:"intermediate",png:"./img/technos/postgres.png"},{name:"MongoDB",link:"https://www.mongodb.com/",category:"software",level:"intermediate",png:"./img/technos/mongo.png"},{name:"Prisma",link:"https://www.prisma.io/",category:"software",level:"intermediate",png:"./img/technos/prisma.png"},{name:"NextJS",link:"https://nextjs.org/",category:"software",level:"advanced",png:"./img/technos/nextjs.png"},{name:"PyTorch",link:"https://pytorch.org/",category:"AI",level:"expert",png:"./img/technos/pytorch.png"},{name:"Scikit-learn",link:"https://scikit-learn.org/",category:"AI",level:"expert",png:"./img/technos/scikit.png"}]}}]);