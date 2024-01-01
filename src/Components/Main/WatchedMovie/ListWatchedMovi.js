import React from "react";
import { useState } from "react";
import WatchedMovi from "./WatchedMovi";

const ListWatchedMovi = ({ watched }) => {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedMovi movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default ListWatchedMovi;
