//Komponenta koja prikazeje favorite

import styles from "./Favorites.module.css";
import RemoveButton from "./RemoveButton";
import Link from "next/link";

export default function FavoritesPage({ favorites }) {
  return (
    <div className={styles.Main}>
      {favorites.map((favorite) => (
        <div key={favorite.id} className={styles.Card}>
          <Link
            href={`/shows/${favorite.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className={styles.Card}>
              <h2>{favorite.name}</h2>
              <img
                src={favorite.image?.medium}
                alt={favorite.name}
                width={300}
                height={400}
                style={{ margin: "auto" }}
              />
            </div>
          </Link>
          <RemoveButton id={favorite.id} />
        </div>
      ))}
    </div>
  );
}
