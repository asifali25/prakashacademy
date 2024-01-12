import React from "react";
import styles from "./ContactUs.module.css";
import Image from "next/image";
import Form from "../form/Form";
import Phone from "../../../public/social/mobile.svg";
import mail from "../../../public/social/mail.svg";
import location from "../../../public/social/location.svg";

function ContactUs() {
  return (
    <>
      <div className={styles.ContactContainer}>
        <h1 className={styles.contactHeading}>
          <span style={{ color: "#9cc4fc" }}>Contact</span>
          <span style={{ color: "#005ee1", fontWeight: "bold" }}> Us</span>
        </h1>
        <div className={styles.ContactBox}>
          <div className={styles.contactForm}>
            <Form></Form>
          </div>
          <div className={styles.ContactAddress}>
            <div className={styles.ContactIconTxt}>
              <div className={styles.ContactIcon}>
                <Image
                  className={styles.contactImg}
                  src={Phone}
                  height={100}
                  width={100}
                  alt="Prakash_Academy_Phone"
                ></Image>
              </div>
              <p className={styles.contactTxt}>+91 8920085041</p>
            </div>
            <div className={styles.ContactIconTxt}>
              <div className={styles.ContactIcon}>
                <Image
                  className={styles.contactImg}
                  src={mail}
                  height={100}
                  width={100}
                  alt="Prakash_Academy_Email"
                ></Image>
              </div>
              <p className={styles.contactTxt}>prakashinstitute1@gmail.com</p>
            </div>
            <div className={styles.ContactIconTxt}>
              <div className={styles.ContactIcon}>
                <Image
                  className={styles.contactImg}
                  src={location}
                  height={80}
                  width={80}
                  alt="Prakash_Academy_Phone"
                ></Image>
              </div>
              <p className={styles.contactTxt}>
                C-12, Guru Ram Dass Nagar, Laxmi Nagar, Delhi-110092
              </p>
            </div>
          </div>
          <div className={styles.ContactGoogleMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.85613342554618!2d77.27681117860494!3d28.63880796646672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704896629249!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
