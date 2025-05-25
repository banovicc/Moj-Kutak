//Komonenta koja sluzi za prikaz detalja o epizodi serije

import styles from "./EpisodeDetails.module.css";
import Image from "next/image";

function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function EpisodeDetails({ episode }) {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.FirstHalf}>
        <h2>{episode.name}</h2>
        <h3>
          Sezona:{episode.season}
          <br />
          Epizoda:{episode.number}
        </h3>
        <p style={{ margin: 0 }}>Radnja:</p>
        <p style={{ margin: 0 }}>{stripHtmlTags(episode.summary)}</p>
      </div>
      <div className={styles.SecondHalf}>
        <Image
          src={episode.image.original}
          alt={episode.name}
          width={450}
          height={350}
        />
      </div>
    </div>
  );
}
