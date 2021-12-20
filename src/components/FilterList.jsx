import { useState } from "react";

const FilterList = ({ genres, handleParent }) => {
  const [selected, setSelected] = useState(
    new Array(genres.length).fill(false)
  );
  const updateSelected = (value, index) => {
    const newSelected = selected;
    newSelected[index] = value;
    setSelected(newSelected);
    handleParent(selected);
  };
  return genres.map(({ id, name }) => {
    return (
      <li key={id}>
        <label>
          <input type="checkbox" onChange={() => updateSelected(id)} />
          <div>{name}</div>
        </label>
      </li>
    );
  });
};

export default FilterList;
