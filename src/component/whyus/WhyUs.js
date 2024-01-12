import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./WhyUs.module.css";
import dotGroup from "../../../public/dotgroup.svg";
import Expertise from "../../../public/whyus/star.svg";
import customize from "../../../public/whyus/customize.svg";
import improvment from "../../../public/whyus/improvment.svg";
import proven from "../../../public/whyus/proven.svg";
import support from "../../../public/whyus/support.svg";
import value from "../../../public/whyus/value.svg";

function WhyUs() {
  return (
    <>
      <div className={styles.whyUsContainer}>
        <Image
          className={styles.whyUsDotGroup}
          src={dotGroup}
          width={200}
          height={200}
          alt="Dot-Group"
        ></Image>
        <div className={styles.whyUsHeadBox}>
          <p className={styles.whyUsHeadBoxPara}>ABOUT US</p>
          <h1 className={styles.WhyUsHeadBoxHeading}>
            <span style={{ color: "#9cc4fc" }}>Why</span>{" "}
            <span style={{ color: "#005ee1", fontWeight: "bold" }}>Us</span>
          </h1>
          <p className={styles.whyUsHeadBoxPara}>
            Inspiring Minds, Building Futures <b>Prakash Academy</b> Leads the
            Way.
          </p>
        </div>
        <div className={styles.whyUsExplContainer}>
          <div className={styles.whyUsExplBox}>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsImgBox}>
                <Image
                  className={styles.whyUsImg}
                  src={Expertise}
                  width={200}
                  height={200}
                  alt="Expertise"
                ></Image>
              </div>
              <div className={styles.whyUsTxtBox}>
                <h1 className={styles.whyUsTxtBoxHeading}>Expertise</h1>
                <p className={styles.whyUsTxtBoxPara}>
                  Expertise in Admission Guidance and Provide true Info about
                  the University admission procedure{" "}
                </p>
              </div>
            </div>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsImgBox}>
                <Image
                  className={styles.whyUsImg}
                  src={customize}
                  width={200}
                  height={200}
                  alt="Expertise"
                ></Image>
              </div>
              <div className={styles.whyUsTxtBox}>
                <h1 className={styles.whyUsTxtBoxHeading}>
                  Customized<br></br> Learning Plans
                </h1>
                <p className={styles.whyUsTxtBoxPara}>
                  Learn as per your way make study easy
                </p>
              </div>
            </div>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsImgBox}>
                <Image
                  className={styles.whyUsImg}
                  src={proven}
                  width={200}
                  height={200}
                  alt="Expertise"
                ></Image>
              </div>
              <div className={styles.whyUsTxtBox}>
                <h1 className={styles.whyUsTxtBoxHeading}>
                  Proven <br></br>Track Record
                </h1>
                <p className={styles.whyUsTxtBoxPara}>
                  Providing the best services since 1995
                </p>
              </div>
            </div>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsImgBox}>
                <Image
                  className={styles.whyUsImg}
                  src={support}
                  width={200}
                  height={200}
                  alt="Expertise"
                ></Image>
              </div>
              <div className={styles.whyUsTxtBox}>
                <h1 className={styles.whyUsTxtBoxHeading}>
                  Support<br></br> System
                </h1>
                <p className={styles.whyUsTxtBoxPara}>
                  Provide the full support to the students not only in their
                  studies but also in the carrier guidance
                </p>
              </div>
            </div>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsImgBox}>
                <Image
                  className={styles.whyUsImg}
                  src={improvment}
                  width={200}
                  height={200}
                  alt="Expertise"
                ></Image>
              </div>
              <div className={styles.whyUsTxtBox}>
                <h1 className={styles.whyUsTxtBoxHeading}>
                  Continuous<br></br> Improvement
                </h1>
                <p className={styles.whyUsTxtBoxPara}>
                  Provide the latest update to the student about the new
                  learning
                </p>
              </div>
            </div>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsImgBox}>
                <Image
                  className={styles.whyUsImg}
                  src={value}
                  width={200}
                  height={200}
                  alt="Expertise"
                ></Image>
              </div>
              <div className={styles.whyUsTxtBox}>
                <h1 className={styles.whyUsTxtBoxHeading}>
                  Affordability<br></br> and Value
                </h1>
                <p className={styles.whyUsTxtBoxPara}>
                  Guide the student as per their affordability and choose the
                  stream wisely
                </p>
              </div>
            </div>
          </div>
          <div className={styles.whyUsBtnBox}>
            <Link className={styles.whyUsLink} href="/aboutus">
              <button className={styles.whyUsBtn}>Know More &#10230;</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
