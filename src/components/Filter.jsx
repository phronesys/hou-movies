import "./Filter.css";
import { useState, useEffect } from "react";
import FilterList from "./FilterList";
import IconFilter from "./icons/IconFilter";
import getMovieGenres from "../services/getMovieGenres";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [genres, setGenres] = useState([]);
  const genresApiUrl = getMovieGenres();

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(genresApiUrl)
        .then((res) => res.json())
        .catch((error) => console.log(error));
      setGenres(res.genres);
    };
    fetchGenres();
  }, []);

  const handleParent = (...args) => {
    console.log(args);
  };

  return (
    <div className="filter">
      <button
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter <IconFilter></IconFilter>
      </button>
      <ul className={isOpen ? "list open" : "list"}>
        <FilterList genres={genres} handleParent={handleParent} />
      </ul>
    </div>
  );
}
