import React from "react";
import styles from "./Form.module.css";

function Form() {
  return (
    <>
      <form className={styles.form}>
        <input type="text" placeholder="Full Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="text" placeholder="Phone Number"></input>
        <textarea placeholder="Typer your Query"></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
