import React from "react";
import { render, screen } from "@testing-library/react";
import ResultsList from "./ResultsList";
import Movie from "../Models/Movie";
import { BrowserRouter as Router, Route } from "react-router-dom";

const movie1: Movie = {
  overview: "xxxxxxxxxx",
  title: "title1",
  id: 1,
  release_date: "1",
  genre_ids: [],
  poster_path: "xxxxxxx",
  backdrop_path: "xxxxxxxx",
  certification_country: "xxxxxxxx",
  certification: "xxxxxxxxx",
};

const movie2: Movie = {
  overview: "xxxxxxxxxx",
  title: "title2",
  id: 2,
  release_date: "1",
  genre_ids: [],
  poster_path: "xxxxxxx",
  backdrop_path: "xxxxxxxx",
  certification_country: "xxxxxxxx",
  certification: "xxxxxxxxx",
};

const movie3: Movie = {
  overview: "xxxxxxxxxx",
  title: "title3",
  id: 2,
  release_date: "1",
  genre_ids: [],
  poster_path: "xxxxxxx",
  backdrop_path: "xxxxxxxx",
  certification_country: "xxxxxxxx",
  certification: "xxxxxxxxx",
};

const movieArray: Movie[] = [movie1, movie2, movie3];

test("renders results list", () => {
  render(
    <Router>
      <ResultsList movies={movieArray} />
    </Router>
  );
  const element = screen.getByRole("list");
  expect(element).toBeInTheDocument();
});

test("renders results list item", () => {
  render(
    <Router>
      <ResultsList movies={movieArray} />
    </Router>
  );
  const element = screen.getByRole("heading", { name: "title1" });
  expect(element).toBeInTheDocument();
});

test("renders results list item", () => {
  render(
    <Router>
      <ResultsList movies={movieArray} />
    </Router>
  );
  const element = screen.getByRole("heading", { name: "title2" });
  expect(element).toBeInTheDocument();
});

test("renders results list item", () => {
  render(
    <Router>
      <ResultsList movies={movieArray} />
    </Router>
  );
  const element = screen.getByRole("heading", { name: "title3" });
  expect(element).toBeInTheDocument();
});
