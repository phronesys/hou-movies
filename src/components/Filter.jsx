import "./Filter.css";
import { useState } from "react";
import FilterList from "./FilterList";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleParent = (...args) => {
    console.log(args);
  };

  return (
    <div className="filter">
      <button
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
      </button>
      <ul className={isOpen ? "list open" : "list"}>
        <FilterList movieGenres={movieGenres} handleParent={handleParent} />
      </ul>
    </div>
  );
}

const movieGenres = [
  {
    type: "Action",
    id: "open-source",
  },
  {
    type: "Suspense",
    id: "digital",
  },
  {
    type: "Thriller",
    id: "online",
  },
  {
    type: "Fantasy",
    id: "cross-platform",
  },
  {
    type: "Comedy",
    id: "1080p",
  },
  {
    type: "Romance",
    id: "cross-platform",
  },
  {
    type: "Anime",
    id: "open-source",
  },
];
