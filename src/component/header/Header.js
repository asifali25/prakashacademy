"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "../../../public/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function Header({ setMob, mobNav }) {
  function openClickHandler() {
    setMob(true);
  }

  console.log(mobNav);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerbox}>
          <div className={styles.logobox}>
            <Image
              className={styles.logoImg}
              src={Logo}
              width={100}
              height={100}
              alt="Prakash_Academy_Logo"
            ></Image>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Admission Guide</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <div className={styles.querybtnBox}>
            <button className={styles.querybtn}>Query Now</button>
          </div>
          <div className={styles.mobHamberger} onClick={openClickHandler}>
            <RxHamburgerMenu
              className={styles.mobHambergersize}
            ></RxHamburgerMenu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
