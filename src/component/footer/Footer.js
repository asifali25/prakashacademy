"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import facebook from "../../../public/social/facebook.svg";
import insta from "../../../public/social/insta.svg";
import linkedin from "../../../public/social/linkedin.svg";
import twitter from "../../../public/social/twitter.svg";
import Phone from "../../../public/social/mobile.svg";
import mail from "../../../public/social/mail.svg";
import location from "../../../public/social/location.svg";
import LogoWhite from "../../../public/Logo_white.svg";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerInside}>
          <div className={styles.footerLogoBox}>
            <div className={styles.footerLogo}>
              <Image
                className={styles.footerLogoImg}
                src={LogoWhite}
                width={200}
                height={200}
                alt="Prakash_Academy_Logo"
              ></Image>
            </div>
            <p className={styles.footerFollowtxt}>FOLLOW US</p>
            <div className={styles.socialLogo}>
              <Image
                className={styles.logo}
                src={facebook}
                width={100}
                height={100}
                alt="FaceBook"
              ></Image>
              <Image
                className={styles.logo}
                src={insta}
                width={200}
                height={200}
                alt="Instagram"
              ></Image>
              <Image
                className={styles.logo}
                src={linkedin}
                width={200}
                height={200}
                alt="Linkedin"
              ></Image>
              <Image
                className={styles.logo}
                src={twitter}
                width={200}
                height={200}
                alt="Twitter"
              ></Image>
            </div>
          </div>
          <div className={styles.footerLinkPagesContainer}>
            <div className={styles.footerHome}>
              <p>
                <Link href="/" className={styles.footerLink}>
                  Home
                </Link>
              </p>
              <p>
                <Link href="/aboutus" className={styles.footerLink}>
                  About Us
                </Link>
              </p>
              <p>
                <Link href="/admissionguide" className={styles.footerLink}>
                  Admission Guide
                </Link>
              </p>
              <p>
                {" "}
                <Link href="/contact" className={styles.footerLink}>
                  Contact us
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.footerContact}>
            <div className={styles.footerContactBox}>
              <div className={styles.footerContactIconBox}>
                <Image
                  className={styles.footerContactIcon}
                  src={Phone}
                  width={100}
                  height={100}
                  alt="Phone-Icon"
                ></Image>
              </div>
              <p className={styles.footerContactTxt}>+91 8920085041</p>
            </div>
            <div className={styles.footerContactBox}>
              <div className={styles.footerContactIconBox}>
                <Image
                  className={styles.footerContactIcon}
                  src={mail}
                  width={100}
                  height={100}
                  alt="Phone-Icon"
                ></Image>
              </div>
              <p className={styles.footerContactTxt}>
                prakashinstitute1@gmail.com
              </p>
            </div>
            <div className={styles.footerContactBox}>
              <div className={styles.footerContactIconBox}>
                <Image
                  className={styles.footerContactIcon}
                  src={location}
                  width={100}
                  height={100}
                  alt="Phone-Icon"
                ></Image>
              </div>
              <p className={styles.footerContactTxt}>
                C-12, Guru Ram Dass Nagar,<br></br> Laxmi Nagar, Delhi-110092
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
