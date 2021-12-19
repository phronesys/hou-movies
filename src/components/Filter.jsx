import "./Filter.css";
import { useState } from "react";

export default function Filter({ selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const addSelectedIndex = (id) => {
    console.log(selected);
    if (!Array.isArray(selected)) return;
    const indexOfSelected = selected.indexOf(id);
    const newSelected = selected;
    if (indexOfSelected === -1) newSelected.push(id)
    else newSelected.splice(indexOfSelected, 1)
    console.log(newSelected);
    setSelected(newSelected);
  };

  const list = () => {
    return movieGenres.map((genre, index) => (
      <li key={index}>
        <label>
          <input
            type="checkbox"
            checked={selected.includes(genre.id)}
            onChange={() => addSelectedIndex(genre.id)}
          />
          {selected.includes(genre.id)}
          <div>{genre.type}</div>
        </label>
      </li>
    ));
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
