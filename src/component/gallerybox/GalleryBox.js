"use client";

import React from "react";
import Image from "next/image";
import styles from "./GalleryBox.module.css";

function GalleryBox({ id, src, name, onclick }) {
  return (
    <>
      <div className={styles.imageBox}>
        <Image
          className={styles.imageBoxImage}
          src={src}
          width={300}
          height={300}
          alt={name}
          onClick={() => onclick(id)}
        ></Image>
      </div>
    </>
  );
}

export default GalleryBox;
