import { Link } from "react-router-dom";
import "./Header.css";
import greenLogo from "../Assets/greenLogo.png";

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
        <img className="logo" src={greenLogo} alt="FlicFavs Logo" />
      </div>
      <nav>
        <ul className="list">
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/">Trending</Link>
          </li>
          <li>
            <button onClick={() => setModal(true)}>Discover</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
