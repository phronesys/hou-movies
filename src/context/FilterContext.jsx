import { createContext, useState } from "react";

const FilterContext = createContext([]);

export function FilterContextProvider({ children }) {
  const [selected, setSelected] = useState([]);

  return (
    <FilterContext.Provider value={{ selected, setSelected }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;