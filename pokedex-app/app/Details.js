import styles from "./Details.module.css";
import Image from "next/image";

export default function Details({ shows, num }) {
  shows = shows.filter((show) => show.id === num);

  return (
    <div className={styles.Main}>
      <div className={styles.FirstHalf}>
        <h1 style={{ color: "black" }}>{shows[0].name}</h1>
      </div>
      <div className={styles.Image}>
        <Image
          src={shows[0].image.medium}
          alt={shows[0].name}
          width={320}
          height={450}
        />
      </div>
    </div>
  );
}
