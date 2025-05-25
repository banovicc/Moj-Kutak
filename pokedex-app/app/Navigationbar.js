// Ovo je zaglavlje svake stranice

import styles from "./Navigationbar.module.css";
import Link from "next/link";

export default function Navigationbar() {
  return (
    <div className={styles.MainContainer}>
      <Link
        href={"/favorites"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <p>Favoriti</p>
      </Link>
      <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
        <h1>Moj Kutak</h1>
      </Link>
      <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
        <p>Početna</p>
      </Link>
    </div>
  );
}
