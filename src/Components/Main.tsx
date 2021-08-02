import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

	const query = new URLSearchParams(useLocation().search);
	const year = query.get("year");
	const genre = query.get("genre");
	const rating = query.get("rating");

	useEffect(() => {
		console.log("USE EFFECT");
		getMovieGenres().then((data) => {
			setGenres(data.genres);
		});
		if (!year && !genre && !rating) {
			getTrendingMovies().then((data) => {
				setMovies(data.results);
			});
		} else {
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
				// mainSetYear={setYear}
				// mainSetGenre={setGenre}
				// mainSetRating={setRating}
			/>
			<Header setModal={setModal} />
			<ResultsList movies={movies} />
		</div>
	);
};

export default Main;
