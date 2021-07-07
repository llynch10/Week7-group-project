import { useEffect, useState } from "react";
import Movie from "../Models/Movie";
import { getTrendingMovies } from "../Services/TMDBApiService";
import "./Main.css";
import ResultsList from "./ResultsList";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getTrendingMovies().then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);
  return (
    <div className="Main">
      <ResultsList movies={movies} />
    </div>
  );
};

export default Main;
