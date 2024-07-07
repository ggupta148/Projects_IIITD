import React, { useState, createContext } from "react";
import Nav from "./Nav";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "250",
      id: "2234",
    },
    {
      name: "Marvels",
      price: "30",
      id: "2235",
    },
    {
      name: "Welcome",
      price: "250",
      id: "2236",
    },
  ]);
  return <MovieContext.Provider value={[movies,setMovies]}>{props.children}</MovieContext.Provider>;
};
