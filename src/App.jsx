import "./App.css";
import NavBar from "./layouts/NavBar";
import MovieList from "./layouts/MovieList";
import { AppContextProvider } from "./context/AppContext";
import { GenresContextProvider } from "./context/GenresContext";

function App() {
  return (
    <div className="main">
      <AppContextProvider>
        <GenresContextProvider>
          <NavBar></NavBar>
          <MovieList></MovieList>
        </GenresContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
