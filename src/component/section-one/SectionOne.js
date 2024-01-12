import React from "react";
import styles from "./SectionOne.module.css";
import getBest from "../../../public/best_coaching.svg";
import Image from "next/image";
import student from "../../../public/query.png";
import student1 from "../../../public/student1.png";
import student2 from "../../../public/student2.png";
import student3 from "../../../public/student3.png";
import Polygon from "../../../public/Polygon.svg";
import Ellipse from "../../../public/Ellipse.svg";
import Star from "../../../public/Star.svg";
import hlafEllipse from "../../../public/half_Ellipse.svg";
import Link from "next/link";

function SectionOne() {
  return (
    <>
      <section className={styles.sectionOne}>
        <div className={styles.SectionOneBox}>
          <div className={styles.lineone}></div>
          <div className={styles.linetwo}></div>
          <div className={styles.coachingboxOne}>
            <div className={styles.coachOneImgBox}>
              <Image
                className={styles.coachingImg}
                src={getBest}
                height={200}
                width={200}
                alt="Best_Coaching"
              ></Image>
            </div>
            <h1 className={styles.sectionHeading}>
              Coaching <br></br>{" "}
              <span style={{ fontWeight: "bold" }}>Excellence</span> <br></br>
              Personalized <br></br>{" "}
              <span style={{ fontWeight: "bold" }}>Guidance</span>
            </h1>
            <p className={styles.sectionPara}>
              Decided the Value? If you want to continue keep your study
              success, Join the Prakash Academy.
            </p>
            <div className={styles.coachinglinkbox}>
              <div className={styles.coachinglinkCircle}></div>
              <Link className={styles.coachingLink} href="/contact">
                <p className={styles.coachinglink}>Start your Journey &rarr;</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.sectionTwoBox}>
          <div className={styles.sectionTwoLastLayer}>
            <Image
              className={styles.smallPolygon}
              src={Polygon}
              width={200}
              height={200}
              alt="Polygon"
            ></Image>
            <Image
              className={styles.smallEllipse}
              src={Ellipse}
              width={200}
              height={200}
              alt="Ellipse"
            ></Image>
            <Image
              className={styles.smallStar}
              src={Star}
              width={200}
              height={200}
              alt="Ellipse"
            ></Image>
            <Image
              className={styles.smallStar}
              src={Star}
              width={200}
              height={200}
              alt="Ellipse"
            ></Image>
            <Image
              className={styles.smallhalfEllipse}
              src={hlafEllipse}
              width={200}
              height={200}
              alt="Half_Ellipse"
            ></Image>
            <div className={styles.firstPicBox}>
              <Image
                className={styles.firstimg}
                src={student1}
                width={500}
                height={500}
                alt="student"
              ></Image>
            </div>
            <div className={styles.twoPicBox}>
              <Image
                className={styles.twoimg}
                src={student}
                width={500}
                height={500}
                alt="student"
              ></Image>
            </div>
            <div className={styles.threePicBox}>
              <div className={styles.halfbox}></div>
              <Image
                className={styles.threeimg}
                src={student2}
                width={500}
                height={500}
                alt="student"
              ></Image>
            </div>
            <div className={styles.fourPicBox}>
              <div className={styles.halfellips}></div>
              <Image
                className={styles.fourimg}
                src={student3}
                width={500}
                height={500}
                alt="student"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionOne;
