import React from "react";
import Image from "next/image";
import styles from "./Service.module.css";
import iconCoaching from "../../../public/icon_coaching.svg";
import iconadmission from "../../../public/icon_admission.svg";
import iconCarrer from "../../../public/icon_career.svg";

function Service() {
  return (
    <>
      <div className={styles.services}>
        <div className={styles.servicesBox}>
          <div className={styles.coachingBox}>
            <div className={styles.imgbox}>
              <Image
                className={styles.img}
                src={iconCoaching}
                height={100}
                width={100}
                alt="Icon_Coaching"
              ></Image>
            </div>
            <p className={styles.coachingPara}>
              Coaching<br></br> <b>Classes</b>
            </p>
          </div>
          <div className={styles.coachingBox}>
            <div className={styles.imgbox}>
              <Image
                className={styles.img}
                src={iconadmission}
                height={100}
                width={100}
                alt="Icon_Coaching"
              ></Image>
            </div>
            <p className={styles.coachingPara}>
              Admission<br></br> <b>Guidance</b>
            </p>
          </div>
          <div className={styles.coachingBox}>
            <div className={styles.imgbox}>
              <Image
                className={styles.img}
                src={iconCarrer}
                height={100}
                width={100}
                alt="Icon_Coaching"
              ></Image>
            </div>
            <p className={styles.coachingPara}>
              Career<br></br> <b>Guidance</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
