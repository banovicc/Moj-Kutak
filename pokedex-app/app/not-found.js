// Not found stranica
import NavigationBar from "./Navigationbar";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <p
        style={{
          backgroundColor: "white",
          textAlign: "center",
          fontSize: 30,
          borderRadius: 10,
        }}
      >
        Pogresni url stranice
      </p>
    </main>
  );
}
