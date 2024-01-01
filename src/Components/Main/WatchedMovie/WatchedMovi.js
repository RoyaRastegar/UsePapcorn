import React from "react";

const WatchedMovi = ({ movie }) => {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⏳ {movie.runtime} </span>
          <span>Year :{movie.year}</span>
          <span>⭐️{movie.userRating}</span>
        </p>
      </div>
    </li>
  );
};

export default WatchedMovi;
