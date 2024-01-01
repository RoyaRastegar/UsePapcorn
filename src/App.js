import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Search from "./Components/Navbar/Search";
import NumResult from "./Components/Navbar/NumResult";
import { useEffect, useState } from "react";
const KEY = "3a54b9aa";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("interstellar");
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const [selectedId, setSelectedId] = useState("tt0816692");
  const [userRating, setUserRating] = useState("");
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem("Watched");
    return JSON.parse(storedValue);
  });
  useEffect(() => {
    localStorage.setItem("Watched", JSON.stringify(watched));
  }, [watched]);

  useEffect(
    function () {
      async function fetchMovie() {
        try {
          setIsLoding(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok)
            throw new error("somthing went wrong with fetching movies");
          const data = await res.json();
          if (data.Response === "false") throw new error("movies is not find");
          setMovies(data.Search);
          console.log(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoding(true);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovie();
    },
    [query, error]
  );
  function handelSelectedMovi(id) {
    setSelectedId(id);
  }
  function handelClosedMovie() {
    setSelectedId(null);
  }
  function handleWatchedMovie(movie) {
    setWatched([...watched, movie]);
  }
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movie={movies} />
      </Navbar>
      {isLoding && (
        <Main
          movies={movies}
          watched={watched}
          selectedId={selectedId}
          onSelectedMovi={handelSelectedMovi}
          onCloseMovie={handelClosedMovie}
          onAddWatchedMovie={handleWatchedMovie}
          userRating={userRating}
          setUserRating={setUserRating}
        />
      )}
    </>
  );
}
