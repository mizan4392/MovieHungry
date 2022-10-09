import React from "react";

type Props = {};

export default function MovieDetails({}: Props) {
  return (
    <div className="text-white flex flex-row bg-center">
      <img
        src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
        alt="aa"
        height={300}
        width={300}
      />
      <div>
        <h1>Thor: Love and Thunder</h1>
        <div className="flex">
          <button
            type="button"
            className="inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            HD
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
            4.5
          </div>
          <span className="ml-3">118min</span>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          consequuntur deserunt inventore consectetur. Totam, illo
          necessitatibus explicabo asperiores alias officiis ex nostrum nam
          perferendis vero dolorum iure repellat ipsa odio?
        </p>
      </div>
    </div>
  );
}
