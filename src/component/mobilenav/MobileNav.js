"use client";

import React from "react";
import styles from "./MobileNav.module.css";
import { RxCross1 } from "react-icons/rx";

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
          <p>Home</p>
          <p>About Us</p>
          <p>Admission Guide</p>
          <p>Contact Us</p>
        </div>
        <div className={styles.mobNavBtnBox}>
          <button className={styles.mobNavBtn}>Query Now</button>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
