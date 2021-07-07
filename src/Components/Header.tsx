import { Link } from "react-router-dom";
import "./Header.css";

interface Props {
  setModal: (boolean: boolean) => void;
}

const Header = ({ setModal }: Props) => {
  return (
    <div className="Header">
      <h1>FlicFavs</h1>
      <nav>
        <ul>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/">Trending</Link>
          </li>
          <button onClick={() => setModal(true)}>Discover</button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
