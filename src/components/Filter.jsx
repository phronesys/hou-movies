import "./Filter.css";
import { useState } from "react";

export default function Filter({ selected, addSelectedIndex }) {
  const [isOpen, setIsOpen] = useState(false);

  const list = () => {
    return movieGenres.map((genre, index) => {
      const checked = selected.includes(genre.id);
      console.log(checked);
      return (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => addSelectedIndex(genre.id)}
            />
            {selected.includes(genre.id)}
            <div>{genre.type}</div>
          </label>
        </li>
      );
    });
  };
  return (
    <div className="filter">
      <button
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
      </button>
      {isOpen && <ul className="list">{list()}</ul>}
    </div>
  );
}

const movieGenres = [
  {
    type: "Action",
    id: "1",
  },
  {
    type: "Suspense",
    id: "2",
  },
  {
    type: "Thriller",
    id: "3",
  },
  {
    type: "Fantasy",
    id: "4",
  },
  {
    type: "Comedy",
    id: "5",
  },
  {
    type: "Romance",
    id: "6",
  },
  {
    type: "Anime",
    id: "7",
  },
];
