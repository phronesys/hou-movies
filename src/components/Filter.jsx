import "./Filter.css";
import { useState, useEffect } from "react";
import FilterList from "./FilterList";
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
    return selected.includes(id);
  };
  const clearSelected = () => {
    setSelected([]);
    console.log(selected);
  }

  const loadSelected = () => {
    console.log(selected);
  }

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
        <FilterList
          genres={genres}
          updateSelected={updateSelected}
          selected={selected}
        />
        <footer>
          <button className="primary" onClick={() => loadSelected()}>
            Done
          </button>
          <button onClick={() => clearSelected()}>
            Clear
            <IconClearFilter></IconClearFilter>
          </button>
        </footer>
      </div>
    </div>
  );
}
