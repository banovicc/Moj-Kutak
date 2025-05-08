import styles from "./TopRated.module.css";
import PopularShows from "./RatedShows";

export default async function TopRated() {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();

  const sortedShows = data
    .filter((show) => show.rating && show.rating.average !== null)
    .sort((a, b) => b.rating.average - a.rating.average);

  return (
    <div className={styles.MainPopular}>
      <h1 className={styles.Title}>Najbolje ocjenjeni</h1>
      <PopularShows shows={sortedShows} />
    </div>
  );
}
