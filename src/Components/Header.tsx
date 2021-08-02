import { Link } from "react-router-dom";
import "./Header.css";
import lgGreenLogo from "../Assets/lgGreenLogo.svg";

interface Props {
  setModal: (boolean: boolean) => void;
}

const Header = ({ setModal }: Props) => {
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
            <Link className="nav-links" to="/">
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
