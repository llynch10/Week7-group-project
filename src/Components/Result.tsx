import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../Context/FavoritesContext";
import Movie from "../Models/Movie";
import "./Result.css";

interface Props {
  aSingleMovie: Movie;
}

const Result = ({ aSingleMovie }: Props) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const isFav = (id: number): boolean => {
    return favorites.some((item) => item.id === id);
  };
  return (
    <div className="Result">
      <h3>{aSingleMovie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${aSingleMovie.backdrop_path}`}
        alt={`${aSingleMovie.title} Poster`}
      />
      <Link to={`/detail/${aSingleMovie.id}`}>See Details</Link>
      {isFav(aSingleMovie.id) === false && (
        <button
          className="fav-button"
          onClick={() => addFavorite(aSingleMovie)}
        >
          <i className="fas fa-heart"></i>
        </button>
      )}
      {isFav(aSingleMovie.id) && (
        <button
          className="fav-button"
          onClick={() => removeFavorite(aSingleMovie.id)}
        >
          <i className="fas fa-heart color"></i>
        </button>
      )}
    </div>
  );
};

export default Result;
