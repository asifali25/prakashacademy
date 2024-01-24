"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./GallaryPage.module.css";
import GalleryBox from "../gallerybox/GalleryBox";

const ImageData = [
  { id: "0", src: "/gallery1.jpg", name: "Prakash_Academy1" },
  { id: "1", src: "/gallery2.jpg", name: "Prakash_Academy2" },
  { id: "2", src: "/gallary3.jpg", name: "Prakash_Academy3" },
  { id: "3", src: "/gallery4.jpg", name: "Prakash_Academy4" },
  { id: "4", src: "/gallery5.jpg", name: "Prakash_Academy5" },
  { id: "5", src: "/gallery6.jpg", name: "Prakash_Academy6" },
  { id: "6", src: "/gallery7.jpg", name: "Prakash_Academy7" },
  { id: "7", src: "/gallery8.jpg", name: "Prakash_Academy8" },
  { id: "8", src: "/gallery9.jpg", name: "Prakash_Academy9" },
  { id: "9", src: "/gallery10.jpg", name: "Prakash_Academy10" },
  { id: "10", src: "/gallery11.jpg", name: "Prakash_Academy11" },
  { id: "11", src: "/gallery12.jpeg", name: "Prakash_Academy12" },
  { id: "12", src: "/gallery13.jpeg", name: "Prakash_Academy13" },
  { id: "13", src: "/gallery14.jpeg", name: "Prakash_Academy14" },
  { id: "14", src: "/gallery15.jpeg", name: "Prakash_Academy15" },
  { id: "15", src: "/gallery16.jpeg", name: "Prakash_Academy16" },
  { id: "16", src: "/gallery17.jpeg", name: "Prakash_Academy17" },
  { id: "17", src: "/gallery18.jpeg", name: "Prakash_Academy18" },
  { id: "18", src: "/gallery19.jpeg", name: "Prakash_Academy19" },
  { id: "19", src: "/gallery20.jpeg", name: "Prakash_Academy20" },
  { id: "20", src: "/gallery21.jpeg", name: "Prakash_Academy21" },
  { id: "21", src: "/gallery22.jpeg", name: "Prakash_Academy22" },
  { id: "22", src: "/gallery23.jpeg", name: "Prakash_Academy23" },
  { id: "23", src: "/gallery24.jpeg", name: "Prakash_Academy24" },
  { id: "24", src: "/gallery25.jpeg", name: "Prakash_Academy25" },
];

function GallaryPage() {
  const [slideNo, setSlideNO] = useState(0);
  const [openModel, setOpenModel] = useState(false);

  function photoClickHandler(photoid) {
    setSlideNO(photoid);
    setOpenModel(true);
  }

  function closeHandler() {
    setOpenModel(false);
  }

  return (
    <>
      <div className={styles.mainContainer}>
        {openModel && (
          <div className={styles.fullImgContainer}>
            <div className={styles.closeImg} onClick={closeHandler}>
              X
            </div>
            <Image
              className={styles.fullImage}
              src={ImageData[slideNo].src}
              width={500}
              height={500}
              alt={ImageData[slideNo].name}
            ></Image>
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
