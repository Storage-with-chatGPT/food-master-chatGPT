(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(605)}])},605:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var s,l,a,n,c,i,o,m,d,x,h=r(5893);let u=()=>(0,h.jsx)("footer",{className:"flex justify-center mt-3",children:(0,h.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," My Company. All rights reserved."]})});var g=r(7294);let f=()=>(0,h.jsx)("header",{className:" flex justify-center my-2",children:(0,h.jsx)("img",{src:"images/logo.png",alt:"logo",width:300,height:250})});var p=r(8193),v=r(7516),b=r(5788),y=r(1880),j=r(307),w=r(7888),N=r(6790),_=r(2920);let E=e=>{let{message:t,type:r}=e;switch(r){case"success":_.Am.success(t,{position:_.Am.POSITION.BOTTOM_CENTER});break;case"warn":_.Am.warning(t,{position:_.Am.POSITION.TOP_CENTER});break;case"error":_.Am.error(t,{position:_.Am.POSITION.TOP_CENTER})}},C=e=>!/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'0-9ㄱ-ㅎㅏ-ㅣ]/gi.test(e),k=e=>e.length>9?e=e.substring(0,9)+"...":e;var T=r(3750),L=r(8138),M=function(e){let{deleteName:t,setEditModeState:r,setIsDialogOpen:s}=e,l=(0,N.TL)(),a=()=>{l((0,w.hD)(t)),r(!1),E({message:"[".concat(t,"] 재료가 삭제되었습니다."),type:"error"})};return(0,h.jsx)("div",{className:"fixed left-0 -top-0 w-full h-full z-20 flex items-center justify-center",children:(0,h.jsxs)("div",{className:" bg-white rounded-lg p-8 z-20",children:[(0,h.jsxs)("p",{className:"mb-1 text-center font-bold",children:["[",t,"] "]}),(0,h.jsx)("p",{className:"mb-4",children:"재료를 삭제하시겠습니까? "}),(0,h.jsxs)("div",{className:"flex justify-end",children:[(0,h.jsx)("button",{className:"px-4 py-2 bg-gray-500 text-white mr-4 rounded-md",onClick:()=>s(!1),children:"Cancel"}),(0,h.jsx)("button",{className:"px-4 py-2 bg-red-500 text-white rounded-md",onClick:a,children:"Delete"})]})]})})};let O=e=>{let{name:t,state:r}=e,[s,l]=(0,g.useState)(!0),[a,n]=(0,g.useState)(t),[c,i]=(0,g.useState)(!1),o=(0,N.TL)(),m=(0,N.CG)(e=>e.ingredientList.ingredientList),d=()=>{r?o((0,w.t3)(t)):o((0,w.W2)(t))},x=()=>{l(!s),n(t)},u=e=>{n(e.currentTarget.value.split(" ").join(""))},f=()=>{let e=m.filter(e=>e.name===a);if(0===a.length){E({message:"빈값은 재료로 등록할 수 없습니다.",type:"warn"}),n(t);return}if(!C(a)){E({message:"다시한번 확인해주세요. (특수문자/자음/모음/숫자 금지)",type:"warn"}),n(t);return}if(e.length>0){t===a?E({message:"현재 선택한 재료명과 동일 합니다.",type:"warn"}):(E({message:"이미 등록되어있는 재료 입니다.",type:"warn"}),n(t));return}l(!s),o((0,w.tH)({name:t,editModeInput:a}))};return s?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"relative",children:r?"":(0,h.jsx)(L.H$w,{onClick:x,className:"text-lg absolute top-1.5 right-1 hover:text-blue-200 cursor-pointer"})}),(0,h.jsx)("button",{onClick:d,className:"w-20 h-20 border-2 m-1 ".concat(r?"bg-blue-300":"bg-gray-100"," hover:bg-blue-200 ease-in duration-150 rounded-md"),children:k(a)})]}):(0,h.jsxs)("div",{className:"relative",children:[(0,h.jsxs)("div",{className:"flex flex-row",children:[(0,h.jsx)(p.bzc,{onClick:f,className:"text-base absolute top-2 right-11 hover:text-green-300 cursor-pointer"}),(0,h.jsx)(T.yvY,{onClick:()=>i(!0),className:"text-base absolute top-2 right-6 hover:text-red-300 cursor-pointer"}),(0,h.jsx)(p.oHP,{onClick:x,className:"text-base absolute top-2 right-1 hover:text-blue-200 cursor-pointer"})]}),(0,h.jsx)("button",{className:"w-20 h-20 border-2 m-1 ".concat(r?"bg-blue-300":"bg-gray-100"," rounded-md"),children:(0,h.jsx)("input",{className:"w-14 pl-2",type:"text",value:a,onChange:u})}),(0,h.jsx)("div",{className:"absolute",children:c?(0,h.jsx)(M,{deleteName:t,setEditModeState:l,setIsDialogOpen:i}):""})]})},S=()=>{let e=(0,N.TL)(),t=(0,N.CG)(e=>e.common.inputValue),r=t=>{e((0,j.JW)(t.currentTarget.value.split(" ").join("")))};return(0,h.jsxs)("div",{className:"border-1 border-white flex flex-row justify-center ",children:[(0,h.jsx)("input",{type:"text",value:t,placeholder:"검색 입력",onChange:r,className:"pl-2 h-6 text-[15px] rounded-md"}),t.length>1?(0,h.jsx)("div",{className:"absolute cursor-pointer hover:text-blue-300 ml-[155px] ",onClick:()=>e((0,j.JW)("")),children:"X"}):""]})},I=()=>{let[e,t]=(0,g.useState)(!1),[r,s]=(0,g.useState)(""),[l,a]=(0,g.useState)("my-red"),n=(0,g.useRef)(null),[c,i]=(0,g.useState)(!0),o=(0,N.TL)(),m=(0,N.CG)(e=>e.ingredientList),d=(0,N.CG)(e=>e.common.category),x=(0,N.CG)(e=>e.common.inputValue),u=(0,N.CG)(e=>e.ingredientList.ingredientViewList),f=(0,N.CG)(e=>e.common.category),_=e=>{o((0,j.uY)(e.currentTarget.value))},k=()=>{let l=m.ingredientList.filter(e=>e.name===r);if(0===r.length){E({message:"빈값은 재료로 등록할 수 없습니다.",type:"warn"});return}if(!C(r)){E({message:"다시한번 확인해주세요. (특수문자/자음/모음/숫자 금지)",type:"warn"}),s("");return}if(l.length>0){E({message:"이미 등록되어 있는 재료 입니다.",type:"warn"}),s("");return}o((0,w.Vg)({type:f,name:r,state:!1})),s(""),t(!e),E({message:"[".concat(r,"] 재료가 정상적으로 등록되었습니다"),type:"success"})},T=()=>{t(!e),s("")};(0,g.useEffect)(()=>{switch(d){case"all":o((0,w.ZM)(m.ingredientList)),a("bg-my-red");break;case"meat":o((0,w.ZM)(m.ingredientList.filter(e=>"meat"===e.type))),a("bg-my-orange");break;case"vegetable":o((0,w.ZM)(m.ingredientList.filter(e=>"vegetable"===e.type))),a("bg-my-green");break;case"grain":o((0,w.ZM)(m.ingredientList.filter(e=>"grain"===e.type))),a("bg-my-yellow");break;case"acc":o((0,w.ZM)(m.ingredientList.filter(e=>"acc"===e.type))),a("bg-my-gray")}},[d]);let L=()=>{var e;null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"end"});let t=document.getElementById("DownBtn");t&&(t.style.display="none")};return(0,g.useEffect)(()=>{let e=document.getElementById("scrollDiv"),t=()=>{if(e){let t=e.scrollHeight,r=e.scrollTop,s=e.clientHeight;i(t!==r+s)}};return null==e||e.addEventListener("scroll",t),()=>{null==e||e.removeEventListener("scroll",t)}},[]),(0,h.jsxs)("div",{className:"mt-3 w-[550px]",children:[(0,h.jsx)("div",{className:"flex flex-row justify-left",children:y.o.map((e,t)=>(0,h.jsx)("button",{onClick:_,value:e.type,className:"text-gray-100 h-8 w-24 bg-".concat(e.color," opacity-90 rounded-t-xl "),children:(0,h.jsx)("p",{className:"font-bold drop-shadow-lg",children:Object.values(e.name)})},"category_btn_".concat(t)))}),(0,h.jsxs)("div",{className:"".concat(l," h-[345px] py-3 opacity-90 rounded-b-lg rounded-tr-lg drop-shadow-lg"),children:[(0,h.jsx)("div",{className:"w-auto my-2.5 flex flex-raw justify-center ",children:(0,h.jsx)(S,{})}),(0,h.jsxs)("div",{id:"scrollDiv",className:" h-[250px] flex flex-raw flex-wrap justify-center overflow-auto scrollbar-hide drop-shadow-lg ",children:["all"===f||""!==x?"":(0,h.jsx)("button",{className:"w-20 h-20 border-2 m-1 bg-gray-100 rounded-md ",children:e?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{className:"w-14 pl-2",type:"text",value:r,onChange:e=>s(e.currentTarget.value)}),(0,h.jsxs)("div",{className:"flex flex-row justify-center mt-3",children:[(0,h.jsx)(p.bzc,{onClick:k,className:"border border-gray-200 w-7 mr-0.5 hover:bg-green-300 hover:text-white"}),(0,h.jsx)(p.oHP,{onClick:T,className:"text-base border border-gray-200 w-7 ml-0.5 hover:bg-red-300 hover:text-white"})]})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{children:"재료 추가"}),(0,h.jsx)(b.bxl,{onClick:()=>t(!e),className:"w-full text-2xl text-center text-gray-500 hover:text-blue-300 ease-in duration-150"})]})}),""===x?u.map(e=>(0,h.jsx)(O,{name:e.name,state:e.state},e.name)):u.filter(e=>!0===e.name.includes(x)).map(e=>(0,h.jsx)(O,{name:e.name,state:e.state},e.name)),(0,h.jsx)("div",{ref:n})]})]}),(0,h.jsx)("div",{className:"flex justify-center items-center",children:u.length>16&&c?(0,h.jsx)(v._ej,{id:"DownBtn",onClick:L,className:"text-white text-[30px] -mt-8 animate-bounce cursor-pointer"}):""})]})};var Z=r(1163),z=r(471),P=r(8433);let A=(e,t)=>{var r;let s;s=null===(r=process.env)||void 0===r?void 0:r.OPENAI_API_KEY;let l="";return"menu"===t&&(l="".concat(e," 을/를 꼭 포함한 음식 메뉴 5개 음식명만 추천해주세요")),"recipe"===t&&(l="".concat(e," 레시피를 필요한재료, 조리방법 정확하게 알려주세요")),P.Z.post("https://api.openai.com/v1/completions",{model:"text-davinci-003",prompt:"".concat(l),temperature:.4,max_tokens:1024},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}})};var G=r(2358);function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var B=function(e){return g.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",id:"refrigerator_svg__Layer_1","data-name":"Layer 1",viewBox:"0 0 401 950"},e),s||(s=g.createElement("defs",null,g.createElement("style",null,".refrigerator_svg__cls-1{fill:#999}.refrigerator_svg__cls-2{fill:#ccc}.refrigerator_svg__cls-3{fill:#333}"))),l||(l=g.createElement("path",{className:"refrigerator_svg__cls-1",d:"M794.5 1075h-390V150a25 25 0 0 1 25-25h340a25 25 0 0 1 25 25Z",transform:"translate(-399.5 -125)"})),a||(a=g.createElement("path",{className:"refrigerator_svg__cls-2",d:"M800.5 425h-400V150a25 25 0 0 1 25-25h350a25 25 0 0 1 25 25Z",transform:"translate(-399.5 -125)"})),n||(n=g.createElement("path",{className:"refrigerator_svg__cls-2",d:"M0 310h400v600H0z"})),c||(c=g.createElement("rect",{className:"refrigerator_svg__cls-3",x:150,y:920,width:100,height:10,rx:5,ry:5})),i||(i=g.createElement("rect",{className:"refrigerator_svg__cls-3",x:30,y:920,width:100,height:10,rx:5,ry:5})),o||(o=g.createElement("rect",{className:"refrigerator_svg__cls-3",x:270,y:920,width:100,height:10,rx:5,ry:5})),m||(m=g.createElement("rect",{className:"refrigerator_svg__cls-1",x:20,y:50,width:20,height:200,rx:5,ry:5})),d||(d=g.createElement("rect",{className:"refrigerator_svg__cls-1",x:20,y:370,width:20,height:400,rx:5,ry:5})),g.createElement("path",{transform:"rotate(-74.2 278.517 444.974)",style:{fill:"#e6e6e6"},d:"M530.89 188.36h60v110h-60z"}),g.createElement("path",{transform:"rotate(-74.2 278.517 444.974)",style:{fill:"#29abe2"},d:"M535.89 193.36h50v100h-50z"}),g.createElement("path",{transform:"rotate(-74.2 275.114 457.003)",style:{fill:"#0071bc"},d:"M544.99 205.39h25v100h-25z"}),g.createElement("circle",{cx:564.78,cy:231.47,r:7.5,transform:"rotate(-74.2 282.399 433.08)",style:{fill:"#ff0"}}),g.createElement("path",{transform:"rotate(-74.2 273.483 462.774)",style:{fill:"#fbb03b"},d:"M549.36 211.16h13v100h-13z"}),g.createElement("circle",{cx:608.68,cy:236.1,r:15,transform:"rotate(-74.2 326.297 437.71)",style:{fill:"#ed1c24"}}),g.createElement("path",{transform:"rotate(-20.99 157.391 1290.92)",style:{fill:"#3fa9f5"},d:"M659.57 240.15h70v70h-70z"}),x||(x=g.createElement("path",{d:"m717.33 264.29-46.68 17.91c-1.78.68-1 3.59.8 2.89l46.68-17.91c1.78-.68 1-3.59-.8-2.89ZM713.75 254.95l-46.68 17.91c-1.78.68-1 3.59.8 2.89l46.68-17.91c1.78-.68 1-3.59-.8-2.89ZM710.17 245.61l-46.68 17.91c-1.78.68-1 3.59.8 2.89l46.71-17.9c1.78-.68 1-3.59-.8-2.89ZM720.92 273.62l-46.68 17.91c-1.78.68-1 3.59.8 2.89l46.68-17.91c1.78-.68 1-3.59-.8-2.89ZM724.5 283l-46.68 17.91c-1.78.68-1 3.59.8 2.89l46.68-17.91c1.78-.68 1-3.59-.8-2.89Z",transform:"translate(-399.5 -125)"})),g.createElement("circle",{cx:649.54,cy:255.02,r:15,transform:"rotate(-5.19 -929.243 4599.779)",style:{fill:"#1b1464"}}))},H=r(9583);let V=()=>{let e=(0,N.TL)(),t=(0,N.CG)(e=>e.ingredientList.SelectIngredients);return(0,h.jsx)("div",{className:"flex flex-row",children:(0,h.jsxs)("div",{className:"flex flex-col m-2 bg-slate-400 w-[180px] ml-2 rounded-md",children:[(0,h.jsxs)("div",{className:"text-center my-3 text-white text-sm",children:[(0,h.jsx)("p",{className:"font-bold",children:"선택한 재료 리스트"}),(0,h.jsx)("p",{onClick:()=>e((0,w.YT)()),className:"text-[8px] text-right mr-4 hover:text-red-300 cursor-pointer",children:"전체 삭제"})]}),(0,h.jsx)("div",{className:"flex flex-col w-32 text-white text-sm text-left ml-9 h-[190px] overflow-auto scrollbar-hide",children:t.map((t,r)=>(0,h.jsxs)("button",{onClick:t=>e((0,w.t3)(t.currentTarget.value)),value:t,className:"flex flex-row cursor-pointer",children:[(0,h.jsx)(H.kty,{className:"text-red-300 mt-1 mr-1"}),(0,h.jsx)("p",{className:"hover:text-red-300 font-bold tracking-wide",children:t})]},"select_".concat(r)))})]})})},R=()=>{let e=(0,Z.useRouter)(),t=(0,N.TL)(),r=(0,N.CG)(e=>e.ingredientList.SelectIngredients),s=r.join(", ").trim(),[l,a]=(0,g.useState)([]),[n,c]=(0,g.useState)(!0),[i,o]=(0,g.useState)(!1),m=async l=>{let{name:n,value:i}=l.currentTarget;if(r.length<1){E({message:"1개 이상의 재료를 선택해주세요.",type:"warn"});return}let m="";"recipe"===n&&(m=i),"menu"===n&&(m=s);try{o(!0);let{data:r}=await A(m,n);if(o(!1),c(!1),"menu"===n){let e=r.choices[0].text.trim().split("\n").map(e=>e.replace(/^\d+\.\s*/,"")).filter(e=>""!==e&&"."!==e);a(e)}if("recipe"===n){e.push("/recipe");let s=r.choices[0].text.trim().split("\n").filter(e=>""!==e);t((0,G.bT)(s))}}catch(e){E({message:"잠시후 다시 시도해주세요.",type:"error"})}};return(0,g.useEffect)(()=>{c(!0)},[r]),(0,h.jsxs)("div",{className:"flex flex-row h-full ",children:[(0,h.jsxs)("div",{className:"flex flex-col w-[500px] items-center justify-center drop-shadow-lg",children:[(0,h.jsxs)("div",{className:"flex flex-col w-[200px] h-[220px] m-2 ml-16 overflow-auto scrollbar-hide ",children:[l.length>0?"":(0,h.jsx)(B,{className:"-ml-11"}),l.map((e,t)=>(0,h.jsx)("button",{name:"recipe",className:"w-34 text-left m-1 pr-1 mt-3 hover:text-my-green hover: ease-in duration-150 ",value:e,onClick:m,children:(0,h.jsxs)("div",{className:"flex flex-row ",children:[(0,h.jsx)(T.$hF,{className:"text-my-green mt-1.5 mr-1 text-[13px]"}),(0,h.jsx)("p",{className:"flex flex-row font-bold tracking-wide",children:e})]})},"recipe_".concat(t)))]}),(0,h.jsx)("button",{onClick:m,className:"".concat(i?"bg-gray-100 text-gray-200":"bg-white hover:text-white hover:bg-blue-200 text-gray-500"," w-[300px] ml-15 text-center border-1 border-gray-100 rounded-md ease-in duration-200 font-bold"),name:"menu",disabled:i,children:n?"Chat선생 메뉴 추천 받기 ":"추천 메뉴 다시 받기 "})]}),(0,h.jsx)(V,{}),i?(0,h.jsx)("div",{className:"absolute w-[550px] h-[705px] flex justify-center items-center bg-slate-300 bg-opacity-70 z-10 -ml-2 -mt-2",children:(0,h.jsxs)("div",{className:"w-[200px] h-[30px] text-center flex flex-row flex-wrap",children:[(0,h.jsx)("p",{className:"font-bold text-[20px]",children:"잠시만 기다려주세요"}),(0,h.jsx)(z.frZ,{className:" animate-spin mt-1 ml-1 text-[20px]"}),(0,h.jsx)("p",{className:"text-[10px]",children:"30초에서 1분의 시간이 걸릴 수 있습니다."})]})}):""]})},Y=()=>(0,h.jsx)("div",{className:"w-full h-full flex flex-col items-center ",children:(0,h.jsxs)("div",{className:"w-[550px] h-full bg-white ",children:[(0,h.jsx)(f,{}),(0,h.jsx)("div",{className:"bg-gray-200 w-full h-[300px] rounded-md p-2",children:(0,h.jsx)(R,{})}),(0,h.jsx)("div",{className:"w-[560px] h-full text-center",children:(0,h.jsx)(I,{})}),(0,h.jsx)(u,{})]})});var F=Y}},function(e){e.O(0,[874,57,445,401,955,13,617,111,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);