import "./MovieList.css";
import { getMovieList, getMoviesByGenre } from "../services/movies";
import MovieCard from "../components/MovieCard";
import { useEffect, useContext, useState, memo } from "react";
import AppContext from "../context/AppContext";
import FilterContext from "../context/FilterContext";
import useWindowPosition from "../hooks/useWindowPosition";

const MovieList = () => {
  /* using useContext instead of useState 
  to store the global movie list */
  const { list, setList } = useContext(AppContext);
  const { selected } = useContext(FilterContext);
  const [pageCount, setPageCount] = useState(1);
  const windowPosition = useWindowPosition();

  /* detect desired position */
  useEffect(() => {
    if (window.scrollY > document.body.scrollHeight * 0.75) handleMovieFetch();
  }, [windowPosition]);

  /* will fetch initial movies on mounted */
  useEffect(() => {
    if (list.length === 0) fetchMovies();
  }, []);

  /* will fetch filtered or will do normal fetch */
  const handleMovieFetch = () => {
    const someFilterSelected = selected.length > 0;
    someFilterSelected ? appendFetchFilteredMovies() : appendFetchMovies();
  };

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

  const renderList = list.map((movie, index) => (
    <MovieCard
      key={index}
      id={movie.id}
      title={movie.title}
      originalTitle={movie.original_title}
      releaseDate={movie.release_date}
      backdropPath={movie.backdrop_path}
      posterPath={movie.poster_path}
      overview={movie.overview}
      genreIds={movie.genre_ids}
      voteAverage={movie.vote_average}
    />
  ));

  return (
    <section id="movie-list">
      {list && list.length > 0 ? (
        renderList
      ) : (
        <div id="loading">Loading movies, or a bug 🐛</div>
      )}
    </section>
  );
};

export default memo(MovieList);
