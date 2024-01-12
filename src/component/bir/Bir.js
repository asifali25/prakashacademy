import React from "react";
import Image from "next/image";
import styles from "./Bir.module.css";
import BirImg from "../../../public/birimg.png";
import AOIU from "../../../public/birapprove/Association_of_Indian_Universities_Logo.png";
import BCI from "../../../public/birapprove/BCI-LOGO.png";
import GOM from "../../../public/birapprove/GOM-Logo.png";
import NPC from "../../../public/birapprove/nepal-pharmacy-council.png";
import NPC1 from "../../../public/birapprove/nepal-pharmacy-council1.png";
import PCI from "../../../public/birapprove/PCI-LOGO.png";
import RCI from "../../../public/birapprove/RCI-logo.png";
import THSC from "../../../public/birapprove/THSC.png";

function Bir() {
  return (
    <>
      <div className={styles.birMainContainer}>
        <div className={styles.birInsideContainer}>
          <div className={styles.birheadbox}>
            <div className={styles.imgbox}>
              <Image
                className={styles.birImage}
                src={BirImg}
                width={100}
                height={100}
                alt="Prakash_Academy_Bir_Tikendrajit_University"
              ></Image>
            </div>
            <div className={styles.birtxtbox}>
              <h1 className={styles.birtxtHeading}>
                BIR TIKENDRAJIT UNIVERSITY
              </h1>
              <p className={styles.birtxtPara}>
                Complete Learning Management<br></br>Solution Process
              </p>
            </div>
          </div>
          <div className={styles.birAboutTxt}>
            <p>
              Bir Tikendrajit University, Manipur is established by the Manipur
              Government as an Act No. 9 of 2020 and under us2{`(f)`} of UGC act
              1956. <br></br>
              <br></br>
              With a view to keep pace with the rapid development in all spheres
              of Knowledge in the world and the country, it is essential to
              create world level modern rsearch and study facilities in the
              State to provide state of the art educational facilities to the
              your at their doorstep so that they can make out the human
              resources compatible with liberalised economics and social order
              of the World.<br></br>
              <br></br>
              And rapid advancement of knowledge and changing requirements of
              human resources make it essential that a resourceful, quick and
              responsive system of educational research and development be
              created which can work with entrepreneurial zeal under an
              essential regulatory set up and such a system canbe created by
              allowing private institutions engaged in higher education having
              sufficient resources and experiences to establish Bir Tikendrajit
              University. <br></br>
              <br></br>
              We bring differentiation our students through blended curriculum,
              emphasizing industry connect through our Corporate Resource Center
              (CRC). We believe in overall grooming of our students through
              enhanced practical and industry exposure. Some of our unique
              grooming advantages are as below COURSES, ADMISSIONS &
              SCHOLARSHIPS Our passion is listening to sutdent issues/ideas,
              thinking through solutions and coming up with creative solution.
              Most importantly, we keep it simple.
            </p>

            <a
              href="https://www.birtikendrajituniversity.ac.in/"
              target="_blank"
            >
              <button className={styles.birBtn}>
                Click to University Website
              </button>
            </a>
          </div>
          <h1 className={styles.ApprovedHeading}>Approved By</h1>
          <div className={styles.birApproved}>
            <div className={styles.birApprovedBox}>
              <div className={styles.birApproveImgBox}>
                <Image
                  className={styles.birApproveImage}
                  src={AOIU}
                  width={100}
                  height={100}
                  alt="Association_of_Indian_Universities_Logo"
                ></Image>
              </div>
              <div className={styles.birApprovtxtBox}>
                <p className={styles.birApprovtxtPara}>
                  Association of Indian Universities
                </p>
              </div>
            </div>
            <div className={styles.birApprovedBox}>
              <div className={styles.birApproveImgBox}>
                <Image
                  className={styles.birApproveImage}
                  src={BCI}
                  width={100}
                  height={100}
                  alt="Association_of_Indian_Universities_Logo"
                ></Image>
              </div>
              <div className={styles.birApprovtxtBox}>
                <p className={styles.birApprovtxtPara}>Bar Council Of India</p>
              </div>
            </div>
            <div className={styles.birApprovedBox}>
              <div className={styles.birApproveImgBox}>
                <Image
                  className={styles.birApproveImage}
                  src={GOM}
                  width={100}
                  height={100}
                  alt="Association_of_Indian_Universities_Logo"
                ></Image>
              </div>
              <div className={styles.birApprovtxtBox}>
                <p className={styles.birApprovtxtPara}>Government of Manipur</p>
              </div>
            </div>
            <div className={styles.birApprovedBox}>
              <div className={styles.birApproveImgBox}>
                <Image
                  className={styles.birApproveImage}
                  src={NPC}
                  width={100}
                  height={100}
                  alt="Association_of_Indian_Universities_Logo"
                ></Image>
              </div>
              <div className={styles.birApprovtxtBox}>
                <p className={styles.birApprovtxtPara}>
                  Nepal Health Professional Council
                </p>
              </div>
            </div>
            <div className={styles.birApprovedBox}>
              <div className={styles.birApproveImgBox}>
                <Image
                  className={styles.birApproveImage}
                  src={NPC1}
                  width={100}
                  height={100}
                  alt="Association_of_Indian_Universities_Logo"
                ></Image>
              </div>
              <div className={styles.birApprovtxtBox}>
                <p className={styles.birApprovtxtPara}>
                  Nepal Pharmacy Council
                </p>
              </div>
            </div>
            <div className={styles.birApprovedBox}>
              <div className={styles.birApproveImgBox}>
                <Image
                  className={styles.birApproveImage}
                  src={PCI}
                  width={100}
                  height={100}
                  alt="Association_of_Indian_Universities_Logo"
                ></Image>
              </div>
              <div className={styles.birApprovtxtBox}>
                <p className={styles.birApprovtxtPara}>
                  Pharmacy Council of India
                </p>
              </div>
            </div>
            <div className={styles.birApprovedBox}>
              <div className={styles.birApproveImgBox}>
                <Image
                  className={styles.birApproveImage}
                  src={RCI}
                  width={100}
                  height={100}
                  alt="Association_of_Indian_Universities_Logo"
                ></Image>
              </div>
              <div className={styles.birApprovtxtBox}>
                <p className={styles.birApprovtxtPara}>
                  Rehabilitation Council of India
                </p>
              </div>
            </div>
            <div className={styles.birApprovedBox}>
              <div className={styles.birApproveImgBox}>
                <Image
                  className={styles.birApproveImage}
                  src={THSC}
                  width={100}
                  height={100}
                  alt="Association_of_Indian_Universities_Logo"
                ></Image>
              </div>
              <div className={styles.birApprovtxtBox}>
                <p className={styles.birApprovtxtPara}>
                  Tourism and Hospitality Skill Council
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bir;
