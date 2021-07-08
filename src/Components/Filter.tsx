import { FormEvent, useState } from "react";
import Genre from "../Models/Genre";
import "./Filter.css";

interface Props {
  modal: boolean;
  setModal: (boolean: boolean) => void;
  genres: Genre[];
  mainSetYear: (year: string) => void;
  mainSetGenre: (genre: string) => void;
  mainSetRating: (rating: string) => void;
}

let yearsArray: number[] = [];

for (let i = 2021; i > 1900; i--) {
  yearsArray.push(i);
}

const Filter = ({
  modal,
  setModal,
  genres,
  mainSetYear,
  mainSetGenre,
  mainSetRating,
}: Props) => {
  const [year, setYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(rating, year, genre);
    mainSetYear(year);
    mainSetGenre(genre);
    mainSetRating(rating);
  };

  return (
    <div className={"Filter " + (modal ? "show" : "")}>
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Filter By</h2>
        <label htmlFor="year">Year</label>
        <select
          name="year"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value={""}>Select a Year</option>
          {yearsArray.map((eachYear) => (
            <option key={eachYear} value={eachYear}>
              {eachYear}
            </option>
          ))}
        </select>
        <label htmlFor="genre">Genre</label>
        <select
          name="genre"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value={""}>Select a Genre</option>
          {genres.map((eachGenre) => (
            <option key={eachGenre.id} value={eachGenre.id}>
              {eachGenre.name}
            </option>
          ))}
        </select>
        <h2>Rating</h2>
        <label htmlFor="any">Any</label>
        <input
          type="radio"
          name="rating"
          id="any"
          value="any"
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="g">G</label>
        <input
          type="radio"
          name="rating"
          id="g"
          value="G"
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="pg">PG</label>
        <input
          type="radio"
          name="rating"
          id="pg"
          value="PG"
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="pg-13">PG-13</label>
        <input
          type="radio"
          name="rating"
          id="pg13"
          value="PG-13"
          onChange={(e) => setRating(e.target.value)}
        />
        <label htmlFor="r">R</label>
        <input
          type="radio"
          name="rating"
          id="r"
          value="R"
          onChange={(e) => setRating(e.target.value)}
        />

        <button onClick={() => setModal(false)}>Submit</button>
      </form>
    </div>
  );
};

export default Filter;
