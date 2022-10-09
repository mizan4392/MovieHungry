import React from "react";
import { movies } from "../../data";
import MovieSection from "../MovieSection/MovieSection.component";
import MovieDetails from "./MovieDetails.component";

export default function MovieView() {
  return (
    <div>
      <div className="text-white w-[100vw] h-[70vh]">Player</div>
      <div className="flex flex-row">
        <div className="flex-[2] container">
          <MovieDetails />
        </div>
        <div className="flex-[1]">
          <MovieSection title="Related" movieData={movies} />
        </div>
      </div>
    </div>
  );
}
