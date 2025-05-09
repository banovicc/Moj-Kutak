"use client";
import styles from "./RatedShows.module.css";
import Image from "next/image";
import Arrow_Left from "./assets home/arrow_left.png";
import Arrow_Right from "./assets home/arrow_right.png";
import { useState } from "react";

export default function PopularShows({ shows }) {
  const [currentslide, setCurrentslide] = useState(0);

  return (
    <div className={styles.MainMain}>
      <div className={styles.MainContainer}>
        <button
          className={styles.Button}
          onClick={
            currentslide > 0 ? () => setCurrentslide(currentslide - 1) : null
          }
        >
          <Image src={Arrow_Left} width={50} height={50} alt="Arrow Left" />
        </button>
        <div className={styles.ShowsContainer}>
          {shows
            .slice(currentslide * 4, currentslide * 4 + 4)
            .map((show, index) => (
              <div key={index} className={styles.EachShow}>
                <h2>{show.name}</h2>
                <Image
                  src={show.image.medium}
                  width={210}
                  height={295}
                  alt={show.name}
                />
                <p style={{ margin: 0, marginTop: 5, fontSize: 17 }}>Rating:</p>
                <p style={{ margin: 0, fontWeight: "bold", fontSize: 17 }}>
                  {show.rating.average}
                </p>
              </div>
            ))}
        </div>

        <button
          className={styles.Button}
          onClick={() => setCurrentslide(currentslide + 1)}
        >
          <Image src={Arrow_Right} width={50} height={50} alt="Arrow Right" />
        </button>
      </div>
    </div>
  );
}
