(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{EUUH:function(e,t,a){"use strict";a.r(t);var n=a("wx14"),c=a("qKvR"),s=a("zLVn"),i=a("wig9"),r=a.n(i),l=a("q1tI"),o=a("Bl7J"),d=a("vrFN"),m=a("7Qib"),p=a("8C97"),b=a("m0tv"),j=a("rvKY"),O=a("/RSD"),u=a("U+36");a("HRfi");var g={fontSize:"4rem"},f={paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem",textAlign:"center"}},y={fontSize:"2.4rem",textAlign:"left",margin:"1.5rem 0 1.2rem 0"},v={},_={margin:"1rem 0"},h={name:"8atqhb",styles:"width:100%;"},k={name:"10miw0s",styles:"display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-top:6rem;"},w={name:"5hu69k",styles:"font-size:4.8rem;text-align:center;padding-top:6rem;"},x={name:"1pcmrxu",styles:"display:block;list-style:none;text-align:center;> li{display:inline-block;font-size:2.4rem;padding:1rem 0 0;margin:0 1rem;cursor:pointer;&.active{border-bottom:8px solid var(--cl-black);}}"},C={name:"ttzt9k",styles:"display:flex;flex-wrap:wrap;justify-content:space-evenly;"},z={name:"1ps6xn0",styles:"font-family:var(--ff-title);font-size:3.2rem;text-align:center;margin:6rem 0;"};t.default=function(e){var t,a=e.data,i=a.party,N=Object(s.a)(a,["party"]),S=Object(l.useState)({}),P=S[0],Y=S[1],U=Object(l.useState)(N.allPeopleYaml.edges.map((function(e){return e.node})))[0],q=function(e){return U.filter((function(t){return!e.mp_type||t.mp_type===e.mp_type})).length},A=[{id:"ทั้งหมด",label:"ทั้งหมด",count:q({}),filter:{},getClass:function(e){return e.mp_type?"":"active"}},{id:"บัญชีรายชื่อ",label:"บัญชีรายชื่อ",count:q({mp_type:"บัญชีรายชื่อ"}),filter:{mp_type:"บัญชีรายชื่อ"},getClass:function(e){return"บัญชีรายชื่อ"===e.mp_type?"active":""}},{id:"แบ่งเขต",label:"แบ่งเขต",count:q({mp_type:"แบ่งเขต"}),filter:{mp_type:"แบ่งเขต"},getClass:function(e){return"แบ่งเขต"===e.mp_type?"active":""}}],B=Object(m.g)(N),J=B.mp_type,K=B.gender,R=B.age,V=B.education,F=B.occupation_group,H=B.asset,I=r()([{name:"party_leader",label:"หัวหน้าพรรค"},{name:"party_secretary",label:"เลขาธิการพรรค"}].map((function(e,t){if(!i[e.name])return null;var a=i[e.name].split(" ").slice(1),n=Object(m.j)(a.join(" "));return{id:t,name:a[0],lastname:a.slice(1).join(" "),position:e.label,fields:{slug:n}}}))),L=(t=U.filter((function(e){return!P.mp_type||e.mp_type===P.mp_type})),"บัญชีรายชื่อ"===P.mp_type?t.sort((function(e,t){return e.mp_list-t.mp_list})):"แบ่งเขต"===P.mp_type?t.sort((function(e,t){return e.mp_province===t.mp_province?e.mp_zone-t.mp_zone:e.mp_province.localeCompare(t.mp_province,"th")})):t.sort((function(e,t){return e.name===t.name?e.lastname.localeCompare(t.lastname,"th"):e.name.localeCompare(t.name,"th")})),t),M=Object(m.f)(N.allPeopleYaml,N.allPeopleVoteYaml,N.allVotelogYaml).filter((function(e){return e.total_voter>0}));return Object(c.d)(o.a,{pageStyles:{background:i.color}},Object(c.d)(d.a,{title:"พรรค"+i.name,imageUrl:"/seo/share/party.png"}),Object(c.d)("section",{className:"section"},Object(c.d)("div",{className:"book"},Object(c.d)("div",{className:"page leftPage"},Object(c.d)("h1",{css:Object(c.c)(Object.assign({},g,{margin:"1rem 0 0 0"}),"")},"พรรค",i.name),Object(c.d)("h2",{style:Object.assign({},y)},i.en.name," Party"),Object(c.d)("h2",{style:Object.assign({},y)},"About"),Object(c.d)("p",{css:Object(c.c)(Object.assign({},v),"")},i.description),Object(c.d)("h2",{css:Object(c.c)(Object.assign({},y),"")},"Official Link"),Object(c.d)(b.b,i),Object(c.d)("h2",{css:Object(c.c)(Object.assign({},y),"")},"In Office"),Object(c.d)(b.a,i),Object(c.d)("h2",{style:Object.assign({},y)},"Key Members"),I.map((function(e){return Object(c.d)("div",{className:"peopleCard",key:e.id},Object(c.d)(j.a,Object(n.a)({key:e.id},e)))}))),Object(c.d)("div",{className:"page"},Object(c.d)("h2",{style:Object.assign({},y,{marginTop:"11.1rem",marginBottom:"0rem"})},"Members"),Object(c.d)("h2",{style:Object.assign({},y,{fontFamily:"var(--ff-text)",fontWeight:"normal"})},"สมาชิกสภาผู้แทนราษฎรจำนวน ",N.allPeopleYaml.totalCount," คน"),Object(c.d)("div",{css:h},Object(c.d)("div",{style:Object.assign({},_)},Object(c.d)(p.a,{data:J})),Object(c.d)("div",{style:Object.assign({},_)},Object(c.d)(p.a,{data:K})),Object(c.d)("div",{style:Object.assign({},_)},Object(c.d)(p.a,{data:R})),Object(c.d)("div",{style:Object.assign({},_)},Object(c.d)(p.a,{data:V})),Object(c.d)("div",{style:Object.assign({},_)},Object(c.d)(p.a,{data:F})),Object(c.d)("div",{style:Object.assign({},_)},Object(c.d)(p.a,{data:H})))))),M.length>0?Object(c.d)("section",{css:Object(c.c)(Object.assign({},f,{background:"var(--cl-white)"}),"")},Object(c.d)("div",{className:"container"},Object(c.d)("h2",{css:Object(c.c)(Object.assign({},g),"")},"การลงมติล่าสุดของพรรค"),Object(c.d)("div",{css:k},M.map((function(e){return Object(c.d)(u.a,{key:e.id,view:"compact",css:Object(c.c)({width:"calc((var(--container-width) - 4rem) / 2)",margin:"0 1rem 2rem 1rem"},""),title:e.title,description_th:e.description_th,passed:e.passed,approve:e.approve,disprove:e.disprove,abstained:e.abstained,absent:e.absent,vote_date:e.vote_date,slug:e.fields.slug})}))))):null,Object(c.d)("section",{css:Object(c.c)(Object.assign({},f,{background:"#eeeeee"}),"")},Object(c.d)("div",{className:"container"},Object(c.d)("h2",{css:w},"สมาชิกพรรคในสภา"),Object(c.d)("ul",{css:x},A.map((function(e){return Object(c.d)("li",{key:e.id,className:[e.getClass(P)].join(" "),role:"tab",onClick:(t=e.filter,function(){return Y(t)})},e.label," (",e.count,")");var t}))),L.length>0?Object(c.d)("div",{css:C},L.map((function(e,t){return Object(c.d)(O.a,Object(n.a)({key:e.id},e,{type:"mp"}))}))):Object(c.d)("div",{css:z},"ไม่มีสมาชิก"))))}}}]);
//# sourceMappingURL=41123ed7-c09d431935ae1ed94c8f.js.map