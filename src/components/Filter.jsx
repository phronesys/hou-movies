import "./Filter.css";
import { useState } from "react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const list = filterList();
  return (
    <div className="filter">
      <button
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
      </button>
      {isOpen && <ul className="list">{list}</ul>}
    </div>
  );
}

function filterList() {
  return movieGenres.map((genre, index) => (
    <li key={index}>
      <label>
        <input type="checkbox" />
        <div>{genre.type}</div>
      </label>
    </li>
  ));
}

const movieGenres = [
  {
    type: "Action",
    id: "",
  },
  {
    type: "Suspense",
    id: "",
  },
  {
    type: "Thriller",
    id: "",
  },
  {
    type: "Fantasy",
    id: "",
  },
  {
    type: "Comedy",
    id: "",
  },
  {
    type: "Romance",
    id: "",
  },
  {
    type: "Anime",
    id: "",
  },
];
