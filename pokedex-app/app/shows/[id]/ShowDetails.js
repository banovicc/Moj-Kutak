//Prikazuje ddetalje svake serije

import styles from "./ShowDetails.module.css";
import Image from "next/image";
import EpisodesandActors from "./EpisodesandActors";
import FavoriteButton from "./FavoriteButton";

function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default async function Page({ show }) {
  const res1 = await fetch(`https://api.tvmaze.com/shows/${show.id}/episodes`);
  let episodes = await res1.json();

  const res2 = await fetch(`https://api.tvmaze.com/shows/${show.id}/cast`);
  let actors = await res2.json();

  return (
    <div className={styles.Main}>
      <div className={styles.MainContainer}>
        <div className={styles.FirstHalf}>
          <Image
            src={show.image.medium}
            alt={show.name}
            width={350}
            height={450}
            className={styles.Image}
          />
        </div>
        <div className={styles.SecondHalf}>
          <div className={styles.TitleButton}>
            <h1>{show.name}</h1>
            <FavoriteButton id={show.id} />
          </div>
          <div className={styles.Genres}>
            {show.genres.map((genre, index) => (
              <h2 className={styles.Genre} key={index}>
                {genre}
              </h2>
            ))}
          </div>
          <div className={styles.Row}>
            <div className={styles.Column}>
              <h3 className={styles.H3}>Jezik: {show.language}</h3>
              <h3 className={styles.H3}>Prva epizoda: {show.premiered}</h3>
            </div>
            <div className={styles.Column}>
              <h3 className={styles.H3}>
                Prosječno trajanje epizode: {show.averageRuntime}
              </h3>
              <h3 className={styles.H3}>Zadnja epizoda: {show.ended}</h3>
            </div>
          </div>
          <h3>RADNJA:</h3>
          <p>{stripHtmlTags(show.summary)}</p>
        </div>
      </div>
      <EpisodesandActors episodes={episodes} actors={actors} id={show.id} />
    </div>
  );
}
