(window.webpackJsonp=window.webpackJsonp||[]).push([[30,31,36],{MUbk:function(e,t,a){"use strict";a.r(t);var s=a("wx14"),c=a("qKvR"),i=a("zLVn"),n=a("wig9"),d=a.n(n),r=(a("q1tI"),a("Bl7J")),l=a("vrFN"),b=a("7Qib"),o=a("8C97"),j=a("m0tv"),m=a("rvKY"),O=a("R48D"),g=a("U+36");a("HRfi");var p={fontSize:"4rem"},v={paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem",textAlign:"center"}},u={fontSize:"2.4rem",textAlign:"left",margin:"1.5rem 0 1.2rem 0"},f={},y={margin:"1rem 0"},h={name:"8atqhb",styles:"width:100%;"},k={name:"10miw0s",styles:"display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-top:6rem;"},w={name:"jg385e",styles:"font-size:4.5rem;text-align:center;margin-top:4rem;"};t.default=function(e){var t=e.data,a=t.house,n=Object(i.a)(t,["house"]),_=Object(b.g)(n),x=_.mp_type,N=_.gender,z=_.age,Y=_.education,q=_.occupation_group,I=_.asset,K=d()([{name:"speaker",label:"ประธานสภา"},{name:"first_deputy_speaker",label:"รองประธานสภา คนที่ 1"},{name:"second_deputy_speaker",label:"รองประธานสภา คนที่ 2"},{name:"opposition_leader",label:"ผู้นำฝ่ายค้าน"}].map((function(e,t){if(!a[e.name])return null;var s=a[e.name].split(" ").slice(1),c=Object(b.j)(s.join(" "));return{id:t,name:s[0],lastname:s.slice(1).join(" "),position:e.label,fields:{slug:c}}}))),L=Object(b.f)(n.allPeopleYaml,n.allPeopleVoteYaml,n.allVotelogYaml).filter((function(e){return e.total_voter>0}));return Object(c.d)(r.a,{pageStyles:{background:"#eeeeee"}},Object(c.d)(l.a,{title:"สมาชิกสภาผู้แทนราษฎรไทย"}),Object(c.d)("section",{className:"section"},Object(c.d)("div",{className:"book"},Object(c.d)("div",{className:"page leftPage"},Object(c.d)("h1",{css:Object(c.c)(Object.assign({},p,{margin:"1rem 0 0 0"}),"")},a.name," ชุดที่ ",a.party_ordinal),Object(c.d)("h2",{style:Object.assign({},u)},Object(c.d)("span",{dangerouslySetInnerHTML:{__html:Object(b.e)(a.party_ordinal)}})," ","House of Representative"),Object(c.d)("h2",{style:Object.assign({},u)},"About"),Object(c.d)("p",{css:Object(c.c)(Object.assign({},f),"")},a.description),Object(c.d)("h2",{css:Object(c.c)(Object.assign({},u),"")},"Official Link"),Object(c.d)(j.b,a),Object(c.d)("h2",{css:Object(c.c)(Object.assign({},u),"")},"In Office"),Object(c.d)(j.a,a),Object(c.d)("h2",{style:Object.assign({},u)},"Key Members"),K.map((function(e){return Object(c.d)("div",{className:"peopleCard",key:e.id},Object(c.d)(m.a,Object(s.a)({key:e.id},e)))}))),Object(c.d)("div",{className:"page"},Object(c.d)("h2",{style:Object.assign({},u,{marginTop:"11.1rem",marginBottom:"0rem"})},"Members"),Object(c.d)("h2",{style:Object.assign({},u,{fontFamily:"var(--ff-text)",fontWeight:"normal"})},"สมาชิกสภาผู้แทนราษฏรจำนวน ",n.allPeopleYaml.totalCount," คน"),Object(c.d)("div",{css:h},Object(c.d)("div",{style:Object.assign({},y)},Object(c.d)(o.a,{data:x})),Object(c.d)("div",{style:Object.assign({},y)},Object(c.d)(o.a,{data:N})),Object(c.d)("div",{style:Object.assign({},y)},Object(c.d)(o.a,{data:z})),Object(c.d)("div",{style:Object.assign({},y)},Object(c.d)(o.a,{data:Y})),Object(c.d)("div",{style:Object.assign({},y)},Object(c.d)(o.a,{data:q})),Object(c.d)("div",{style:Object.assign({},y)},Object(c.d)(o.a,{data:I})))))),L.length>0?Object(c.d)("section",{css:Object(c.c)(Object.assign({},v,{background:"var(--cl-white)"}),"")},Object(c.d)("div",{className:"container"},Object(c.d)("h2",{css:Object(c.c)(Object.assign({},p),"")},"การลงมติล่าสุดของสภาผู้แทนราษฎร"),Object(c.d)("div",{css:k},L.map((function(e){return Object(c.d)(g.a,{key:e.id,view:"compact",css:Object(c.c)({width:"calc((var(--container-width) - 4rem) / 2)",margin:"0 1rem 2rem 1rem"},""),title:e.title,description_th:e.description_th,passed:e.passed,approve:e.approve,disprove:e.disprove,abstained:e.abstained,absent:e.absent,total_voter:e.total_voter,vote_date:e.vote_date,slug:e.fields.slug})}))))):null,Object(c.d)("section",{css:Object(c.c)(Object.assign({},v,{background:"#eeeeee"}),"")},Object(c.d)("div",{className:"container"},Object(c.d)("div",null,Object(c.d)("h3",{css:w},"สำรวจตามพรรคการเมือง"),Object(c.d)(O.a,null)))))}},rvKY:function(e,t,a){"use strict";a("q1tI");var s=a("Wbzz"),c=a("7Qib"),i=a("qKvR");var n={name:"jgchc",styles:"font-family:var(--ff-text);font-weight:bold;font-size:1.6rem;a{color:inherit;}vertical-align:center;height:100%;"},d={name:"mv3ygt",styles:"display:block;flex:1 1 360px;font-size:1.8rem;margin-bottom:2rem;"},r={name:"1cx8pnj",styles:"border-radius:84px;width:41px;height:41px;float:left;margin-bottom:0;margin-right:1rem;border:2px solid var(--cl-black);background:var(--cl-gray-2) no-repeat;background-size:cover;"};t.a=function(e){var t=function(e){return Object(i.d)("div",{css:n},Object(i.d)(s.Link,{to:e.fields.slug},e.name+" "+e.lastname))}(e);return Object(i.d)("div",{key:e.id,className:e.className,css:d},Object(i.d)("div",{style:{marginBottom:"1rem",fontWeight:"medium"}},e.position),Object(i.d)("div",null,Object(i.d)(s.Link,{to:e.fields.slug},Object(i.d)("div",{className:"profile-picture",css:r,style:{backgroundImage:"url("+Object(c.k)(e)+")"}}))),Object(i.d)("div",{style:{marginTop:"2rem"}},t))}}}]);
//# sourceMappingURL=component---src-pages-representatives-js-f1acdd840e1b2d98300a.js.map