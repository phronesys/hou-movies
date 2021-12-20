import "./MovieCard.css";
import getMovieImageUrl from "../services/getMovieImageUrl";
export default function MovieCard(context) {
  const { title, releaseDate, posterPath, overview, genreIds, voteAverage } =
    context;
  const imageUrl = getMovieImageUrl(posterPath);
  const moviePoster = {
    backgroundImage: `url(${imageUrl})`,
  };
  const list = genreIds.map((id) => {

    return <span key={id}>{id}</span>
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
        <footer>{list}</footer>
      </div>
    </div>
  );
}
