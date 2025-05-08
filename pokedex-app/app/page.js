import WelcomeScreen from "./WelcomeScreen";
import TopRated from "./TopRated";
import NavigationBar from "./Navigationbar";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <WelcomeScreen />
      <TopRated />
    </main>
  );
}
