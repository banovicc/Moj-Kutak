import "./CurentlyPopular.css";
import PopularShows from "./PopularShows";

export default async function WelcomeScreen() {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();

  const sortedShows = data
    .filter((show) => show.rating && show.rating.average !== null)
    .sort((a, b) => b.rating.average - a.rating.average);

  return (
    <div className="MainPopular">
      <PopularShows shows={sortedShows} />
    </div>
  );
}
