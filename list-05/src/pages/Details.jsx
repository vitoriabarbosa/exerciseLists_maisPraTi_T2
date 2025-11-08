import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError("Erro ao carregar detalhes do filme.");
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [id]);

  if (loading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center">{error}</p>;
  if (!movie) return null;

  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=Sem+Imagem";

  return (
    <div className="details-container">
      <Link to="/" className="back-link">← Voltar</Link>

      <div className="details-content">
        <img src={imageUrl} alt={movie.title} className="details-poster" />
        
        <div className="details-info">
          <h1>{movie.title}</h1>
          <p className="year">{movie.release_date?.slice(0, 4)}</p>
          <p className="overview">{movie.overview}</p>

          <p><strong>Nota:</strong> ⭐ {movie.vote_average?.toFixed(1)}</p>
          <p><strong>Duração:</strong> {movie.runtime} min</p>

          <button
            onClick={() => toggleFavorite(movie)}
            className="btn-favorite"
          >
            {isFavorite ? "Remover dos Favoritos 💔" : "Adicionar aos Favoritos ❤️"}
          </button>
        </div>
      </div>
    </div>
  );
}
