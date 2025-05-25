// Glavna kompoenenta za favorita

import Favorites from "./Favorites";
import NavigationBar from "../Navigationbar";

export default async function FavoritesPage() {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = process.env.VERCEL_URL || "localhost:3000";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/favorites`);
  const data = await res.json();

  console.log(data);

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
