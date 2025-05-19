import NavigationBar from "../../Navigationbar";
import ActorDetails from "./ActorDetails";

export default async function Page({ params }) {
  const { actorid } = params;
  const id = parseInt(actorid);

  const res = await fetch(`https://api.tvmaze.com/people/${id}`);
  const actor = await res.json();

  const res2 = await fetch(`https://api.tvmaze.com/people/${id}/castcredits`);
  const series = await res2.json();

  return (
    <div>
      <NavigationBar />
      <ActorDetails actor={actor} series={series} />
      <p>{series[0]._links.show.name}</p>
    </div>
  );
}
