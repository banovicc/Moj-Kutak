import ShowDetails from "./ShowDetails";
import NavigationBar from "../../Navigationbar";

export default async function Page({ params }) {
  const { id } = await params;
  const idd = parseInt(id);

  const res = await fetch("https://api.tvmaze.com/shows");
  let data = await res.json();

  data = data.filter((show) => show.id === idd);

  const show = data[0];

  return (
    <div>
      <NavigationBar />
      <ShowDetails show={show} />
    </div>
  );
}
