import { Grid } from "@mantine/core";
import React from "react";
import { MovieCard, MovieCardI } from "./MovieCard.component";

type Props = {
  title: string;
  movieData?: MovieCardI[];
};

export default function MovieSection({ movieData, title }: Props) {
  return (
    <div className="mt-8">
      <h1 className="text-white">{title}</h1>
      <Grid>
        {movieData?.map((movie, i) => {
          return (
            <Grid.Col xs={6} sm={6} md={3} lg={2}>
              <MovieCard
                key={i}
                movieThumbUrl={movie.movieThumbUrl}
                name={movie.name}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
}
