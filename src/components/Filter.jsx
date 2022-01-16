import "./Filter.css";
import { useState, useEffect, useContext, useRef } from "react";
import FilterItem from "./FilterItem";
import IconFilter from "./icons/IconFilter";
import IconClearFilter from "./icons/IconClearFilter";
import {
  getMovieGenres,
  getMoviesByGenre,
  getMovieList,
} from "../services/movies";
import AppContext from "../context/AppContext";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const fetchButton = useRef(null);
  const buttonPrimary = "#ff452b";
  const buttonDisabled = "#fa8072";

  const {
    setList,
    genres,
    setGenres,
    selected,
    setSelected,
    setRatio,
    pageCount,
    setPageCount
  } = useContext(AppContext);

  const [someFilterSelected, setSomeFilterSelected] = useState(
    selected.length > 0
  );

  const isChecked = (id) => selected.includes(id);

  const updateSelected = (id) => {
    const indexOfId = selected.indexOf(id);
    const newSelected = selected;
    if (indexOfId === -1) newSelected.push(id);
    else newSelected.splice(indexOfId, 1);
    setSelected(newSelected);
    updateButtonColor();
  };

  const updateButtonColor = () => {
    const someSelected = selected.length > 0;
    fetchButton.current.style.backgroundColor = buttonDisabled;
    if (someSelected) fetchButton.current.style.backgroundColor = buttonPrimary;
  };

  /* resets to default */
  const clearSelected = async () => {
    setSelected([]);
    resetState();
    fetchInitialMovieList();
    // this is used on the update after cleaning the list
    // otherwise will repeat the list on initial after clear
    setPageCount(2) 
  };

  const fetchSelected = () => {
    if (selected.length === 0) return;
    fetchMoviesByGenre();
    resetState();
  };

  const resetState = () => {
    window.scroll(0, 0);
    setIsOpen(false);
    setRatio(0.5);
  };

  const fetchInitialMovieList = async () => {
    const movieList = await getMovieList(1);
    setList(movieList.results);
  };
  /* movieList by genre */
  /* will reset scroll and page count */
  const fetchMoviesByGenre = async () => {
    const movieList = await getMoviesByGenre(selected, 1);
    setList(movieList.results);
  };

  /* genre list  */
  const fetchMoviesGenres = async () => {
    const genreList = await getMovieGenres(pageCount);
    setGenres(genreList.genres);
  };

  useEffect(() => {
    fetchMoviesGenres();
    updateButtonColor();
  }, []);

  return (
    <div className="filter">
      <button
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}>
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
          <button
            ref={fetchButton}
            className="primary"
            onClick={() => fetchSelected()}>
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
