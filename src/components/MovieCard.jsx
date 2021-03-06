import "./MovieCard.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function MovieCard({
  title,
  releaseDate,
  posterPath,
  overview,
  genreIds,
  voteAverage,
}) {
  const { genres } = useContext(AppContext);
  const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const moviePoster = {
    backgroundImage: `url(${imageUrl})`,
  };
  const genreList = genreIds.map((id) => {
    const genre = genres.find((genre) => genre.id === id);
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
