import React from "react";
import Image from "next/image";
import styles from "./AdmissionGuidance.module.css";
import BirImg from "../../../public/birimg.png";
import SatyamLaw from "../../../public/satyamlaw.png";
import SatyamIti from "../../../public/satyamiti.png";
import Tide from "../../../public/tide.svg";
import Dotgroup from "../../../public/dotgroup.svg";
import Link from "next/link";

function AdmissionGuidance() {
  return (
    <>
      <div className={styles.admissionMainContainer}>
        <div className={styles.dotgroup}>
          <Image
            className={styles.dotgroupimg}
            src={Dotgroup}
            width={200}
            height={200}
            alt="Dot_Group"
          ></Image>
        </div>
        <div className={styles.admissioncontainer}>
          <Image
            className={styles.tide}
            src={Tide}
            width={200}
            height={200}
            alt="Tide"
          ></Image>

          <div className={styles.headbox}>
            <p className={styles.smalhead}>ADMISSION GUIDANCE</p>
            <h1 className={styles.heading}>
              <span style={{ color: "#9cc4fc", fontWeight: "lighter" }}>
                Pursue your
              </span>{" "}
              <br></br>
              <span style={{ color: "#005ee1" }}>Passion</span>
            </h1>
          </div>
          <div className={styles.containerbox}>
            <div className={styles.birbox}>
              <div className={styles.birfirst}>
                <div className={styles.birimgbox}>
                  <Image
                    className={styles.birimg}
                    src={BirImg}
                    width={200}
                    height={200}
                    alt="Bir_Tikendrajit University"
                  ></Image>
                </div>
                <div className={styles.birtxt}>
                  <h1>
                    BIR TIKENDRAJIT <br></br> UNIVERSITY
                  </h1>
                  <p>(Recognized by UGC, RCI, BCI, PCI)</p>
                </div>
              </div>
              <p className={styles.bircourse}>COURSE OFFERED</p>
              <p className={styles.bripara}>
                Pre University Secondary/ Sr. Secondary | B.A | BSc | B.Com |
                BBA | BJMC | BBM | M.A | M.Sc | M.Com | MBA | B.Tech | D Pharma
                | B Pharma | Special B.Ed | LLB 5/3 Years | M.Tech | LLM | MCA |
                BSW | GIS | MLTs | DDT | DDA | DEHM | PG DAA | B.P.Ed | DCS |
                CECG | DMLT | DX-Ray | DA | DRIT| Ph.D | etc.{" "}
              </p>
              <Link href="/biruniversity">
                <button className={styles.coursbtn}>Learn More &#10230;</button>
              </Link>
            </div>
            <div className={styles.secondcontainer}>
              <div className={styles.satyamcontainer}>
                <div className={styles.satyambox}>
                  <div className={styles.satyamhead}>
                    <div className={styles.satyamimgbox}>
                      <Image
                        className={styles.satyamimg}
                        src={SatyamLaw}
                        width={200}
                        height={200}
                        alt="Sayam_Law_College"
                      ></Image>
                    </div>
                    <div className={styles.satyamheadtxt}>
                      <h1 className={styles.sathead}>
                        SATYAM LAW <br></br> COLLEGE
                      </h1>
                      <p className={styles.satpara}>
                        (Recognized CCS University)
                      </p>
                    </div>
                  </div>
                  <p className={styles.satyamcourse}>COURSE OFFERED</p>
                  <p className={styles.satyampara}>LLB 5/3 Years</p>
                  <Link href="/satyamlaw">
                    <button className={styles.satyamsbtn}>
                      Learn More &#10230;
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.satyamcontainerTwo}>
                <div className={styles.satyaitimbox}>
                  <div className={styles.satyitiamhead}>
                    <div className={styles.satyamimgbox}>
                      <Image
                        className={styles.satyamimg}
                        src={SatyamIti}
                        width={200}
                        height={200}
                        alt="Sayam_Law_College"
                      ></Image>
                    </div>
                    <div className={styles.satyamheadtxt}>
                      <h1 className={styles.satitihead}>
                        SATYAM <br></br> ITI
                      </h1>
                      <p className={styles.satitipara}>
                        (Fully Govt Recognized)
                      </p>
                    </div>
                  </div>
                  <p className={styles.satyamiticourse}>COURSE OFFERED</p>
                  <p className={styles.satyamitiparatwo}>LLB 5/3 Years</p>
                  <Link href="/satyami">
                    <button className={styles.satyamsbtn}>
                      Learn More &#10230;
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmissionGuidance;
