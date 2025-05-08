"use client";
import styles from "./RatedShows.module.css";
import Image from "next/image";
import Arrow_Left from "./assets home/arrow_left.png";
import Arrow_Right from "./assets home/arrow_right.png";

export default function PopularShows({ shows }) {
  return (
    <div className={styles.MainMain}>
      <div className={styles.MainContainer}>
        <Image src={Arrow_Left} width={50} height={50} alt="Arrow Left" />

        <div className={styles.ShowsContainer}>
          {shows.slice(0, 4).map((show, index) => (
            <div key={index} className={styles.EachShow}>
              <h2>{show.name}</h2>
              <Image
                src={show.image.medium}
                width={210}
                height={295}
                alt={show.name}
              />
            </div>
          ))}
        </div>

        <Image src={Arrow_Right} width={50} height={50} alt="Arrow Right" />
      </div>
    </div>
  );
}
