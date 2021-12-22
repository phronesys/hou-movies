import "./Filter.css";
import { useState, useEffect, useRef } from "react";
import FilterItem from "./FilterItem";
import IconFilter from "./icons/IconFilter";
import IconClearFilter from "./icons/IconClearFilter";
import getMovieGenresUrl from "../services/getMovieGenresUrl";

export default function Filter() {
  const genresApiUrl = getMovieGenresUrl();
  const [isOpen, setIsOpen] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState([]);

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
    console.log(selected);
    setIsOpen(false);
  };

  const isChecked = (id) => selected.includes(id);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(genresApiUrl)
        .then((res) => res.json())
        .catch((error) => console.log(error));
      setGenres(res.genres);
    };
    fetchGenres();
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
            />
          ))}
        </ul>
        <footer>
          <button
            className="primary"
            onClick={() => loadSelected()}
          >
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
