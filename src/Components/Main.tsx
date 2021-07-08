import React, { useEffect, useState } from "react";
import Genre from "../Models/Genre";
import Movie from "../Models/Movie";
import {
  getDiscoverMovies,
  getMovieGenres,
  getTrendingMovies,
} from "../Services/TMDBApiService";
import Filter from "./Filter";
import Header from "./Header";
import "./Main.css";
import ResultsList from "./ResultsList";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [year, setYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  useEffect(() => {
    getMovieGenres().then((data) => {
      setGenres(data.genres);
    });
    getTrendingMovies().then((data) => {
      setMovies(data.results);
    });
    if (year || genre || rating) {
      getDiscoverMovies({ year, genre, rating }).then((data) => {
        setMovies(data.results);
      });
    }
  }, [year, genre, rating]);

  return (
    <div className="Main">
      <Filter
        genres={genres}
        setModal={setModal}
        modal={modal}
        mainSetYear={setYear}
        mainSetGenre={setGenre}
        mainSetRating={setRating}
      />
      <Header setModal={setModal} />
      <ResultsList movies={movies} />
    </div>
  );
};

export default Main;
