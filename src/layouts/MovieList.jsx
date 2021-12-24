import "./MovieList.css";
import { getMovieList, getMoviesByGenre } from "../services/movies";
import MovieCard from "../components/MovieCard";
import { useEffect, useContext, useState } from "react";
import AppContext from "../context/AppContext";
import FilterContext from "../context/FilterContext";
import useWindowPosition from "../hooks/useWindowPosition";

const MovieList = () => {
  /* using useContext instead of useState 
  to store the global movie list */
  const { list, setList } = useContext(AppContext);
  const { selected } = useContext(FilterContext);
  const [pageCount, setPageCount] = useState(1);
  const [maxScrollY, setMaxScrollY] = useState(0);
  const windowPosition = useWindowPosition();

  useEffect(() => {
    const noFilters = selected.length === 0;
    setMaxScrollY(document.body.scrollHeight);
    if (list.length === 0) fetchMovies();
    if (maxScrollY < windowPosition + 1500 && noFilters) {
      appendFetchMovies();
    } else if (!noFilters) {
      appendFetchFilteredMovies();
    }
  }, [windowPosition]);

  const fetchMovies = async () => {
    const movies = await getMovieList();
    setList(movies.results);
  };
  const appendMoviesToList = (movies) => {
    const newList = [...list, ...movies.results];
    setList(newList);
    setPageCount(pageCount + 1);
  };
  const appendFetchMovies = async () => {
    const newMovies = await getMovieList(pageCount);
    appendMoviesToList(newMovies);
  };
  const appendFetchFilteredMovies = async () => {
    const newMovies = await getMoviesByGenre(selected, pageCount);
    appendMoviesToList(newMovies);
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
