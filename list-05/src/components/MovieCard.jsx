import { Link } from "react-router-dom";

export default function MovieCard({ movie, onFavorite, isFavorite }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/200x300?text=Sem+Imagem";

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} className="poster" />
      <div className="card-body">
        <h3>{movie.title}</h3>
        <p className="year">{movie.release_date?.slice(0, 4)}</p>
        <div className="card-actions">
          <Link to={`/details/${movie.id}`} className="btn-link">
            Detalhes
          </Link>
          <button onClick={() => onFavorite(movie)} className="btn-fav">
            {isFavorite ? "💔" : "❤️"}
          </button>
        </div>
      </div>
    </div>
  );
}
