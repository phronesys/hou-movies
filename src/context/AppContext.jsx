import { createContext, useState } from "react";

const AppContext = createContext([]);

export function AppContextProvider({ children }) {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [genres, setGenres] = useState([]);
  const [ratio, setRatio] = useState(0.5);
  const [pageCount, setPageCount] = useState(1);

  const globalContext = {
    list,
    setList,
    selected,
    setSelected,
    genres,
    setGenres,
    ratio,
    setRatio,
    pageCount,
    setPageCount,
  };

  return (
    <AppContext.Provider value={globalContext}>{children}</AppContext.Provider>
  );
}

export default AppContext;
