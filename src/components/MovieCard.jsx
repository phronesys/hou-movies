import "./MovieCard.css";
import { useEffect, useState } from "react";
import { getGenreById } from "../services/movies";

export default function MovieCard({
  title,
  releaseDate,
  posterPath,
  overview,
  genreIds,
  voteAverage,
}) {
  const imageUrl = `https://image.tmdb.org/t/p/w300/${posterPath}`;
  const moviePoster = {
    backgroundImage: `url(${imageUrl})`,
  };
  const genreList = genreIds.map((id) => {
    const [genre, setGenre] = useState([]);
    useEffect(() => {
      const fetchGenre = async () => {
        const result = await getGenreById(id);
        setGenre(result);
      };
      fetchGenre();
    }, []);
    return <span key={id}>{genre.name}</span>;
  });

  return (
    <div className="movie">
      <div className="image" style={moviePoster} />
      <div className="content">
        <h1 title={title}>{title}</h1>
        <div className="info">
          <div className="release">
            {new Date(releaseDate).toLocaleDateString()}
          </div>
          <div className="votes">{voteAverage}</div>
        </div>
        {/* <p>{overview}</p{}> */}
        <footer>{genreList}</footer>
      </div>
    </div>
  );
}
