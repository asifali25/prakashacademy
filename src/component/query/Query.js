"use client";

import React from "react";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Query.module.css";
import Question from "../../../public/qury/quation.svg";

function Query() {
  const [state, handleSubmit] = useForm("myyrzpaq");
  if (state.succeeded) {
    return (
      <div className={styles.queryThanks}>
        <p
          style={{
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Thanks for Query <br></br> We Will get back to you shortly
        </p>
      </div>
    );
  }
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
            <form className={styles.queryForm} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              ></input>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              ></input>
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              ></input>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                className={styles.queryTxtArea}
                placeholder="Type your Query"
                resize="none"
                name="message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit" className={styles.queryBtn}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Query;
