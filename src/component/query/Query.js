import React from "react";
import Image from "next/image";
import styles from "./Query.module.css";
import Question from "../../../public/qury/quation.svg";

function Query() {
  return (
    <div className={styles.queryContainer}>
      <div className={styles.queryHeaderbox}>
        <h1 className={styles.queryHeaderBoxHeading}>
          <span style={{ color: "#9cc4fc" }}>Make a</span>{" "}
          <span style={{ color: "#005ee1", fontWeight: "bold" }}>Query</span>
        </h1>
        <p className={styles.queryHeaderBoxPara}>
          You can make a Query when you want
        </p>
      </div>
      <div className={styles.queryFormContainer}>
        <div className={styles.queryFormBox}>
          <div className={styles.queryFormImgBox}>
            <Image
              className={styles.queryFormImg}
              src={Question}
              width={200}
              height={200}
              alt="Question"
            ></Image>
          </div>
          <div className={styles.queryFormDiv}>
            <form className={styles.queryForm}>
              <input type="text" placeholder="Full Name"></input>
              <input type="text" placeholder="Phone Number"></input>
              <input type="email" placeholder="Email Address"></input>
              <textarea
                className={styles.queryTxtArea}
                placeholder="Type your Query"
                resize="none"
              ></textarea>
              <button className={styles.queryBtn}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Query;
