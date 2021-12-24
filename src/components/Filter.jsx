import "./Filter.css";
import { useState, useEffect, useContext } from "react";
import FilterItem from "./FilterItem";
import IconFilter from "./icons/IconFilter";
import IconClearFilter from "./icons/IconClearFilter";
import { getMovieGenres, getMoviesByGenre, getMovieList } from "../services/movies";
import AppContext from "../context/AppContext";
import GenresContext from "../context/GenresContext";
import FilterContext from "../context/FilterContext";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const {selected, setSelected} = useContext(FilterContext)
  const {genres, setGenres} = useContext(GenresContext)
  const { list, setList } = useContext(AppContext);

  const updateSelected = (id) => {
    const indexOfId = selected.indexOf(id);
    const newSelected = selected;
    if (indexOfId === -1) newSelected.push(id);
    else newSelected.splice(indexOfId, 1);
    setSelected(newSelected);
  };

  const clearSelected = async () => {
    setSelected([]);
    fetchMovieList();
    setIsOpen(false);
  };

  const fetchSelected = () => {
    if (selected.length === 0) return;
    fetchMoviesByGenre();
    setIsOpen(false);
  };

  const isChecked = (id) => selected.includes(id);

  const fetchMovieList = async () => {
    const movieList = await getMovieList();
    setList(movieList.results)
  } 

  const fetchMoviesByGenre = async () => {
    const movieList = await getMoviesByGenre(selected);
    setList(movieList.results);
  };

  const fetchMoviesGenres = async () => {
    const genreList = await getMovieGenres();
    setGenres(genreList.genres);
  };

  useEffect(() => {
    fetchMoviesGenres();
  }, []);

  return (
      <div className="filter">
        <button
          className={isOpen ? "open" : ""}
          onClick={() => setIsOpen(!isOpen)}
        >
          Filter <IconFilter></IconFilter>
        </button>
        <div className={isOpen ? "list open" : "list"}>
          <ul>
            {genres.map(({ id, name }) => (
              <FilterItem
                key={id}
                name={name}
                id={id}
                updateSelected={updateSelected}
                checked={isChecked(id)}
                clearSelected={clearSelected}
              />
            ))}
          </ul>
          <footer>
            <button className="primary" onClick={() => fetchSelected()}>
              Fetch
            </button>
            <button onClick={() => clearSelected()}>
              Clear all
              <IconClearFilter></IconClearFilter>
            </button>
          </footer>
        </div>
      </div>
  );
}
