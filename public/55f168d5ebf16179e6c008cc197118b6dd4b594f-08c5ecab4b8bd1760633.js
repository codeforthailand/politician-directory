(self.webpackChunkpolitician_directory=self.webpackChunkpolitician_directory||[]).push([[798],{5255:function(t,e,n){"use strict";var i=n(4382),r=(n(7294),n(2580)),s=n.n(r),l=n(5444),o=n(5381);var a={name:"16uqoo3",styles:":hover{color:var(--cl-black);}"},p={name:"1ss6s38",styles:"font-size:4.8rem;color:var(--cl-black);text-align:left;margin-top:2rem"};e.Z=function(t){var e=t.className,n=t.title,r=t.description_th,g=t.approve,c=t.disprove,d=t.abstained,m=t.absent,u=t.vote_date,v=t.slug,b=t.isCompact,y=void 0!==b&&b,Z=t.passed,h=g+c+d+m,f=Z?"var(--cl-vote-yes)":"var(--cl-vote-no)",x=100*g/h+"%",k=100*c/h+"%",w=100*d/h+"%",C=100*m/h+"%";return(0,i.tZ)("div",{className:e,css:(0,i.iv)({display:"flex",flexDirection:"column",width:300,minWidth:300,height:y?370:450,minHeight:y?370:450,padding:"2rem",border:"2px solid var(--cl-black)",borderRadius:"10px",backgroundColor:"var(--cl-white)",color:"var(--cl-black)",position:"relative"},"","")},(0,i.tZ)("div",{style:{width:"100%",height:"1.5rem",border:"1px solid var(--cl-black)",display:"flex",flexWrap:"nowrap"}},(0,i.tZ)("div",{style:{width:x,height:"100%",backgroundColor:"var(--cl-vote-yes)",borderRight:"1px solid var(--cl-black)",boxSizing:"unset"}}),(0,i.tZ)("div",{style:{width:k,height:"100%",backgroundColor:"var(--cl-vote-no)",borderRight:"1px solid var(--cl-black)",boxSizing:"unset"}}),(0,i.tZ)("div",{style:{width:w,height:"100%",backgroundColor:"var(--cl-vote-abstained)",borderRight:"1px solid var(--cl-black)",boxSizing:"unset"}}),(0,i.tZ)("div",{style:{width:C,height:"100%",backgroundColor:"var(--cl-white)",boxSizing:"unset"}})),(0,i.tZ)("h4",{css:p},h>0?Math.round(g/h*100):0,"% เห็นด้วย"),(0,i.tZ)(l.Link,{to:v,css:a},(0,i.tZ)("h5",{style:{fontSize:"2.4rem",paddingTop:"1rem",lineHeight:"3rem"}},n)),y?null:(0,i.tZ)("p",{style:{paddingTop:"1rem",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}},r),(0,i.tZ)("div",{style:{position:"absolute",bottom:"1rem"}},(0,i.tZ)("div",{style:{display:"inline"}},(0,i.tZ)("div",{style:{borderRadius:"50%",backgroundColor:f,width:"15px",height:"15px",display:"inline-block"}})," ",(0,i.tZ)("div",{style:{fontFamily:"var(--ff-text)",fontSize:"3rem",fontWeight:"bold",color:f,display:"inline-block"}},Z?"ผ่าน":"ไม่ผ่าน")),(0,i.tZ)("div",{style:{padding:"1rem 0",fontSize:"14px"}},(0,i.tZ)(o.Z,t)),(0,i.tZ)("h6",{style:{fontSize:"2rem"}},s()(u).format("D.M.YYYY"))))}},5381:function(t,e,n){"use strict";var i,r=n(7294),s=n(122),l=n(4382),o=function(t){var e,n=t.missing,i=t.type;return(e={display:n?"flex":"unset",flexWrap:n?"wrap":"unset",justifyContent:n?"center":"unset",marginRight:"0"})[(0,s.B)(767)]={justifyContent:n?"group"===i||"popup"!==i?"flex-start":"center":"unset",transform:n&&"popup"!==i?"translateY(1.5px)":"none",marginRight:n?"2rem":"0"},e},a=function(t){var e,n=t.missing,i=t.type;return(e={width:n&&"popup"!==i&&"group"===i?3:10,height:10,backgroundColor:"var(--cl-white)",border:"1px solid var(--cl-black)",boxSizing:"border-box",display:"inline-block"})[(0,s.B)(767)]={width:n&&"popup"!==i?"group"===i?3:15:8,height:n&&"popup"!==i?"group"===i?10:15:8},e},p=function(t){var e,n=t.missing,i=t.type;return(e={marginRight:n?"0.7rem":"1rem",display:n?"flex":"unset",alignItems:n?"center":"none",fontSize:n?"1rem":"unset",marginTop:"0.6rem"})[(0,s.B)(767)]={fontSize:n?"group"===i?"1rem":"1.4rem":"unset",marginTop:"0"},e},g=function(t){var e,n=t.missing,i=t.type;return(e={fontSize:n?"1rem":"unset",marginRight:n?"1rem":"unset",display:n?"popup"===i?"none":"unset":"none",marginTop:"0.6rem"})[(0,s.B)(767)]={fontSize:n?"1rem":"unset",display:"none",flex:"none",marginTop:"0"},e},c=((i={margin:"0 0.5rem"})[(0,s.B)(767)]={margin:"0 1rem"},i);e.Z=function(t){var e=t.approve,n=t.disprove,i=t.abstained,s=t.absent,d=t.missing,m=t.type;return(0,l.tZ)("div",{css:o({missing:d,type:m})},(0,l.tZ)("div",{css:g({missing:d,type:m})},"โดยเฉลี่ย"),(0,l.tZ)("span",{css:p({missing:d,type:m})},(0,l.tZ)("div",{css:a({missing:d,type:m}),style:{backgroundColor:"var(--cl-vote-yes)",border:"1px solid var(--cl-vote-yes)"}})," ",null!=d?"group"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 0.3rem"}})," ",e,"%"):"popup"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 1rem"}},"เห็นด้วย")," ",e):(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{css:c},"เห็นด้วย")," ",e,"%"):"เห็นด้วย "+e),(0,l.tZ)("span",{css:p({missing:d,type:m})},(0,l.tZ)("div",{css:a({missing:d,type:m}),style:{backgroundColor:"var(--cl-vote-no)",border:"1px solid var(--cl-vote-no)"}})," ",null!=d?"group"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 0.3rem"}})," ",n,"%"):"popup"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 1rem"}},"ไม่เห็นด้วย")," ",n):(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{css:c},"ไม่เห็นด้วย")," ",n,"%"):"ไม่เห็นด้วย "+n),(0,l.tZ)("span",{css:p({missing:d,type:m})},(0,l.tZ)("div",{css:a({missing:d,type:m}),style:{backgroundColor:d?"var(--cl-senate-vote-abstained)":"var(--cl-vote-abstained)",border:d?"1px solid var(--cl-senate-vote-abstained)":"1px solid var(--cl-vote-abstained)"}})," ",null!=d?"group"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 0.3rem"}})," ",i,"%"):"popup"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 1rem"}},"งดออกเสียง")," ",i):(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{css:c},"งดออกเสียง")," ",i,"%"):"งดออกเสียง "+i),(0,l.tZ)("span",{css:p({missing:d,type:m})},(0,l.tZ)("div",{css:a({missing:d,type:m}),style:{backgroundColor:d?"var(--cl-senate-vote-absent)":"var(--cl-missing)",border:d?"1px solid var(--cl-senate-vote-absent)":"1px solid var(--cl-black)"}})," ",null!=d?"group"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 0.3rem"}})," ",s,"%"):"popup"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 1rem"}},"ไม่ลงมติ")," ",s):(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{css:c},"ไม่ลงมติ")," ",s,"%"):"ไม่ลงคะแนน "+s),null!=d&&(0,l.tZ)("span",{css:p({missing:d,type:m})},(0,l.tZ)("div",{css:a({missing:d,type:m}),style:{backgroundColor:"var(--cl-senate-vote-missing)",border:"1px solid var(--cl-senate-vote-missing)"}})," ","group"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 0.3rem"}})," ",d,"%"):"popup"===m?(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{style:{margin:"0 1rem"}},"ขาด")," ",d):(0,l.tZ)(r.Fragment,null,(0,l.tZ)("b",{css:c},"ขาด")," ",d,"%")))}}}]);
//# sourceMappingURL=55f168d5ebf16179e6c008cc197118b6dd4b594f-08c5ecab4b8bd1760633.js.map