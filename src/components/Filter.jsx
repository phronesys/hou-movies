import "./Filter.css";
import { useState } from "react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    new Array(movieGenres.length).fill(false)
  );
  console.log(selected);
  const updateSelected = (value, index) => {
    const newSelected = selected;
    newSelected[index] = value;
    setSelected(newSelected);
  };

  return (
    <div className="filter">
      <button
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
      </button>
      {isOpen && (
        <ul className="list">
          {movieGenres.map((genre, index) => {
            return (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={selected[index]}
                    onChange={(event) =>
                      updateSelected(event.target.checked, index)
                    }
                  />
                  <div>{genre.type}</div>
                </label>
              </li>
            );
          })}
        </ul>
      )}
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
