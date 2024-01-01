import React, { useState } from "react";
import Rating from "./Rating";

const Test = () => {
  const [rateMovie, setRateMovie] = useState(0);
  return (
    <div>
      <Rating maxRating={10} onSetRating={setRateMovie} />
      <p>This Movie was rated {rateMovie}star</p>
    </div>
  );
};

export default Test;
