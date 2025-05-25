// Ova komponenta prikazuje detalje svake serije

import styles from "./Details.module.css";
import Image from "next/image";
import Link from "next/link";

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
          {show.genres.map((genre, index) => (
            <p key={index} className={styles.Genre}>
              {genre}
            </p>
          ))}
        </div>
        <p style={{ marginTop: 10, marginBottom: 0 }}>
          Prosječno trajanje epizode:{" "}
          <span style={{ fontWeight: "bold" }}>
            {show.averageRuntime} minute{" "}
          </span>
        </p>
        <p style={{ marginBottom: 0, fontWeight: "bold" }}>Opis:</p>
        <p style={{ marginTop: 0 }}>{stripHtmlTags(show.summary)}</p>
        <Link className={styles.LinkGumb} href={`/shows/${show.id}`}>
          Prikaži detalje
        </Link>
      </div>
      <div className={styles.Image}>
        <Image
          src={show.image.medium}
          alt={show.name}
          width={360}
          height={490}
          style={{ borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}
