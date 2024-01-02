import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerbox}>
          <div className={styles.logobox}>
            <h1>Logo</h1>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Admission Guide</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <div>
            <button className={styles.querybtn}>Query Now</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
