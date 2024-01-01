import { useState } from "react";
import "../../index.css";
import { useEffect } from "react";
import Rating from "../Rating/Rating";
const KEY = "3a54b9aa";

function MovieDetail({
  selectedId,
  onCloseMovie,
  onAddWatchedMovie,
  userRating,
  setUserRating,
}) {
  const [movie, setMovie] = useState({});

  const {
    ImdbId: imdbId,
    Title: title,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    ImdbRating,
    Genre: genre,
    Plot: plot,
    Actors: actors,
    Director: director,
    Year: year,
  } = movie;

  useEffect(() => {
    async function getDetailMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      console.log(data);
      setMovie(data);
    }
    getDetailMovie();
  }, [selectedId]);
  function handelAdd() {
    const newWatchedMovie = {
      imdbId: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(ImdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatchedMovie(newWatchedMovie);
    onCloseMovie();
  }
  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;{" "}
        </button>
        <img src={poster} alt={`poster of ${movie}`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span>
            {ImdbRating}
            IMDB rating
          </p>
        </div>
      </header>

      <section>
        <div className="rating">
          <Rating maxRating={10} size={20} onSetRating={setUserRating} />
          {userRating > 0 && (
            <button className="btn-add" onClick={handelAdd}>
              Add Watched Movie
            </button>
          )}
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
}
export default MovieDetail;
