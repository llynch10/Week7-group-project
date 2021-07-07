import Movie from "../Models/Movie";
import "./Result.css";

interface Props {
  aSingleMovie: Movie;
}

const Result = ({ aSingleMovie }: Props) => {
  console.log(aSingleMovie);
  return (
    <div className="Result">
      <h3>{aSingleMovie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${aSingleMovie.backdrop_path}`}
        alt={`${aSingleMovie.title} image`}
      />
    </div>
  );
};

export default Result;
