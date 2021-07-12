import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Movie from "../Models/Movie";
import { getMovieDetail } from "../Services/TMDBApiService";
import "./Detail.css";

interface RouteParams {
  id: string;
}

const Detail = () => {
  const movieId: number = parseInt(useParams<RouteParams>().id);
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    getMovieDetail(movieId).then((data) => {
      setMovie(data);
    });
  });
  const yearMaker = (releaseDate: any): string => {
    if (releaseDate) {
      return releaseDate.slice(0, 4);
    } else {
      return "";
    }
  };
  return (
    <div className="Detail">
      <header className="DetailHeader">
        <h2>
          {movie?.title} ({yearMaker(movie?.release_date)})
        </h2>
      </header>
      <div className="DetailContents">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt=""
        />
        <p>Overview: {movie?.overview}</p>
        <Link className="link" to="/">
          Go Home
        </Link>
        <Link className="link" to="/favorites">
          View Favorites
        </Link>
      </div>
    </div>
  );
};

export default Detail;
