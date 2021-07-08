import FavoritesContext from "../Context/FavoritesContext";
import "./Favorites.css";
import ResultsList from "./ResultsList";
import { useContext } from "react";

const Favorites = () => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <ResultsList movies={favorites} />
    </div>
  );
};

export default Favorites;
