(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{fhHu:function(e,t,c){"use strict";c.r(t);var a=c("qKvR"),n=(c("q1tI"),c("Wbzz")),s=c("9eSz"),i=c.n(s),r=c("Bl7J"),o=c("vrFN"),d=c("ZXdF"),l=c("0YEp"),m=c("U+36"),b=c("uYfV"),g=c("R48D");var j={fontSize:"4.8rem",marginTop:"4rem"},O={paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem",textAlign:"center"}},p=Object.assign({},O,{background:"var(--cl-white)"}),v=Object.assign({},O,{color:"var(--cl-white)",background:"var(--cl-black)",h2:Object.assign({},O.h2,{color:"var(--cl-white)"})}),f={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"300px",padding:"2rem",borderRadius:"10px",color:"var(--cl-white)",background:"var(--cl-black)",width:"calc((var(--container-width) - 4rem) / 2)",margin:"1rem","&:hover":{background:"var(--cl-gray-0)",textDecoration:"none"},h3:{color:"var(--cl-white)",fontSize:"3.6rem"},h4:{color:"var(--cl-white)",fontSize:"2.4rem",fontFamily:"var(--ff-text)",fontWeight:"normal"}},h={name:"1tw4i9k",styles:"font-size:6rem;font-weight:bold;text-align:center;margin-top:0;margin-bottom:1rem;padding-top:6rem;"},u={name:"p18chf",styles:"font-size:4.8rem;text-align:center;margin-bottom:8rem;"},x={name:"xi606m",styles:"text-align:center;"},w={name:"xp7it7",styles:"padding:1rem 4rem;font-family:var(--ff-title);font-size:2.4rem;color:var(--cc-white);text-decoration:underline;border:none;background:none;&:hover{color:gray;}"},y={name:"10miw0s",styles:"display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-top:6rem;"},k={name:"1chmm35",styles:"text-align:center;margin:4.8rem 0 0 0;"},z={name:"10miw0s",styles:"display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-top:6rem;"},S={name:"16v5xpg",styles:"margin-bottom:1.2rem;"},I={name:"16v5xpg",styles:"margin-bottom:1.2rem;"},N={name:"f3bpqo",styles:"margin-top:4rem;"},H={name:"dk171n",styles:"margin-bottom:1.2rem;text-align:center;"},L={name:"ug8ss6",styles:"font-size:3.6rem;text-align:center;"},Y={name:"1b7xw85",styles:"color:var(--cl-black);"},_={name:"1chmm35",styles:"text-align:center;margin:4.8rem 0 0 0;"};t.default=function(e){var t=e.data;return Object(a.d)(r.a,{pageStyles:{background:"var(--cl-people-section)"}},Object(a.d)(o.a,{title:"Home"}),Object(a.d)("section",{css:Object(a.c)(Object.assign({},O),"")},Object(a.d)("div",{className:"container"},Object(a.d)("h1",{css:h},"ใครคือผู้แทนของเรา"),Object(a.d)("h2",{css:u},"ค้นหา ตรวจสอบ โปร่งใส"),Object(a.d)("div",{css:Object(a.c)({margin:"0 auto 1.45rem"},"")},Object(a.d)(l.a,null),Object(a.d)("div",{css:x},Object(a.d)(n.Link,{to:"/about",css:w},"เกี่ยวกับเรา"))))),Object(a.d)("section",{css:Object(a.c)(Object.assign({},p),"")},Object(a.d)("div",{className:"container"},Object(a.d)(b.a,{data:t.allPeopleYaml.edges}))),Object(a.d)("section",{css:Object(a.c)(Object.assign({},v),"")},Object(a.d)("div",{className:"container"},Object(a.d)("h2",{css:Object(a.c)(Object.assign({},j),"")},"สรุปผลการลงมติล่าสุด"),Object(a.d)("div",{css:y},t.allVotelogYaml.edges.map((function(e){var t=e.node;return Object(a.d)(m.a,{key:t.id,view:"full",css:Object(a.c)({width:"calc((var(--container-width) - 4rem) / 2)",margin:"0 1rem 2rem 1rem"},""),title:t.title,description_th:t.description_th,approve:t.approve,disprove:t.disprove,abstained:t.abstained,absent:t.absent,vote_date:t.vote_date,slug:t.fields.slug})}))),Object(a.d)("div",{css:k},Object(a.d)(d.a,{to:"/votelog"},"ดูทั้งหมด")))),Object(a.d)("section",{css:Object(a.c)(Object.assign({},p),"")},Object(a.d)("div",{className:"container"},Object(a.d)("h2",{css:Object(a.c)(Object.assign({},j),"")},"สำรวจตามชนิดและสังกัดผู้แทน"),Object(a.d)("div",{css:z},Object(a.d)(n.Link,{to:"/cabinet",css:f},Object(a.d)(i.a,{css:S,fixed:t.cabinetImage.childImageSharp.fixed}),Object(a.d)("h3",null,"คณะรัฐมนตรี"),Object(a.d)("h4",null,t.cabinet.totalCount," คน")),Object(a.d)(n.Link,{to:"/senate",css:f},Object(a.d)(i.a,{css:I,fixed:t.senateImage.childImageSharp.fixed}),Object(a.d)("h3",null,"สมาชิกวุฒิสภา"),Object(a.d)("h4",null,t.senator.totalCount," คน"))),Object(a.d)("div",{css:N},Object(a.d)("div",{css:H},Object(a.d)(i.a,{fixed:t.representativeImage.childImageSharp.fixed})),Object(a.d)("h3",{css:L},Object(a.d)(n.Link,{to:"/representatives",css:Y},"สมาชิกสภาผู้แทนราษฎร")),Object(a.d)(g.a,{paneHeaderStyle:{textAlign:"center",fontSize:"2.4rem"}}),Object(a.d)("div",{css:_},Object(a.d)(d.a,{to:"/representatives"},"ดู ส.ส. ทั้งหมด"))))))}}}]);
//# sourceMappingURL=8d1bdebf-c4c179f7afd3521990f3.js.map