import React from "react";
import Image from "next/image";
import styles from "./Coaching.module.css";
import SchoolTeacher from "../../../public/schoolteacher.png";
import Graduation from "../../../public/graduation.png";
import Professional from "../../../public/professional.png";
import DotGroup from "../../../public/dotgroup.svg";

function Coaching() {
  return (
    <>
      <div className={styles.coachingContainer}>
        <Image
          className={styles.coachingdots}
          src={DotGroup}
          width={200}
          height={200}
          alt="DotGroup"
        ></Image>
        <div className={styles.coachinghead}>
          <p className={styles.coachingHeadPara}>COACHING</p>
          <h1 className={styles.coachingHeadHeading}>
            <span style={{ color: "#9cc4fc" }}>Progressive</span>{" "}
            <span style={{ color: "#005ee1", fontWeight: "bold" }}>
              Learning
            </span>
          </h1>
          <p className={styles.coachingHeadParaTwo}>
            Empower Your Mind Where Progress Meets Learning
          </p>
        </div>
        <div className={styles.coachingBoxContainer}>
          <div className={styles.coachingBoxOne}>
            <div className={styles.boxInsideOne}>
              <div className={styles.InsideOne}>
                <h1 className={styles.boxInsideOneHeading}>School</h1>
                <div className={styles.boxInsideOneImgBox}>
                  <Image
                    className={styles.boxInsideOneImg}
                    src={SchoolTeacher}
                    width={500}
                    height={500}
                    priority={true}
                    alt="School_Teacher"
                  ></Image>
                </div>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    color: "#4d4d4d",
                    marginBottom: "10px",
                  }}
                >
                  1st to 10th
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "4d4d4d",
                    marginBottom: "20px",
                  }}
                >
                  English | Math | Science | Social Science
                </p>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    color: "#4d4d4d",
                    marginBottom: "10px",
                  }}
                >
                  11th to 12th
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "4d4d4d",
                    marginBottom: "20px",
                  }}
                >
                  English | Math | Accounts | Economics
                </p>
              </div>
            </div>
            <div className={styles.coachingBtnBox}>
              <button className={styles.coachingBtn}>Know More &#10230;</button>
            </div>
          </div>
          <div className={styles.coachingBoxTwo}>
            <div className={styles.boxInsideTwo}>
              <div className={styles.IndiseTwo}>
                <h1
                  className={styles.boxInsideTwoHeading}
                  style={{ color: "white" }}
                >
                  Graduation
                </h1>
                <div className={styles.boxInsideTwoImgBox}>
                  <Image
                    className={styles.boxInsideTwoImg}
                    src={Graduation}
                    width={200}
                    height={200}
                    alt="School_Teacher"
                  ></Image>
                </div>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  BA/B.Com/BBA
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#fab452",
                    marginBottom: "20px",
                  }}
                >
                  English | Math | Accounts | Economics
                </p>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  MA/M.Com
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#fab452",
                    marginBottom: "20px",
                  }}
                >
                  English | Math | Accounts | Economics
                </p>
              </div>
            </div>
            <div className={styles.coachingBtnBox}>
              <button className={styles.coachingBtn}>Know More &#10230;</button>
            </div>
          </div>
          <div className={styles.coachingBoxThree}>
            <div className={styles.boxInsideThree}>
              <div className={styles.InsideThree}>
                <h1 className={styles.boxInsideThreeHeading}>Professional</h1>
                <div className={styles.boxInsideThreeImgBox}>
                  <Image
                    className={styles.boxInsideThreeImg}
                    src={Professional}
                    width={200}
                    height={200}
                    alt="School_Teacher"
                  ></Image>
                </div>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "1.9px",
                    lineHeight: "1.8",
                    color: "#4d4d4d",
                    marginBottom: "10px",
                  }}
                >
                  D.El.Ed | B.ed | BA LLB | LLB | D Pharma | B Pharma | Phd |
                  etc.
                </h1>
              </div>
            </div>
            <div className={styles.coachingBtnBox}>
              <button className={styles.coachingBtn}>Know More &#10230;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coaching;
