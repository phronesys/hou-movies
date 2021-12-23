import "./Filter.css";
import { useState, useEffect, useContext } from "react";
import FilterItem from "./FilterItem";
import IconFilter from "./icons/IconFilter";
import IconClearFilter from "./icons/IconClearFilter";
import { getMovieGenres, getMoviesByGenre } from "../services/movies";
import AppContext from "../context/AppContext";
import GenresContext from "../context/GenresContext";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const {genres, setGenres} = useContext(GenresContext)
  const { list, setList } = useContext(AppContext);

  const updateSelected = (id) => {
    const indexOfId = selected.indexOf(id);
    const newSelected = selected;
    if (indexOfId === -1) newSelected.push(id);
    else newSelected.splice(indexOfId, 1);
    setSelected(newSelected);
  };

  const clearSelected = () => {
    setSelected([]);
    setIsOpen(false);
  };

  const loadSelected = () => {
    if (selected.length === 0) return;
    fetchMoviesByGenre();
    setIsOpen(false);
  };

  const isChecked = (id) => selected.includes(id);

  const fetchMoviesByGenre = async () => {
    const movieList = await getMoviesByGenre(selected);
    setList(movieList.results);
  };

  const fetchMovies = async () => {
    const genreList = await getMovieGenres();
    setGenres(genreList.genres);
  };

  useEffect(() => {
    fetchMovies();
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
            <button className="primary" onClick={() => loadSelected()}>
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
