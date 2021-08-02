import FavoritesContext from "../Context/FavoritesContext";
import "./Favorites.css";
import ResultsList from "./ResultsList";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <header className="favoritesHeader">
        <Link className="link" to="/">
          Back to Home
        </Link>
      </header>
      <ResultsList movies={favorites} />
    </div>
  );
};

export default Favorites;
