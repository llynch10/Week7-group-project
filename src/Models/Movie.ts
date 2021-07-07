export default interface Movie {
  overview: string;
  title: string;
  id: number;
  release_date: string;
  genre_ids: [];
  poster_path: string | null;
  backdrop_path: string | null;
  certification_country: string;
  certification: string;
}
