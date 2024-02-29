import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies,title }) => {
  return (
    <div className="px-6 bg-black">
      <h2 className="text-white text-3xl py-4">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map((x) => (
              <MovieCard
                key={x.id}
                title={x.original_title}
                poster={x.poster_path}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
