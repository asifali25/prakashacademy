"use client";

import React from "react";
import styles from "./MobileNav.module.css";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

function MobileNav({ setMob, mobNav }) {
  function closeClickHandler() {
    setMob(false);
  }

  return (
    <>
      <nav
        className={
          mobNav ? `${styles.mobHeaderBoxShow}` : `${styles.mobHeaderBox}`
        }
      >
        <div className={styles.mobHeaderClose} onClick={closeClickHandler}>
          <RxCross1 className={styles.mobClose}></RxCross1>
        </div>
        <div className={styles.mobNav}>
          <Link className={styles.mobNavLink} href="/">
            <p>Home</p>
          </Link>
          <Link className={styles.mobNavLink} href="/aboutus">
            <p>About Us</p>
          </Link>
          <Link className={styles.mobNavLink} href="/admissionguide">
            <p>Admission Guide</p>
          </Link>
          <Link className={styles.mobNavLink} href="/contact">
            <p>Contact Us</p>
          </Link>
        </div>
        <div className={styles.mobNavBtnBox}>
          <Link href="/contact">
            <button className={styles.mobNavBtn}>Query Now</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
