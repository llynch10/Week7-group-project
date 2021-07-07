import React, { useEffect, useState } from "react";
import Genre from "../Models/Genre";
import Movie from "../Models/Movie";
import { getMovieGenres, getTrendingMovies } from "../Services/TMDBApiService";
import Filter from "./Filter";
import Header from "./Header";
import "./Main.css";
import ResultsList from "./ResultsList";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    getMovieGenres().then((data) => {
      setGenres(data.genres);
    });
    getTrendingMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <div className="Main">
      <Filter genres={genres} setModal={setModal} modal={modal} />
      <Header setModal={setModal} />
      <ResultsList movies={movies} />
    </div>
  );
};

export default Main;
