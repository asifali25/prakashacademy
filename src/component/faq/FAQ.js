"use client";

import React, { useState } from "react";
import styles from "./Faq.module.css";

function FAQ() {
  const [selected, setselected] = useState("empty");

  const toggle = (i) => {
    if (selected == i) {
      return setselected("empty");
    }

    setselected(i);
  };
  return (
    <>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeadBox}>
          <h1 className={styles.faqHeadBoxHeading}>
            <span style={{ color: "#9cc4fc" }}>Frequently Asked</span>{" "}
            <span style={{ color: "#005ee1", fontWeight: "bold" }}>
              Question
            </span>
          </h1>
          <p className={styles.faqHeadBoxPara}>
            We are here to explain every thing you might want to know
          </p>
        </div>
        <div className={styles.faqQuestionContainer}>
          <div className={styles.faqQuestionOne}>
            <p>
              Any Additional Question?<br></br> We are here to help
            </p>
            <div className={styles.faqBtnBox}>
              <button>Additional FAQ</button>
            </div>
          </div>
          <div className={styles.faqQuestionTwoBox}>
            {data.map((item, i) => (
              <div
                key={i}
                className={
                  selected === i
                    ? `${styles.faqTwoShow}`
                    : `${styles.faqQuestionTwo}`
                }
              >
                <p
                  className={
                    selected === i
                      ? `${styles.faqEntityRotate}`
                      : `${styles.faqEntity}`
                  }
                >
                  &lt;
                </p>
                <div className={styles.faqQuestion}>
                  <ul>
                    <li onClick={() => toggle(i)}>{item.title}</li>
                  </ul>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    title: "How to get the admission in LLB?",
    answer: `You should have completed your undergraduate degree in any
  discipline from a recognized university. Most law schools
  require a minimum percentage in your qualifying degree, usually
  around 45-50%.
  Many law schools in India conduct entrance exams for admission
  to LLB programs. Common exams include CLAT (Common Law Admission
  Test), AILET (All India Law Entrance Test), and LSAT (Law School
  Admission Test).`,
  },
  {
    title: "What are the eligibility for become a teacher?",
    answer: `You generally need a Bachelor's degree in Education (B.Ed.) or a degree in the subject you want to teach along with a B.Ed. degree. Some teaching positions may also require a Teacher Eligibility Test (TET) or state-specific eligibility exams `,
  },
  {
    title: "How to get Admission in ITI?",
    answer: `After complete 12th you can give an entrance exam to get admission in any ITI college. `,
  },
];

export default FAQ;
