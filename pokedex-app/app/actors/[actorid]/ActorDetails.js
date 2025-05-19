import styles from "./ActorDetails.module.css";
import Image from "next/image";

export default function ActorDetails({ actor, series }) {
  return (
    <div className={styles.Main}>
      <div className={styles.FirstHalf}>
        <h2>{actor.name}</h2>
        <h3>Rođenje {actor.birthday}</h3>
        <h3>Država rođenja {actor.country.name}</h3>
        <p>Popis serija</p>
        {series.map((show, index) => (
          <div key={index}>
            <p className={styles.Show}>{show._links.show.name}</p>
          </div>
        ))}
      </div>
      <Image src={actor.image.original} alt="actor" width={200} height={200} />
      <div className={styles.SecondHalf}></div>
    </div>
  );
}
