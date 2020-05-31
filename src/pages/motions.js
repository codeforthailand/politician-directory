import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FloatingCard from "../components/floatingCard"
import HiddenOnMobile from "../components/hiddenOnMobile"
import { media } from "../styles"
import ExternalLink from "../components/externalLink"
import MotionSubCatCard from "../components/motionSubCatCard"

const cssH1 = { fontSize: "4.8rem", margin: "0", color: "var(--cl-black)" }
const cssH2 = { fontSize: "3.6rem", marginBottom: "2.4rem" }
const cssH3 = { fontSize: "2.4rem", margin: "5.2rem 0 2.8rem 0" }
const cssP = { lineHeight: "1.8" }

const IndexPage = ({ data }) => {
  return (
    <Layout
      pageStyles={{
        background: "#FDFDFD",
      }}
    >
      <SEO title="Motions" />
      <div style={{ backgroundColor: "var(--cl-black)", padding: "1.6rem" }}>
        <div
          className="container-motion"
          style={{ color: "var(--cl-white)", textAlign: "center" }}
        >
          เนื่องจากข้อมูลอยู่ระหว่างการรวบรวมและบันทึก
          ส่วนที่แสดงในเว็บไซต์จึงเป็นแค่ส่วนหนึ่งจากข้อมูลทั้งหมด
          หากต้องการท่านสามารถดูข้อมูลทั้งหมดได้
          <ExternalLink
            href="https://lis.parliament.go.th/index/search_advance_detail.php?S_SYSTEM=8"
            style={{
              marginLeft: "0.5rem",
              color: "var(--cl-white)",
              textDecoration: "underline",
            }}
          >
            ที่นี่
          </ExternalLink>
        </div>
      </div>
      <section>
        <div className="container-motion">
          <div
            css={{
              color: "var(--cl-gray-2)",
              textAlign: "right",
              margin: "2rem 0 3.2rem 0",
            }}
          >
            ข้อมูลล่าสุดวันที่ 29 กุมภาพันธ์ 2562
          </div>
        </div>
      </section>
      <section>
        <FloatingCard
          style={{
            padding: "4rem",
            maxWidth: "calc(var(--container-motion-width) - 64px)",
            margin: "0 auto",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              [media(767)]: {
                justifyContent: "space-between",
              },
            }}
          >
            <h1 css={{ ...cssH1 }}>การพิจารณาญัตติตั้งคณะกรรมธิการวิสามัญ</h1>
            <HiddenOnMobile>
              <div>สภาผู้แทนราษฎรไทยชุดที่ 25</div>
            </HiddenOnMobile>
          </div>
          <div
            css={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div css={{ width: "100%", [media(767)]: { width: "32%" } }}>
              <h3 css={cssH3}>Motions</h3>
              <p css={cssP}>
                การพิจารณาญัตติทั่วไป หมายถึง เรื่อง ปัญหา หรือประเด็นที่ ส.ส.
                เสนอเข้าสู่การพิจารณาของสภาผู้แทนราษฎร ให้มีการลงมติ
                เพื่อกำหนดแนวทางการศึกษา แก้ปัญหา เป็นแนวทางในการปฏิบัติต่อไป
                เช่น การเสนอญัตติเพื่อให้สภาผู้แทนราษฎรตั้งกรรมาธิการวิสามัญ
                ศึกษาวิธีแก้ปัญหาเฉพาะเรื่อง
                เพื่อนำผลการศึกษาเสนอแนวการแก้ปัญหาต่อคณะรัฐมนตรี เป็นต้น
                ซึ่งกระบวนการพิจารณาญัตติทั่วไปจะมีรายละเอียดที่แตกต่างกับกระบวนการพิจารณาร่างกฎหมาย
              </p>
              <p css={cssP}>
                กรรมาธิการวิสามัญที่ตั้งขึ้น ประกอบด้วย ส.ส.
                และบุคคลภายนอกตาโควต้าของพรรคการเมือง
                ซึ่งจะมีหน้าที่แตกต่างกับกรรมาธิการสามัญทั้ง 35
                คณะของสภาผู้แทนราษฎร
              </p>
              <h3 css={cssH3}>Official Source</h3>
              <ExternalLink
                css={{ color: "var(--cl-black)" }}
                href="https://lis.parliament.go.th"
              >
                lis.parliament.go.th
              </ExternalLink>
            </div>
            <HiddenOnMobile style={{ width: "32%" }}>
              <div>
                <h3 css={cssH3}>ญัตติทั้งหมด</h3>
                <h3 css={cssH3}>ยังไม่ลงญัตติ</h3>
              </div>
            </HiddenOnMobile>
            <HiddenOnMobile style={{ width: "32%" }}>
              <div>
                <h3 css={cssH3}>สัดส่วนประเด็น</h3>
                <h3 css={cssH3}>ลงมติแล้ว</h3>
              </div>
            </HiddenOnMobile>
          </div>
        </FloatingCard>
      </section>
      <section style={{ marginTop: "8rem" }}>
        <div className="container-motion">
          <div>
            <h2 css={cssH2}>ประเด็นญัตติ</h2>
            <p>
              คลิกเพื่อดูญัตติทั้งหมดในประเด็นต่างๆ
              ที่นำเสนอโดยคณะกรรมธิการสามัญ
            </p>
          </div>
          <div css={{ marginBottom: "8rem" }}>
            <h3 style={cssH3}>สังคม</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <MotionSubCatCard
                slug={"/motions/category/1"}
                id={"1"}
                title={"วิทยาศาสตร์ เทคโนโลยี ดิจิทัล วิจัย และนวัตกรรม"}
                count={12}
                css={{
                  margin: "0 0 2rem 0",
                  width: "100%",
                  [media(767)]: {
                    width: "calc((100% - 4rem) / 3)",
                    margin: "0 2rem 2rem 0",
                    "&:nth-of-type(2n+3)": {
                      margin: "0 0 2rem 0",
                    },
                  },
                }}
              ></MotionSubCatCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage