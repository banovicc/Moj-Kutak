import styles from "./ActorDetails.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function ActorDetails({ actor, series, showIDs }) {
  return (
    <div className={styles.Main}>
      <div className={styles.FirstHalf}>
        <h2>{actor.name}</h2>
        <h3 className={styles.H3}>Rođenje {actor.birthday}</h3>
        <h3 className={styles.H3}>Država rođenja {actor.country.name}</h3>
        <p>Popis serija</p>
        <div className={styles.ShowContainer}>
          {series.map((show, index) => (
            <div key={index}>
              <Link
                href={`/shows/${showIDs[index]}`}
                style={{ textDecoration: "none" }}
              >
                <p className={styles.Show}>{show._links.show.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.SecondHalf}>
        <Image
          src={actor.image.original}
          alt="actor"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
}
