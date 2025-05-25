// glavna za afvorire

"use client";

import { useEffect, useState } from "react";
import Favorites from "./Favorites";
import NavigationBar from "../Navigationbar";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFavorites() {
      try {
        const response = await fetch("/api/favorites");
        if (!response.ok) throw new Error("Failed to fetch favorites");
        const { favorites: ids } = await response.json();

        const shows = await Promise.all(
          ids.map(async (id) => {
            const showRes = await fetch(`https://api.tvmaze.com/shows/${id}`);
            if (!showRes.ok) throw new Error(`Show ${id} fetch failed`);
            return showRes.json();
          })
        );

        setFavorites(shows);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadFavorites();
  }, []);

  return (
    <div>
      <NavigationBar />

      <Favorites favorites={favorites} />
    </div>
  );
}
