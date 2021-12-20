import "./MovieCard.css";
import getMovieImage from "../services/getMovieImage";
export default function MovieCard(context) {
  const { title, releaseDate, posterPath, overview, genreIds, voteAverage } =
    context;
  const image = getMovieImage(posterPath);
  const moviePoster = {
    backgroundImage: `url(${image})`,
  };

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
        <footer>
          {genreIds.map((id) => (
            <span key={id}>{id}</span>
          ))}
        </footer>
      </div>
    </div>
  );
}
