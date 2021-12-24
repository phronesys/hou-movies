import { createContext, useState } from "react"

const AppContext = createContext([]);

export function AppContextProvider({ children }) {
  const [list, setList] = useState([])

  return <AppContext.Provider value={{ list, setList }}>
    {children}
  </AppContext.Provider>
}

export default AppContext;