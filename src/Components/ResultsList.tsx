import Movie from "../Models/Movie";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  movies: Movie[];
}

const ResultsList = ({ movies }: Props) => {
  return (
    <div className="ResultsList">
      <ul className="movie-list">
        {movies.map((movie) => {
          return <Result aSingleMovie={movie} key={movie.id} />;
        })}
      </ul>
    </div>
  );
};

export default ResultsList;
