import { ReactNode, useState } from "react";
import Movie from "../Models/Movie";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie): void => {
    setFavorites((prev) => [movie, ...prev]);
  };

  const removeFavorite = (id: number): void => {
    const index: number = favorites.findIndex((item) => item.id === id);
    setFavorites((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
