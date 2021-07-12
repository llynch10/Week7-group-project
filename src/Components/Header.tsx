import { Link } from "react-router-dom";
import "./Header.css";
import lgGreenLogo from "../Assets/lgGreenLogo.svg";

interface Props {
  setModal: (boolean: boolean) => void;
  setYear: (year: string) => void;
  setGenre: (genre: string) => void;
  setRating: (rating: string) => void;
}

const Header = ({ setModal, setYear, setGenre, setRating }: Props) => {
  const goHome = () => {
    setYear("");
    setGenre("");
    setRating("");
  };

  return (
    <div className="Header">
      <div className="title-div">
        <h1 className="title">
          <span className="white">Flic</span>Favs
        </h1>
        <img className="logo" src={lgGreenLogo} alt="FlicFavs Logo" />
      </div>
      <nav>
        <ul className="list">
          <li>
            <Link className="nav-links" to="/favorites">
              Favorites
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/" onClick={() => goHome()}>
              Trending
            </Link>
          </li>
          <li>
            <button className="discover" onClick={() => setModal(true)}>
              Discover
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
