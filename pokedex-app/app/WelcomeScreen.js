import Image from "next/image";
import FriendWatching from "./assets home/FriendWatching.png";
import styles from "./WelcomeScreen.module.css";

export default function WelcomeScreen() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "60%",
          overflow: "hidden",
          aspectRatio: "4/2",
          margin: "0 auto",
        }}
      >
        <Image src={FriendWatching} fill alt="Friends watching movie" />
      </div>
      <p className={styles.Title}>
        Mjesto za sve vaše pogledane serije
        <br /> a i one koje ćete tek pogledati
      </p>
    </div>
  );
}
