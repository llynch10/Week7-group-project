import { useContext } from "react";
import FavoritesContext from "../Context/FavoritesContext";
import Movie from "../Models/Movie";
import "./Result.css";

interface Props {
  aSingleMovie: Movie;
}

const Result = ({ aSingleMovie }: Props) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  return (
    <div className="Result">
      <h3>{aSingleMovie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${aSingleMovie.backdrop_path}`}
        alt={`${aSingleMovie.title} Poster`}
      />
      <button onClick={() => addFavorite(aSingleMovie)}>
        Add to Favorites
      </button>
      <button onClick={() => removeFavorite(aSingleMovie.id)}>
        Remove from Favorites
      </button>
    </div>
  );
};

export default Result;
