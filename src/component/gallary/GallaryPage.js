"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./GallaryPage.module.css";
import GalleryBox from "../gallerybox/GalleryBox";

const ImageData = [
  { id: "0", src: "/gallery1.jpg", name: "Coaching1" },
  { id: "1", src: "/gallery2.jpg", name: "Coaching2" },
  { id: "2", src: "/gallary3.jpg", name: "Coaching3" },
  { id: "3", src: "/gallery4.jpg", name: "Coaching4" },
];

function GallaryPage() {
  const [slideNo, setSlideNO] = useState(0);
  const [openModel, setOpenModel] = useState(false);

  function photoClickHandler(photoid) {
    setSlideNO(photoid);
    setOpenModel(true);
    // console.log(`${photoid}`);
  }

  function closeHandler() {
    setOpenModel(false);
  }

  console.log(slideNo, openModel);

  return (
    <>
      <div className={styles.mainContainer}>
        {openModel && (
          <div className={styles.fullImgContainer}>
            <Image
              className={styles.fullImage}
              src={ImageData[slideNo].src}
              width={500}
              height={500}
              alt={ImageData[slideNo].name}
            ></Image>
            <div className={styles.closeImg} onClick={closeHandler}>
              X
            </div>
          </div>
        )}

        {!openModel && (
          <div className={styles.secondContainer}>
            <h1 className={styles.secondContainerHeading}>Gallary</h1>
            <div className={styles.secondContainerImgBox}>
              {ImageData.map((data, index) => (
                <GalleryBox
                  key={index}
                  id={index}
                  src={data.src}
                  name={data.name}
                  onclick={photoClickHandler}
                ></GalleryBox>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GallaryPage;
