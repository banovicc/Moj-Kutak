// Glavna kompoenenta za favorita

import Favorites from "./Favorites";
import NavigationBar from "../Navigationbar";

export default async function FavoritesPage() {
  const res = await fetch("/api/favorites");
  const data = await res.json();

  const favorites = await Promise.all(
    data.favorites.map(async (id) => {
      const res1 = await fetch(`https://api.tvmaze.com/shows/${id}`);
      return res1.json();
    })
  );

  return (
    <div>
      <NavigationBar />
      <Favorites favorites={favorites} />
    </div>
  );
}
