"use client";
import "./CurentlyPopular.css";
import Image from "next/image";

export default function PopularShows({ shows }) {
  return (
    <div className="MainContainer">
      {shows.slice(0, 5).map((show, index) => (
        <li key={index} className="EachShow">
          <h2>{show.name}</h2>
          <Image
            src={show.image.medium}
            width={210}
            height={295}
            alt={show.name}
          />
        </li>
      ))}
    </div>
  );
}
