import React from "react";

const NumResult = ({ movie }) => {
  return (
    <p className="num-results">
      {/* Found <strong>{movies.length}</strong> results */}
      Found <strong>{movie.length}</strong> results
    </p>
  );
};

export default NumResult;
