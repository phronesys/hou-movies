import {useRef} from "react";
const FilterList = ({ genres, updateSelected, selected }) => {
  return (
    <ul>
      {genres.map(({ id, name }) => {
        let value = selected.includes(id);
        const checked = useRef(value);
        console.log(checked.current);
        return (
          <li key={id}>
            <label>
              <input
                type="checkbox"
                onChange={() => {
                  updateSelected(id);
                }}
                checked={value}
              />
              <div>{name}</div>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterList;
