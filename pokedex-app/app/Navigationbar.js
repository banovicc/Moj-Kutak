import styles from "./Navigationbar.module.css";
import Link from "next/link";

export default function Navigationbar() {
  return (
    <div className={styles.MainContainer}>
      <p>Favoriti</p>
      <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
        <h1>Moj Kutak</h1>
      </Link>
      <p>O nama</p>
    </div>
  );
}
