import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

test("renders FlicFavs title", () => {
  const spy = jest.fn();
  render(
    <Router>
      <Header setModal={spy} setGenre={spy} setYear={spy} setRating={spy} />
    </Router>
  );
  const title = screen.getByText(/Flic/i);
  expect(title).toBeInTheDocument();
});

test("renders FlicFavs title", () => {
  const spy = jest.fn();
  render(
    <Router>
      <Header setModal={spy} setGenre={spy} setYear={spy} setRating={spy} />
    </Router>
  );
  const title = screen.getByText(/Favs/i);
  expect(title).toBeInTheDocument();
});
