import "./App.css";
import NavBar from "./layouts/NavBar";
import MovieList from "./layouts/MovieList";

function App() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
