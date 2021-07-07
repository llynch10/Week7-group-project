import "./Filter.css";

interface Props {
  modal: boolean;
  setModal: (boolean: boolean) => void;
}

let yearsArray: number[] = [];

for (let i = 2021; i > 1900; i--) {
  yearsArray.push(i);
}

const Filter = ({ modal, setModal }: Props) => {
  return (
    <div className={"Filter " + (modal ? "show" : "")}>
      <form className="form-box">
        <h2>Hi!</h2>
        <label htmlFor="year">Year</label>
        <select name="year" id="year">
          {yearsArray.map((eachYear) => {
            return <option value={eachYear}>{eachYear}</option>;
          })}
        </select>
        <label htmlFor="genre">Genre</label>
        <select name="genre" id="genre">
          <option value=""></option>
        </select>
        <h2>Rating</h2>
        <input type="radio" name="rating" id="g" value="G" />
        <label htmlFor="g">G</label>
        <input type="radio" name="rating" id="pg" value="PG" />
        <label htmlFor="pg">PG</label>
        <input type="radio" name="rating" id="pg13" value="PG-13" />
        <label htmlFor="pg13">PG-13</label>
        <input type="radio" name="rating" id="r" value="R" />
        <label htmlFor="r">R</label>
        <button onClick={() => setModal(false)}>Submit</button>
      </form>
    </div>
  );
};

export default Filter;
