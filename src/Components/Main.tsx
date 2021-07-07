import React, { useEffect, useState } from "react";
import Movie from "../Models/Movie";
import { getTrendingMovies } from "../Services/TMDBApiService";
import Filter from "./Filter";
import Header from "./Header";
import "./Main.css";
import ResultsList from "./ResultsList";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    getTrendingMovies().then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

  return (
    <div className="Main">
      <Filter setModal={setModal} modal={modal} />
      <Header setModal={setModal} />
      <ResultsList movies={movies} />
    </div>
  );
};

export default Main;
