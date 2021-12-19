import "./App.css";
import NavBar from "./layouts/NavBar";
import getMovieList from "./services/getMovieList";
import { useEffect, useState } from "react";

const moviesUrl = getMovieList("popular");

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(moviesUrl)
        .then((res) => res.json())
        .catch((error) => console.log(error));
      setData(res.results);
    };
    getMovies();
  }, []);

  console.log(data);

  return (
    <div className="main">
      <NavBar></NavBar>
      {data.length > 0 ? data.map((movie) => <div key={movie.id}>{movie.title}</div>) : ""}
    </div>
  );
}

export default App;
