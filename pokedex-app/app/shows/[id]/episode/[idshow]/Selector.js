"use client";

import { useRouter } from "next/navigation";

async function CheckNext(id, CurrentEpisode, router) {
  const res = await fetch(`https://api.tvmaze.com/episodes/${id}`);
  let NextEpisode = await res.json();

  if (NextEpisode === null) {
    return;
  }

  if (NextEpisode._links.show.name === CurrentEpisode._links.show.name) {
    router.push(`../episode/${NextEpisode.id}`);
  } else {
    return;
  }
}

export default function Selector({ episode }) {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => CheckNext(episode.id - 1, episode, router)}>
        Prethodna
      </button>
      <button onClick={() => CheckNext(episode.id + 1, episode, router)}>
        Sljedeća
      </button>
    </div>
  );
}
