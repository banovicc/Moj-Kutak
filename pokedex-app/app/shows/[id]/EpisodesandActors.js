"use client";

import { useState } from "react";
import styles from "./EpisodesandActors.module.css";
import Link from "next/link";

export default function EpisodesandActors({ episodes, actors }) {
  const [showEpisodes, setShowEpisodes] = useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      <div className={styles.Buttons}>
        <div className={styles.SecondButtons}>
          <button
            className={`${styles.Button} ${showEpisodes ? styles.active : ""}`}
            onClick={() => setShowEpisodes(true)}
          >
            Epizode
          </button>
          <button
            className={`${styles.Button} ${!showEpisodes ? styles.active : ""}`}
            onClick={() => setShowEpisodes(false)}
          >
            Glumci
          </button>
        </div>
      </div>
      {showEpisodes ? (
        <div>
          {episodes.map((episode, index) => (
            <div key={index}>
              <Link href={`/`} style={{ textDecoration: "none" }}>
                <div className={styles.episodeRow}>
                  <div className={styles.dataBox}>
                    <span className={{ fontWeight: "bold" }}>
                      S{episode.season}
                    </span>
                  </div>
                  <div className={styles.dataBox}>{episode.name}</div>
                  <div className={styles.dataBox}>{episode.rating.average}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.list}>
          {actors.map((actor, index) => (
            <div key={index}>
              <span style={{ fontWeight: "bold" }}>{actor.person.name}</span>{" "}
              {actor.character.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
