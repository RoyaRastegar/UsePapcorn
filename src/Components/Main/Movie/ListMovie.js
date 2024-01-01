import React from "react";
import Movies from "./Movies";

const ListMovie = ({ movies, onSelectedMovi, onCloseMovie }) => {
  return (
    <div>
      <ul className="list list-movies ">
        {movies.map((movie) => (
          <Movies
            movie={movie}
            key={movie.imdbID}
            onSelectedMovi={onSelectedMovi}
            onCloseMovie={onCloseMovie}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListMovie;
