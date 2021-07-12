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
  const yearMaker = (releaseDate: any): string => {
    return releaseDate.slice(0, 4);
  };
  return (
    <div className="Result">
      <img
        className="backdrop"
        src={`https://image.tmdb.org/t/p/w500${aSingleMovie.backdrop_path}`}
        alt={`${aSingleMovie.title} Poster`}
      />
      <div className="info">
        <div>
          <h3>{aSingleMovie.title}</h3>
          <h4>{yearMaker(aSingleMovie.release_date)}</h4>
        </div>
        <div className="result-links">
          <Link className="details-link" to={`/detail/${aSingleMovie.id}`}>
            See Details
          </Link>
          {isFav(aSingleMovie.id) === false && (
            <button
              className="fav-button"
              onClick={() => addFavorite(aSingleMovie)}
            >
              <i className="fas fa-heart green"></i>
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
      </div>
    </div>
  );
};

export default Result;
