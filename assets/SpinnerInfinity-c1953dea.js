import{s as r,R as d}from"./index-48bbd110.js";const k=r.div`
  width: 1223px;
  padding: 72px 20px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 43px;
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
`,S=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 16px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }
`,C=r.li`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  padding: 40px;
  width: 381px;
  height: 276px;
  background: #e7f1ed;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 344px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    height: 202px;
    padding: 32px;
  }
`,z=r.p`
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0px;
  }
`,O=r.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #93939a;
  display: flex;
  gap: 8px;
  @media screen and (max-width: 767px) {
    margin-bottom: 18px;
  }
`,P=r.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`,j=r.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
`,D=r.button`
  border-radius: 24px;
  padding: 10px 16px;
  border: none;
  background: #59b17a;
  height: 34px;
  width: 102px;
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
  @media screen and (max-width: 767px) {
    display: none;
  }
`,E=r.div`
  display: flex;
  gap: 14px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`,M=r.div`
  gap: 14px;
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`,N=r.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,A=r.div`
  border-radius: 8px;
  padding: 8px 16px;
  width: 65px;
  height: 34px;
  background: rgba(89, 177, 122, 0.1);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #59b17a;
  box-sizing: border-box;
`,B=r.div`
  border-radius: 8px;
  padding: 8px 16px;
  width: 71px;
  height: 34px;
  background: rgba(232, 80, 80, 0.1);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #e85050;
  box-sizing: border-box;
`,L=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
`,W=r.p`
  width: 120px;
`,I=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return o=Object.assign||function(a){for(var i,t=1,n=arguments.length;t<n;t++){i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(a[s]=i[s])}return a},o.apply(this,arguments)};function c(e,a){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(i[t[n]]=e[t[n]]);return i}var h={color:"#38ad48",enabled:!0,size:50,style:{}},g=function(e){return parseFloat(e.toString()).toString()===e.toString()?e+"px":e.toString()},m=function(e){var a=function(i){var t=i.color,n=i.enabled,s=i.size,p=i.style,l=c(i,["color","enabled","size","style"]),f=o(o({},l),{style:o({color:t,overflow:"visible",width:g(s)},p)});return n?d.createElement(e,o({},f)):null};return a.defaultProps=h,a},u={speed:100,still:!1,thickness:100},y=o(o({},u),{secondaryColor:"rgba(0,0,0,0.44)"});function b(e,a){a===void 0&&(a={});var i=a.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",i==="top"&&t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var v="@keyframes spinners-react-infinity{0%{stroke-dasharray:1,347;stroke-dashoffset:75}25%,75%{stroke-dasharray:17,330}50%{stroke-dasharray:1,347}to{stroke-dasharray:1,347;stroke-dashoffset:423}}";b(v);var x=function(e){var a=e.secondaryColor,i=e.speed,t=e.still,n=e.thickness,s=c(e,["secondaryColor","speed","still","thickness"]),p=7*(n/100),l=t?{}:{animation:"spinners-react-infinity "+140/i+"s linear infinite"};return d.createElement("svg",o({fill:"none",viewBox:"0 0 131 55"},s),d.createElement("defs",null,d.createElement("path",{d:"M46.57 45.5138C36.346 55.4954 19.8919 55.4954 9.66794 45.5138C-0.55598 35.5321 -0.55598 19.4678 9.66794 9.48624C19.8919 -0.495412 36.346 -0.495412 46.57 9.48624L84.4303 45.5138C94.6543 55.4954 111.108 55.4954 121.332 45.5138C131.556 35.5321 131.556 19.4678 121.332 9.48624C111.108 -0.495412 94.6543 -0.495412 84.4303 9.48624L46.57 45.5138Z",id:"spinners-react-infinity-path"})),d.createElement("use",{stroke:a,strokeWidth:p,xlinkHref:"#spinners-react-infinity-path"}),d.createElement("use",{fill:"none",stroke:"currentColor",strokeDasharray:"1, 347",strokeDashoffset:"75",strokeLinecap:"round",strokeWidth:p,style:l,xlinkHref:"#spinners-react-infinity-path"}))};x.defaultProps=y;var T=m(x);export{W as A,B as C,k as M,P as N,A as O,I as S,D as V,T as a,S as b,C as c,z as d,M as e,N as f,L as g,O as h,j as i,E as j};
