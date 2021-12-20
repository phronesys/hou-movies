import "./MovieList.css";
import getMovieListUrl from "../services/getMovieListUrl";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const MovieList = () => {
  const [data, setData] = useState([]);
  const popularMoviesUrl = getMovieListUrl("popular");

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(popularMoviesUrl)
        .then((res) => res.json())
        .catch((error) => console.log(error));
      setData(res.results);
    };
    fetchMovies();
  }, []);

  return (
    <section id="movie-list">
      {data && data.length > 0 ? (
        data.map((movie) => {
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
