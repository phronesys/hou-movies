import { useState, useEffect } from "react";

const FilterItem = ({ id, name, updateSelected, clearSelected, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isChecked); // update locally
    updateSelected(id); // update on parent
  };

  /* if checkbox state changes on parent we update the value locally */
  useEffect(() => {
    setIsChecked(checked);
  }, [checked, clearSelected]);

  return (
    <li key={id}>
      <label>
        <input type="checkbox" onChange={handleClick} checked={isChecked} />
        <div>{name}</div>
      </label>
    </li>
  );
};

export default FilterItem;
