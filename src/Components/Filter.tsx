import { FormEvent, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Genre from "../Models/Genre";
import "./Filter.css";

interface Props {
  modal: boolean;
  setModal: (boolean: boolean) => void;
  genres: Genre[];
}

let yearsArray: number[] = [];

for (let i = 2021; i > 1900; i--) {
  yearsArray.push(i);
}

const Filter = ({ modal, setModal, genres }: Props) => {
  const [year, setYear] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const queryStringParameter: any = {};
    if (year) {
      queryStringParameter.year = year;
    }
    if (genre) {
      queryStringParameter.genre = genre;
    }
    if (rating) {
      queryStringParameter.rating = rating;
    }
    history.push("/?" + new URLSearchParams(queryStringParameter).toString());
  };

  return (
    <div className={"Filter " + (modal ? "show" : "")}>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="filter-header">Filter Movies By...</h2>
          <div className="year">
            <label className="labels" htmlFor="year">
              Year:
            </label>
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
          </div>
          <div className="genre">
            <label className="labels" htmlFor="genre">
              Genre:
            </label>
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
          </div>
          <h2 className="filter-header">Rating</h2>
          <div className="rating-radio">
            <div>
              <label htmlFor="any">Any:</label>
              <input
                type="radio"
                name="rating"
                id="any"
                value="any"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="g">G:</label>
              <input
                type="radio"
                name="rating"
                id="g"
                value="G"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="pg">PG:</label>
              <input
                type="radio"
                name="rating"
                id="pg"
                value="PG"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="pg-13">PG-13:</label>
              <input
                type="radio"
                name="rating"
                id="pg13"
                value="PG-13"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="r">R:</label>
              <input
                type="radio"
                name="rating"
                id="r"
                value="R"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>
          <button className="buttons" onClick={() => setModal(false)}>
            Discover!
          </button>
        </form>
        <button className="buttons" onClick={() => setModal(false)}>
          Close Form
        </button>
      </div>
    </div>
  );
};

export default Filter;
