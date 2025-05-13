import styles from "./Details.module.css";
import Image from "next/image";

function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function Details({ shows, num }) {
  shows = shows.filter((show) => show.id === num);

  const show = shows[0];

  return (
    <div className={styles.Main}>
      <div className={styles.FirstHalf}>
        <h1 style={{ color: "black", marginBottom: 5, textAlign: "center " }}>
          {show.name}
        </h1>
        <div className={styles.Genres}>
          {show.genres.map((genre) => (
            <p className={styles.Genre}>{genre}</p>
          ))}
        </div>
        <p>Trajanje {show.runtime} minuta</p>
        <p>Opis:</p>
        <p>{stripHtmlTags(show.summary)}</p>
      </div>
      <div className={styles.Image}>
        <Image
          src={show.image.medium}
          alt={show.name}
          width={320}
          height={450}
        />
      </div>
    </div>
  );
}
