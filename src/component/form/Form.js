"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Form.module.css";

function Form() {
  const [state, handleSubmit] = useForm("myyrzpaq");
  if (state.succeeded) {
    return (
      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Thanks for Query
      </p>
    );
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required></input>
        <input type="email" name="email" placeholder="Email"></input>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input type="text" name="phone" placeholder="Phone Number"></input>
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        <textarea name="message" placeholder="Typer your Query"></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
