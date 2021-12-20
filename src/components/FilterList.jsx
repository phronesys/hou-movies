import { useState } from "react";

const FilterList = ({ movieGenres, handleParent }) => {
  const [selected, setSelected] = useState(
    new Array(movieGenres.length).fill(false)
  );
  const updateSelected = (value, index) => {
    const newSelected = selected;
    newSelected[index] = value;
    setSelected(newSelected);
    handleParent(selected);
  };
  return movieGenres.map((genre, index) => {
    return (
      <li key={index}>
        <label>
          <input
            type="checkbox"
            onChange={(event) => updateSelected(event.target.checked, index)}
          />
          <div>{genre.type}</div>
        </label>
      </li>
    );
  });
};

export default FilterList;
