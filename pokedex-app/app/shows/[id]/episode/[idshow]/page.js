// Glavna komonenta za prikaz epizode

import EpisodeDetails from "./EpisodeDetails";
import NavigationBar from "../../../../Navigationbar";
import Selector from "./Selector";

export default async function Page({ params }) {
  const { idshow } = await params;
  const id = parseInt(idshow);

  const res = await fetch(`https://api.tvmaze.com/episodes/${id}`);
  let episode = await res.json();

  return (
    <div>
      <NavigationBar />
      <Selector episode={episode} />
      <EpisodeDetails episode={episode} />
    </div>
  );
}
