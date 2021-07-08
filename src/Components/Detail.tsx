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
  return (
    <div className="Detail">
      <h2>{movie?.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt=""
      />
      <p>{movie?.release_date}</p>
      <p>{movie?.certification}</p>
      <p>{movie?.overview}</p>
      <Link to="/">Back to Home</Link>
      <Link to="/favorites">Back to Favorites</Link>
    </div>
  );
};

export default Detail;
