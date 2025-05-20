"use client";

import { useState } from "react";
import styles from "./EpisodesandActors.module.css";
import Link from "next/link";

export default function EpisodesandActors({ episodes, actors, id }) {
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
          <div className={styles.TitleRow}>
            <p className={styles.ColumnTitle}>Sezona</p>
            <p className={styles.ColumnTitle}>Naziv</p>
            <p className={styles.ColumnTitle}>Ocjena</p>
          </div>
          {episodes.map((episode, index) => (
            <div key={index}>
              <Link
                href={`/shows/${id}/episode/${episode.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.episodeRow}>
                  <div className={styles.dataBox}>
                    <span className={{ fontWeight: "bold" }}>
                      S{episode.season}E{episode.number}
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
          <div className={styles.TitleRow}>
            <p className={styles.ColumnTitle}>Glumac</p>
            <p className={styles.ColumnTitle}>Lik</p>
          </div>
          {actors.map((actor, index) => (
            <div key={index}>
              <Link
                href={`/actors/${actor.person.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.episodeRow}>
                  <div className={styles.dataBox}>{actor.person.name}</div>
                  <div className={styles.dataBox}>{actor.character.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
