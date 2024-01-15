"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "../../../public/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

function Header({ setMob, mobNav }) {
  function openClickHandler() {
    setMob(true);
  }

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
              <li>
                <Link className={styles.deskLink} href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className={styles.deskLink} href="/aboutus">
                  About Us
                </Link>
              </li>

              <li>
                <Link className={styles.deskLink} href="/admissionguide">
                  Admission Guide
                </Link>
              </li>
              <li>
                <Link className={styles.deskLink} href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.querybtnBox}>
            <Link href="/contact">
              <button className={styles.querybtn}>Query Now</button>
            </Link>
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
