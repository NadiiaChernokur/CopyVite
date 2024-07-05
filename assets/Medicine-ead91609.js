import{s,r as o,j as e,a as l,u as te,b as ie,d as se,f as R,i as ae,k as I,m as T,n as ne}from"./index-48bbd110.js";import{F as oe,a as q,c as re,b as E,Q as de,d as ce,B as le}from"./ReactToastify-03ad727c.js";import{u as xe}from"./index-4aa9e80c.js";import{M as pe,a as he}from"./ModalReg-61889ac6.js";import{S as ge,a as fe}from"./SpinnerInfinity-c1953dea.js";const ue=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1223px;
  padding: 72px 20px 120px 20px;
  margin: auto;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: #1d1e21;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
    padding: 62px 0px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0;
  }
`,me=s.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: #1d1e21;
`,we=s.ul`
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 13px;
  }
  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`,be=s.li`
  width: 280px;
  box-sizing: border-box;
  height: 423px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 226px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    height: 435px;
  }
`,ye=s.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 20px;
  padding: 14px 18px;
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 260px;
  }
  @media screen and (max-width: 767px) {
    height: 300px;
  }
`,je=s.div`
  width: 280px;
  height: 135px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 100%;
    height: 135px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,ke=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`,ve=s.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.6);
  margin-bottom: 14px;
`,Se=s.div`
  display: flex;
  justify-content: space-between;
`,Me=s.button`
  border-radius: 24px;
  border: none;
  padding: 10px 16px;

  background: #59b17a;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,Pe=s.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #1d1e21;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,ze=s.button`
  border-radius: 60px;
  padding: 13px 30px;
  width: 116px;
  height: 44px;
  background: #59b17a;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,Ce=s(oe)`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,Fe=s(q)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 214px;
  height: 44px;
  background: #fff;
  margin-right: 6px;
  padding: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,Oe=s(q)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 214px;
  background: #fff;
  margin-right: 6px;
  padding: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,Te=s.svg`
  position: absolute;
  top: 15px;
  right: 20px;
`,Le=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`,M=s.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid rgba(38, 38, 38, 0.2);
  background: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    justify-content: center;
  }
`,$e=s.div`
  display: flex;
  gap: 10px;
  margin: 0 16px;
  @media screen and (max-width: 767px) {
    margin: 0;
    gap: 5px;
  }
`,L=s.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid rgba(38, 38, 38, 0.2);
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 767px) {
    width: 33px;
    height: 33px;
  }
`,De=s.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: none;
  background: #59b17a;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 33px;
    height: 33px;
  }
`,Re=({subtract:P,add:z,page:a,first:f,last:b,total:u,to:x})=>{const[d,c]=o.useState(0);o.useEffect(()=>{c(u)},[u]);const p=a===d?"0.5":"1.0",h=a===1?"0.5":"1.0";return e.jsxs(Le,{children:[e.jsxs(M,{onClick:f,disabled:a===1,children:[e.jsx("svg",{width:"20",height:"20",style:{transform:"scaleX(-1)",marginRight:"-19px",fillOpacity:h},children:e.jsx("use",{href:`${l}#fi-rr-angle-small-left`})}),e.jsx("svg",{width:"20",height:"20",style:{transform:"scaleX(-1)",fillOpacity:h},children:e.jsx("use",{href:`${l}#fi-rr-angle-small-left`})})]}),e.jsx(M,{onClick:P,disabled:a===1,children:e.jsx("svg",{width:"20",height:"20",style:{transform:"scaleX(-1)",fillOpacity:h},children:e.jsx("use",{href:`${l}#fi-rr-angle-small-left`})})}),e.jsxs($e,{children:[a-1>0&&e.jsx(L,{onClick:()=>x(a-1),children:a-1}),e.jsxs(De,{children:[" ",a," "]}),a!==d&&e.jsxs(L,{onClick:()=>x(a+1),children:[" ",a+1," "]}),a!==d&&e.jsxs(L,{children:[" ","..."," "]})]}),e.jsx(M,{onClick:z,disabled:a===d,children:e.jsx("svg",{width:"20",height:"20",style:{fillOpacity:p},children:e.jsx("use",{href:`${l}#fi-rr-angle-small-left`})})}),e.jsxs(M,{onClick:b,disabled:a===d,children:[e.jsx("svg",{width:"20",height:"20",style:{marginRight:"-19px",fillOpacity:p},children:e.jsx("use",{href:`${l}#fi-rr-angle-small-left`})}),e.jsx("svg",{width:"20",height:"20",style:{fillOpacity:p},children:e.jsx("use",{href:`${l}#fi-rr-angle-small-left`})})]})]},u)},Ie=re({keyword:E(),category:E()}),Ge=()=>{var D;const P=xe({query:"(max-width: 1280px)"}),[z,a]=o.useState([]),[f,b]=o.useState([]),[u,x]=o.useState(!1),[d,c]=o.useState(1),[p,h]=o.useState(0),[B,C]=o.useState(""),[j]=o.useState(P?9:12),[m,k]=o.useState({category:"",keyword:""}),[A,F]=o.useState(!1),[N,$]=o.useState(!1),g=te(),O=ie(),v=se(),S=R(t=>t.user),G=R(t=>t.isLoading),w=(D=v.state)==null?void 0:D.settings;o.useEffect(()=>{const t=async n=>{const r=await g(I()),i=await g(T({page:n.page,limit:j,category:n.category,keyword:n.keyword}));i.meta.requestStatus==="fulfilled"&&(b(i.payload.products),h(i.payload.totalPages),a(r.payload))};if(w){t(w);const{page:n,category:r,keyword:i}=w;c(n),k({category:r||"",keyword:i||""})}w&&O(v.pathname,{replace:!0})},[w,O,v.pathname]),o.useEffect(()=>{window.scrollTo(0,0)},[]),o.useEffect(()=>{S.length===0?C(""):C(S.token)},[S.length,S.token]),o.useEffect(()=>{if(w)return;const t=async()=>{const r=await g(I()),i=await g(T({page:d,limit:j,...m}));i.meta.requestStatus==="fulfilled"&&(b(i.payload.products),h(i.payload.totalPages)),a(r.payload)};if(u)return;const n=localStorage.getItem("e-pharmacy");if(n&&n!=="[]"){const r=JSON.parse(n);r.token&&(ae(r.token),C(r.token))}t()},[g,u,j,d]);const V=async t=>{const{category:n,keyword:r}=t;k(t);const i=await g(T({page:1,limit:j,category:n,keyword:r}));i.meta.requestStatus==="fulfilled"&&(b(i.payload.products),c(1),h(i.payload.totalPages))},X=async t=>{B?(await g(ne({quantity:1,productId:t})),le("The product has been added to the cart",{style:{background:"#59b17a",color:"white",fontWeight:"400",fontSize:" 18"}})):F(!0)},Q=()=>{x(!1),c(t=>t+1)},U=()=>{c(t=>t-1)},_=()=>{c(1)},H=()=>{x(!1),c(p)},J=t=>{console.log(t),x(!1),c(t)},W=t=>{O("/product",{state:{item:t,from:v.pathname,settings:{page:d,...m}}})},K=()=>{F(!0)},Y=()=>{F(!1)},Z=()=>{$(!0)},ee=()=>{$(!1)};return e.jsxs(ue,{children:[e.jsx(de,{}),e.jsx(me,{children:"Medicine"}),e.jsx(ce,{initialValues:{keyword:"",category:""},validationSchema:Ie,onSubmit:(t,{setSubmitting:n})=>{x(!0),V(t).then(()=>{n(!1)})},children:({isSubmitting:t,handleChange:n,values:r})=>e.jsxs(Ce,{children:[e.jsx("div",{children:e.jsxs(Fe,{as:"select",name:"category",onChange:i=>{n(i),k(y=>({...y,category:i.target.value}))},value:m.category?m.category:r.category,children:[e.jsx("option",{value:"",label:"Product category"}),z.map((i,y)=>e.jsx("option",{value:i,children:i},y))]})}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Oe,{placeholder:"Search medicine",type:"text",name:"keyword",onChange:i=>{n(i),k(y=>({...y,keyword:i.target.value}))},value:m.keyword?m.keyword:r.keyword}),e.jsx(Te,{width:"16",height:"16",children:e.jsx("use",{href:`${l}#search`})})]}),e.jsx("div",{children:e.jsxs(ze,{type:"submit",disabled:t,children:[e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{href:`${l}#filter`})}),"Filter"]})})]})}),e.jsx(we,{children:G?e.jsx(ge,{children:e.jsx(fe,{})}):f.length===0?e.jsx("div",{children:"Nothing was found for your request"}):f==null?void 0:f.map(t=>e.jsxs(be,{children:[e.jsx(ye,{children:e.jsx("img",{src:t.photo,alt:t.name,width:"100%"})}),e.jsxs(je,{children:[e.jsxs(ke,{children:[e.jsx("p",{children:t.name}),e.jsxs("p",{children:["৳",t.price]})]}),e.jsx(ve,{children:t.suppliers}),e.jsxs(Se,{children:[e.jsx(Me,{onClick:()=>X(t._id),children:"Add to cart"}),e.jsx(Pe,{onClick:()=>W(t),children:"Details"})]})]})]},t._id))}),p!==0&&e.jsx(Re,{add:Q,subtract:U,page:d,first:_,last:H,total:p,to:J}),A&&e.jsx(pe,{close:Y,openReg:Z}),N&&e.jsx(he,{close:ee,openLog:K})]})};export{Ge as default};
