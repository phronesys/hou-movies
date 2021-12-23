import "./App.css";
import NavBar from "./layouts/NavBar";
import MovieList from "./layouts/MovieList";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <div className="main">
      <AppContextProvider>
        <NavBar></NavBar>
        <MovieList></MovieList>
      </AppContextProvider>
    </div>
  );
}

export default App;
