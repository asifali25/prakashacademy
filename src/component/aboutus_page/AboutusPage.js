import React from "react";
import Styles from "./AboutusPage.module.css";
import Head from "next/head";

function AboutusPage() {
  return (
    <>
      <div className={Styles.aboutUsContainer}>
        <div className={Styles.aboutUsInsideContainer}>
          <h1 className={Styles.aboutusHeading}>
            <span style={{ color: "#9cc4fc" }}>About</span>{" "}
            <span style={{ color: "#005ee1", fontWeight: "bold" }}>Us</span>
          </h1>
          <p className={Styles.aboutPara}>
            <b>Prakash Academy</b> was started in 1993 even today It is
            continusously making her valuable contirbution in education sector
            in the same place thousand of student have been passed in these 30
            years our Academy was registered in 2011 as a East District firm{" "}
            {"[394]"} 2011.
            <br></br>
            <br></br>
            <p>We have authorized Information center of reliable Institute:</p>
            <p>
              {"(1)"} Bir Tikendrajit University{" "}
              {
                "[state private university Recognized by UGC, BCI, RCI, PCI, AIV]"
              }
              .
            </p>
            <br></br>
            <p>
              {"(2)"} Satyam Law College{" "}
              {
                "[Affiliated to CCS University Meerut & Approved by Bar Council of India]"
              }
              .
            </p>
            <br></br>
            <p>
              {"(3)"} Satyam Pvt. ITI{" "}
              {
                "[Affiliated to by NCVT, Delhi (National Council) of vocational Training Delhi]"
              }
              .
            </p>
            <br></br>
            <p>
              Many passed out students have become Chartered Accounts, Cost And
              Management Accounts , Company secretaries and Government Officers.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutusPage;
