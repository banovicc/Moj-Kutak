// Glavna kompoenenta za prikaz shows

import ShowDetails from "./ShowDetails";
import NavigationBar from "../../Navigationbar";

export default async function Page({ params }) {
  const { id } = await params;
  const idd = parseInt(id);

  const res = await fetch(`https://api.tvmaze.com/shows/${idd}`);
  let show = await res.json();

  return (
    <div>
      <NavigationBar />
      <ShowDetails show={show} />
    </div>
  );
}
