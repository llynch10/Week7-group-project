import axios from "axios";
import GenreResponse from "../Models/GenresResponse";
import TMDBResponse from "../Models/TMDBResponse";

export const getTrendingMovies = (): Promise<TMDBResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/movie/day?", {
      params: { api_key: "1dd0a0d3d34d5026affd2de5072287b0" },
    })
    .then((response) => response.data);
};

export const getMovieGenres = (): Promise<GenreResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/genre/movie/list?", {
      params: {
        api_key: "1dd0a0d3d34d5026affd2de5072287b0",
        language: "en-US",
      },
    })
    .then((response) => response.data);
};
