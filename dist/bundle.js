(()=>{"use strict";var __webpack_modules__={663:(e,_,r)=>{r.d(_,{C:()=>u});var t=r(153);const a=document.querySelectorAll("a"),n=document.getElementById("companyName"),c=document.getElementById("companyEmail");let o;function u(){fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json").then((e=>e.json())).then((e=>{o=e,a.forEach((e=>{e.addEventListener("click",(e=>{let _=o.find((_=>_.id==e.target.id));console.log(_),n.innerText=_.name,c.innerText=_.email,boxValue.value=_.boxes,console.log(_.boxes),(0,t.M)(_.boxes)}))}))}))}},958:(e,_,r)=>{r.d(_,{S:()=>c});const t=document.querySelector(".menu-icon"),a=document.querySelector(".right"),n=document.querySelector(".left");function c(){t.addEventListener("click",(()=>{a.classList.toggle("right-deactive"),n.classList.toggle("right")}))}},153:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>sumOfDigit});var _api_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(663),_burgerBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(958);const boxValue=document.getElementById("boxValue");let boxLabel=document.getElementById("boxNumber"),newarr,sumNumber=0;function sumOfDigit(arr){newarr=arr.split(",");for(let i=0;i<newarr.length;i++)sumNumber+=eval(newarr[i]);boxLabel.innerText=Math.ceil(sumNumber/10),sumNumber=0,newarr=""}function changeNumber(){boxValue.addEventListener("change",(e=>{newarr=e.target.value.split(",");for(let i=0;i<newarr.length;i++)sumNumber+=eval(newarr[i]);boxLabel.innerText=Math.ceil(sumNumber/10),sumNumber=0,newarr=""}))}(0,_burgerBar__WEBPACK_IMPORTED_MODULE_1__.S)(),changeNumber(),(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.C)()}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_);var __webpack_exports__=__webpack_require__(153)})();