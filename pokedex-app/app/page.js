import WelcomeScreen from "./WelcomeScreen";
import CurentlyPopular from "./CurentlyPopular";
import Navigationbar from "./Navigationbar";

export default function Home() {
  return (
    <main>
      <Navigationbar />
      <WelcomeScreen />
      <CurentlyPopular />
    </main>
  );
}
