(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{5920:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5818,23)),Promise.resolve().then(r.bind(r,840)),Promise.resolve().then(r.bind(r,7512))},8741:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var a=r(5155);r(2115);let i=e=>{let{name:t,onClick:r,isSelected:i}=e;return(0,a.jsx)("button",{className:"".concat(i?"txt-color-p border-primary-500":"txt-color-p border-neutral-300 hover:border-neutral-400 dark:hover:border-white"," rounded-full border-2 px-6 py-3 text-xl cursor-pointer"),onClick:()=>r(t),children:t})}},840:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var a=r(5155),i=r(7396),s=r(2115),l=r(7558);let n=e=>{let{href:t,title:r,isActive:n}=e,[o,c]=(0,s.useState)(!1);return(0,a.jsx)("div",{className:"relative inline-block",children:(0,a.jsxs)(i.default,{href:t,className:"".concat(n?"text-primary-600 dark:text-primary-400":"txt-color-primary"," block relative hover:scale-110"),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[r,(0,a.jsx)(l.P.div,{className:"absolute -bottom-0.5 left-0 h-0.5 gradient-bg",initial:{width:0},animate:{width:o?"100%":0,transition:{duration:.3,ease:"easeInOut"}}})]})})};var o=r(4908),c=r(1536),d=r(648);let u=()=>{let[e,t]=(0,s.useState)(null);(0,s.useEffect)(()=>{let e;let a=localStorage.getItem("darkMode");t(e=null!==a?"true"===a:window.matchMedia("(prefers-color-scheme: dark)").matches),r(e)},[]),(0,s.useEffect)(()=>{null!==e&&(r(e),localStorage.setItem("darkMode",e.toString()))},[e]);let r=e=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return(0,a.jsxs)("div",{className:"socials flex p-4 md:p-0 md:flex-row md:space-x-8 space-x-4 mt-0 justify-items-end",children:[(0,a.jsx)(i.default,{href:"https://github.com/yinanazhou",target:"_blank",className:"content-center group",children:(0,a.jsx)(c.hL4,{className:"txt-color-primary group-hover:scale-110 transition-transform",size:30})}),(0,a.jsx)(i.default,{href:"https://www.linkedin.com/in/yinan-zhou-ana/",target:"_blank",className:"content-center group",children:(0,a.jsx)(c.QEs,{className:"txt-color-primary group-hover:scale-110 transition-transform",size:30})}),(0,a.jsx)("button",{onClick:()=>{t(e=>!e)},className:"text-sm border rounded-full px-2 w-8 h-8 flex items-center bg-neutral-800 hover:bg-neutral-800 text-neutral-100 dark:bg-neutral-200 dark:hover:bg-neutral-200 dark:text-neutral-900 hover:scale-110 transition-transform",children:e?(0,a.jsx)(d.N3N,{className:"transform scale-125"}):(0,a.jsx)(d.juv,{className:"transform scale-125"})})]})},m=e=>{let{links:t,closeMenu:r}=e;return(0,a.jsxs)("ul",{className:"flex flex-col py-4 items-center",children:[t.map((e,t)=>(0,a.jsx)("li",{className:"py-2",onClick:r,children:(0,a.jsx)(n,{href:e.path,title:e.title})},t)),(0,a.jsx)("li",{children:(0,a.jsx)(u,{})})]})};var h=r(7179),p=r.n(h);let g=[{title:"Work",path:"/work"},{title:"Projects",path:"/projects"},{title:"Academic",path:"/academic"}],x=e=>{let{page:t}=e,[r,l]=(0,s.useState)(!1);return(0,a.jsxs)("nav",{className:"fixed mx-auto font-bold top-0 left-0 right-0 z-10 bg-neutral-100 dark:bg-neutral-900 bg-opacity-100 border border-neutral-300  border-l-transparent border-r-transparent border-t-transparent dark:border-[#33353F] dark:border-l-transparent dark:border-r-transparent dark:border-t-transparent",children:[(0,a.jsxs)("div",{className:"flex container lg:py-4 items-center justify-between mx-auto px-4 py-2",children:[(0,a.jsx)("div",{className:"mobile-menu block md:hidden",children:r?(0,a.jsx)("button",{onClick:()=>l(!1),className:"flex items-center px-3 py-2 border rounded text-neutral-600 hover:text-neutral-500 dark:text-neutral-300 hover:dark:text-neutral-200 ",children:(0,a.jsx)(o.jkL,{className:"h-5 w-5"})}):(0,a.jsx)("button",{onClick:()=>l(!0),className:"flex items-center px-3 py-2 border rounded text-neutral-600 hover:text-neutral-500 dark:text-neutral-300 hover:dark:text-neutral-200 ",children:(0,a.jsx)(o.LfS,{className:"h-5 w-5"})})}),(0,a.jsx)("div",{className:"menu hidden md:block md:w-auto",id:"navbar",children:(0,a.jsx)("ul",{className:"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0",children:g.map((e,r)=>(0,a.jsx)("li",{children:(0,a.jsx)(n,{href:e.path,title:e.title,isActive:t===e.title})},r))})}),(0,a.jsx)(i.default,{href:"/",className:"text-2xl md:text-5xl text-neutral-900 dark:text-neutral-100 hover:scale-110 ".concat(p().className),children:"YINAN"}),(0,a.jsx)("div",{className:"menu hidden md:block md:w-auto",id:"navbar",children:(0,a.jsx)(u,{})})]}),r?(0,a.jsx)(m,{links:g,closeMenu:()=>l(!1)}):null]})}},7512:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var a=r(5155),i=r(2115),s=r(7396),l=r(4908);let n=e=>{let{imgUrl:t,title:r,description:i,gitUrl:n,previewUrl:o}=e;return(0,a.jsxs)("div",{className:"rounded-xl mt-3 card-bg shadow-md shadow-neutral-500/30 md:min-h-[520px]",children:[(0,a.jsx)("div",{className:"h-52 md:h-72 rounded-t-xl  relative group",style:{background:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center"},children:(n||o)&&(0,a.jsxs)("div",{className:"overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ",children:[n&&(0,a.jsx)(s.default,{href:n,target:"_blank",className:"h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link",children:(0,a.jsx)(l.bNs,{className:"h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"})}),o&&(0,a.jsx)(s.default,{href:o,target:"_blank",className:"h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link",children:(0,a.jsx)(l.bZk,{className:"h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"})})]})}),(0,a.jsxs)("div",{className:"rounded-b-xl py-2 px-4",children:[(0,a.jsx)("h5",{className:"txt-color-primary text-xl font-semibold mb-2",children:r}),(0,a.jsx)("div",{className:"txt-color-secondary",children:i})]})]})};var o=r(8741),c=r(8586),d=r(7558);let u=[{id:0,title:"Neon",description:(0,a.jsx)("p",{children:"Neon is a browser-based music notation editor written in JavaScript using the Verovio music engraving library. The editor can be used to manipulate digitally encoded early musical scores in square-note notation."}),image:"/images/projects/neon.png",tag:["All","Dev"],gitUrl:"https://github.com/DDMAL/Neon",previewUrl:"https://ddmal.music.mcgill.ca/Neon/"},{id:1,title:"Verovio",description:(0,a.jsx)("p",{children:"Verovio is a fast, portable and lightweight open-source library for engraving Music Encoding Initiative (MEI) music scores into SVG. My work focuses on the engraving and editing actions of neume notation in Verovio."}),image:"/images/projects/verovio.png",tag:["All","Dev"],gitUrl:"/",previewUrl:"/"},{id:2,title:"UMIL",description:(0,a.jsx)("p",{children:"The Universal Musical Instrument Lexicon (UMIL) is a crowd-sourcing website dedicated to collecting names and images of musical instruments from various historical periods and cultures."}),image:"/images/projects/umil.png",tag:["All","Dev"],gitUrl:"https://github.com/DDMAL/VIM",previewUrl:"https://vim.simssa.ca/"},{id:3,title:"Cress",description:(0,a.jsx)("p",{children:"Cress is an MEI mapping tool that allows users to edit MEI and validate it against the MEI schema. It is built using TypeScript."}),image:"/images/projects/cress.png",tag:["All","Dev"],gitUrl:"https://github.com/DDMAL/Cress",previewUrl:"https://ddmal.music.mcgill.ca/Cress/"},{id:4,title:"Data Analysis: Rum Market Analysis",description:(0,a.jsx)("p",{children:"This project built a rum dataset by scraping rumratings.com with BeautifulSoup and saq.com with Selenium, followed by data cleaning and preprocessing. It analyzed the rum market to identify trends, market gaps, and opportunities, and developed an interactive dashboard using Plotly and Dash to visualize the insights."}),image:"/images/projects/rum.png",tag:["All","Dev"],gitUrl:"https://github.com/yinanazhou/rum-analysis",previewUrl:null},{id:5,title:"AI Song Contest 2022",description:(0,a.jsxs)("p",{children:["This project built a MIDI dataset of 6,500 ancient Chinese poems and their corresponding melodies using Optical Music Recognition software. It fine-tuned a submodule in the"," ",(0,a.jsx)("a",{href:"https://speechresearch.github.io/telemelody/",className:"link",target:"_blank",children:"Telemelody"})," ","lyrics-to-melody generation model to create melodies and collaborated with musicians to produce a music piece."]}),image:"/images/projects/asc.png",tag:["All","Research"],gitUrl:null,previewUrl:"https://www.aisongcontest.com/participants-2022/expecto-patronum"},{id:6,title:"Data Scientist Salary Estimation Model",description:(0,a.jsx)("p",{children:"This project developed a tool to estimate data science salaries, helping data scientists negotiate their income. It included a client-facing API built with Flask. The project scraped over 500 Canadian job postings from Glassdoor using Python and Selenium, engineered features from job descriptions to quantify the value of skills like Python, Excel, AWS, and Spark, and optimized Linear, Lasso, Ridge, and Random Forest Regressors using GridSearchCV to identify the best model."}),image:"/images/projects/ds.png",tag:["All","Dev"],gitUrl:"https://github.com/yinanazhou/ds-glassdoor",previewUrl:null}],m=()=>{let[e,t]=(0,i.useState)("All"),r=(0,i.useRef)(null),s=(0,c.W)(r,{once:!0}),l=e=>{t(e)},m=u.filter(t=>t.tag.includes(e)),h={initial:{y:50,opacity:0},animate:{y:0,opacity:1}};return(0,a.jsxs)("section",{id:"projects",className:"min-h-[80vh]",children:[(0,a.jsxs)("div",{className:"txt-color-primary flex flex-row justify-center items-center gap-4 py-6",children:[(0,a.jsx)(o.A,{onClick:l,name:"All",isSelected:"All"===e}),(0,a.jsx)(o.A,{onClick:l,name:"Dev",isSelected:"Dev"===e}),(0,a.jsx)(o.A,{onClick:l,name:"Research",isSelected:"Research"===e})]}),(0,a.jsx)("ul",{ref:r,className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12",children:m.map((e,t)=>(0,a.jsx)(d.P.li,{variants:h,initial:"initial",animate:s?"animate":"initial",transition:{duration:.3,delay:.4*t},children:(0,a.jsx)(n,{title:e.title,description:e.description,imgUrl:e.image,gitUrl:e.gitUrl,previewUrl:e.previewUrl},e.id)},t))})]})}},8586:(e,t,r)=>{"use strict";r.d(t,{W:()=>l});var a=r(2115),i=r(2189);let s={some:0,all:1};function l(e,{root:t,margin:r,amount:n,once:o=!1}={}){let[c,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!e.current||o&&c)return;let a={root:t&&t.current||void 0,margin:r,amount:n};return function(e,t,{root:r,margin:a,amount:l="some"}={}){let n=(0,i.KJ)(e),o=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let r=o.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?o.set(e.target,r):c.unobserve(e.target)}else r&&(r(e),o.delete(e.target))}})},{root:r,rootMargin:a,threshold:"number"==typeof l?l:s[l]});return n.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(d(!0),o?void 0:()=>d(!1)),a)},[t,e,r,o,n]),c}}},e=>{var t=t=>e(e.s=t);e.O(0,[272,479,711,760,910,441,517,358],()=>t(5920)),_N_E=e.O()}]);