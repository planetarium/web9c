var $s=Object.defineProperty;var Hs=(t,e,n)=>e in t?$s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var nn=(t,e,n)=>(Hs(t,typeof e!="symbol"?e+"":e,n),n),Wn=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var lt=(t,e,n)=>(Wn(t,e,"read from private field"),n?n.call(t):e.get(t)),mt=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},ae=(t,e,n,r)=>(Wn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var pt=(t,e,n)=>(Wn(t,e,"access private method"),n);import{r as N,j as D,g as ci,R as Fr}from"./chunk-53cb423e.js";import{c as Mr,b as kt,d as ft,S as Us,f as Ot,e as Nn,o as ke,p as se,a as fi,q as Kn,s as ha,t as Fs}from"./chunk-eee88d9b.js";function Ms(t){const e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function Ds(t,e){if(t!=null){if(typeof t=="function"){t(e);return}try{t.current=e}catch{throw new Error(`Cannot assign value '${e}' to ref '${t}'`)}}}function rr(...t){return e=>{t.forEach(n=>{Ds(n,e)})}}function zs(...t){return N.useMemo(()=>rr(...t),t)}var[Lu,js]=Mr({strict:!1,name:"ButtonGroupContext"});function Ws(t){const[e,n]=N.useState(!t);return{ref:N.useCallback(i=>{i&&n(i.tagName==="BUTTON")},[]),type:e?"button":void 0}}function ar(t){const{children:e,className:n,...r}=t,a=N.isValidElement(e)?N.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,i=kt("chakra-button__icon",n);return D.jsx(ft.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:i,children:a})}ar.displayName="ButtonIcon";function ir(t){const{label:e,placement:n,spacing:r="0.5rem",children:a=D.jsx(Us,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:s,...o}=t,c=kt("chakra-button__spinner",i),f=n==="start"?"marginEnd":"marginStart",l=N.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[f]:e?r:0,fontSize:"1em",lineHeight:"normal",...s}),[s,e,f,r]);return D.jsx(ft.div,{className:c,...o,__css:l,children:a})}ir.displayName="ButtonSpinner";var Ks=Ot((t,e)=>{const n=js(),r=Nn("Button",{...n,...t}),{isDisabled:a=n==null?void 0:n.isDisabled,isLoading:i,isActive:s,children:o,leftIcon:c,rightIcon:f,loadingText:l,iconSpacing:u="0.5rem",type:m,spinner:b,spinnerPlacement:I="start",className:p,as:d,...v}=ke(t),w=N.useMemo(()=>{const R={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:R}}},[r,n]),{ref:x,type:_}=Ws(d),y={rightIcon:f,leftIcon:c,iconSpacing:u,children:o};return D.jsxs(ft.button,{ref:zs(e,x),as:d,type:m??_,"data-active":se(s),"data-loading":se(i),__css:w,className:kt("chakra-button",p),...v,disabled:a||i,children:[i&&I==="start"&&D.jsx(ir,{className:"chakra-button__spinner--start",label:l,placement:"start",spacing:u,children:b}),i?l||D.jsx(ft.span,{opacity:0,children:D.jsx(ma,{...y})}):D.jsx(ma,{...y}),i&&I==="end"&&D.jsx(ir,{className:"chakra-button__spinner--end",label:l,placement:"end",spacing:u,children:b})]})});Ks.displayName="Button";function ma(t){const{leftIcon:e,rightIcon:n,children:r,iconSpacing:a}=t;return D.jsxs(D.Fragment,{children:[e&&D.jsx(ar,{marginEnd:a,children:e}),r,n&&D.jsx(ar,{marginStart:a,children:n})]})}var[Vs,li]=Mr({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[Ys,$n]=Mr({strict:!1,name:"FormControlContext"});function qs(t){const{id:e,isRequired:n,isInvalid:r,isDisabled:a,isReadOnly:i,...s}=t,o=N.useId(),c=e||`field-${o}`,f=`${c}-label`,l=`${c}-feedback`,u=`${c}-helptext`,[m,b]=N.useState(!1),[I,p]=N.useState(!1),[d,v]=N.useState(!1),w=N.useCallback((T={},h=null)=>({id:u,...T,ref:rr(h,g=>{g&&p(!0)})}),[u]),x=N.useCallback((T={},h=null)=>({...T,ref:h,"data-focus":se(d),"data-disabled":se(a),"data-invalid":se(r),"data-readonly":se(i),id:T.id!==void 0?T.id:f,htmlFor:T.htmlFor!==void 0?T.htmlFor:c}),[c,a,d,r,i,f]),_=N.useCallback((T={},h=null)=>({id:l,...T,ref:rr(h,g=>{g&&b(!0)}),"aria-live":"polite"}),[l]),y=N.useCallback((T={},h=null)=>({...T,...s,ref:h,role:"group"}),[s]),R=N.useCallback((T={},h=null)=>({...T,ref:h,role:"presentation","aria-hidden":!0,children:T.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!i,isDisabled:!!a,isFocused:!!d,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:m,setHasFeedbackText:b,hasHelpText:I,setHasHelpText:p,id:c,labelId:f,feedbackId:l,helpTextId:u,htmlProps:s,getHelpTextProps:w,getErrorMessageProps:_,getRootProps:y,getLabelProps:x,getRequiredIndicatorProps:R}}var Gs=Ot(function(e,n){const r=fi("Form",e),a=ke(e),{getRootProps:i,htmlProps:s,...o}=qs(a),c=kt("chakra-form-control",e.className);return D.jsx(Ys,{value:o,children:D.jsx(Vs,{value:r,children:D.jsx(ft.div,{...i({},n),className:c,__css:r.container})})})});Gs.displayName="FormControl";var Xs=Ot(function(e,n){const r=$n(),a=li(),i=kt("chakra-form__helper-text",e.className);return D.jsx(ft.div,{...r==null?void 0:r.getHelpTextProps(e,n),__css:a.helperText,className:i})});Xs.displayName="FormHelperText";var Zs=Ot(function(e,n){var r;const a=Nn("FormLabel",e),i=ke(e),{className:s,children:o,requiredIndicator:c=D.jsx(ui,{}),optionalIndicator:f=null,...l}=i,u=$n(),m=(r=u==null?void 0:u.getLabelProps(l,n))!=null?r:{ref:n,...l};return D.jsxs(ft.label,{...m,className:kt("chakra-form__label",i.className),__css:{display:"block",textAlign:"start",...a},children:[o,u!=null&&u.isRequired?c:f]})});Zs.displayName="FormLabel";var ui=Ot(function(e,n){const r=$n(),a=li();if(!(r!=null&&r.isRequired))return null;const i=kt("chakra-form__required-indicator",e.className);return D.jsx(ft.span,{...r==null?void 0:r.getRequiredIndicatorProps(e,n),__css:a.requiredIndicator,className:i})});ui.displayName="RequiredIndicator";function Qs(t){const{isDisabled:e,isInvalid:n,isReadOnly:r,isRequired:a,...i}=Js(t);return{...i,disabled:e,readOnly:r,required:a,"aria-invalid":Kn(n),"aria-required":Kn(a),"aria-readonly":Kn(r)}}function Js(t){var e,n,r;const a=$n(),{id:i,disabled:s,readOnly:o,required:c,isRequired:f,isInvalid:l,isReadOnly:u,isDisabled:m,onFocus:b,onBlur:I,...p}=t,d=t["aria-describedby"]?[t["aria-describedby"]]:[];return a!=null&&a.hasFeedbackText&&(a!=null&&a.isInvalid)&&d.push(a.feedbackId),a!=null&&a.hasHelpText&&d.push(a.helpTextId),{...p,"aria-describedby":d.join(" ")||void 0,id:i??(a==null?void 0:a.id),isDisabled:(e=s??m)!=null?e:a==null?void 0:a.isDisabled,isReadOnly:(n=o??u)!=null?n:a==null?void 0:a.isReadOnly,isRequired:(r=c??f)!=null?r:a==null?void 0:a.isRequired,isInvalid:l??(a==null?void 0:a.isInvalid),onFocus:ha(a==null?void 0:a.onFocus,b),onBlur:ha(a==null?void 0:a.onBlur,I)}}var di={exports:{}},to="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",eo=to,no=eo;function hi(){}function mi(){}mi.resetWarningCache=hi;var ro=function(){function t(r,a,i,s,o,c){if(c!==no){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:mi,resetWarningCache:hi};return n.PropTypes=n,n};di.exports=ro();var ao=di.exports;const $=ci(ao);var pi=Ot(function(e,n){const{htmlSize:r,...a}=e,i=fi("Input",a),s=ke(a),o=Qs(s),c=kt("chakra-input",e.className);return D.jsx(ft.input,{size:r,...o,__css:i.field,ref:n,className:c})});pi.displayName="Input";pi.id="Input";var bi=Ot(function(e,n){const r=Nn("Link",e),{className:a,isExternal:i,...s}=ke(e);return D.jsx(ft.a,{target:i?"_blank":void 0,rel:i?"noopener":void 0,ref:n,className:kt("chakra-link",a),...s,__css:r})});bi.displayName="Link";var gi=Ot(function(e,n){const r=Nn("Text",e),{className:a,align:i,decoration:s,casing:o,...c}=ke(e),f=Ms({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return D.jsx(ft.p,{ref:n,className:kt("chakra-text",e.className),...f,...c,__css:r})});gi.displayName="Text";var io=Ot(function(e,n){const{direction:r,align:a,justify:i,wrap:s,basis:o,grow:c,shrink:f,...l}=e,u={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:s,flexBasis:o,flexGrow:c,flexShrink:f};return D.jsx(ft.div,{ref:n,__css:u,...l})});io.displayName="Flex";var Bu={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},Ru={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]};function pa(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pa(Object(n),!0).forEach(function(r){Z(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pa(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function In(t){"@babel/helpers - typeof";return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},In(t)}function so(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ba(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function oo(t,e,n){return e&&ba(t.prototype,e),n&&ba(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dr(t,e){return fo(t)||uo(t,e)||yi(t,e)||mo()}function Qe(t){return co(t)||lo(t)||yi(t)||ho()}function co(t){if(Array.isArray(t))return sr(t)}function fo(t){if(Array.isArray(t))return t}function lo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function uo(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(t);!(a=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(c){i=!0,o=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function yi(t,e){if(t){if(typeof t=="string")return sr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sr(t,e)}}function sr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ho(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ga=function(){},zr={},vi={},wi=null,xi={mark:ga,measure:ga};try{typeof window<"u"&&(zr=window),typeof document<"u"&&(vi=document),typeof MutationObserver<"u"&&(wi=MutationObserver),typeof performance<"u"&&(xi=performance)}catch{}var po=zr.navigator||{},ya=po.userAgent,va=ya===void 0?"":ya,Dt=zr,V=vi,wa=wi,rn=xi;Dt.document;var Pt=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",ki=~va.indexOf("MSIE")||~va.indexOf("Trident/"),an,sn,on,cn,fn,St="___FONT_AWESOME___",or=16,Ei="fa",Ai="svg-inline--fa",ee="data-fa-i2svg",cr="data-fa-pseudo-element",bo="data-fa-pseudo-element-pending",jr="data-prefix",Wr="data-icon",xa="fontawesome-i2svg",go="async",yo=["HTML","HEAD","STYLE","SCRIPT"],Si=function(){try{return!0}catch{return!1}}(),K="classic",G="sharp",Kr=[K,G];function Je(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var Ue=Je((an={},Z(an,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Z(an,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),an)),Fe=Je((sn={},Z(sn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Z(sn,G,{solid:"fass",regular:"fasr",light:"fasl"}),sn)),Me=Je((on={},Z(on,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Z(on,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),on)),vo=Je((cn={},Z(cn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Z(cn,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),cn)),wo=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ii="fa-layers-text",xo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ko=Je((fn={},Z(fn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Z(fn,G,{900:"fass",400:"fasr",300:"fasl"}),fn)),_i=[1,2,3,4,5,6,7,8,9,10],Eo=_i.concat([11,12,13,14,15,16,17,18,19,20]),Ao=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},De=new Set;Object.keys(Fe[K]).map(De.add.bind(De));Object.keys(Fe[G]).map(De.add.bind(De));var So=[].concat(Kr,Qe(De),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gt.GROUP,Gt.SWAP_OPACITY,Gt.PRIMARY,Gt.SECONDARY]).concat(_i.map(function(t){return"".concat(t,"x")})).concat(Eo.map(function(t){return"w-".concat(t)})),Ce=Dt.FontAwesomeConfig||{};function Io(t){var e=V.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function _o(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(V&&typeof V.querySelector=="function"){var Oo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Oo.forEach(function(t){var e=Dr(t,2),n=e[0],r=e[1],a=_o(Io(n));a!=null&&(Ce[r]=a)})}var Oi={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ei,replacementClass:Ai,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ce.familyPrefix&&(Ce.cssPrefix=Ce.familyPrefix);var be=A(A({},Oi),Ce);be.autoReplaceSvg||(be.observeMutations=!1);var O={};Object.keys(Oi).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){be[t]=n,Ne.forEach(function(r){return r(O)})},get:function(){return be[t]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){be.cssPrefix=e,Ne.forEach(function(n){return n(O)})},get:function(){return be.cssPrefix}});Dt.FontAwesomeConfig=O;var Ne=[];function Po(t){return Ne.push(t),function(){Ne.splice(Ne.indexOf(t),1)}}var Lt=or,yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function To(t){if(!(!t||!Pt)){var e=V.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return V.head.insertBefore(e,r),t}}var Lo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ze(){for(var t=12,e="";t-- >0;)e+=Lo[Math.random()*62|0];return e}function Ee(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vr(t){return t.classList?Ee(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Pi(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Pi(t[n]),'" ')},"").trim()}function Hn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Yr(t){return t.size!==yt.size||t.x!==yt.x||t.y!==yt.y||t.rotate!==yt.rotate||t.flipX||t.flipY}function Ro(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:f}}function Co(t){var e=t.transform,n=t.width,r=n===void 0?or:n,a=t.height,i=a===void 0?or:a,s=t.startCentered,o=s===void 0?!1:s,c="";return o&&ki?c+="translate(".concat(e.x/Lt-r/2,"em, ").concat(e.y/Lt-i/2,"em) "):o?c+="translate(calc(-50% + ".concat(e.x/Lt,"em), calc(-50% + ").concat(e.y/Lt,"em)) "):c+="translate(".concat(e.x/Lt,"em, ").concat(e.y/Lt,"em) "),c+="scale(".concat(e.size/Lt*(e.flipX?-1:1),", ").concat(e.size/Lt*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var No=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ti(){var t=Ei,e=Ai,n=O.cssPrefix,r=O.replacementClass,a=No;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var ka=!1;function Vn(){O.autoAddCss&&!ka&&(To(Ti()),ka=!0)}var $o={mixout:function(){return{dom:{css:Ti,insertCss:Vn}}},hooks:function(){return{beforeDOMElementCreation:function(){Vn()},beforeI2svg:function(){Vn()}}}},It=Dt||{};It[St]||(It[St]={});It[St].styles||(It[St].styles={});It[St].hooks||(It[St].hooks={});It[St].shims||(It[St].shims=[]);var ut=It[St],Li=[],Ho=function t(){V.removeEventListener("DOMContentLoaded",t),_n=1,Li.map(function(e){return e()})},_n=!1;Pt&&(_n=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),_n||V.addEventListener("DOMContentLoaded",Ho));function Uo(t){Pt&&(_n?setTimeout(t,0):Li.push(t))}function tn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Pi(t):"<".concat(e," ").concat(Bo(r),">").concat(i.map(tn).join(""),"</").concat(e,">")}function Ea(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Fo=function(e,n){return function(r,a,i,s){return e.call(n,r,a,i,s)}},Yn=function(e,n,r,a){var i=Object.keys(e),s=i.length,o=a!==void 0?Fo(n,a):n,c,f,l;for(r===void 0?(c=1,l=e[i[0]]):(c=0,l=r);c<s;c++)f=i[c],l=o(l,e[f],f,e);return l};function Mo(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function fr(t){var e=Mo(t);return e.length===1?e[0].toString(16):null}function Do(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Aa(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function lr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Aa(e);typeof ut.hooks.addPack=="function"&&!a?ut.hooks.addPack(t,Aa(e)):ut.styles[t]=A(A({},ut.styles[t]||{}),i),t==="fas"&&lr("fa",e)}var ln,un,dn,oe=ut.styles,zo=ut.shims,jo=(ln={},Z(ln,K,Object.values(Me[K])),Z(ln,G,Object.values(Me[G])),ln),qr=null,Bi={},Ri={},Ci={},Ni={},$i={},Wo=(un={},Z(un,K,Object.keys(Ue[K])),Z(un,G,Object.keys(Ue[G])),un);function Ko(t){return~So.indexOf(t)}function Vo(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Ko(a)?a:null}var Hi=function(){var e=function(i){return Yn(oe,function(s,o,c){return s[c]=Yn(o,i,{}),s},{})};Bi=e(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){a[c.toString(16)]=s})}return a}),Ri=e(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){a[c]=s})}return a}),$i=e(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(c){a[c]=s}),a});var n="far"in oe||O.autoFetchSvg,r=Yn(zo,function(a,i){var s=i[0],o=i[1],c=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:c}),a},{names:{},unicodes:{}});Ci=r.names,Ni=r.unicodes,qr=Un(O.styleDefault,{family:O.familyDefault})};Po(function(t){qr=Un(t.styleDefault,{family:O.familyDefault})});Hi();function Gr(t,e){return(Bi[t]||{})[e]}function Yo(t,e){return(Ri[t]||{})[e]}function Xt(t,e){return($i[t]||{})[e]}function Ui(t){return Ci[t]||{prefix:null,iconName:null}}function qo(t){var e=Ni[t],n=Gr("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zt(){return qr}var Xr=function(){return{prefix:null,iconName:null,rest:[]}};function Un(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,a=Ue[r][t],i=Fe[r][t]||Fe[r][a],s=t in ut.styles?t:null;return i||s||null}var Sa=(dn={},Z(dn,K,Object.keys(Me[K])),Z(dn,G,Object.keys(Me[G])),dn);function Fn(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},Z(e,K,"".concat(O.cssPrefix,"-").concat(K)),Z(e,G,"".concat(O.cssPrefix,"-").concat(G)),e),s=null,o=K;(t.includes(i[K])||t.some(function(f){return Sa[K].includes(f)}))&&(o=K),(t.includes(i[G])||t.some(function(f){return Sa[G].includes(f)}))&&(o=G);var c=t.reduce(function(f,l){var u=Vo(O.cssPrefix,l);if(oe[l]?(l=jo[o].includes(l)?vo[o][l]:l,s=l,f.prefix=l):Wo[o].indexOf(l)>-1?(s=l,f.prefix=Un(l,{family:o})):u?f.iconName=u:l!==O.replacementClass&&l!==i[K]&&l!==i[G]&&f.rest.push(l),!a&&f.prefix&&f.iconName){var m=s==="fa"?Ui(f.iconName):{},b=Xt(f.prefix,f.iconName);m.prefix&&(s=null),f.iconName=m.iconName||b||f.iconName,f.prefix=m.prefix||f.prefix,f.prefix==="far"&&!oe.far&&oe.fas&&!O.autoFetchSvg&&(f.prefix="fas")}return f},Xr());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===G&&(oe.fass||O.autoFetchSvg)&&(c.prefix="fass",c.iconName=Xt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=zt()||"fas"),c}var Go=function(){function t(){so(this,t),this.definitions={}}return oo(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=A(A({},n.definitions[o]||{}),s[o]),lr(o,s[o]);var c=Me[K][o];c&&lr(c,s[o]),Hi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,c=s.iconName,f=s.icon,l=f[2];n[o]||(n[o]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(n[o][u]=f)}),n[o][c]=f}),n}}]),t}(),Ia=[],ce={},ue={},Xo=Object.keys(ue);function Zo(t,e){var n=e.mixoutsTo;return Ia=t,ce={},Object.keys(ue).forEach(function(r){Xo.indexOf(r)===-1&&delete ue[r]}),Ia.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),In(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){ce[s]||(ce[s]=[]),ce[s].push(i[s])})}r.provides&&r.provides(ue)}),n}function ur(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ce[t]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function ne(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ce[t]||[];a.forEach(function(i){i.apply(null,n)})}function _t(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ue[t]?ue[t].apply(null,e):void 0}function dr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||zt();if(e)return e=Xt(n,e)||e,Ea(Fi.definitions,n,e)||Ea(ut.styles,n,e)}var Fi=new Go,Qo=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,ne("noAuto")},Jo={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pt?(ne("beforeI2svg",e),_t("pseudoElements2svg",e),_t("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,Uo(function(){ec({autoReplaceSvgRoot:n}),ne("watch",e)})}},tc={icon:function(e){if(e===null)return null;if(In(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Un(e[0]);return{prefix:r,iconName:Xt(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.cssPrefix,"-"))>-1||e.match(wo))){var a=Fn(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||zt(),iconName:Xt(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=zt();return{prefix:i,iconName:Xt(i,e)||e}}}},st={noAuto:Qo,config:O,dom:Jo,parse:tc,library:Fi,findIconDefinition:dr,toHtml:tn},ec=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(ut.styles).length>0||O.autoFetchSvg)&&Pt&&O.autoReplaceSvg&&st.dom.i2svg({node:r})};function Mn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return tn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Pt){var r=V.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function nc(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,s=t.transform;if(Yr(s)&&n.found&&!r.found){var o=n.width,c=n.height,f={x:o/c/2,y:.5};a.style=Hn(A(A({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function rc(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,s=i===!0?"".concat(e,"-").concat(O.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:s}),children:r}]}]}function Zr(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,s=t.transform,o=t.symbol,c=t.title,f=t.maskId,l=t.titleId,u=t.extra,m=t.watchable,b=m===void 0?!1:m,I=r.found?r:n,p=I.width,d=I.height,v=a==="fak",w=[O.replacementClass,i?"".concat(O.cssPrefix,"-").concat(i):""].filter(function(g){return u.classes.indexOf(g)===-1}).filter(function(g){return g!==""||!!g}).concat(u.classes).join(" "),x={children:[],attributes:A(A({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(d)})},_=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/d*16*.0625,"em")}:{};b&&(x.attributes[ee]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||ze())},children:[c]}),delete x.attributes.title);var y=A(A({},x),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:A(A({},_),u.styles)}),R=r.found&&n.found?_t("generateAbstractMask",y)||{children:[],attributes:{}}:_t("generateAbstractIcon",y)||{children:[],attributes:{}},T=R.children,h=R.attributes;return y.children=T,y.attributes=h,o?rc(y):nc(y)}function _a(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,s=t.extra,o=t.watchable,c=o===void 0?!1:o,f=A(A(A({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});c&&(f[ee]="");var l=A({},s.styles);Yr(a)&&(l.transform=Co({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var u=Hn(l);u.length>0&&(f.style=u);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function ac(t){var e=t.content,n=t.title,r=t.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Hn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var qn=ut.styles;function hr(t){var e=t[0],n=t[1],r=t.slice(4),a=Dr(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(Gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Gt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Gt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}var ic={found:!1,width:512,height:512};function sc(t,e){!Si&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function mr(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=zt()),new Promise(function(r,a){if(_t("missingIconAbstract"),n==="fa"){var i=Ui(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&qn[e]&&qn[e][t]){var s=qn[e][t];return r(hr(s))}sc(t,e),r(A(A({},ic),{},{icon:O.showMissingIcons&&t?_t("missingIconAbstract")||{}:{}}))})}var Oa=function(){},pr=O.measurePerformance&&rn&&rn.mark&&rn.measure?rn:{mark:Oa,measure:Oa},Le='FA "6.4.0"',oc=function(e){return pr.mark("".concat(Le," ").concat(e," begins")),function(){return Mi(e)}},Mi=function(e){pr.mark("".concat(Le," ").concat(e," ends")),pr.measure("".concat(Le," ").concat(e),"".concat(Le," ").concat(e," begins"),"".concat(Le," ").concat(e," ends"))},Qr={begin:oc,end:Mi},xn=function(){};function Pa(t){var e=t.getAttribute?t.getAttribute(ee):null;return typeof e=="string"}function cc(t){var e=t.getAttribute?t.getAttribute(jr):null,n=t.getAttribute?t.getAttribute(Wr):null;return e&&n}function fc(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function lc(){if(O.autoReplaceSvg===!0)return kn.replace;var t=kn[O.autoReplaceSvg];return t||kn.replace}function uc(t){return V.createElementNS("http://www.w3.org/2000/svg",t)}function dc(t){return V.createElement(t)}function Di(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?uc:dc:n;if(typeof t=="string")return V.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])});var i=t.children||[];return i.forEach(function(s){a.appendChild(Di(s,{ceFn:r}))}),a}function hc(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var kn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Di(a),n)}),n.getAttribute(ee)===null&&O.keepOriginalSource){var r=V.createComment(hc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Vr(n).indexOf(O.replacementClass))return kn.replace(e);var a=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,c){return c===O.replacementClass||c.match(a)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return tn(o)}).join(`
`);n.setAttribute(ee,""),n.innerHTML=s}};function Ta(t){t()}function zi(t,e){var n=typeof e=="function"?e:xn;if(t.length===0)n();else{var r=Ta;O.mutateApproach===go&&(r=Dt.requestAnimationFrame||Ta),r(function(){var a=lc(),i=Qr.begin("mutate");t.map(a),i(),n()})}}var Jr=!1;function ji(){Jr=!0}function br(){Jr=!1}var On=null;function La(t){if(wa&&O.observeMutations){var e=t.treeCallback,n=e===void 0?xn:e,r=t.nodeCallback,a=r===void 0?xn:r,i=t.pseudoElementsCallback,s=i===void 0?xn:i,o=t.observeMutationsRoot,c=o===void 0?V:o;On=new wa(function(f){if(!Jr){var l=zt();Ee(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Pa(u.addedNodes[0])&&(O.searchPseudoElements&&s(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&O.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&Pa(u.target)&&~Ao.indexOf(u.attributeName))if(u.attributeName==="class"&&cc(u.target)){var m=Fn(Vr(u.target)),b=m.prefix,I=m.iconName;u.target.setAttribute(jr,b||l),I&&u.target.setAttribute(Wr,I)}else fc(u.target)&&a(u.target)})}}),Pt&&On.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mc(){On&&On.disconnect()}function pc(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function bc(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Fn(Vr(t));return a.prefix||(a.prefix=zt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Yo(a.prefix,t.innerText)||Gr(a.prefix,fr(t.innerText))),!a.iconName&&O.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function gc(t){var e=Ee(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||ze()):(e["aria-hidden"]="true",e.focusable="false")),e}function yc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ba(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bc(t),r=n.iconName,a=n.prefix,i=n.rest,s=gc(t),o=ur("parseNodeAttributes",{},t),c=e.styleParser?pc(t):[];return A({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:s}},o)}var vc=ut.styles;function Wi(t){var e=O.autoReplaceSvg==="nest"?Ba(t,{styleParser:!1}):Ba(t);return~e.extra.classes.indexOf(Ii)?_t("generateLayersText",t,e):_t("generateSvgReplacementMutation",t,e)}var jt=new Set;Kr.map(function(t){jt.add("fa-".concat(t))});Object.keys(Ue[K]).map(jt.add.bind(jt));Object.keys(Ue[G]).map(jt.add.bind(jt));jt=Qe(jt);function Ra(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pt)return Promise.resolve();var n=V.documentElement.classList,r=function(u){return n.add("".concat(xa,"-").concat(u))},a=function(u){return n.remove("".concat(xa,"-").concat(u))},i=O.autoFetchSvg?jt:Kr.map(function(l){return"fa-".concat(l)}).concat(Object.keys(vc));i.includes("fa")||i.push("fa");var s=[".".concat(Ii,":not([").concat(ee,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(ee,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ee(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var c=Qr.begin("onTree"),f=o.reduce(function(l,u){try{var m=Wi(u);m&&l.push(m)}catch(b){Si||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,u){Promise.all(f).then(function(m){zi(m,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(m){c(),u(m)})})}function wc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wi(t).then(function(n){n&&zi([n],e)})}function xc(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:dr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:dr(a||{})),t(r,A(A({},n),{},{mask:a}))}}var kc=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?yt:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,c=o===void 0?null:o,f=n.maskId,l=f===void 0?null:f,u=n.title,m=u===void 0?null:u,b=n.titleId,I=b===void 0?null:b,p=n.classes,d=p===void 0?[]:p,v=n.attributes,w=v===void 0?{}:v,x=n.styles,_=x===void 0?{}:x;if(e){var y=e.prefix,R=e.iconName,T=e.icon;return Mn(A({type:"icon"},e),function(){return ne("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(m?w["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(I||ze()):(w["aria-hidden"]="true",w.focusable="false")),Zr({icons:{main:hr(T),mask:c?hr(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:R,transform:A(A({},yt),a),symbol:s,title:m,maskId:l,titleId:I,extra:{attributes:w,styles:_,classes:d}})})}},Ec={mixout:function(){return{icon:xc(kc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ra,n.nodeCallback=wc,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,s=i===void 0?function(){}:i;return Ra(a,s)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,c=r.transform,f=r.symbol,l=r.mask,u=r.maskId,m=r.extra;return new Promise(function(b,I){Promise.all([mr(a,o),l.iconName?mr(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var d=Dr(p,2),v=d[0],w=d[1];b([n,Zr({icons:{main:v,mask:w},prefix:o,iconName:a,transform:c,symbol:f,maskId:u,title:i,titleId:s,extra:m,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,c=Hn(o);c.length>0&&(a.style=c);var f;return Yr(s)&&(f=_t("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Ac={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mn({type:"layer"},function(){ne("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(Qe(i)).join(" ")},children:s}]})}}}},Sc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,c=r.attributes,f=c===void 0?{}:c,l=r.styles,u=l===void 0?{}:l;return Mn({type:"counter",content:n},function(){return ne("beforeDOMElementCreation",{content:n,params:r}),ac({content:n.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(Qe(o))}})})}}}},Ic={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?yt:a,s=r.title,o=s===void 0?null:s,c=r.classes,f=c===void 0?[]:c,l=r.attributes,u=l===void 0?{}:l,m=r.styles,b=m===void 0?{}:m;return Mn({type:"text",content:n},function(){return ne("beforeDOMElementCreation",{content:n,params:r}),_a({content:n,transform:A(A({},yt),i),title:o,extra:{attributes:u,styles:b,classes:["".concat(O.cssPrefix,"-layers-text")].concat(Qe(f))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,c=null;if(ki){var f=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();o=l.width/f,c=l.height/f}return O.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,_a({content:n.innerHTML,width:o,height:c,transform:i,title:a,extra:s,watchable:!0})])}}},_c=new RegExp('"',"ug"),Ca=[1105920,1112319];function Oc(t){var e=t.replace(_c,""),n=Do(e,0),r=n>=Ca[0]&&n<=Ca[1],a=e.length===2?e[0]===e[1]:!1;return{value:fr(a?e[0]:e),isSecondary:r||a}}function Na(t,e){var n="".concat(bo).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ee(t.children),s=i.filter(function(T){return T.getAttribute(cr)===e})[0],o=Dt.getComputedStyle(t,e),c=o.getPropertyValue("font-family").match(xo),f=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(s&&!c)return t.removeChild(s),r();if(c&&l!=="none"&&l!==""){var u=o.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?G:K,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Fe[m][c[2].toLowerCase()]:ko[m][f],I=Oc(u),p=I.value,d=I.isSecondary,v=c[0].startsWith("FontAwesome"),w=Gr(b,p),x=w;if(v){var _=qo(p);_.iconName&&_.prefix&&(w=_.iconName,b=_.prefix)}if(w&&!d&&(!s||s.getAttribute(jr)!==b||s.getAttribute(Wr)!==x)){t.setAttribute(n,x),s&&t.removeChild(s);var y=yc(),R=y.extra;R.attributes[cr]=e,mr(w,b).then(function(T){var h=Zr(A(A({},y),{},{icons:{main:T,mask:Xr()},prefix:b,iconName:x,extra:R,watchable:!0})),g=V.createElement("svg");e==="::before"?t.insertBefore(g,t.firstChild):t.appendChild(g),g.outerHTML=h.map(function(k){return tn(k)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Pc(t){return Promise.all([Na(t,"::before"),Na(t,"::after")])}function Tc(t){return t.parentNode!==document.head&&!~yo.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(cr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $a(t){if(Pt)return new Promise(function(e,n){var r=Ee(t.querySelectorAll("*")).filter(Tc).map(Pc),a=Qr.begin("searchPseudoElements");ji(),Promise.all(r).then(function(){a(),br(),e()}).catch(function(){a(),br(),n()})})}var Lc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$a,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;O.searchPseudoElements&&$a(a)}}},Ha=!1,Bc={mixout:function(){return{dom:{unwatch:function(){ji(),Ha=!0}}}},hooks:function(){return{bootstrap:function(){La(ur("mutationObserverCallbacks",{}))},noAuto:function(){mc()},watch:function(n){var r=n.observeMutationsRoot;Ha?br():La(ur("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ua=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Rc={mixout:function(){return{parse:{transform:function(n){return Ua(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ua(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(c," ").concat(f," ").concat(l)},m={transform:"translate(".concat(s/2*-1," -256)")},b={outer:o,inner:u,path:m};return{tag:"g",attributes:A({},b.outer),children:[{tag:"g",attributes:A({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),b.path)}]}]}}}},Gn={x:0,y:0,width:"100%",height:"100%"};function Fa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Cc(t){return t.tag==="g"?t.children:[t]}var Nc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Fn(a.split(" ").map(function(s){return s.trim()})):Xr();return i.prefix||(i.prefix=zt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,c=n.transform,f=i.width,l=i.icon,u=s.width,m=s.icon,b=Ro({transform:c,containerWidth:u,iconWidth:f}),I={tag:"rect",attributes:A(A({},Gn),{},{fill:"white"})},p=l.children?{children:l.children.map(Fa)}:{},d={tag:"g",attributes:A({},b.inner),children:[Fa(A({tag:l.tag,attributes:A(A({},l.attributes),b.path)},p))]},v={tag:"g",attributes:A({},b.outer),children:[d]},w="mask-".concat(o||ze()),x="clip-".concat(o||ze()),_={tag:"mask",attributes:A(A({},Gn),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,v]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Cc(m)},_]};return r.push(y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(w,")")},Gn)}),{children:r,attributes:a}}}},$c={provides:function(e){var n=!1;Dt.matchMedia&&(n=Dt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=A(A({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Hc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Uc=[$o,Ec,Ac,Sc,Ic,Lc,Bc,Rc,Nc,$c,Hc];Zo(Uc,{mixoutsTo:st});st.noAuto;st.config;st.library;st.dom;var gr=st.parse;st.findIconDefinition;st.toHtml;var Fc=st.icon;st.layer;st.text;st.counter;function Ma(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Ut(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ma(Object(n),!0).forEach(function(r){fe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ma(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Pn(t){"@babel/helpers - typeof";return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pn(t)}function fe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Mc(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Dc(t,e){if(t==null)return{};var n=Mc(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function yr(t){return zc(t)||jc(t)||Wc(t)||Kc()}function zc(t){if(Array.isArray(t))return vr(t)}function jc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wc(t,e){if(t){if(typeof t=="string")return vr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vr(t,e)}}function vr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Kc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vc(t){var e,n=t.beat,r=t.fade,a=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,c=t.spin,f=t.spinPulse,l=t.spinReverse,u=t.pulse,m=t.fixedWidth,b=t.inverse,I=t.border,p=t.listItem,d=t.flip,v=t.size,w=t.rotation,x=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":l,"fa-spin-pulse":f,"fa-pulse":u,"fa-fw":m,"fa-inverse":b,"fa-border":I,"fa-li":p,"fa-flip":d===!0,"fa-flip-horizontal":d==="horizontal"||d==="both","fa-flip-vertical":d==="vertical"||d==="both"},fe(e,"fa-".concat(v),typeof v<"u"&&v!==null),fe(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),fe(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),fe(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(y){return _[y]?y:null}).filter(function(y){return y})}function Yc(t){return t=t-0,t===t}function Ki(t){return Yc(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var qc=["style"];function Gc(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Xc(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Ki(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?e[Gc(a)]=i:e[a]=i,e},{})}function Vi(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Vi(t,c)}),a=Object.keys(e.attributes||{}).reduce(function(c,f){var l=e.attributes[f];switch(f){case"class":c.attrs.className=l,delete e.attributes.class;break;case"style":c.attrs.style=Xc(l);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=l:c.attrs[Ki(f)]=l}return c},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=Dc(n,qc);return a.attrs.style=Ut(Ut({},a.attrs.style),s),t.apply(void 0,[e.tag,Ut(Ut({},a.attrs),o)].concat(yr(r)))}var Yi=!1;try{Yi=!0}catch{}function Zc(){if(!Yi&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Da(t){if(t&&Pn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gr.icon)return gr.icon(t);if(t===null)return null;if(t&&Pn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Xn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?fe({},t,e):{}}var Dn=Fr.forwardRef(function(t,e){var n=t.icon,r=t.mask,a=t.symbol,i=t.className,s=t.title,o=t.titleId,c=t.maskId,f=Da(n),l=Xn("classes",[].concat(yr(Vc(t)),yr(i.split(" ")))),u=Xn("transform",typeof t.transform=="string"?gr.transform(t.transform):t.transform),m=Xn("mask",Da(r)),b=Fc(f,Ut(Ut(Ut(Ut({},l),u),m),{},{symbol:a,title:s,titleId:o,maskId:c}));if(!b)return Zc("Could not find icon",f),null;var I=b.abstract,p={ref:e};return Object.keys(t).forEach(function(d){Dn.defaultProps.hasOwnProperty(d)||(p[d]=t[d])}),Qc(I[0],p)});Dn.displayName="FontAwesomeIcon";Dn.propTypes={beat:$.bool,border:$.bool,beatFade:$.bool,bounce:$.bool,className:$.string,fade:$.bool,flash:$.bool,mask:$.oneOfType([$.object,$.array,$.string]),maskId:$.string,fixedWidth:$.bool,inverse:$.bool,flip:$.oneOf([!0,!1,"horizontal","vertical","both"]),icon:$.oneOfType([$.object,$.array,$.string]),listItem:$.bool,pull:$.oneOf(["right","left"]),pulse:$.bool,rotation:$.oneOf([0,90,180,270]),shake:$.bool,size:$.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:$.bool,spinPulse:$.bool,spinReverse:$.bool,symbol:$.oneOfType([$.bool,$.string]),title:$.string,titleId:$.string,transform:$.oneOfType([$.string,$.object]),swapOpacity:$.bool};Dn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Qc=Vi.bind(null,Fr.createElement);const Jc=t=>N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",fillRule:"evenodd",strokeMiterlimit:2,clipRule:"evenodd",viewBox:"0 0 1000 1000",...t},N.createElement("g",null,N.createElement("circle",{cx:500,cy:500,r:479,fill:"#fff"}),N.createElement("path",{fill:"#ff2500",d:"M500.63 20c239.42 0 438.11 175.86 473.98 405.4.04.26-97.97.1-98.22 0-.5-.22.88 150.92.95 150.94.07.03 97.11-.76 96.99 0C937.73 805.03 739.44 980 500.63 980 235.85 980 20.88 764.93 20.88 500c0-264.92 214.97-480 479.75-480"}),N.createElement("circle",{cx:500,cy:500,r:385,fill:"#fff"})),N.createElement("g",null,N.createElement("circle",{cx:500,cy:500,r:375,fill:"#222"}),N.createElement("path",{fill:"#fff",d:"M777.77 442.35h98.06s10.2 32.67 10.2 57.67-10.2 59.01-10.2 59.01h-91.95l-6.1-116.68Z"}),N.createElement("circle",{cx:500,cy:500,r:295,fill:"#fff"})),N.createElement("g",null,N.createElement("circle",{cx:500,cy:500,r:275,fill:"#ff6500"}),N.createElement("circle",{cx:500,cy:500,r:210,fill:"#fff"}),N.createElement("path",{fill:"#fff",d:"M615 457.12h157.18s7.67 24.28 7.67 42.87c0 18.58-7.67 43.87-7.67 43.87H616.39l-9.43-86.74Z"})),N.createElement("g",null,N.createElement("circle",{cx:500,cy:500,r:185,fill:"#444"}),N.createElement("circle",{cx:500,cy:500,r:145,fill:"#fff"}),N.createElement("path",{fill:"#fff",d:"M580 472.2h103.81s5.07 15.75 5.07 27.8c0 12.06-5.07 28.45-5.07 28.45h-97.58l-6.23-56.25Z"})),N.createElement("g",null,N.createElement("circle",{cx:500,cy:500,r:100,fill:"orange"}),N.createElement("circle",{cx:500,cy:500,r:64,fill:"#fff"}),N.createElement("path",{fill:"#fff",d:"M540.73 484.54h58.3s1.32 8.76 1.32 15.46c0 6.7-1.18 15.82-1.18 15.82H544.2l-3.47-31.28Z"})));function Cu(){return D.jsxs("div",{className:"flex flex-col place-content-center place-items-center gap-1",children:[D.jsx(bi,{href:"https://github.com/planetarium/web9c",children:D.jsx(Jc,{className:"w-24 bg-transparent"})}),D.jsx(gi,{as:"span",display:"block",fontSize:"28px",lineHeight:"32px",fontWeight:"light",children:"Web9c"})]})}let tf=0;function ef(t,e){const n=`atom${++tf}`,r={toString:()=>n};return typeof t=="function"?r.read=t:(r.init=t,r.read=a=>a(r),r.write=(a,i,s)=>i(r,typeof s=="function"?s(a(r)):s)),e&&(r.write=e),r}const Zn=t=>"init"in t,Qn=t=>!!t.write,Tn=new WeakMap,nf=(t,e)=>{Tn.set(t,e),t.catch(()=>{}).finally(()=>Tn.delete(t))},za=(t,e)=>{const n=Tn.get(t);n&&(Tn.delete(t),n(e))},ja=(t,e)=>{t.status="fulfilled",t.value=e},Wa=(t,e)=>{t.status="rejected",t.reason=e},hn=(t,e)=>"v"in t&&"v"in e&&Object.is(t.v,e.v),Ka=(t,e)=>"e"in t&&"e"in e&&Object.is(t.e,e.e),Jn=t=>"v"in t&&t.v instanceof Promise,mn=t=>{if("e"in t)throw t.e;return t.v},rf=()=>{const t=new WeakMap,e=new WeakMap,n=new Map;let r,a;({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&(r=new Set,a=new Set);const i=h=>t.get(h),s=(h,g)=>{({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&Object.freeze(g);const k=t.get(h);if(t.set(h,g),n.has(h)||n.set(h,k),k&&Jn(k)){const S="v"in g?g.v instanceof Promise?g.v:Promise.resolve(g.v):Promise.reject(g.e);za(k.v,S)}},o=(h,g,k)=>{const S=new Map;let L=!1;k.forEach((P,C)=>{!P&&C===h&&(P=g),P?(S.set(C,P),g.d.get(C)!==P&&(L=!0)):({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[Bug] atom state not found")}),(L||g.d.size!==S.size)&&(g.d=S)},c=(h,g,k)=>{const S=i(h),L={d:(S==null?void 0:S.d)||new Map,v:g};return k&&o(h,L,k),S&&hn(S,L)&&S.d===L.d?S:(s(h,L),L)},f=(h,g,k,S)=>{if(g instanceof Promise){let L;const P=new Promise((C,at)=>{let B=!1;g.then(F=>{if(!B){B=!0;const W=i(h),Q=c(h,P,k);ja(P,F),C(F),(W==null?void 0:W.d)!==Q.d&&y(h,Q,W==null?void 0:W.d)}},F=>{if(!B){B=!0;const W=i(h),Q=c(h,P,k);Wa(P,F),at(F),(W==null?void 0:W.d)!==Q.d&&y(h,Q,W==null?void 0:W.d)}}),L=F=>{B||(B=!0,F.then(W=>ja(P,W),W=>Wa(P,W)),C(F))}});return P.status="pending",nf(P,C=>{C&&L(C),S==null||S()}),c(h,P,k)}return c(h,g,k)},l=(h,g,k)=>{const S=i(h),L={d:(S==null?void 0:S.d)||new Map,e:g};return k&&o(h,L,k),S&&Ka(S,L)&&S.d===L.d?S:(s(h,L),L)},u=h=>{const g=i(h);if(g&&(g.d.forEach((B,F)=>{F!==h&&!e.has(F)&&u(F)}),Array.from(g.d).every(([B,F])=>B===h||i(B)===F)))return g;const k=new Map;let S=!0;const L=B=>{if(B===h){const W=i(B);if(W)return k.set(B,W),mn(W);if(Zn(B))return k.set(B,void 0),B.init;throw new Error("no atom init")}const F=u(B);return k.set(B,F),mn(F)};let P,C;const at={get signal(){return P||(P=new AbortController),P.signal},get setSelf(){return({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!Qn(h)&&console.warn("setSelf function cannot be used with read-only atom"),!C&&Qn(h)&&(C=(...B)=>{if(({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&S&&console.warn("setSelf function cannot be called in sync"),!S)return w(h,...B)}),C}};try{const B=h.read(L,at);return f(h,B,k,()=>P==null?void 0:P.abort())}catch(B){return l(h,B,k)}finally{S=!1}},m=h=>mn(u(h)),b=h=>{let g=e.get(h);return g||(g=x(h)),g},I=(h,g)=>!g.l.size&&(!g.t.size||g.t.size===1&&g.t.has(h)),p=h=>{const g=e.get(h);g&&I(h,g)&&_(h)},d=h=>{const g=e.get(h);g==null||g.t.forEach(k=>{if(k!==h){const S=i(k),L=u(k);(!S||!hn(S,L))&&d(k)}})},v=(h,...g)=>{let k=!0;const S=C=>mn(u(C)),L=(C,...at)=>{let B;if(C===h){if(!Zn(C))throw new Error("atom not writable");const F=i(C),W=f(C,at[0]);(!F||!hn(F,W))&&d(C)}else B=v(C,...at);return k||R(),B},P=h.write(S,L,...g);return k=!1,P},w=(h,...g)=>{const k=v(h,...g);return R(),k},x=(h,g)=>{const k={t:new Set(g&&[g]),l:new Set};if(e.set(h,k),({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&a.add(h),u(h).d.forEach((S,L)=>{const P=e.get(L);P?P.t.add(h):L!==h&&x(L,h)}),u(h),Qn(h)&&h.onMount){const S=h.onMount((...L)=>w(h,...L));S&&(k.u=S)}return k},_=h=>{var g;const k=(g=e.get(h))==null?void 0:g.u;k&&k(),e.delete(h),({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&a.delete(h);const S=i(h);S?(Jn(S)&&za(S.v),S.d.forEach((L,P)=>{if(P!==h){const C=e.get(P);C&&(C.t.delete(h),I(P,C)&&_(P))}})):({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[Bug] could not find atom state to unmount",h)},y=(h,g,k)=>{const S=new Set(g.d.keys());k==null||k.forEach((L,P)=>{if(S.has(P)){S.delete(P);return}const C=e.get(P);C&&(C.t.delete(h),I(P,C)&&_(P))}),S.forEach(L=>{const P=e.get(L);P?P.t.add(h):e.has(h)&&x(L,h)})},R=()=>{for(;n.size;){const h=Array.from(n);n.clear(),h.forEach(([g,k])=>{const S=i(g);if(S){S.d!==(k==null?void 0:k.d)&&y(g,S,k==null?void 0:k.d);const L=e.get(g);L&&!(k&&!Jn(k)&&(hn(k,S)||Ka(k,S)))&&L.l.forEach(P=>P())}else({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[Bug] no atom state to flush")})}({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&r.forEach(h=>h("state"))},T=(h,g)=>{const k=b(h);R();const S=k.l;return S.add(g),({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&r.forEach(L=>L("sub")),()=>{S.delete(g),p(h),({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&r.forEach(L=>L("unsub"))}};return({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"?{get:m,set:w,sub:T,dev_subscribe_store:h=>(r.add(h),()=>{r.delete(h)}),dev_get_mounted_atoms:()=>a.values(),dev_get_atom_state:h=>t.get(h),dev_get_mounted:h=>e.get(h),dev_restore_atoms:h=>{for(const[g,k]of h)Zn(g)&&(f(g,k),d(g));R()}}:{get:m,set:w,sub:T}};let tr;const af=()=>(tr||(tr=rf()),tr),sf=N.createContext(void 0),qi=t=>{const e=N.useContext(sf);return(t==null?void 0:t.store)||e||af()},of=t=>t instanceof Promise,cf=Fr.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)});function ff(t,e){const n=qi(e),[[r,a,i],s]=N.useReducer(f=>{const l=n.get(t);return Object.is(f[0],l)&&f[1]===n&&f[2]===t?f:[l,n,t]},void 0,()=>[n.get(t),n,t]);let o=r;(a!==n||i!==t)&&(s(),o=n.get(t));const c=e==null?void 0:e.delay;return N.useEffect(()=>{const f=n.sub(t,()=>{if(typeof c=="number"){setTimeout(s,c);return}s()});return s(),f},[n,t,c]),N.useDebugValue(o),of(o)?cf(o):o}function lf(t,e){const n=qi(e);return N.useCallback((...a)=>{if(({BASE_SERVER:"/web9c",BASE_ASSETS:"/web9c",BASE_URL:"/web9c",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!("write"in t))throw new Error("not writable atom");return n.set(t,...a)},[n,t])}function Nu(t,e){return[ff(t,e),lf(t,e)]}function wr(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function uf(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function Gi(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function df(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");wr(t.outputLen),wr(t.blockLen)}function hf(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function mf(t,e){Gi(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Et={number:wr,bool:uf,bytes:Gi,hash:df,exists:hf,output:mf},pn=BigInt(2**32-1),xr=BigInt(32);function Xi(t,e=!1){return e?{h:Number(t&pn),l:Number(t>>xr&pn)}:{h:Number(t>>xr&pn)|0,l:Number(t&pn)|0}}function pf(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let a=0;a<t.length;a++){const{h:i,l:s}=Xi(t[a],e);[n[a],r[a]]=[i,s]}return[n,r]}const bf=(t,e)=>BigInt(t>>>0)<<xr|BigInt(e>>>0),gf=(t,e,n)=>t>>>n,yf=(t,e,n)=>t<<32-n|e>>>n,vf=(t,e,n)=>t>>>n|e<<32-n,wf=(t,e,n)=>t<<32-n|e>>>n,xf=(t,e,n)=>t<<64-n|e>>>n-32,kf=(t,e,n)=>t>>>n-32|e<<64-n,Ef=(t,e)=>e,Af=(t,e)=>t,Sf=(t,e,n)=>t<<n|e>>>32-n,If=(t,e,n)=>e<<n|t>>>32-n,_f=(t,e,n)=>e<<n-32|t>>>64-n,Of=(t,e,n)=>t<<n-32|e>>>64-n;function Pf(t,e,n,r){const a=(e>>>0)+(r>>>0);return{h:t+n+(a/2**32|0)|0,l:a|0}}const Tf=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),Lf=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Bf=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Rf=(t,e,n,r,a)=>e+n+r+a+(t/2**32|0)|0,Cf=(t,e,n,r,a)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(a>>>0),Nf=(t,e,n,r,a,i)=>e+n+r+a+i+(t/2**32|0)|0,je={fromBig:Xi,split:pf,toBig:bf,shrSH:gf,shrSL:yf,rotrSH:vf,rotrSL:wf,rotrBH:xf,rotrBL:kf,rotr32H:Ef,rotr32L:Af,rotlSH:Sf,rotlSL:If,rotlBH:_f,rotlBL:Of,add:Pf,add3L:Tf,add3H:Lf,add4L:Bf,add4H:Rf,add5H:Nf,add5L:Cf};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $f=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),er=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),bt=(t,e)=>t<<32-e|t>>>e,Hf=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Hf)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Uf(t){if(typeof t!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);return new TextEncoder().encode(t)}function zn(t){if(typeof t=="string"&&(t=Uf(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}let Zi=class{clone(){return this._cloneInto()}};function ta(t){const e=r=>t().update(zn(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Ff(t){const e=(r,a)=>t(a).update(zn(r)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}const[Qi,Ji,ts]=[[],[],[]],Mf=BigInt(0),Oe=BigInt(1),Df=BigInt(2),zf=BigInt(7),jf=BigInt(256),Wf=BigInt(113);for(let t=0,e=Oe,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],Qi.push(2*(5*r+n)),Ji.push((t+1)*(t+2)/2%64);let a=Mf;for(let i=0;i<7;i++)e=(e<<Oe^(e>>zf)*Wf)%jf,e&Df&&(a^=Oe<<(Oe<<BigInt(i))-Oe);ts.push(a)}const[Kf,Vf]=je.split(ts,!0),Va=(t,e,n)=>n>32?je.rotlBH(t,e,n):je.rotlSH(t,e,n),Ya=(t,e,n)=>n>32?je.rotlBL(t,e,n):je.rotlSL(t,e,n);function Yf(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const o=(s+8)%10,c=(s+2)%10,f=n[c],l=n[c+1],u=Va(f,l,1)^n[o],m=Ya(f,l,1)^n[o+1];for(let b=0;b<50;b+=10)t[s+b]^=u,t[s+b+1]^=m}let a=t[2],i=t[3];for(let s=0;s<24;s++){const o=Ji[s],c=Va(a,i,o),f=Ya(a,i,o),l=Qi[s];a=t[l],i=t[l+1],t[l]=c,t[l+1]=f}for(let s=0;s<50;s+=10){for(let o=0;o<10;o++)n[o]=t[s+o];for(let o=0;o<10;o++)t[s+o]^=~n[(o+2)%10]&n[(o+4)%10]}t[0]^=Kf[r],t[1]^=Vf[r]}n.fill(0)}let es=class ns extends Zi{constructor(e,n,r,a=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=a,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Et.number(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=$f(this.state)}keccak(){Yf(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Et.exists(this);const{blockLen:n,state:r}=this;e=zn(e);const a=e.length;for(let i=0;i<a;){const s=Math.min(n-this.pos,a-i);for(let o=0;o<s;o++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:a}=this;e[r]^=n,n&128&&r===a-1&&this.keccak(),e[a-1]^=128,this.keccak()}writeInto(e){Et.exists(this,!1),Et.bytes(e),this.finish();const n=this.state,{blockLen:r}=this;for(let a=0,i=e.length;a<i;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,i-a);e.set(n.subarray(this.posOut,this.posOut+s),a),this.posOut+=s,a+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Et.number(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Et.output(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:a,rounds:i,enableXOF:s}=this;return e||(e=new ns(n,r,a,s,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=a,e.enableXOF=s,e.destroyed=this.destroyed,e}};const Wt=(t,e,n)=>ta(()=>new es(e,t,n));Wt(6,144,224/8);Wt(6,136,256/8);Wt(6,104,384/8);Wt(6,72,512/8);Wt(1,144,224/8);const rs=Wt(1,136,256/8);Wt(1,104,384/8);Wt(1,72,512/8);const as=(t,e,n)=>Ff((r={})=>new es(e,t,r.dkLen===void 0?n:r.dkLen,!0));as(31,168,128/8);as(31,136,256/8);function qf(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const a=BigInt(32),i=BigInt(4294967295),s=Number(n>>a&i),o=Number(n&i),c=r?4:0,f=r?0:4;t.setUint32(e+c,s,r),t.setUint32(e+f,o,r)}let Gf=class extends Zi{constructor(e,n,r,a){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=a,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=er(this.buffer)}update(e){Et.exists(this);const{view:n,buffer:r,blockLen:a}=this;e=zn(e);const i=e.length;for(let s=0;s<i;){const o=Math.min(a-this.pos,i-s);if(o===a){const c=er(e);for(;a<=i-s;s+=a)this.process(c,s);continue}r.set(e.subarray(s,s+o),this.pos),this.pos+=o,s+=o,this.pos===a&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Et.exists(this),Et.output(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:a,isLE:i}=this;let{pos:s}=this;n[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>a-s&&(this.process(r,0),s=0);for(let u=s;u<a;u++)n[u]=0;qf(r,a-8,BigInt(this.length*8),i),this.process(r,0);const o=er(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=c/4,l=this.get();if(f>l.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<f;u++)o.setUint32(4*u,l[u],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:a,finished:i,destroyed:s,pos:o}=this;return e.length=a,e.pos=o,e.finished=i,e.destroyed=s,a%n&&e.buffer.set(r),e}};const Xf=(t,e,n)=>t&e^~t&n,Zf=(t,e,n)=>t&e^t&n^e&n,Qf=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Bt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Rt=new Uint32Array(64);let is=class extends Gf{constructor(){super(64,32,8,!1),this.A=Bt[0]|0,this.B=Bt[1]|0,this.C=Bt[2]|0,this.D=Bt[3]|0,this.E=Bt[4]|0,this.F=Bt[5]|0,this.G=Bt[6]|0,this.H=Bt[7]|0}get(){const{A:e,B:n,C:r,D:a,E:i,F:s,G:o,H:c}=this;return[e,n,r,a,i,s,o,c]}set(e,n,r,a,i,s,o,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=a|0,this.E=i|0,this.F=s|0,this.G=o|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)Rt[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){const m=Rt[u-15],b=Rt[u-2],I=bt(m,7)^bt(m,18)^m>>>3,p=bt(b,17)^bt(b,19)^b>>>10;Rt[u]=p+Rt[u-7]+I+Rt[u-16]|0}let{A:r,B:a,C:i,D:s,E:o,F:c,G:f,H:l}=this;for(let u=0;u<64;u++){const m=bt(o,6)^bt(o,11)^bt(o,25),b=l+m+Xf(o,c,f)+Qf[u]+Rt[u]|0,p=(bt(r,2)^bt(r,13)^bt(r,22))+Zf(r,a,i)|0;l=f,f=c,c=o,o=s+b|0,s=i,i=a,a=r,r=b+p|0}r=r+this.A|0,a=a+this.B|0,i=i+this.C|0,s=s+this.D|0,o=o+this.E|0,c=c+this.F|0,f=f+this.G|0,l=l+this.H|0,this.set(r,a,i,s,o,c,f,l)}roundClean(){Rt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}},Jf=class extends is{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};const tl=ta(()=>new is);ta(()=>new Jf);/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const H=BigInt(0),q=BigInt(1),Ft=BigInt(2),$e=BigInt(3),qa=BigInt(8),X=Object.freeze({a:H,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:q,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Ga=(t,e)=>(t+e/Ft)/e,bn={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(t){const{n:e}=X,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-q*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),a=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=n,s=BigInt("0x100000000000000000000000000000000"),o=Ga(i*t,e),c=Ga(-r*t,e);let f=E(t-o*n-c*a,e),l=E(-o*r-c*i,e);const u=f>s,m=l>s;if(u&&(f=e-f),m&&(l=e-l),f>s||l>s)throw new Error("splitScalarEndo: Endomorphism failed, k="+t);return{k1neg:u,k1:f,k2neg:m,k2:l}}},dt=32,ge=32,el=32,Xa=dt+1,Za=2*dt+1;function Qa(t){const{a:e,b:n}=X,r=E(t*t),a=E(r*t);return E(a+e*t+n)}const gn=X.a===H;class ss extends Error{constructor(e){super(e)}}function Ja(t){if(!(t instanceof M))throw new TypeError("JacobianPoint expected")}class M{constructor(e,n,r){this.x=e,this.y=n,this.z=r}static fromAffine(e){if(!(e instanceof z))throw new TypeError("JacobianPoint#fromAffine: expected Point");return e.equals(z.ZERO)?M.ZERO:new M(e.x,e.y,q)}static toAffineBatch(e){const n=sl(e.map(r=>r.z));return e.map((r,a)=>r.toAffine(n[a]))}static normalizeZ(e){return M.toAffineBatch(e).map(M.fromAffine)}equals(e){Ja(e);const{x:n,y:r,z:a}=this,{x:i,y:s,z:o}=e,c=E(a*a),f=E(o*o),l=E(n*f),u=E(i*c),m=E(E(r*o)*f),b=E(E(s*a)*c);return l===u&&m===b}negate(){return new M(this.x,E(-this.y),this.z)}double(){const{x:e,y:n,z:r}=this,a=E(e*e),i=E(n*n),s=E(i*i),o=e+i,c=E(Ft*(E(o*o)-a-s)),f=E($e*a),l=E(f*f),u=E(l-Ft*c),m=E(f*(c-u)-qa*s),b=E(Ft*n*r);return new M(u,m,b)}add(e){Ja(e);const{x:n,y:r,z:a}=this,{x:i,y:s,z:o}=e;if(i===H||s===H)return this;if(n===H||r===H)return e;const c=E(a*a),f=E(o*o),l=E(n*f),u=E(i*c),m=E(E(r*o)*f),b=E(E(s*a)*c),I=E(u-l),p=E(b-m);if(I===H)return p===H?this.double():M.ZERO;const d=E(I*I),v=E(I*d),w=E(l*d),x=E(p*p-v-Ft*w),_=E(p*(w-x)-m*v),y=E(a*o*I);return new M(x,_,y)}subtract(e){return this.add(e.negate())}multiplyUnsafe(e){const n=M.ZERO;if(typeof e=="bigint"&&e===H)return n;let r=ni(e);if(r===q)return this;if(!gn){let u=n,m=this;for(;r>H;)r&q&&(u=u.add(m)),m=m.double(),r>>=q;return u}let{k1neg:a,k1:i,k2neg:s,k2:o}=bn.splitScalar(r),c=n,f=n,l=this;for(;i>H||o>H;)i&q&&(c=c.add(l)),o&q&&(f=f.add(l)),l=l.double(),i>>=q,o>>=q;return a&&(c=c.negate()),s&&(f=f.negate()),f=new M(E(f.x*bn.beta),f.y,f.z),c.add(f)}precomputeWindow(e){const n=gn?128/e+1:256/e+1,r=[];let a=this,i=a;for(let s=0;s<n;s++){i=a,r.push(i);for(let o=1;o<2**(e-1);o++)i=i.add(a),r.push(i);a=i.double()}return r}wNAF(e,n){!n&&this.equals(M.BASE)&&(n=z.BASE);const r=n&&n._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let a=n&&kr.get(n);a||(a=this.precomputeWindow(r),n&&r!==1&&(a=M.normalizeZ(a),kr.set(n,a)));let i=M.ZERO,s=M.BASE;const o=1+(gn?128/r:256/r),c=2**(r-1),f=BigInt(2**r-1),l=2**r,u=BigInt(r);for(let m=0;m<o;m++){const b=m*c;let I=Number(e&f);e>>=u,I>c&&(I-=l,e+=q);const p=b,d=b+Math.abs(I)-1,v=m%2!==0,w=I<0;I===0?s=s.add(yn(v,a[p])):i=i.add(yn(w,a[d]))}return{p:i,f:s}}multiply(e,n){let r=ni(e),a,i;if(gn){const{k1neg:s,k1:o,k2neg:c,k2:f}=bn.splitScalar(r);let{p:l,f:u}=this.wNAF(o,n),{p:m,f:b}=this.wNAF(f,n);l=yn(s,l),m=yn(c,m),m=new M(E(m.x*bn.beta),m.y,m.z),a=l.add(m),i=u.add(b)}else{const{p:s,f:o}=this.wNAF(r,n);a=s,i=o}return M.normalizeZ([a,i])[0]}toAffine(e){const{x:n,y:r,z:a}=this,i=this.equals(M.ZERO);e==null&&(e=i?qa:Ae(a));const s=e,o=E(s*s),c=E(o*s),f=E(n*o),l=E(r*c),u=E(a*s);if(i)return z.ZERO;if(u!==q)throw new Error("invZ was invalid");return new z(f,l)}}M.BASE=new M(X.Gx,X.Gy,q);M.ZERO=new M(H,q,H);function yn(t,e){const n=e.negate();return t?n:e}const kr=new WeakMap;class z{constructor(e,n){this.x=e,this.y=n}_setWindowSize(e){this._WINDOW_SIZE=e,kr.delete(this)}hasEvenY(){return this.y%Ft===H}static fromCompressedHex(e){const n=e.length===32,r=Mt(n?e:e.subarray(1));if(!nr(r))throw new Error("Point is not on curve");const a=Qa(r);let i=il(a);const s=(i&q)===q;n?s&&(i=E(-i)):(e[0]&1)===1!==s&&(i=E(-i));const o=new z(r,i);return o.assertValidity(),o}static fromUncompressedHex(e){const n=Mt(e.subarray(1,dt+1)),r=Mt(e.subarray(dt+1,dt*2+1)),a=new z(n,r);return a.assertValidity(),a}static fromHex(e){const n=ve(e),r=n.length,a=n[0];if(r===dt)return this.fromCompressedHex(n);if(r===Xa&&(a===2||a===3))return this.fromCompressedHex(n);if(r===Za&&a===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Xa} compressed bytes or ${Za} uncompressed bytes, not ${r}`)}static fromPrivateKey(e){return z.BASE.multiply(Bn(e))}static fromSignature(e,n,r){const{r:a,s:i}=os(n);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const s=ea(ve(e)),{n:o}=X,c=r===2||r===3?a+o:a,f=Ae(c,o),l=E(-s*f,o),u=E(i*f,o),m=r&1?"03":"02",b=z.fromHex(m+de(c)),I=z.BASE.multiplyAndAddUnsafe(b,l,u);if(!I)throw new Error("Cannot recover signature: point at infinify");return I.assertValidity(),I}toRawBytes(e=!1){return Jt(this.toHex(e))}toHex(e=!1){const n=de(this.x);return e?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${de(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const e="Point is not on elliptic curve",{x:n,y:r}=this;if(!nr(n)||!nr(r))throw new Error(e);const a=E(r*r),i=Qa(n);if(E(a-i)!==H)throw new Error(e)}equals(e){return this.x===e.x&&this.y===e.y}negate(){return new z(this.x,E(-this.y))}double(){return M.fromAffine(this).double().toAffine()}add(e){return M.fromAffine(this).add(M.fromAffine(e)).toAffine()}subtract(e){return this.add(e.negate())}multiply(e){return M.fromAffine(this).multiply(e,this).toAffine()}multiplyAndAddUnsafe(e,n,r){const a=M.fromAffine(this),i=n===H||n===q||this!==z.BASE?a.multiplyUnsafe(n):a.multiply(n),s=M.fromAffine(e).multiplyUnsafe(r),o=i.add(s);return o.equals(M.ZERO)?void 0:o.toAffine()}}z.BASE=new z(X.Gx,X.Gy);z.ZERO=new z(H,H);function ti(t){return Number.parseInt(t[0],16)>=8?"00"+t:t}function ei(t){if(t.length<2||t[0]!==2)throw new Error(`Invalid signature integer tag: ${ye(t)}`);const e=t[1],n=t.subarray(2,e+2);if(!e||n.length!==e)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:Mt(n),left:t.subarray(e+2)}}function nl(t){if(t.length<2||t[0]!=48)throw new Error(`Invalid signature tag: ${ye(t)}`);if(t[1]!==t.length-2)throw new Error("Invalid signature: incorrect length");const{data:e,left:n}=ei(t.subarray(2)),{data:r,left:a}=ei(n);if(a.length)throw new Error(`Invalid signature: left bytes after parsing: ${ye(a)}`);return{r:e,s:r}}class wt{constructor(e,n){this.r=e,this.s=n,this.assertValidity()}static fromCompact(e){const n=e instanceof Uint8Array,r="Signature.fromCompact";if(typeof e!="string"&&!n)throw new TypeError(`${r}: Expected string or Uint8Array`);const a=n?ye(e):e;if(a.length!==128)throw new Error(`${r}: Expected 64-byte hex`);return new wt(Ln(a.slice(0,64)),Ln(a.slice(64,128)))}static fromDER(e){const n=e instanceof Uint8Array;if(typeof e!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r,s:a}=nl(n?e:Jt(e));return new wt(r,a)}static fromHex(e){return this.fromDER(e)}assertValidity(){const{r:e,s:n}=this;if(!We(e))throw new Error("Invalid Signature: r must be 0 < r < n");if(!We(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const e=X.n>>q;return this.s>e}normalizeS(){return this.hasHighS()?new wt(this.r,E(-this.s,X.n)):this}toDERRawBytes(){return Jt(this.toDERHex())}toDERHex(){const e=ti(Pe(this.s)),n=ti(Pe(this.r)),r=e.length/2,a=n.length/2,i=Pe(r),s=Pe(a);return`30${Pe(a+r+4)}02${s}${n}02${i}${e}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Jt(this.toCompactHex())}toCompactHex(){return de(this.r)+de(this.s)}}function Ht(...t){if(!t.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(t.length===1)return t[0];const e=t.reduce((r,a)=>r+a.length,0),n=new Uint8Array(e);for(let r=0,a=0;r<t.length;r++){const i=t[r];n.set(i,a),a+=i.length}return n}const rl=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ye(t){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");let e="";for(let n=0;n<t.length;n++)e+=rl[t[n]];return e}const al=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function de(t){if(typeof t!="bigint")throw new Error("Expected bigint");if(!(H<=t&&t<al))throw new Error("Expected number 0 <= n < 2^256");return t.toString(16).padStart(64,"0")}function Er(t){const e=Jt(de(t));if(e.length!==32)throw new Error("Error: expected 32 bytes");return e}function Pe(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function Ln(t){if(typeof t!="string")throw new TypeError("hexToNumber: expected string, got "+typeof t);return BigInt(`0x${t}`)}function Jt(t){if(typeof t!="string")throw new TypeError("hexToBytes: expected string, got "+typeof t);if(t.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+t.length);const e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){const r=n*2,a=t.slice(r,r+2),i=Number.parseInt(a,16);if(Number.isNaN(i)||i<0)throw new Error("Invalid byte sequence");e[n]=i}return e}function Mt(t){return Ln(ye(t))}function ve(t){return t instanceof Uint8Array?Uint8Array.from(t):Jt(t)}function ni(t){if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)return BigInt(t);if(typeof t=="bigint"&&We(t))return t;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function E(t,e=X.P){const n=t%e;return n>=H?n:e+n}function ct(t,e){const{P:n}=X;let r=t;for(;e-- >H;)r*=r,r%=n;return r}function il(t){const{P:e}=X,n=BigInt(6),r=BigInt(11),a=BigInt(22),i=BigInt(23),s=BigInt(44),o=BigInt(88),c=t*t*t%e,f=c*c*t%e,l=ct(f,$e)*f%e,u=ct(l,$e)*f%e,m=ct(u,Ft)*c%e,b=ct(m,r)*m%e,I=ct(b,a)*b%e,p=ct(I,s)*I%e,d=ct(p,o)*p%e,v=ct(d,s)*I%e,w=ct(v,$e)*f%e,x=ct(w,i)*b%e,_=ct(x,n)*c%e,y=ct(_,Ft);if(y*y%e!==t)throw new Error("Cannot find square root");return y}function Ae(t,e=X.P){if(t===H||e<=H)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=E(t,e),r=e,a=H,i=q;for(;n!==H;){const o=r/n,c=r%n,f=a-i*o;r=n,n=c,a=i,i=f}if(r!==q)throw new Error("invert: does not exist");return E(a,e)}function sl(t,e=X.P){const n=new Array(t.length),r=t.reduce((i,s,o)=>s===H?i:(n[o]=i,E(i*s,e)),q),a=Ae(r,e);return t.reduceRight((i,s,o)=>s===H?i:(n[o]=E(i*n[o],e),E(i*s,e)),a),n}function ol(t){const e=t.length*8-ge*8,n=Mt(t);return e>0?n>>BigInt(e):n}function ea(t,e=!1){const n=ol(t);if(e)return n;const{n:r}=X;return n>=r?n-r:n}let he,He;class cl{constructor(e,n){if(this.hashLen=e,this.qByteLen=n,typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(e).fill(1),this.k=new Uint8Array(e).fill(0),this.counter=0}hmac(...e){return vt.hmacSha256(this.k,...e)}hmacSync(...e){return He(this.k,...e)}checkSync(){if(typeof He!="function")throw new ss("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(e=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),e),this.v=await this.hmac(this.v),e.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),e),this.v=await this.hmac(this.v))}reseedSync(e=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),e),this.v=this.hmacSync(this.v),e.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),e),this.v=this.hmacSync(this.v))}async generate(){this.incr();let e=0;const n=[];for(;e<this.qByteLen;){this.v=await this.hmac(this.v);const r=this.v.slice();n.push(r),e+=this.v.length}return Ht(...n)}generateSync(){this.checkSync(),this.incr();let e=0;const n=[];for(;e<this.qByteLen;){this.v=this.hmacSync(this.v);const r=this.v.slice();n.push(r),e+=this.v.length}return Ht(...n)}}function We(t){return H<t&&t<X.n}function nr(t){return H<t&&t<X.P}function fl(t,e,n,r=!0){const{n:a}=X,i=ea(t,!0);if(!We(i))return;const s=Ae(i,a),o=z.BASE.multiply(i),c=E(o.x,a);if(c===H)return;const f=E(s*E(e+n*c,a),a);if(f===H)return;let l=new wt(c,f),u=(o.x===l.r?0:2)|Number(o.y&q);return r&&l.hasHighS()&&(l=l.normalizeS(),u^=1),{sig:l,recovery:u}}function Bn(t){let e;if(typeof t=="bigint")e=t;else if(typeof t=="number"&&Number.isSafeInteger(t)&&t>0)e=BigInt(t);else if(typeof t=="string"){if(t.length!==2*ge)throw new Error("Expected 32 bytes of private key");e=Ln(t)}else if(t instanceof Uint8Array){if(t.length!==ge)throw new Error("Expected 32 bytes of private key");e=Mt(t)}else throw new TypeError("Expected valid private key");if(!We(e))throw new Error("Expected private key: 0 < key < n");return e}function ll(t){return t instanceof z?(t.assertValidity(),t):z.fromHex(t)}function os(t){if(t instanceof wt)return t.assertValidity(),t;try{return wt.fromDER(t)}catch{return wt.fromCompact(t)}}function ul(t,e=!1){return z.fromPrivateKey(t).toRawBytes(e)}function cs(t){const e=t.length>dt?t.slice(0,dt):t;return Mt(e)}function dl(t){const e=cs(t),n=E(e,X.n);return fs(n<H?e:n)}function fs(t){return Er(t)}function hl(t,e,n){if(t==null)throw new Error(`sign: expected valid message hash, not "${t}"`);const r=ve(t),a=Bn(e),i=[fs(a),dl(r)];if(n!=null){n===!0&&(n=vt.randomBytes(dt));const c=ve(n);if(c.length!==dt)throw new Error(`sign: Expected ${dt} bytes of extra data`);i.push(c)}const s=Ht(...i),o=cs(r);return{seed:s,m:o,d:a}}function ml(t,e){const{sig:n,recovery:r}=t,{der:a,recovered:i}=Object.assign({canonical:!0,der:!0},e),s=a?n.toDERRawBytes():n.toCompactRawBytes();return i?[s,r]:s}async function pl(t,e,n={}){const{seed:r,m:a,d:i}=hl(t,e,n.extraEntropy),s=new cl(el,ge);await s.reseed(r);let o;for(;!(o=fl(await s.generate(),a,i,n.canonical));)await s.reseed();return ml(o,n)}const bl={strict:!0};function gl(t,e,n,r=bl){let a;try{a=os(t),e=ve(e)}catch{return!1}const{r:i,s}=a;if(r.strict&&a.hasHighS())return!1;const o=ea(e);let c;try{c=ll(n)}catch{return!1}const{n:f}=X,l=Ae(s,f),u=E(o*l,f),m=E(i*l,f),b=z.BASE.multiplyAndAddUnsafe(c,u,m);return b?E(b.x,f)===i:!1}z.BASE._setWindowSize(8);const it={node:Fs,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},vn={},vt={bytesToHex:ye,hexToBytes:Jt,concatBytes:Ht,mod:E,invert:Ae,isValidPrivateKey(t){try{return Bn(t),!0}catch{return!1}},_bigintTo32Bytes:Er,_normalizePrivateKey:Bn,hashToPrivateKey:t=>{t=ve(t);const e=ge+8;if(t.length<e||t.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=E(Mt(t),X.n-q)+q;return Er(n)},randomBytes:(t=32)=>{if(it.web)return it.web.getRandomValues(new Uint8Array(t));if(it.node){const{randomBytes:e}=it.node;return Uint8Array.from(e(t))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>vt.hashToPrivateKey(vt.randomBytes(ge+8)),precompute(t=8,e=z.BASE){const n=e===z.BASE?e:new z(e.x,e.y);return n._setWindowSize(t),n.multiply($e),n},sha256:async(...t)=>{if(it.web){const e=await it.web.subtle.digest("SHA-256",Ht(...t));return new Uint8Array(e)}else if(it.node){const{createHash:e}=it.node,n=e("sha256");return t.forEach(r=>n.update(r)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(t,...e)=>{if(it.web){const n=await it.web.subtle.importKey("raw",t,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),r=Ht(...e),a=await it.web.subtle.sign("HMAC",n,r);return new Uint8Array(a)}else if(it.node){const{createHmac:n}=it.node,r=n("sha256",t);return e.forEach(a=>r.update(a)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(t,...e)=>{let n=vn[t];if(n===void 0){const r=await vt.sha256(Uint8Array.from(t,a=>a.charCodeAt(0)));n=Ht(r,r),vn[t]=n}return vt.sha256(n,...e)},taggedHashSync:(t,...e)=>{if(typeof he!="function")throw new ss("sha256Sync is undefined, you need to set it");let n=vn[t];if(n===void 0){const r=he(Uint8Array.from(t,a=>a.charCodeAt(0)));n=Ht(r,r),vn[t]=n}return he(n,...e)},_JacobianPoint:M};Object.defineProperties(vt,{sha256Sync:{configurable:!1,get(){return he},set(t){he||(he=t)}},hmacSha256Sync:{configurable:!1,get(){return He},set(t){He||(He=t)}}});var yl=Object.defineProperty,Tt=(t,e)=>yl(t,"name",{value:e,configurable:!0}),vl=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')}),na=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)},et=(t,e,n)=>(na(t,e,"read from private field"),n?n.call(t):e.get(t)),we=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Ke=(t,e,n,r)=>(na(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),ri=(t,e,n)=>(na(t,e,"access private method"),n);function ls(t){return typeof t=="object"&&t!=null&&"getAddress"in t&&t.getAddress instanceof Function&&"getPublicKey"in t&&t.getPublicKey instanceof Function&&"sign"in t&&t.sign instanceof Function}Tt(ls,"isAccount");async function ra(t){return tl(t)}Tt(ra,"hashMessage");var Be,Ar=class{constructor(t){if(we(this,Be,void 0),t.hasHighS())throw new RangeError("A signature with high S is unsupported; normalize it to get rid of high S");Ke(this,Be,t)}static fromBytes(t){return new Ar(wt.fromDER(t))}static fromHex(t){return new Ar(wt.fromDER(t))}toBytes(){return et(this,Be).toDERRawBytes()}toHex(){return et(this,Be).toDERHex()}toString(){return this.toHex()}[Symbol.for("nodejs.util.inspect.custom")](){return`Signature { ${this.toHex()} }`}},us=Ar;Tt(us,"Signature");Be=new WeakMap;var ds=us,$t,Sr=class{constructor(t){we(this,$t,void 0),Ke(this,$t,t)}static fromBytes(t,e){if(!(t instanceof Uint8Array))throw new Error(`Expected a Uint8Array, but got ${typeof t}`);const n=t[0];if(e==="compressed"){if(t.length!==33)throw new Error(`Invalid compressed public key: expected 33 bytes, but got ${t.length} bytes`);if(n!==2&&n!==3)throw new Error(`Invalid compressed public key: expected either 0x02 or 0x03 as the header, but got 0x${n.toString(16).padStart(2,"0")}`)}else if(e==="uncompressed"){if(t.length!==65)throw new Error(`Invalid uncompressed public key expected 65 bytes, but got ${t.length} bytes`);if(n!==4)throw new Error(`Invalid compressed public key: expected 0x04 as the header, but got 0x${n.toString(16).padStart(2,"0")}`)}else throw new Error("Invalid public key form: choose 'compressed' or 'uncompressed'");return new Sr(z.fromHex(t))}static fromHex(t,e){if(typeof t!="string")throw new Error(`Expected a string, but got ${typeof t}`);if(e==="compressed"&&t.length!==66)throw new Error(`Invalid compressed public key: expected 33 hexadigits, but got ${t.length} hexadigits`);if(e==="uncompressed"&&t.length!==130)throw new Error(`Invalid uncompressed public key expected 130 hexadigits, but got ${t.length} hexadigits`);const n=new Uint8Array(Buffer.from(t,"hex"));return this.fromBytes(n,e)}async verify(t,e){if(t instanceof Uint8Array){if(!(e instanceof ds))throw new Error(`Expected Signature, but got ${typeof e}`)}else throw new Error(`Expected Uint8Array, but got ${typeof t}`);const n=await ra(t);return gl(e.toBytes(),n,et(this,$t))}toBytes(t){if(t!=="compressed"&&t!=="uncompressed")throw new Error("Invalid public key form: choose 'compressed' or 'uncompressed'");return et(this,$t).toRawBytes(t==="compressed")}toHex(t){if(t!=="compressed"&&t!=="uncompressed")throw new Error("Invalid public key form: choose 'compressed' or 'uncompressed'");return et(this,$t).toHex(t==="compressed")}equals(t){return t instanceof Sr&&et(this,$t).equals(et(t,$t))}},aa=Sr;Tt(aa,"PublicKey");$t=new WeakMap;var wl=aa;typeof globalThis.TextEncoder>"u"&&(globalThis.TextEncoder=vl("node:util").TextEncoder);function ia(t){let e="";for(let n=0;n<t.length;n++)e+=t[n].toString(16).padStart(2,"0");return e}Tt(ia,"toHex");function Ir(t){t=t.toLowerCase();const e=new TextEncoder().encode(t),n=ia(rs(e));let r="";for(let a=0;a<t.length;a++){const i=t.charAt(a);if(i.match(/^[0-9]$/)){r+=i;continue}else{const s=parseInt(n.charAt(a),16);r+=s>7?i.toUpperCase():i}}return r}Tt(Ir,"checksum");var qt,Rn,_r,le=class{constructor(t){we(this,qt,void 0),Ke(this,qt,t)}static deriveFrom(t){if(ls(t))return t.getPublicKey().then(ri(this,Rn,_r));if(t instanceof aa)return ri(this,Rn,_r).call(this,t);throw new Error(`Expected either PublicKey or Account, got ${typeof t}`)}static fromHex(t,e=!1){if(typeof t!="string")throw new Error(`Expected a string, but ${typeof t} was given.`);if(!t.match(/^(0x)?[0-9a-f]{40}$/i))throw new Error(`Expected a string of 40 hexadecimals, but ${JSON.stringify(t)} was given.`);t.match(/^0x/i)&&(t=t.slice(2));const n=new le(new Uint8Array(Buffer.from(t,"hex")));if(e)return n;const r=Ir(t);if(r!==t)throw new Error(`Expected checksum is 0x${r}, but 0x${t} was given.`);return n}static fromBytes(t){if(!(t instanceof Uint8Array))throw new Error(`Expected a Uint8Array, but ${typeof t} was given.`);if(t.length!==20)throw new Error(`Expected 20 bytes, but ${t.length} bytes were given.`);return new le(t)}toBytes(){return et(this,qt)}toHex(t="checksum"){const e=ia(et(this,qt));return t==="checksum"?Ir(e):e}equals(t){if(!(t instanceof le))return!1;for(let e=0;e<20;e++)if(et(this,qt)[e]!==et(t,qt)[e])return!1;return!0}isAddressOf(t){return le.deriveFrom(t).equals(this)}toString(){return`0x${this.toHex()}`}},xt=le;Tt(xt,"Address");qt=new WeakMap;Rn=new WeakSet;_r=Tt(function(t){const e=t.toBytes("uncompressed").slice(1),n=rs(e),r=n.slice(n.length-20);return new le(r)},"#deriveFrom");we(xt,Rn);var xl=xt,ie,Re,Or=class{constructor(t){we(this,ie,void 0),we(this,Re,void 0),Ke(this,ie,t)}static fromBytes(t){if(t instanceof Uint8Array){if(t.length!==32)throw new Error(`Incorrect private key length; expected 32 bytes, but got ${t.length} bytes`);if(!vt.isValidPrivateKey(t))throw new Error("Invalid private key")}else throw new Error(`Expected Uint8Array, but got ${typeof t}`);return new Or(new Uint8Array(t))}static fromHex(t){if(typeof t!="string")throw new Error(`Expected string, but got ${typeof t}`);if(t.length!==64)throw new Error(`Incorrect private key length; expected 64 hexadigits, but got ${t.length} hexadigits`);const e=new Uint8Array(Buffer.from(t,"hex"));if(!vt.isValidPrivateKey(e))throw new Error("Invalid private key");return new Or(e)}static generate(){return this.fromBytes(vt.randomPrivateKey())}getAddress(){return Promise.resolve(xl.deriveFrom(this.publicKey))}get publicKey(){return typeof et(this,Re)>"u"&&Ke(this,Re,wl.fromBytes(ul(et(this,ie)),"uncompressed")),et(this,Re)}getPublicKey(){return Promise.resolve(this.publicKey)}async sign(t){const e=await pl(await ra(t),et(this,ie),{der:!0});return ds.fromBytes(e)}exportPrivateKey(){return Promise.resolve(this)}toBytes(){return new Uint8Array(et(this,ie))}},sa=Or;Tt(sa,"RawPrivateKey");ie=new WeakMap;Re=new WeakMap;/*! For license information please see index.js.LEGAL.txt */function Pr(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function kl(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function hs(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function El(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Pr(t.outputLen),Pr(t.blockLen)}function Al(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Sl(t,e){hs(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const tt={number:Pr,bool:kl,bytes:hs,hash:El,exists:Al,output:Sl};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Il=t=>t instanceof Uint8Array,_l=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),En=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),gt=(t,e)=>t<<32-e|t>>>e,Ol=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Ol)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));const Pl=async()=>{};async function Tl(t,e,n){let r=Date.now();for(let a=0;a<t;a++){n(a);const i=Date.now()-r;i>=0&&i<e||(await Pl(),r+=i)}}function Ll(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function re(t){if(typeof t=="string"&&(t=Ll(t)),!Il(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class oa{clone(){return this._cloneInto()}}const Bl=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function Rl(t,e){if(e!==void 0&&(typeof e!="object"||!Bl(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function ca(t){const e=r=>t().update(re(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Cl(t){const e=(r,a)=>t(a).update(re(r)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}class ms extends oa{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,tt.hash(e);const r=re(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const a=this.blockLen,i=new Uint8Array(a);i.set(r.length>a?e.create().update(r).digest():r);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=e.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(e){return tt.exists(this),this.iHash.update(e),this}digestInto(e){tt.exists(this),tt.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:a,destroyed:i,blockLen:s,outputLen:o}=this;return e=e,e.finished=a,e.destroyed=i,e.blockLen=s,e.outputLen=o,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const ps=(t,e,n)=>new ms(t,e).update(n).digest();ps.create=(t,e)=>new ms(t,e);function Nl(t,e,n,r){tt.hash(t);const a=Rl({dkLen:32,asyncTick:10},r),{c:i,dkLen:s,asyncTick:o}=a;if(tt.number(i),tt.number(s),tt.number(o),i<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const c=re(e),f=re(n),l=new Uint8Array(s),u=ps.create(t,c),m=u._cloneInto().update(f);return{c:i,dkLen:s,asyncTick:o,DK:l,PRF:u,PRFSalt:m}}function $l(t,e,n,r,a){return t.destroy(),e.destroy(),r&&r.destroy(),a.fill(0),n}async function Hl(t,e,n,r){const{c:a,dkLen:i,asyncTick:s,DK:o,PRF:c,PRFSalt:f}=Nl(t,e,n,r);let l;const u=new Uint8Array(4),m=En(u),b=new Uint8Array(c.outputLen);for(let I=1,p=0;p<i;I++,p+=c.outputLen){const d=o.subarray(p,p+c.outputLen);m.setInt32(0,I,!1),(l=f._cloneInto(l)).update(u).digestInto(b),d.set(b.subarray(0,d.length)),await Tl(a-1,s,v=>{c._cloneInto(l).update(b).digestInto(b);for(let w=0;w<d.length;w++)d[w]^=b[w]})}return $l(c,f,o,l,b)}var bs={exports:{}};(function(t,e){(function(n){function a(p){const d=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);let v=1779033703,w=3144134277,x=1013904242,_=2773480762,y=1359893119,R=2600822924,T=528734635,h=1541459225;const g=new Uint32Array(64);function k(F){let W=0,Q=F.length;for(;Q>=64;){let nt=v,ht=w,Vt=x,Yt=_,U=y,ot=R,Y=T,Se=h,rt,J,Ie,_e,en;for(J=0;J<16;J++)Ie=W+J*4,g[J]=(F[Ie]&255)<<24|(F[Ie+1]&255)<<16|(F[Ie+2]&255)<<8|F[Ie+3]&255;for(J=16;J<64;J++)rt=g[J-2],_e=(rt>>>17|rt<<32-17)^(rt>>>19|rt<<32-19)^rt>>>10,rt=g[J-15],en=(rt>>>7|rt<<32-7)^(rt>>>18|rt<<32-18)^rt>>>3,g[J]=(_e+g[J-7]|0)+(en+g[J-16]|0)|0;for(J=0;J<64;J++)_e=(((U>>>6|U<<32-6)^(U>>>11|U<<32-11)^(U>>>25|U<<32-25))+(U&ot^~U&Y)|0)+(Se+(d[J]+g[J]|0)|0)|0,en=((nt>>>2|nt<<32-2)^(nt>>>13|nt<<32-13)^(nt>>>22|nt<<32-22))+(nt&ht^nt&Vt^ht&Vt)|0,Se=Y,Y=ot,ot=U,U=Yt+_e|0,Yt=Vt,Vt=ht,ht=nt,nt=_e+en|0;v=v+nt|0,w=w+ht|0,x=x+Vt|0,_=_+Yt|0,y=y+U|0,R=R+ot|0,T=T+Y|0,h=h+Se|0,W+=64,Q-=64}}k(p);let S,L=p.length%64,P=p.length/536870912|0,C=p.length<<3,at=L<56?56:120,B=p.slice(p.length-L,p.length);for(B.push(128),S=L+1;S<at;S++)B.push(0);return B.push(P>>>24&255),B.push(P>>>16&255),B.push(P>>>8&255),B.push(P>>>0&255),B.push(C>>>24&255),B.push(C>>>16&255),B.push(C>>>8&255),B.push(C>>>0&255),k(B),[v>>>24&255,v>>>16&255,v>>>8&255,v>>>0&255,w>>>24&255,w>>>16&255,w>>>8&255,w>>>0&255,x>>>24&255,x>>>16&255,x>>>8&255,x>>>0&255,_>>>24&255,_>>>16&255,_>>>8&255,_>>>0&255,y>>>24&255,y>>>16&255,y>>>8&255,y>>>0&255,R>>>24&255,R>>>16&255,R>>>8&255,R>>>0&255,T>>>24&255,T>>>16&255,T>>>8&255,T>>>0&255,h>>>24&255,h>>>16&255,h>>>8&255,h>>>0&255]}function i(p,d,v){p=p.length<=64?p:a(p);const w=64+d.length+4,x=new Array(w),_=new Array(64);let y,R=[];for(y=0;y<64;y++)x[y]=54;for(y=0;y<p.length;y++)x[y]^=p[y];for(y=0;y<d.length;y++)x[64+y]=d[y];for(y=w-4;y<w;y++)x[y]=0;for(y=0;y<64;y++)_[y]=92;for(y=0;y<p.length;y++)_[y]^=p[y];function T(){for(let h=w-1;h>=w-4;h--){if(x[h]++,x[h]<=255)return;x[h]=0}}for(;v>=32;)T(),R=R.concat(a(_.concat(a(x)))),v-=32;return v>0&&(T(),R=R.concat(a(_.concat(a(x))).slice(0,v))),R}function s(p,d,v,w,x){let _;for(l(p,(2*v-1)*16,x,0,16),_=0;_<2*v;_++)f(p,_*16,x,16),c(x,w),l(x,0,p,d+_*16,16);for(_=0;_<v;_++)l(p,d+_*2*16,p,_*16,16);for(_=0;_<v;_++)l(p,d+(_*2+1)*16,p,(_+v)*16,16)}function o(p,d){return p<<d|p>>>32-d}function c(p,d){l(p,0,d,0,16);for(let v=8;v>0;v-=2)d[4]^=o(d[0]+d[12],7),d[8]^=o(d[4]+d[0],9),d[12]^=o(d[8]+d[4],13),d[0]^=o(d[12]+d[8],18),d[9]^=o(d[5]+d[1],7),d[13]^=o(d[9]+d[5],9),d[1]^=o(d[13]+d[9],13),d[5]^=o(d[1]+d[13],18),d[14]^=o(d[10]+d[6],7),d[2]^=o(d[14]+d[10],9),d[6]^=o(d[2]+d[14],13),d[10]^=o(d[6]+d[2],18),d[3]^=o(d[15]+d[11],7),d[7]^=o(d[3]+d[15],9),d[11]^=o(d[7]+d[3],13),d[15]^=o(d[11]+d[7],18),d[1]^=o(d[0]+d[3],7),d[2]^=o(d[1]+d[0],9),d[3]^=o(d[2]+d[1],13),d[0]^=o(d[3]+d[2],18),d[6]^=o(d[5]+d[4],7),d[7]^=o(d[6]+d[5],9),d[4]^=o(d[7]+d[6],13),d[5]^=o(d[4]+d[7],18),d[11]^=o(d[10]+d[9],7),d[8]^=o(d[11]+d[10],9),d[9]^=o(d[8]+d[11],13),d[10]^=o(d[9]+d[8],18),d[12]^=o(d[15]+d[14],7),d[13]^=o(d[12]+d[15],9),d[14]^=o(d[13]+d[12],13),d[15]^=o(d[14]+d[13],18);for(let v=0;v<16;++v)p[v]+=d[v]}function f(p,d,v,w){for(let x=0;x<w;x++)v[x]^=p[d+x]}function l(p,d,v,w,x){for(;x--;)v[w++]=p[d++]}function u(p){if(!p||typeof p.length!="number")return!1;for(let d=0;d<p.length;d++){const v=p[d];if(typeof v!="number"||v%1||v<0||v>=256)return!1}return!0}function m(p,d){if(typeof p!="number"||p%1)throw new Error("invalid "+d);return p}function b(p,d,v,w,x,_,y){if(v=m(v,"N"),w=m(w,"r"),x=m(x,"p"),_=m(_,"dkLen"),v===0||v&v-1)throw new Error("N must be power of 2");if(v>2147483647/128/w)throw new Error("N too large");if(w>2147483647/128/x)throw new Error("r too large");if(!u(p))throw new Error("password must be an array or buffer");if(p=Array.prototype.slice.call(p),!u(d))throw new Error("salt must be an array or buffer");d=Array.prototype.slice.call(d);let R=i(p,d,x*128*w);const T=new Uint32Array(x*32*w);for(let U=0;U<T.length;U++){const ot=U*4;T[U]=(R[ot+3]&255)<<24|(R[ot+2]&255)<<16|(R[ot+1]&255)<<8|(R[ot+0]&255)<<0}const h=new Uint32Array(64*w),g=new Uint32Array(32*w*v),k=32*w,S=new Uint32Array(16),L=new Uint32Array(16),P=x*v*2;let C=0,at=null,B=!1,F=0,W=0,Q,nt;const ht=y?parseInt(1e3/w):4294967295,Vt=typeof setImmediate<"u"?setImmediate:setTimeout,Yt=function(){if(B)return y(new Error("cancelled"),C/P);let U;switch(F){case 0:nt=W*32*w,l(T,nt,h,0,k),F=1,Q=0;case 1:U=v-Q,U>ht&&(U=ht);for(let Y=0;Y<U;Y++)l(h,0,g,(Q+Y)*k,k),s(h,k,w,S,L);if(Q+=U,C+=U,y){const Y=parseInt(1e3*C/P);if(Y!==at){if(B=y(null,C/P),B)break;at=Y}}if(Q<v)break;Q=0,F=2;case 2:U=v-Q,U>ht&&(U=ht);for(let Y=0;Y<U;Y++){const Se=(2*w-1)*16,rt=h[Se]&v-1;f(g,rt*k,h,k),s(h,k,w,S,L)}if(Q+=U,C+=U,y){const Y=parseInt(1e3*C/P);if(Y!==at){if(B=y(null,C/P),B)break;at=Y}}if(Q<v)break;if(l(h,0,T,nt,k),W++,W<x){F=0;break}R=[];for(let Y=0;Y<T.length;Y++)R.push(T[Y]>>0&255),R.push(T[Y]>>8&255),R.push(T[Y]>>16&255),R.push(T[Y]>>24&255);const ot=i(p,R,_);return y&&y(null,1,ot),ot}y&&Vt(Yt)};if(!y)for(;;){const U=Yt();if(U!=null)return U}Yt()}const I={scrypt:function(p,d,v,w,x,_,y){return new Promise(function(R,T){let h=0;y&&y(0),b(p,d,v,w,x,_,function(g,k,S){if(g)T(g);else if(S)y&&h!==1&&y(1),R(new Uint8Array(S));else if(y&&k!==h)return h=k,y(k)})})},syncScrypt:function(p,d,v,w,x,_){return new Uint8Array(b(p,d,v,w,x,_))}};t.exports=I})()})(bs);var Ul=bs.exports;const Fl=ci(Ul);function Ml(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const a=BigInt(32),i=BigInt(4294967295),s=Number(n>>a&i),o=Number(n&i),c=r?4:0,f=r?0:4;t.setUint32(e+c,s,r),t.setUint32(e+f,o,r)}class Dl extends oa{constructor(e,n,r,a){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=a,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=En(this.buffer)}update(e){tt.exists(this);const{view:n,buffer:r,blockLen:a}=this;e=re(e);const i=e.length;for(let s=0;s<i;){const o=Math.min(a-this.pos,i-s);if(o===a){const c=En(e);for(;a<=i-s;s+=a)this.process(c,s);continue}r.set(e.subarray(s,s+o),this.pos),this.pos+=o,s+=o,this.pos===a&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){tt.exists(this),tt.output(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:a,isLE:i}=this;let{pos:s}=this;n[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>a-s&&(this.process(r,0),s=0);for(let u=s;u<a;u++)n[u]=0;Ml(r,a-8,BigInt(this.length*8),i),this.process(r,0);const o=En(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=c/4,l=this.get();if(f>l.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<f;u++)o.setUint32(4*u,l[u],i)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:a,finished:i,destroyed:s,pos:o}=this;return e.length=a,e.pos=o,e.finished=i,e.destroyed=s,a%n&&e.buffer.set(r),e}}const zl=(t,e,n)=>t&e^~t&n,jl=(t,e,n)=>t&e^t&n^e&n,Wl=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ct=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Nt=new Uint32Array(64);class gs extends Dl{constructor(){super(64,32,8,!1),this.A=Ct[0]|0,this.B=Ct[1]|0,this.C=Ct[2]|0,this.D=Ct[3]|0,this.E=Ct[4]|0,this.F=Ct[5]|0,this.G=Ct[6]|0,this.H=Ct[7]|0}get(){const{A:e,B:n,C:r,D:a,E:i,F:s,G:o,H:c}=this;return[e,n,r,a,i,s,o,c]}set(e,n,r,a,i,s,o,c){this.A=e|0,this.B=n|0,this.C=r|0,this.D=a|0,this.E=i|0,this.F=s|0,this.G=o|0,this.H=c|0}process(e,n){for(let u=0;u<16;u++,n+=4)Nt[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){const m=Nt[u-15],b=Nt[u-2],I=gt(m,7)^gt(m,18)^m>>>3,p=gt(b,17)^gt(b,19)^b>>>10;Nt[u]=p+Nt[u-7]+I+Nt[u-16]|0}let{A:r,B:a,C:i,D:s,E:o,F:c,G:f,H:l}=this;for(let u=0;u<64;u++){const m=gt(o,6)^gt(o,11)^gt(o,25),b=l+m+zl(o,c,f)+Wl[u]+Nt[u]|0,p=(gt(r,2)^gt(r,13)^gt(r,22))+jl(r,a,i)|0;l=f,f=c,c=o,o=s+b|0,s=i,i=a,a=r,r=b+p|0}r=r+this.A|0,a=a+this.B|0,i=i+this.C|0,s=s+this.D|0,o=o+this.E|0,c=c+this.F|0,f=f+this.G|0,l=l+this.H|0,this.set(r,a,i,s,o,c,f,l)}roundClean(){Nt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class Kl extends gs{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Vl=ca(()=>new gs);ca(()=>new Kl);const wn=BigInt(2**32-1),Tr=BigInt(32);function ys(t,e=!1){return e?{h:Number(t&wn),l:Number(t>>Tr&wn)}:{h:Number(t>>Tr&wn)|0,l:Number(t&wn)|0}}function Yl(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let a=0;a<t.length;a++){const{h:i,l:s}=ys(t[a],e);[n[a],r[a]]=[i,s]}return[n,r]}const ql=(t,e)=>BigInt(t>>>0)<<Tr|BigInt(e>>>0),Gl=(t,e,n)=>t>>>n,Xl=(t,e,n)=>t<<32-n|e>>>n,Zl=(t,e,n)=>t>>>n|e<<32-n,Ql=(t,e,n)=>t<<32-n|e>>>n,Jl=(t,e,n)=>t<<64-n|e>>>n-32,tu=(t,e,n)=>t>>>n-32|e<<64-n,eu=(t,e)=>e,nu=(t,e)=>t,ru=(t,e,n)=>t<<n|e>>>32-n,au=(t,e,n)=>e<<n|t>>>32-n,iu=(t,e,n)=>e<<n-32|t>>>64-n,su=(t,e,n)=>t<<n-32|e>>>64-n;function ou(t,e,n,r){const a=(e>>>0)+(r>>>0);return{h:t+n+(a/2**32|0)|0,l:a|0}}const cu=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),fu=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,lu=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),uu=(t,e,n,r,a)=>e+n+r+a+(t/2**32|0)|0,du=(t,e,n,r,a)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(a>>>0),hu=(t,e,n,r,a,i)=>e+n+r+a+i+(t/2**32|0)|0,Ve={fromBig:ys,split:Yl,toBig:ql,shrSH:Gl,shrSL:Xl,rotrSH:Zl,rotrSL:Ql,rotrBH:Jl,rotrBL:tu,rotr32H:eu,rotr32L:nu,rotlSH:ru,rotlSL:au,rotlBH:iu,rotlBL:su,add:ou,add3L:cu,add3H:fu,add4L:lu,add4H:uu,add5H:hu,add5L:du},[vs,ws,xs]=[[],[],[]],mu=BigInt(0),Te=BigInt(1),pu=BigInt(2),bu=BigInt(7),gu=BigInt(256),yu=BigInt(113);for(let t=0,e=Te,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],vs.push(2*(5*r+n)),ws.push((t+1)*(t+2)/2%64);let a=mu;for(let i=0;i<7;i++)e=(e<<Te^(e>>bu)*yu)%gu,e&pu&&(a^=Te<<(Te<<BigInt(i))-Te);xs.push(a)}const[vu,wu]=Ve.split(xs,!0),ai=(t,e,n)=>n>32?Ve.rotlBH(t,e,n):Ve.rotlSH(t,e,n),ii=(t,e,n)=>n>32?Ve.rotlBL(t,e,n):Ve.rotlSL(t,e,n);function xu(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const o=(s+8)%10,c=(s+2)%10,f=n[c],l=n[c+1],u=ai(f,l,1)^n[o],m=ii(f,l,1)^n[o+1];for(let b=0;b<50;b+=10)t[s+b]^=u,t[s+b+1]^=m}let a=t[2],i=t[3];for(let s=0;s<24;s++){const o=ws[s],c=ai(a,i,o),f=ii(a,i,o),l=vs[s];a=t[l],i=t[l+1],t[l]=c,t[l+1]=f}for(let s=0;s<50;s+=10){for(let o=0;o<10;o++)n[o]=t[s+o];for(let o=0;o<10;o++)t[s+o]^=~n[(o+2)%10]&n[(o+4)%10]}t[0]^=vu[r],t[1]^=wu[r]}n.fill(0)}class jn extends oa{constructor(e,n,r,a=!1,i=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=a,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,tt.number(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=_l(this.state)}keccak(){xu(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){tt.exists(this);const{blockLen:n,state:r}=this;e=re(e);const a=e.length;for(let i=0;i<a;){const s=Math.min(n-this.pos,a-i);for(let o=0;o<s;o++)r[this.pos++]^=e[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:a}=this;e[r]^=n,n&128&&r===a-1&&this.keccak(),e[a-1]^=128,this.keccak()}writeInto(e){tt.exists(this,!1),tt.bytes(e),this.finish();const n=this.state,{blockLen:r}=this;for(let a=0,i=e.length;a<i;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,i-a);e.set(n.subarray(this.posOut,this.posOut+s),a),this.posOut+=s,a+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return tt.number(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(tt.output(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:a,rounds:i,enableXOF:s}=this;return e||(e=new jn(n,r,a,s,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=a,e.enableXOF=s,e.destroyed=this.destroyed,e}}const Kt=(t,e,n)=>ca(()=>new jn(e,t,n));Kt(6,144,224/8);Kt(6,136,256/8);Kt(6,104,384/8);Kt(6,72,512/8);Kt(1,144,224/8);const ku=Kt(1,136,256/8);Kt(1,104,384/8);Kt(1,72,512/8);const ks=(t,e,n)=>Cl((r={})=>new jn(e,t,r.dkLen===void 0?n:r.dkLen,!0));ks(31,168,128/8);ks(31,136,256/8);var Eu=Object.defineProperty,j=(t,e)=>Eu(t,"name",{value:e,configurable:!0}),te=window.crypto,Au=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function fa(t){return!!t.match(Au)}j(fa,"isKeyId");function Es(){return te.randomUUID()}j(Es,"generateKeyId");var Zt,Ye,qe,me,An,si,Cn=(si=class{constructor(t,e,n={}){mt(this,me);mt(this,Zt,void 0);mt(this,Ye,void 0);mt(this,qe,void 0);ae(this,Zt,t),ae(this,Ye,e),ae(this,qe,n)}exportPrivateKey(){return pt(this,me,An).call(this,{allowWeakPrivateKey:!0})}getAddress(){return Promise.resolve(xt.fromHex(lt(this,Zt).address,!0))}async getPublicKey(){return await(await pt(this,me,An).call(this,{allowWeakPrivateKey:!0})).getPublicKey()}async sign(t){return await(await pt(this,me,An).call(this)).sign(t)}},Zt=new WeakMap,Ye=new WeakMap,qe=new WeakMap,me=new WeakSet,An=async function(t={}){let e=!0,n;for(;;){const r=await lt(this,Ye).authenticate(lt(this,Zt).id,e);try{n=(await Os(lt(this,Zt),r,{...lt(this,qe),...t})).privateKey}catch(a){if(a instanceof ua){e=!1;continue}throw a}break}return n},si);j(Cn,"Web3Account");function At(t){const e=t instanceof Uint8Array?t:new Uint8Array(t);let n="";for(let r=0;r<e.length;r++)n+=e[r].toString(16).padStart(2,"0");return n}j(At,"toHex");async function As(t,e,n){if(!fa(t))throw new Error(`Invalid key ID: ${t}`);const r=new Uint8Array(32);te.getRandomValues(r);const a={kdf:"pbkdf2",kdfparams:{c:10240,dklen:32,prf:"hmac-sha256",salt:At(r)}},i=await la(a,n),s=await Ps({derivedKey:i,privateKey:e.toBytes()}),o=await xt.deriveFrom(e);return{version:3,id:t,address:o.toHex("lower"),crypto:{...s,...a}}}j(As,"encryptKeyObject");function Lr(t){if(typeof t!="object"||t==null||!("version"in t)||t.version!==3||!("id"in t)||typeof t.id!="string"||!fa(t.id)||!("address"in t)||typeof t.address!="string")return!1;try{xt.fromHex(t.address,!0)}catch{return!1}return"crypto"in t&&typeof t.crypto=="object"&&Ss(t.crypto)&&Is(t.crypto)}j(Lr,"isKeyObject");function Ss(t){return typeof t=="object"&&t!=null&&"cipher"in t&&t.cipher==="aes-128-ctr"&&"cipherparams"in t&&typeof t.cipherparams=="object"&&t.cipherparams!=null&&"iv"in t.cipherparams&&typeof t.cipherparams.iv=="string"&&"ciphertext"in t&&typeof t.ciphertext=="string"&&"mac"in t&&typeof t.mac=="string"}j(Ss,"isKeyObjectCipher");function Is(t){if(typeof t!="object"||t==null||!("kdf"in t))return!1;switch(t.kdf){case"pbkdf2":return"kdfparams"in t&&typeof t.kdfparams=="object"&&t.kdfparams!=null&&"c"in t.kdfparams&&typeof t.kdfparams.c=="number"&&"dklen"in t.kdfparams&&typeof t.kdfparams.dklen=="number"&&"prf"in t.kdfparams&&t.kdfparams.prf==="hmac-sha256"&&"salt"in t.kdfparams&&typeof t.kdfparams.salt=="string";case"scrypt":return"kdfparams"in t&&typeof t.kdfparams=="object"&&t.kdfparams!=null&&"dklen"in t.kdfparams&&typeof t.kdfparams.dklen=="number"&&"n"in t.kdfparams&&typeof t.kdfparams.n=="number"&&"p"in t.kdfparams&&typeof t.kdfparams.p=="number"&&"r"in t.kdfparams&&typeof t.kdfparams.r=="number"&&"salt"in t.kdfparams&&typeof t.kdfparams.salt=="string";default:return!1}}j(Is,"isKeyObjectKdf");var _s=class extends Error{constructor(){super(...arguments);nn(this,"name","WeakPrivateKeyError")}};j(_s,"WeakPrivateKeyError");async function Os(t,e,n={}){if(t==null)throw new Error("Key object is null.");if(t.version!==3)throw new Error(`Unsupported key object version: ${t==null?void 0:t.version}`);if(t.crypto==null)throw new Error("Key object does not have crypto field.");const r=xt.fromHex(t.address,!0),a=await la(t.crypto,e);let i=await Ts(t.crypto,a);if(i.length<32){const c=new Uint8Array(32);c.set(i,32-i.length),i=c}if(i.at(0)===0&&!n.allowWeakPrivateKey)throw new _s("The private key given is too weak; keys of length less than 32 bytes are disallowed by default.  See also the Web3AccountOptions.allowWeakPrivateKey option.");const s=sa.fromBytes(i),o=await xt.deriveFrom(s);if(!r.equals(o))throw new Error(`Failed to decrypt the key object; expected account ${r} but got ${o} instead.`);return{keyId:t.id,privateKey:s}}j(Os,"decryptKeyObject");async function la(t,e){if(t.kdf==="pbkdf2"){const{c:n,dklen:r,prf:a,salt:i}=t.kdfparams;if(r<16)throw new Error(`Too short dklen: ${r}`);if(a!=="hmac-sha256")throw new Error(`Unsupported prf: ${a}`);const s=await Hl(Vl,e,Buffer.from(i,"hex"),{c:n,dkLen:r});if(s.length<r)throw new Error(`Too short key: ${At(s)}`);return s}else if(t.kdf==="scrypt"){const{dklen:n,n:r,p:a,r:i,salt:s}=t.kdfparams,o=e instanceof Uint8Array?e:new TextEncoder().encode(e);return await Fl.scrypt(o,Buffer.from(s,"hex"),r,i,a,n)}throw new Error(`Unsupported kdf: ${t.kdf}`)}j(la,"deriveKey");var ua=class extends Error{constructor(e,n){super(`Expected: ${At(e)}, Actual: ${At(n)}`);nn(this,"name","IncorrectPassphraseError");this.expectedMac=e,this.actualMac=n}};j(ua,"IncorrectPassphraseError");async function Ps({derivedKey:t,privateKey:e}){const n=new Uint8Array(16);te.getRandomValues(n);const r=await te.subtle.encrypt({name:"AES-CTR",counter:n,length:128},await te.subtle.importKey("raw",t.subarray(0,16),{name:"AES-CTR"},!1,["encrypt"]),e);return{cipher:"aes-128-ctr",cipherparams:{iv:At(n)},ciphertext:At(r),mac:At(da(t,r))}}j(Ps,"encipher");async function Ts(t,e){if(t.cipher!=="aes-128-ctr")throw new Error(`Unsupported cipher: ${t.cipher}`);const n=new Uint8Array(Buffer.from(t.ciphertext,"hex")),r=da(e,n),a=new Uint8Array(Buffer.from(t.mac,"hex"));if(!r.every((s,o)=>s===a[o]))throw new ua(a,r);const i=await te.subtle.decrypt({name:"AES-CTR",counter:new Uint8Array(Buffer.from(t.cipherparams.iv,"hex")),length:128},await te.subtle.importKey("raw",e.subarray(0,16),{name:"AES-CTR"},!1,["decrypt"]),n);return i instanceof Uint8Array?i:new Uint8Array(i)}j(Ts,"decipher");function da(t,e){const r=e instanceof Uint8Array?e:new Uint8Array(e),a=new Uint8Array(16+r.length);if(t.length<16)throw new Error(`Too short derived key (${t.length} < 16): ${At(t)}`);return a.set(t.subarray(t.length-16)),a.set(r,16),ku(a)}j(da,"calculateMac");function Sn(...t){if(t.length===0)return".";if(t.length===1)return t[0];const e=t.at(-1);if(t.length>1&&e!==void 0)return[Br(t[0]),...t.slice(1,-1).map(n=>Rr(Br(n))),Rr(e)].join("/");throw new Error("All cases are covered.")}j(Sn,"join");function Br(t){let e=t;for(;e.length>0&&e.at(-1)==="/";)e=e.slice(0,-1);return e}j(Br,"trimSlashEnd");function Rr(t){let e=t;for(;e.length>0&&e.at(0)==="/";)e=e.slice(1);return e}j(Rr,"trimSlashStart");function Ls(){return"/planetarium/account/web3-secret-storage/keystore"}j(Ls,"getDefaultWeb3KeyStorePath");var Su="PLANETARIUM_EMULATED_FS_";function xe(t){return Su+t}j(xe,"prefixed");async function Bs(t,e){}j(Bs,"mkdir");async function Cr(t,e){const n=localStorage.getItem(xe(t));if(n==null)throw new Error("Not found");return n}j(Cr,"readFile");async function Rs(t){localStorage.removeItem(xe(t))}j(Rs,"removeFile");async function*Cs(t){for(let e=0;e<localStorage.length;++e){const n=localStorage.key(e);if(n==null)throw new Error(`Expected ${e}th item in localStorage.`);if(n.startsWith(xe(t))){let r=n.slice(xe(t).length);r.startsWith("/")&&(r=r.slice(1)),yield r}}}j(Cs,"listFiles");async function Ns(t,e,n){localStorage.setItem(xe(t),e)}j(Ns,"writeFile");var Iu=/^(?:UTC--([0-9]{4}-[0-9]{2}-[0-9]{2})T([0-9]{2}-[0-9]{2}-[0-9]{2})Z--)?([0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12})(?:.json)?$$/i;function Nr(t){const e=Iu.exec(t);if(e!=null)return{keyId:e[3].toLowerCase(),createdAt:e[1]!=null&&e[2]!=null?new Date(`${e[1]}T${e[2].replace(/-/g,":")}Z`):void 0}}j(Nr,"parseKeyFilename");var Qt,pe,Ge,$r,Xe,Hr,Ze,Ur,oi,_u=(oi=class{constructor(t){mt(this,Ge);mt(this,Xe);mt(this,Ze);mt(this,Qt,void 0);mt(this,pe,void 0);nn(this,"path");this.path=t.path??Ls(),ae(this,Qt,t.passphraseEntry),ae(this,pe,t)}async*list(){for await(const t of pt(this,Ge,$r).call(this)){const e=Nr(t);if(e==null)continue;const n=Sn(this.path,t);let r;try{r=JSON.parse(await Cr(n,{encoding:"utf8"}))}catch{continue}if(!Lr(r))continue;let a;try{a=xt.fromHex(r.address,!0)}catch{continue}yield{...e,metadata:{address:a}}}}async get(t){const e=await pt(this,Xe,Hr).call(this,t);if(e==null)return{result:"keyNotFound",keyId:t};let n;try{n=await Cr(e.path,{encoding:"utf8"})}catch(i){return i!=null&&typeof i=="object"&&"code"in i&&i.code==="ENOENT"?{result:"keyNotFound",keyId:t}:{result:"error",keyId:t,message:`${i}`}}const r=JSON.parse(n);if(!Lr(r))return{result:"error",keyId:t,message:"Invalid key file"};const a=new Cn(r,lt(this,Qt),lt(this,pe));return{result:"success",account:a,keyId:t,metadata:{address:await a.getAddress()},createdAt:e.createdAt}}async generate(t){if((t==null?void 0:t.address)!=null)return{result:"error",message:"Address cannot be predetermined before generating key"};const e=await sa.generate(),n=await pt(this,Ze,Ur).call(this,e,t);return n.result==="success"?{result:"success",keyId:n.keyId,account:new Cn(n.keyObject,lt(this,Qt))}:n}async delete(t){const e=await pt(this,Xe,Hr).call(this,t);if(e==null)return{result:"keyNotFound",keyId:t};try{await Rs(e.path)}catch(n){return{result:"error",message:`${n}`}}return{result:"success",keyId:t}}async import(t,e){if((await t.toBytes()).at(0)===0&&!lt(this,pe).allowWeakPrivateKey)return{result:"error",message:"The private key given is too weak; keys of length less than 32 bytes are disallowed by default.  See also the Web3AccountOptions.allowWeakPrivateKey option."};const r=await pt(this,Ze,Ur).call(this,t,e);return r.result==="success"?{result:"success",keyId:r.keyId}:r}},Qt=new WeakMap,pe=new WeakMap,Ge=new WeakSet,$r=async function*(){for await(const t of Cs(this.path))yield t},Xe=new WeakSet,Hr=async function(t){for await(const e of pt(this,Ge,$r).call(this)){const n=Nr(e);if(n!=null&&n.keyId===t)return{...n,path:Sn(this.path,e)}}},Ze=new WeakSet,Ur=async function(t,e){if((e==null?void 0:e.address)!=null&&!e.address.equals(await xt.deriveFrom(t)))return{result:"error",message:"Address does not match the private key (hint: you do not have to specify it manually)"};const n=await lt(this,Qt).configurePassphrase(),r=Es(),a=await As(r,t,n);try{await Bs(this.path,{recursive:!0})}catch(o){return{result:"error",message:`${o}`}}const i=new Date,s=Sn(this.path,`UTC--${i.toISOString().replace(/\.[0-9]+Z$/,"Z").replace(/:/g,"-")}--${r}`);try{await Ns(s,JSON.stringify(a),"utf8")}catch(o){return{result:"error",message:`${o}`}}return{result:"success",keyId:r,keyObject:a}},oi);j(_u,"Web3KeyStore");/*! For license information please see index.browser.mjs.LEGAL.txt */const Mu=ef({address:null,publicKey:null,account:null});function Du(t,e){const n=e||(()=>"UNUSED");return new Cn(t,{configurePassphrase:()=>Promise.resolve(n()),authenticate:(a,i)=>i?Promise.resolve(n()):Promise.reject(new Error("Possibly invalid Passphrase. Web3 Secret Storage decryption failed."))})}export{xt as A,Ks as B,io as F,pi as I,bi as L,Cu as T,Gs as a,Zs as b,Ms as c,Dn as d,Du as e,Bu as f,Mu as g,gi as h,Qs as i,ef as j,Ru as k,Nu as u};
