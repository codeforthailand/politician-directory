(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"6ICo":function(e,t,n){},"7YE6":function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n("qKvR"),o=n("wx14"),i=(n("q1tI"),n("/RSD"));n("rMck"),n("6ICo");var a=function(e,t){return{position:"relative",width:8,height:8,boxSizing:"border-box",margin:"0 3px 3px 0",border:"1px solid var(--cl-black)",borderColor:t,backgroundColor:e,"&:hover":{border:"2px solid var(--cl-black)"},"&:hover .tooltip-text":{display:"block",zIndex:10}}},l={display:"none",position:"absolute",top:"5px",left:"-2px",width:350,padding:0,lineHeight:"1.8rem",border:"none",borderRadius:"0 5px 5px 5px",backgroundColor:"transparent"},s=function(e,t,n){return Array(Math.ceil(e.length/t)).fill().map((function(e,n){return n*t})).map((function(n){return e.slice(n,n+t)})).map(n)},c={name:"1ny7vd6",styles:"padding:1rem 1rem;margin:0;align-items:center;border:2px solid var(--cl-black);.card-info{.card-name{font-size:1.8rem;font-weight:bold;font-family:var(--ff-text);}.card-description{font-size:1.6rem;font-family:var(--ff-text);}}.profile-picture{height:5rem;flex-basis:5rem;}"};t.a=function(e){var t=e.data,n=e.colors,d=e.borderColors,p=e.style,u=e.css;return Object(r.d)("div",{className:"waffle",css:Object(r.c)(Object.assign({justifyContent:"center"},u),""),style:p},t.map((function(e,p){return function(e,t,n,d){var p=s(e,100,(function(d,p){return Object(r.d)("div",{key:p,className:"hundred",style:{margin:e[0].node.is_senator?"0 10px 0 0":"0 27px 0 0"}},s(d,25,(function(e,s){return Object(r.d)("div",{key:s,className:"quarter"},e.map((function(e){var s=e.node;return Object(r.d)("div",{key:s.id,css:a(t,n)},Object(r.d)("div",{className:"tooltip-text",css:l},Object(r.d)(i.a,Object(o.a)({},s,{css:c}))))})))})))}));return d&&p.push(Object(r.d)("div",{key:"line",className:"line"})),p}(e,n[p],d[p],p<t.length-1)})))}},I4Mb:function(e,t,n){"use strict";var r=n("wTIg"),o=n("bt/X"),i=n.n(o),a=n("q1tI"),l=n("qKvR"),s=n("ob5y"),c=n("SgUV"),d=n("YSLP");var p=Object(r.a)("button",{target:"ed4fl600"})({name:"31fizp",styles:"position:absolute;bottom:0;left:0;outline:none;width:100%;height:60px;background-color:white;border:none;box-shadow:0 -20px 40px 40px rgba(255,255,255,0.75);cursor:pointer;"}),u={name:"1r57amx",styles:"font-size:16px;margin-bottom:25px;"},m={name:"1tyn5zp",styles:"margin:30px 0;"},b={name:"17p3p3h",styles:"margin-top:8px;margin-bottom:2px;font-size:12px;"};t.a=function(e){var t=e.members,n=Object(a.useState)(!1),r=n[0],o=n[1],f=Object(a.useState)(!1),g=f[0],h=f[1];Object(a.useEffect)((function(){return window.addEventListener("resize",(function(){return o(!c.a.motionResultProfileBreak())}))}));var v=i()(t,"party");return Object(l.d)("div",{css:Object(l.c)("background-color:white;padding:25px 15px;",g?"":"overflow: hidden;\n          height: 500px;\n          position: relative;","")},Object(l.d)("h4",{css:u},"คณะกรรมาธิการ"),Object(l.d)("div",{className:"committee"},Object(l.d)("div",{className:"committee-member"},Object(l.d)("h4",null,"สมาชิก (",t.length,")"),Object(l.d)("ul",{css:m},t.map((function(e){return Object(l.d)(s.a,{key:e.name+e.lastname,name:e.name,last_name:e.lastname,party:e.party,slug:e.fields.slug,oneline:r})})))),Object(l.d)("div",{className:"committee-party"},Object(l.d)("h4",null,"สัดส่วน"),Object.entries(v).sort((function(e,t){return t[1].length-e[1].length})).map((function(e){var t=e[0],n=e[1];if(""!==t)return Object(l.d)("div",{key:t},Object(l.d)("h5",{css:b},t," (",n.length,")"),Object(l.d)(d.a,{partyMember:n}))})))),Object(l.d)(p,{hidden:g,onClick:function(){return h((function(e){return!e}))}},"+ แสดงทั้งหมด"))}},JD84:function(e,t,n){var r=n("SKAX");e.exports=function(e,t,n,o){return r(e,(function(e,r,i){t(o,e,n(e),i)})),o}},O0oS:function(e,t,n){var r=n("Cwc5"),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=o},SgUV:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r={hideMotion:"(max-width: 1100px)",hideNominator:"(max-width: 850px)",motionResultBreak:"(max-width: 700px)"},o={motionResultProfileBreak:function(e){return function(){return window.innerWidth<=e}}(500)}},UMY1:function(e,t,n){var r=n("oMRN"),o=n("JD84"),i=n("ut/Y"),a=n("Z0cm");e.exports=function(e,t){return function(n,l){var s=a(n)?r:o,c=t?t():{};return s(n,e,i(l,2),c)}}},"bt/X":function(e,t,n){var r=n("hypo"),o=n("UMY1"),i=Object.prototype.hasOwnProperty,a=o((function(e,t,n){i.call(e,n)?e[n].push(t):r(e,n,[t])}));e.exports=a},"daU/":function(e,t,n){"use strict";n.r(t),n.d(t,"MenuContext",(function(){return F})),n.d(t,"MenuChoice",(function(){return U}));var r=n("wTIg"),o=n("q1tI"),i=n.n(o),a=n("Bl7J"),l=n("qKvR"),s=n("YSLP"),c=n("SgUV"),d=n("wx14"),p=n("ob5y");var u={name:"2avrvw",styles:"list-style:none;& .party{color:grey;}"},m=function(e){var t=e.className,n=e.motion,r=n.purposers,o=n.seconders;return Object(l.d)("div",{className:t},Object(l.d)("ul",null,Object(l.d)("li",null,Object(l.d)("h4",null,"ผู้เสนอ"),Object(l.d)("ul",null,r.map((function(e){return Object(l.d)(p.a,Object(d.a)({key:e.name+e.last_name},e))})))),Object(l.d)("li",null,Object(l.d)("h4",null,"ผู้รับรอง (",o.length,")"),o.length>0?Object(l.d)("ul",{css:u},o.map((function(e){return Object(l.d)(p.a,Object(d.a)({key:e.name+e.last_name},e))}))):Object(l.d)("div",null,"ไม่พบข้อมูล"))))},b=Object(r.a)(m,{target:"ece65mt0"})({name:"17oo7wr",styles:"& > ul{height:80vh;overflow-y:auto;list-style:none;width:100%;padding:0 20px;box-sizing:content-box;margin:0;}& > ul > li > h4{padding:15px 0;font-size:22px;color:var(--cl-gray-0);position:sticky;top:0;left:0;z-index:10;background-color:white;border-bottom:1px solid var(--cl-black);}& li:last-child li:last-child{margin-bottom:20vh;}"}),f={name:"tk7qjg",styles:"border:none;outline:none;background-color:var(--cl-white);border:1px solid var(--cl-gray-3);border-radius:5px;padding:7.5px;color:var(--cl-gray-1);cursor:pointer;"},g=function(e){var t=e.purposers,n=e.n_seconders,r=Object(o.useContext)(F).setMenu;return Object(l.d)("div",{className:"nominator-menu",css:Object(l.c)("background-color:rgb(250,250,250);justify-content:space-between;align-items:center;display:none;padding:10px 20px;@media ",c.b.hideNominator,"{display:flex;}")},Object(l.d)(p.a,t[0]),Object(l.d)("button",{onClick:function(){return r(U.nominator)},css:f},Object(l.d)("div",null,n),Object(l.d)("div",null,"ผู้รับรอง")))},h=n("qHTg");var v={name:"1mb7ed4",styles:"padding:40px;"},x={name:"nu8qrx",styles:"font-size:30px;line-height:50px;"},y={name:"igtkyh",styles:"display:flex;flex-flow:row wrap;align-items:center;"},O={name:"vlo7y5",styles:"display:flex;margin:20px 0;margin-right:auto;& .datebox + .datebox{margin-left:30px;}& .label{font-size:12px;color:var(--cl-gray-3);font-family:var(--ff-text);font-weight:100;margin:10px 0;}& .date{font-size:14px;font-family:var(--ff-text);font-weight:100;}"},j={name:"kmvlc5",styles:"border:1px solid var(--cl-gray-3);border-radius:100px;padding:4px 12px;display:inline-flex;align-items:center;font-size:14px;font-family:var(--ff-text);font-weight:100;color:var(--cl-gray-1);"},k={name:"1fai3so",styles:"height:2px;background-color:lightgrey;"},w={name:"17rdls6",styles:"font-size:20px;margin:20px 0;"},_={name:"p9nez7",styles:"font-family:var(--ff-text);font-size:16px;font-weight:100;"},N=function(e){var t=e.votelog,n=e.motion,r=e.members,o=e.className;return Object(l.d)("div",{className:o},Object(l.d)(g,{purposers:n.purposers,n_seconders:n.seconders.length}),Object(l.d)("div",{css:v},Object(l.d)("h2",{css:Object(l.c)("")},Object(l.d)("div",{css:x},n.name),Object(l.d)("div",{css:y},Object(l.d)("div",{css:O},Object(l.d)("div",{className:"datebox"},Object(l.d)("div",{className:"label"},"เลขทะเบียนรับ"),Object(l.d)("div",{className:"date"},n.registration_no)),Object(l.d)("div",{className:"datebox"},Object(l.d)("div",{className:"label"},"วันที่เสนอ"),Object(l.d)("div",{className:"date"},n.proposal_date)),Object(l.d)("div",{className:"datebox"},Object(l.d)("div",{className:"label"},"วันที่ประชุม"),Object(l.d)("div",{className:"date"},n.voting_date))),Object(l.d)("div",{className:"status",css:j},Object(l.d)("div",{style:{height:"12px",width:"12px",marginRight:"10px",borderRadius:"50%",backgroundColor:h.c[n.status],flexShrink:"0"}}),h.b[n.status]," "))),Object(l.d)("hr",{css:k}),Object(l.d)("h3",{css:w},"สาระและวัตถุประสงค์"),Object(l.d)("div",{css:_},n.content),Object(l.d)(s.b,{votelog:t,members:r,url:{voteLink:n.voting_url,pageLink:n.page_url}})))},S=Object(r.a)(N,{target:"ebn46cv0"})({name:"j4oqcg",styles:"border-radius:10px;background-color:white;box-shadow:0 0 30px 5px rgba(0,0,0,0.15);min-height:100vh;position:relative;z-index:1;"}),C=n("Wbzz");var z=Object(r.a)("ul",{target:"e1l49uo50"})({name:"rrqpng",styles:"list-style:none;height:80vh;overflow-y:auto;width:100%;padding-right:17px;box-sizing:content-box;margin:0;display:flex;flex-flow:column;align-items:center;"}),P=Object(r.a)("li",{target:"e1l49uo51"})("background-color:",(function(e){return e.active&&"var(--cl-gray-4)"}),";opacity:",(function(e){return e.active?1:.5}),";margin:0;box-sizing:border-box;",(function(e){return e.popup?"\n    width: 100%;\n    max-width: 500px;\n  ":"width: 250px;"})," & a{color:black;text-decoration:none;}&:hover{background-color:var(--cl-gray-4);opacity:1;}&:last-child{margin-bottom:20vh;}"),R={name:"1ytwaaz",styles:"display:block;padding:22.5px 20px;"},A={name:"r7q7qr",styles:"margin-bottom:5px;"},M=function(e){var t=e.name,n=e.motionCat,r=e.className,i=e.popup,a=Object(o.useRef)(null),s=Object(o.useContext)(F).menu;return Object(o.useEffect)((function(){if(a){var e=document.getElementById("current-motion");a.current.scrollTop=e.offsetTop-e.offsetHeight}}),[a,s]),Object(l.d)("div",{className:r,css:Object(l.c)("")},Object(l.d)(z,{ref:a,popup:i},n.map((function(e,n){return Object(l.d)(P,{key:n,id:e.name===t?"current-motion":"",active:e.name===t,popup:i},Object(l.d)(C.Link,{to:e.fields.slug,css:R},Object(l.d)("div",{css:A},e.registration_no),Object(l.d)("div",null,e.name)))}))))},q=Object(r.a)(M,{target:"e1l49uo52"})("");var T=Object(r.a)(C.Link,{target:"e1h7gwz60"})({name:"1b7xw85",styles:"color:var(--cl-black);"}),I={name:"1rr4qq7",styles:"flex:1;"},L={name:"1l81bou",styles:'display:inline-block;.menu-bar{width:15px;height:2px;margin:3px 0;background-color:var(--cl-black);position:relative;margin-left:10px;&::before{content:"";width:2px;height:2px;position:absolute;left:-4px;border-radius:100%;background-color:var(--cl-black);}}'},E=function(e){var t=e.sub_cat,n=e.registration_no,r="string"==typeof t?t.replace(/ /g,"-"):null,i=Object(o.useContext)(F).setMenu;return Object(l.d)("div",{css:Object(l.c)("display:flex;padding:30px 20px;border-top:1px solid var(--cl-gray-4);@media ",c.b.hideMotion,"{background-color:var(--cl-gray-4);}")},Object(l.d)("div",{className:"path",css:I},Object(l.d)("span",null,Object(l.d)(T,{to:"/motions"},"การพิจารณาญัตติ"))," > ",Object(l.d)("span",null,Object(l.d)(T,{to:"/motions/category/"+r},t))," > ",Object(l.d)("span",null,Object(l.d)("b",null,n))),Object(l.d)("span",{onClick:function(){return i(U.motion)},css:Object(l.c)("visibility:hidden;display:flex;align-items:center;cursor:pointer;@media ",c.b.hideMotion,"{visibility:visible;}")},Object(l.d)("span",null,"รายการญัตติ"),Object(l.d)("span",{className:"icon",css:L},Object(l.d)("div",{className:"menu-bar"}),Object(l.d)("div",{className:"menu-bar"}),Object(l.d)("div",{className:"menu-bar"}))))};var D=Object(r.a)("div",{target:"e708o4w0"})("display:flex;flex-flow:row;justify-content:space-between;width:100vw;max-width:100%;height:100vh;position:",(function(e){return e.popup?"absolute":"sticky"}),";top:0;left:0;",(function(e){return e.popup&&"z-index: 3;"})," background-color:",(function(e){return e.popup?"var(--cl-white)":"transparent"}),";pointer-events:none;& *{pointer-events:all;}",q,"{flex:",(function(e){return e.popup?"1":"0 0 250px"}),";}",b,"{flex:",(function(e){return e.popup?"1":"0 0 250px"}),";",(function(e){return e.popup&&"margin: 10vh auto;"}),"}& > .menu-title{position:absolute;left:50%;top:0;z-index:5;transform:translateX(-50%);margin:0;display:flex;height:10vh;justify-content:space-between;align-items:center;}& > div{width:100%;height:100%;overflow:hidden;position:relative;margin-top:",(function(e){return e.popup?"10vh":"0"}),';&:after{content:"";position:absolute;z-index:1;top:60vh;left:0;pointer-events:none;background-image:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) 90% );width:100%;height:20vh;}}'),F=Object(o.createContext)(),U={motion:"motion",nominator:"nominator"},H={name:"l8qto0",styles:"font-size:15px;"},B={name:"1nfllh7",styles:'width:30px;height:30px;background-color:transparent;border:2px solid var(--cl-black);border-radius:50%;outline:none;cursor:pointer;position:relative;display:flex;justify-content:center;align-items:center;&:before,&:after{content:" ";height:15px;width:2px;margin:0 -0.5px;background-color:var(--cl-black);}&:before{transform:rotate(45deg);}&:after{transform:rotate(-45deg);}'};t.default=function(e){var t=e.data,n=t.motion,r=t.committee.nodes,s=t.motions.nodes,d=t.votelog,p=Object(o.useState)(null),u=p[0],m=p[1];return Object(l.d)(F.Provider,{value:{menu:u,setMenu:m}},Object(l.d)(a.a,null,Object(l.d)(E,{sub_cat:n.sub_cat,registration_no:n.registration_no}),Object(l.d)(D,{popup:!!u,style:{pointerEvents:u?"all":"none"}},!!u&&Object(l.d)("div",{className:"menu-title",style:{maxWidth:u===U.motion&&"500px",padding:u===U.nominator&&"0 20px"}},Object(l.d)("h4",{css:H},u===U.nominator?"ผู้เสนอและผู้รับรอง":"รายการญัตติ"),Object(l.d)("button",{css:B,onClick:function(){return m(null)}})),u===U.nominator?Object(l.d)(i.a.Fragment,null):Object(l.d)(q,{name:n.name,motionCat:s,popup:u===U.motion}),u===U.motion?Object(l.d)(i.a.Fragment,null):Object(l.d)(b,{motion:n,popup:u===U.nominator})),Object(l.d)(S,{css:Object(l.c)("margin:-100vh 250px 100px 250px;@media ",c.b.hideMotion,"{margin-left:0;}@media ",c.b.hideNominator,"{margin-right:0;}"),votelog:d,motion:n,members:r})))}},hypo:function(e,t,n){var r=n("O0oS");e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},oMRN:function(e,t){e.exports=function(e,t,n,r){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(r,a,n(a),e)}return r}},ob5y:function(e,t,n){"use strict";var r=n("wTIg"),o=n("q1tI"),i=n.n(o),a=n("7Qib"),l=n("Wbzz"),s=n("9eSz"),c=n.n(s),d=n("qKvR"),p=function(e){var t=e.name,n=e.last_name,r=Object(o.useState)(!1),s=r[0],p=r[1],u=Object(l.useStaticQuery)("2597940238"),m={name:t,lastname:n};return Object(d.d)(i.a.Fragment,null,s?Object(d.d)(c.a,{fluid:u.placeholderImage.childImageSharp.fluid}):Object(d.d)("img",{src:Object(a.k)(m),alt:[t,n,"profile"].join(" "),onError:function(){p(!0)}}))},u=Object(r.a)("li",{target:"e1rz535y0"})("list-style:none;display:flex;align-items:center;margin-bottom:1.08rem;& .profile-pic{width:",(function(e){return e.oneline?"24px":"40px"}),";height:",(function(e){return e.oneline?"24px":"40px"}),";clip-path:circle(50%);margin-right:15px;}& .name a{color:var(--cl-black);}& .party a{color:var(--cl-gray-1);}& .oneline{display:flex;width:100%;& .name{flex:1;}& .party{flex:0 0 100px;}}"),m=function(e){var t=e.name,n=e.last_name,r=e.party,o=e.slug,i=e.oneline;return Object(d.d)(u,{oneline:i},Object(d.d)("div",{className:"profile-pic"},Object(d.d)(p,{name:t,last_name:n})),Object(d.d)("div",{className:i&&"oneline"},Object(d.d)("div",{className:"name"},Object(d.d)(l.Link,{to:o||"/people/"+t+"-"+n},t," ",n)),Object(d.d)("div",{className:"party"},Object(d.d)(l.Link,{to:"/party/"+r},r))))},b=Object(r.a)(m,{target:"e1rz535y1"})("");t.a=b},qHTg:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));n("q1tI");var r=n("qKvR");var o={"ไม่บรรจุวาระ":"ไม่บรรจุวาระ","1. รอบรรจุวาระ":"รอบรรจุวาระ","2. สภาผู้แทนพิจารณา":"สภาผู้แทนพิจารณา","3. ตั้ง กมธ. วิสามัญ":"ตั้ง กมธ. วิสามัญ","4. ไม่ตั้ง กมธ. วิสามัญ":"ไม่ตั้ง กมธ. วิสามัญ","5. ส่งครม.":"ส่งครม."},i={"ไม่บรรจุวาระ":"lightgrey","1. รอบรรจุวาระ":"#E0A4C7","2. สภาผู้แทนพิจารณา":"#A8DA9C","3. ตั้ง กมธ. วิสามัญ":"#AFB0F5","4. ไม่ตั้ง กมธ. วิสามัญ":"#E3A7A8","5. ส่งครม.":"#94C3BF"},a={name:"iggpl0",styles:"border:var(--cl-gray-4) 1px solid;border-radius:100px;display:inline-flex;align-items:center;padding:4px 12px;font-size:1.4rem;color:var(--cl-gray-1);"};t.a=function(e){var t=e.status,n=e.style;return Object(r.d)("div",{style:n,css:a},Object(r.d)("div",{style:{height:"12px",width:"12px",marginRight:"10px",borderRadius:"50%",backgroundColor:i[t],flexShrink:"0"}}),o[t])}},wTIg:function(e,t,n){"use strict";var r=n("lSNA"),o=n.n(r),i=n("q1tI"),a=n("4qRI"),l=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=Object(a.a)((function(e){return l.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=n("qKvR"),d=n("SIPS"),p=n("MiSq"),u=s,m=function(e){return"theme"!==e&&"innerRef"!==e},b=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?u:m};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function e(t,n){var r,o,a;void 0!==n&&(r=n.label,a=n.target,o=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var l=t.__emotion_real===t,s=l&&t.__emotion_base||t;"function"!=typeof o&&l&&(o=t.__emotion_forwardProp);var u=o||b(s),m=!u("as");return function(){var f=arguments,h=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&h.push("label:"+r+";"),null==f[0]||void 0===f[0].raw)h.push.apply(h,f);else{0,h.push(f[0][0]);for(var v=f.length,x=1;x<v;x++)h.push(f[x],f[0][x])}var y=Object(c.e)((function(e,t,n){return Object(i.createElement)(c.b.Consumer,null,(function(r){var l=m&&e.as||s,c="",f=[],g=e;if(null==e.theme){for(var v in g={},e)g[v]=e[v];g.theme=r}"string"==typeof e.className?c=Object(d.a)(t.registered,f,e.className):null!=e.className&&(c=e.className+" ");var x=Object(p.a)(h.concat(f),t.registered,g);Object(d.b)(t,x,"string"==typeof l);c+=t.key+"-"+x.name,void 0!==a&&(c+=" "+a);var y=m&&void 0===o?b(l):u,O={};for(var j in e)m&&"as"===j||y(j)&&(O[j]=e[j]);return O.className=c,O.ref=n||e.innerRef,Object(i.createElement)(l,O)}))}));return y.displayName=void 0!==r?r:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=s,y.__emotion_styles=h,y.__emotion_forwardProp=o,Object.defineProperty(y,"toString",{value:function(){return"."+a}}),y.withComponent=function(t,r){return e(t,void 0!==r?g({},n||{},{},r):n).apply(void 0,h)},y}}}}]);
//# sourceMappingURL=component---src-templates-motion-template-js-93bd343236bfbc8f9690.js.map