import React from "react";
import Styles from "./AdmissionGuide.module.css";

function AdmissionGuide() {
  return (
    <>
      <div className={Styles.admissionMainContainer}>
        <div className={Styles.admissionBox}>
          <h1 className={Styles.admissionHeading}>
            <span style={{ color: "#9cc4fc" }}>Admission</span>{" "}
            <span style={{ color: "#005ee1", fontWeight: "bold" }}>Guide</span>
          </h1>
          <p className={Styles.admissionpara}>
            Welcome to Prakash Academy! We are excited about your interest in
            joining our educational community. Below is a comprehensive guide to
            help you navigate the admission process smoothly:<br></br>
            <br></br>
            <b>1. Explore Our Programs:</b>
            <br></br>
            Take a moment to explore the diverse range of coaching programs
            offered at Prakash Academy. Whether {`you're`} preparing for
            competitive exams or seeking academic support, we have tailored
            programs to suit your needs. Familiarize yourself with the courses,
            curriculum, and any additional offerings that may enhance your
            learning experience.<br></br>
            <br></br>
            <b>2. Contact Us:</b>
            <br></br>
            Feel free to reach out to our dedicated admissions team for any
            inquiries you may have. Whether you need clarification about
            specific programs, admission requirements, or want to schedule a
            campus tour, our team is here to assist you. Contact information can
            be found on our official website or in the contact section of this
            brochure.<br></br>
            <br></br>
            <b>3. Attend Information Sessions:</b>
            <br></br>
            Prakash Academy regularly conducts information sessions and open
            houses. These events provide an opportunity for prospective students
            and their families to learn more about our educational philosophy,
            meet faculty members, and get a firsthand look at our facilities.
            Check our website or contact us for upcoming events.<br></br>
            <br></br>
            <b>4. Application Process:</b>
            <br></br>
            Once {`you've`} decided on the program that aligns with your
            educational goals, you can proceed with the application process. Our
            online application form is available on our website. Ensure that you
            provide all required documents and information accurately to
            facilitate a smooth application review.<br></br>
            <br></br>
            <b>5. Entrance Exams and Interviews:</b>
            <br></br>
            Certain programs at Prakash Academy may require entrance exams or
            interviews as part of the admission process. Be prepared for these
            assessments, and {`don't`} hesitate to ask for any guidance on the
            format or content of these evaluations.<br></br>
            <br></br>
            <b>6. Financial Aid and Scholarships:</b>
            <br></br>
            Prakash Academy is committed to making quality education accessible.
            Explore the financial aid and scholarship opportunities available to
            you. Our admissions team can provide information on eligibility
            criteria and application procedures.<br></br>
            <br></br>
            <b>7. Admissions Decision:</b>
            <br></br>
            After completing the application process and any necessary
            assessments, you will receive an admissions decision. Our team will
            notify you promptly, and if accepted, you will receive further
            instructions on enrollment procedures, including payment details and
            orientation information.<br></br>
            <br></br>
            <b>8. Welcome to Prakash Academy:</b>
            <br></br>
            Congratulations on your admission to Prakash Academy! We look
            forward to welcoming you to our academic community. Attend
            orientation sessions, connect with fellow students, and get ready
            for an enriching educational journey with us.<br></br>
            <br></br>
            Should you have any questions or require assistance at any stage of
            the admission process, feel free to contact our admissions office.
            We are here to support you in every step toward achieving your
            academic goals.<br></br>
            <br></br>
            Welcome to <b>Prakash Academy</b>, where your educational
            aspirations come to life!
          </p>
        </div>
      </div>
    </>
  );
}

export default AdmissionGuide;
