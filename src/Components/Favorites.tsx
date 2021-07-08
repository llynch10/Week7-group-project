import FavoritesContext from "../Context/FavoritesContext";
import "./Favorites.css";
import ResultsList from "./ResultsList";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Favorites = () => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <ResultsList movies={favorites} />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Favorites;
