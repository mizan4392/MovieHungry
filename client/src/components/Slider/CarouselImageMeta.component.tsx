import { Button } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";
import React from "react";

type Props = {
  videQuality: string;
  movieName: string;
  duration: string;
  genre: string[];
  rating: number;
  shortDescription: string;
};

export function CarouselImageMeta({
  videQuality,
  movieName,
  duration,
  genre,
  rating,
  shortDescription,
}: Props) {
  return (
    <div className="container text-white mx-auto relative h-full">
      <div className="absolute top-[50%]">
        <h1>{movieName}</h1>
        <div className="flex">
          <button
            type="button"
            className="inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {videQuality}
          </button>
          <div className="flex ml-3">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {rating}
          </div>
          <span className="ml-3">{duration}</span>
          {genre?.map((itm, i) => (
            <span className="ml-3" key={i}>
              {itm}
            </span>
          ))}
        </div>
        <span>{shortDescription}</span>
        <div className="mt-[10px] flex ">
          <Button
            variant="outline"
            leftIcon={<IconPlayerPlay size={14} />}
            styles={(theme) => ({
              root: {
                backgroundColor: "transparent",
                color: "#fff",
                "&:hover": {
                  backgroundColor: theme.fn.darken("#00acee", 0.05),
                },
              },
            })}
          >
            Watch Now
          </Button>
        </div>
      </div>
    </div>
  );
}
