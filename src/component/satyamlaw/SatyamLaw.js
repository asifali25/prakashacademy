import React from "react";
import Image from "next/image";
import styles from "./SatyamLaw.module.css";
import SatyamImg from "../../../public/satyamlaw.png";

function SatyamLaw() {
  return (
    <>
      <div className={styles.satyamMainContainer}>
        <div className={styles.satyamInnerContainer}>
          <div className={styles.satyamHeadBox}>
            <div className={styles.satyamImgBox}>
              <Image
                className={styles.satyamImage}
                src={SatyamImg}
                width={100}
                height={100}
                alt="Prakash_Academy_Satyam_Law_College"
              ></Image>
            </div>
            <div className={styles.satyamHeadTxt}>
              <h1 className={styles.satyamHeadTxtHeading}>
                SATYAM LAW COLLEGE
              </h1>
              <p className={styles.satyamHeadTxtPara}>
                Recognized CCS University
              </p>
            </div>
          </div>
          <div className={styles.satyamParaBox}>
            <p className={styles.satyamPara}>
              Satyam Law College, Hapur is a very popular college in the state
              of Uttar Pradesh. Satyam Law College, Hapur was established in
              2017. It is one of the leading college in Law. It is located in
              Hapur, Uttar Pradesh. Satyam Law College, Hapur is a Private
              institution. It is governed by BCI. 3 courses are taught in this
              institution. It provides UG course only. Under the Law, there are
              a total of 3 courses. The Under Graduate category has 3 courses
              which are LL.B., B.A. LL.B. (Integrated) and B.Com. LL.B.
              (Integrated).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SatyamLaw;
