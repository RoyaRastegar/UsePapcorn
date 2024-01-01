import React, { useState } from "react";
import Star from "./Star";
const containerStyle = {
  display: "flex",
  gap: "16px",
  itemText: "center",
};
const containerStar = {
  display: "flex",
  gap: "4px",
};

const Rating = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  message = [],
  onSetRating,
}) => {
  const [Rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const styleText = {
    margin: "0",
    lineheigth: "1",
    color,
    fontSize: `${size / 1.5}px`,
  };
  function handelRate(rate) {
    setRating(rate);
    onSetRating(rate);
  }
  return (
    <div style={containerStyle}>
      <div style={containerStar}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handelRate(i + 1)}
            onMousein={() => setTempRating(i + 1)}
            onMouseOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : Rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <div style={styleText}>
        <p>
          {message.length === maxRating
            ? message[tempRating ? tempRating - 1 : Rating - 1]
            : tempRating || Rating || ""}
        </p>
      </div>
    </div>
  );
};

export default Rating;
