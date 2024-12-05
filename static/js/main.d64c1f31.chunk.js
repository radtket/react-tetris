(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{24:function(e,r,t){"use strict";t.r(r);var o=t(0),s=t.n(o),a=t(9),l=t.n(a),c=t(2),n=t(4),d=t.n(n);const i="clear",p="merged",b={0:{shape:[[0]],color:"#000000"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"#50E3E6"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"#245FDF"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"#DFAD24"},O:{shape:[["O","O"],["O","O"]],color:"#DFD924"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"#30D338"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"#843DC6"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"#E34E4E"}},m=parseInt(Object.keys(b)[0],10),u=[m,i],x=()=>Array.from(Array(20),(()=>Array(12).fill(u))),O=(e,r,t)=>{let{tetromino:o,pos:{x:s,y:a}}=e,{x:l,y:c}=t;for(let n=0;n<o.length;n+=1)for(let e=0;e<o[n].length;e+=1)if(0!==o[n][e]){const t=r[n+a+c],o=e+s+l;if(!t||!t[o]||t[o][1]!==i)return!0}return!1},h=e=>b[e],j=()=>{const e=Object.keys(b);return h(e[Math.floor(Math.random()*(e.length-1))+1])};d.a.arrayOf(d.a.arrayOf(d.a.arrayOf(d.a.oneOf([...u,p,...Object.keys(b)]),d.a.oneOf([i,p]))));var f=t(3),g=t.p+"static/media/bg.d63cfd51.png";const y={font:"Pixel, Arial, Helvetica, sans-serif",colors:{black:"#000",dark1:"#111",dark2:"#333",dark3:"#999",red:"#F44336"}},v=c.d.div`
  ${e=>{let{color:r,type:t}=e;return c.c`
      background: ${Object(f.d)(r,.8)};
      ${Object(f.a)(0===t?t:4,"solid")}
      ${Object(f.b)(Object(f.d)(r,1),Object(f.d)(r,1),Object(f.d)(r,.1),Object(f.d)(r,.3))}
    width: auto;
    `}}
`,k=c.d.li`
  background: ${e=>{let{theme:r}=e;return r.colors.black}};
  border-radius: 20px;
  border: 4px solid
    ${e=>{let{theme:r}=e;return r.colors.dark2}};
  box-sizing: border-box;
  color: ${e=>{let{gameOver:r,theme:t}=e;return r?t.colors.red:t.colors.dark3}};
  display: flex;
  font-family: ${e=>{let{theme:r}=e;return r.font}};
  font-size: 0.8rem;
  margin: 0 0 20px 0;
  min-height: 30px;
  padding: 20px;
  width: 100%;
`,w=c.d.div`
  display: grid;
  background: #111;
  border: 2px solid
    ${e=>{let{theme:r}=e;return r.colors.dark2}};
  grid-gap: 1px;
  grid-template-columns: repeat(${12}, 1fr);
  grid-template-rows: repeat(${20}, calc(25vw / ${12}));
  max-width: 25vw;
  width: 100%;
`,S=c.d.div`
  ${Object(f.e)("100vh")};
  background-size: cover;
  background: url(${g})
    ${e=>{let{theme:r}=e;return r.colors.black}};
  overflow: hidden;
`,$=c.d.div`
  align-items: flex-start;
  display: flex;
  margin: 0 auto;
  max-width: 900px;
  padding: 40px;
`,E=c.d.aside`
  display: block;
  max-width: 200px;
  padding: 0 20px;
  width: 100%;
`,T=c.d.button`
  background: ${e=>{let{theme:r}=e;return r.colors.dark2}};
  border-radius: 20px;
  border: none;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-family: ${e=>{let{theme:r}=e;return r.font}};
  font-size: 1rem;
  margin: 0 0 20px 0;
  min-height: 30px;
  outline: none;
  padding: 20px;
  width: 100%;
`,I=c.b`
  body {
    margin: 0;
  }

  ${Object(f.c)({fontFamily:"Pixel",fontFilePath:"/font/Pixel-LCD-7",fileFormats:["woff"]})}
`;var P=t(1);var D=e=>{let{stage:r}=e;return Object(P.jsx)(w,{children:r.map((e=>e.map(((e,r)=>{let[t]=e;const{color:o}=h(t);return Object(P.jsx)(v,{key:r,type:t,color:o})}))))})};var F=e=>{let{gameOver:r,score:t,rows:o,level:s,reset:a}=e;return Object(P.jsxs)(E,{children:[Object(P.jsx)("ul",{style:{margin:0,paddingLeft:0},children:r?Object(P.jsx)(k,{gameOver:r,children:"Game Over"}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(k,{children:["Score:",t]}),Object(P.jsxs)(k,{children:["rows:",o]}),Object(P.jsxs)(k,{children:["Level:",s]})]})}),Object(P.jsx)(T,{onClick:a,children:"Start Game"})]})};var J=()=>{const[e,r]=Object(o.useState)({dropTime:null,gameOver:!1}),t=e=>1e3/(e+1),{player:s,updatePlayerPos:a,resetPlayer:l,playerRotate:c}=(()=>{const[e,r]=Object(o.useState)({pos:{x:0,y:0},tetromino:h(m).shape,collided:!1}),t=e=>{let{tetromino:r,dir:t}=e;const o=r.map(((e,t)=>r.map((e=>e[t]))));return t>0?o.map((e=>e.reverse())):o.reverse()};return{player:e,updatePlayerPos:e=>{let{x:t,y:o,collided:s}=e;r((e=>{const r={...e};return{...{...e,pos:{x:r.pos.x+=t,y:r.pos.y+=o},collided:s}}}))},resetPlayer:Object(o.useCallback)((()=>{r({pos:{x:4,y:0},tetromino:j().shape,collided:!1})}),[]),playerRotate:(o,s)=>{const a=JSON.parse(JSON.stringify(e));a.tetromino=t({...a,dir:s});const{x:l}=a.pos;let c=1;for(;O(a,o,{x:0,y:0});)if(a.pos.x+=c,c=-(c+(c>0?1:-1)),c>a.tetromino[0].length)return t({...a,dir:-s}),void(a.pos.x=l);r(a)}}})(),{stage:n,rowsCleared:d,resetStage:b}=((e,r)=>{let{collided:t,pos:s,tetromino:a}=e;const[l,c]=Object(o.useState)(x()),[n,d]=Object(o.useState)(0);return Object(o.useEffect)((()=>{d(0);const{x:e,y:o}=s;c((s=>{const l=[...s].map((e=>e.map((e=>e[1]===i?[0,i]:e))));return a.forEach(((r,s)=>{r.forEach(((r,a)=>{0!==r&&(l[s+o][a+e]=[r,`${t?p:i}`])}))})),t?(r(),l.reduce(((e,r)=>-1===r.findIndex((e=>0===e[0]))?(d((e=>e+1)),e.unshift(new Array(l[0].length).fill([0,i])),e):[...e,r]),[])):l}))}),[t,s,a,r]),{stage:l,rowsCleared:n,resetStage:()=>c(x())}})(s,l),{score:u,rows:f,level:g,setGameStatus:y,resetGame:v}=(e=>{const r={score:0,rows:0,level:0},[{score:t,rows:s,level:a},l]=Object(o.useState)({...r});return Object(o.useEffect)((()=>{(()=>{const r=[40,100,300,1200];e>0&&l((t=>({...t,score:t.score+r[e-1]*(t.level+1),rows:t.rows+e})))})()}),[e]),{score:t,rows:s,level:a,setGameStatus:l,resetGame:()=>l({...r})}})(d),k=e=>{O(s,n,{x:e,y:0})||a({x:e,y:0})},w=()=>{f>10*(g+1)&&(y((e=>({...e,level:e.level+1}))),r((e=>({...e,dropTime:t(g)+200}))));const e=O(s,n,{x:0,y:1});e&&s.pos.y<1&&(console.log("GAME OVER!!!"),r((e=>({...e,dropTime:null,gameOver:!0})))),a({x:0,y:e?0:1,collided:e})},{dropTime:E,gameOver:T}=e;return((e,r)=>{const t=Object(o.useRef)();Object(o.useEffect)((()=>{t.current=e}),[e]),Object(o.useEffect)((()=>{if(null!==r){const e=setInterval((function(){t.current()}),r);return()=>{clearInterval(e)}}return()=>{}}),[r])})((()=>{w()}),E),Object(P.jsx)(S,{onKeyDown:e=>{let{keyCode:t}=e;if(!T)switch(t){case 37:k(-1);break;case 38:c(n,1);break;case 39:k(1);break;case 40:r((e=>({...e,dropTime:null}))),w()}},onKeyUp:e=>{let{keyCode:o}=e;T||40===o&&r((e=>({...e,dropTime:t(g)})))},role:"button",tabIndex:"0",children:Object(P.jsxs)($,{children:[Object(P.jsx)(D,{stage:n}),Object(P.jsx)(F,{gameOver:T,score:u,rows:f,level:g,reset:()=>{b(),r((e=>({...e,gameOver:!1,dropTime:1e3}))),l(),v()}})]})})};var C=()=>Object(P.jsxs)(c.a,{theme:y,children:[Object(P.jsx)(I,{}),Object(P.jsx)(J,{})]});l.a.render(Object(P.jsx)(s.a.StrictMode,{children:Object(P.jsx)(C,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d64c1f31.chunk.js.map