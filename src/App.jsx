import "./App.css";
import NavBar from "./layouts/NavBar";
import MovieList from "./layouts/MovieList";
import { AppContextProvider } from "./context/AppContext";
import { GenresContextProvider } from "./context/GenresContext";
import { FilterContextProvider } from "./context/FilterContext";

function App() {
  return (
    <div className="main">
      <AppContextProvider>
        <GenresContextProvider>
          <FilterContextProvider>
            <NavBar></NavBar>
            <MovieList></MovieList>
          </FilterContextProvider>
        </GenresContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
