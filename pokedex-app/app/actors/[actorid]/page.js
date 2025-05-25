// Glavna komonenta za prikaz actora

import NavigationBar from "../../Navigationbar";
import ActorDetails from "./ActorDetails";

async function getID(series) {
  const res = await fetch(series._links.show.href);
  const data = await res.json();
  return data.id;
}

export default async function Page({ params }) {
  const { actorid } = params;
  const id = parseInt(actorid);

  const res = await fetch(`https://api.tvmaze.com/people/${id}`);
  const actor = await res.json();

  const res2 = await fetch(`https://api.tvmaze.com/people/${id}/castcredits`);
  const series = await res2.json();

  const showIDs = await Promise.all(series.map((show) => getID(show)));

  console.log(showIDs);

  return (
    <div>
      <NavigationBar />
      <ActorDetails actor={actor} series={series} showIDs={showIDs} />
    </div>
  );
}
