import React from "react";
import "./App.css";
import Main from "./Components/Main";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import FavoritesContextProvider from "./Context/FavoritesContextProvider";
import Favorites from "./Components/Favorites";

function App() {
  return (
    <FavoritesContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </FavoritesContextProvider>
  );
}

export default App;
