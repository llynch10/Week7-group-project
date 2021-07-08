import { createContext } from "react";
import Movie from "../Models/Movie";

interface FavoritesContextModel {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
}

const defaultValue: FavoritesContextModel = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

const FavoritesContext = createContext(defaultValue);

export default FavoritesContext;
