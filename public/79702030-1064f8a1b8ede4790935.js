(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{pqpe:function(e,t,n){"use strict";n.r(t);var l=n("qKvR"),c=n("zLVn"),s=(n("q1tI"),n("Wbzz")),a=n("9eSz"),i=n.n(a),o=n("Bl7J"),r=n("vrFN"),d=n("7Qib"),b=n("omsM"),m=n("/OhO"),p=n("7Jnt"),j=n("PSXw"),O=n("+6id"),u=n.n(O);n("HRfi");var g={fontSize:"4rem"},f={fontSize:"2.4rem"},h={paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem",textAlign:"center"}},y=Object.assign({},h,{color:"var(--cl-white)",background:"var(--cl-black)",h2:Object.assign({},h.h2,{color:"var(--cl-white)"}),blockquote:{color:"var(--cl-white)",lineHeight:1.8,border:"none",fontSize:"3.6rem",fontStyle:"normal",fontFamily:"var(--ff-title)"}}),v={fontSize:"2.4rem",textAlign:"left",margin:"1.5rem 0 1.2rem 0"},w={fontSize:"1.8rem",p:{marginBottom:"1rem"},a:{color:"var(--cl-black)",textDecoration:"underline"},".official-website a":{textDecoration:"none"}},x={name:"in3yi3",styles:"font-weight:bold;"},z=function(e){return Object(l.d)("div",null,e.is_mp?Object(l.d)("p",{css:x},e.party?Object(l.d)(s.Link,{to:"/party/"+e.party},"พรรค ",e.party):"ไม่สังกัดพรรค"):null)},_={name:"in3yi3",styles:"font-weight:bold;"},k={name:"in3yi3",styles:"font-weight:bold;"},q={name:"in3yi3",styles:"font-weight:bold;"},S={name:"in3yi3",styles:"font-weight:bold;"},N=function(e){return Object(l.d)("div",null,e.is_cabinet?Object(l.d)("p",{css:_},"คณะรัฐมนตรี"):null,e.is_senator?Object(l.d)("p",{css:k},"สมาชิกวุฒิสภา ",e.senator_method):null,e.is_mp?"แบ่งเขต"===e.mp_type?Object(l.d)("p",{css:q},"สมาชิกสภาผู้แทนราษฎร แบ่งเขต จังหวัด ",e.mp_province,"เขต ",e.mp_zone," จากคะแนนโหวต ",Object(d.c)(e.vote)," คะแนน"):Object(l.d)("p",{css:S},"สมาชิกสภาผู้แทนราษฎร บัญชีรายชื่อ ลำดับที่ ",e.mp_list):null)},Y={name:"3aifri",styles:"font-size:1.4rem;"},V=function(e){return Object(l.d)("div",{css:Y},e.cabinet_position.length>0?Object(l.d)("p",null,e.cabinet_position.map((function(e,t){return Object(l.d)("span",{key:e},t>0&&", ",e," ")}))):null,e.committee.length>0?Object(l.d)("p",null,e.committee.filter((function(e){return e.set&&e.position})).map((function(e,t){return Object(l.d)("span",{key:e.set+" "+e.position},t>0&&", ",e.position," ",e.set," ")}))):null)},A=function(e){return Object(l.d)("p",null,Object(l.d)("span",null,Object(l.d)("strong",null,"เพศ")," ",e.gender)," ",Object(l.d)("span",null,Object(l.d)("strong",null,"อายุ")," ",Object(d.a)(e.birthdate)," ปี")," ",Object(l.d)("span",null,Object(l.d)("strong",null,"การศึกษา")," ",e.education)," ",Object(l.d)("span",null,e.graduation,e.degree?" ("+e.degree+")":null)," ",Object(l.d)("span",null,Object(l.d)("strong",null,"อาชีพเดิม")," ",e.ex_occupation))},B=function(e){return Object(l.d)("p",null,Object(l.d)("span",null,Object(l.d)("strong",null,"ทรัพย์สิน")," ",null===e.asset?"ไม่มีข้อมูล":Object(d.c)(e.asset)+" บาท")," ",Object(l.d)("span",null,Object(l.d)("strong",null,"หนี้สิน")," ",null===e.debt?"ไม่มีข้อมูล":Object(d.c)(e.debt)+" บาท")," ",""!==e.mp_type&&(t=e.name,n=e.lastname,c=e.party,Object(l.d)(b.a,{href:"https://elect.in.th/politics-and-business/#/p/"+c+"/person/"+t+" "+n},Object(l.d)("strong",null,"ตรวจสอบประวัติทางธุรกิจ"))));var t,n,c},J={name:"1ap128e",styles:"text-align:center;margin-top:5rem;"},I={name:"wamjc6",styles:"height:160px;width:160px;border-radius:80px;margin:0 auto;overflow:hidden;margin-bottom:20px;"},T={name:"cxtz18",styles:"max-height:240px;"},D={name:"1q0gze8",styles:"margin-top:3rem;margin-bottom:5rem;"},F={name:"1qf0wiq",styles:"display:flex;margin-bottom:3.6rem;"},H={name:"reilfj",styles:"font-size:12rem;font-family:var(--ff-text);margin-top:-3rem;margin-right:1.6rem;"},L={name:"17124dc",styles:"display:flex;justify-content:flex-end;font-family:var(--ff-title);font-size:3.6rem;"},P={name:"18grvyl",styles:"margin-right:4rem;"},R={name:"16e79in",styles:"margin-bottom:0.5rem;line-height:1;"},W={name:"1r3ski9",styles:"text-decoration:underline;font-size:2.4rem;color:white;"};t.default=function(e){var t=e.data,n=t.person,s=t.peopleVoteYaml,a=t.partyYaml,O=t.allVotelogYaml,h=Object(c.a)(t,["person","peopleVoteYaml","partyYaml","allVotelogYaml"]),x=null!==a?a.color:"var(--cl-gray-4)",_=n.title+" "+n.name+" "+n.lastname;return Object(l.d)(o.a,{pageStyles:{background:x}},Object(l.d)(r.a,{title:_,imageUrl:"/seo/share/people.png"}),Object(l.d)("section",{className:"section"},Object(l.d)("div",{className:"book"},Object(l.d)("div",{className:"page leftPage"},Object(l.d)("div",{css:J},Object(l.d)("div",{css:I},Object(l.d)("img",{css:T,alt:"",src:Object(d.j)(n)})),Object(l.d)("h1",{css:Object(l.c)(Object.assign({},g,{margin:"1rem 0 0 0"}),"")},_),Object(l.d)(j.a,{isActive:n.is_active})),Object(l.d)("p",{css:D},n.bio)),Object(l.d)("div",{className:"page",css:w},Object(l.d)("h2",{css:Object(l.c)(Object.assign({},f,{marginTop:"1rem",textAlign:"center"}),"")},Object(l.d)(i.a,{fixed:h.infoImage.childImageSharp.fixed,style:{verticalAlign:"bottom",margin:"0 0.8rem"}}),"ข้อมูลพื้นฐาน"),Object(l.d)("hr",{className:""+u.a.hr}),Object(l.d)(z,n),Object(l.d)(N,n),Object(l.d)(V,n),Object(l.d)("hr",{className:""+u.a.hr}),Object(l.d)(A,n),Object(l.d)("hr",{className:""+u.a.hr}),Object(l.d)(B,n),Object(l.d)("hr",{className:""+u.a.hr}),Object(l.d)("h2",{css:Object(l.c)(Object.assign({},v),"")},"Official Website"),Object(l.d)(m.a,n)))),n.quotes?Object(l.d)("section",{css:Object(l.c)(Object.assign({},y,{paddingTop:"6.4rem",paddingBottom:"5.2rem"}),"")},Object(l.d)("div",{className:"container"},Object(l.d)("div",{css:F},Object(l.d)("div",{css:H},"“"),Object(l.d)("blockquote",null,n.quotes)),Object(l.d)("div",{css:L},Object(l.d)("div",{css:P},"⎯⎯"),Object(l.d)("div",null,Object(l.d)("div",{css:R},_),Object(l.d)("div",null,Object(l.d)(b.a,{href:n.quotes_url,css:W},"อ้างอิง")))))):null,n.is_mp&&s?Object(l.d)(p.a,{peopleVoteYaml:s,allVotelogYaml:O}):null)}}}]);
//# sourceMappingURL=79702030-1064f8a1b8ede4790935.js.map