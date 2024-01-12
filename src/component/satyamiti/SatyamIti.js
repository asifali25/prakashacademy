import React from "react";
import Image from "next/image";
import SatyamItiImg from "../../../public/satyamiti.png";
import styles from "./SatyamIti.module.css";

function SatyamIti() {
  return (
    <>
      <div className={styles.SatyamMainContainer}>
        <div className={styles.SatyamSecondContainer}>
          <div className={styles.SatyamHeaderBox}>
            <div className={styles.SatyamImgBox}>
              <Image
                className={styles.SatyamImage}
                src={SatyamItiImg}
                width={100}
                height={100}
                alt="Prakash_Academy_Satyam_ITI"
              ></Image>
            </div>
            <div className={styles.SatyamHeadertxt}>
              <h1 className={styles.SatyamHeaderHeading}>SATYAM ITI</h1>
              <p className={styles.SatyamHeaderPara}>(Fully Govt Recognized)</p>
            </div>
          </div>
          <p className={styles.Satyamabouttxt}>
            Satyam ITI coaching center is the best ITI classes in Hapur . We are
            providing all best ITI classes near by me . Our teachers are serve
            finest Electrician , Education, Fitter and much more educational
            knowledge traning.
          </p>
        </div>
      </div>
    </>
  );
}

export default SatyamIti;
