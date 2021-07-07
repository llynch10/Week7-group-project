export default interface Movie {
  overview: string;
  title: string;
  id: number;
  releaseDate: string;
  genreIds: [];
  posterPath: string | null;
  backdropPath: string | null;
}
