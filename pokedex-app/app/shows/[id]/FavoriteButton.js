// Gumb koji služi za dodavanje serije u favorite

"use client";
import { useState, useTransition } from "react";
import EpisodesandActors from "./EpisodesandActors.module.css";

export default function FavoriteButton({ id }) {
  const [saved, setSaved] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function dodajFavorita() {
    startTransition(async () => {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) setSaved(true);
    });
  }

  return (
    <button
      disabled={saved || isPending}
      onClick={dodajFavorita}
      className={EpisodesandActors.ButtonFavorite}
    >
      {saved ? "Spremljen!" : isPending ? "Spremam..." : "Dodaj u favorite"}
    </button>
  );
}
