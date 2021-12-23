import "./MovieList.css";
import { getMovieList } from "../services/movies";
import MovieCard from "../components/MovieCard";
import { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";

const MovieList = () => {
  /* using useContext instead of useState 
  to store the global movie list */
  const { list, setList } = useContext(AppContext);

  useEffect(() => {
    if (list.length === 0) fetchMovies();

  }, [list, setList]);

  const fetchMovies = async () => {
    const movies = await getMovieList();
    setList(movies.results);
  };

  return (
    <section id="movie-list">
      {list && list.length > 0 ? (
        list.map((movie) => {
          const {
            id,
            title,
            original_title,
            release_date,
            backdrop_path,
            poster_path,
            overview,
            genre_ids,
            vote_average,
          } = movie;
          return (
            <MovieCard
              key={id}
              id={id}
              title={title}
              originalTitle={original_title}
              releaseDate={release_date}
              backdropPath={backdrop_path}
              posterPath={poster_path}
              overview={overview}
              genreIds={genre_ids}
              voteAverage={vote_average}
            />
          );
        })
      ) : (
        <div id="loading">Loading movies, or a bug 🐛</div>
      )}
    </section>
  );
};

export default MovieList;
