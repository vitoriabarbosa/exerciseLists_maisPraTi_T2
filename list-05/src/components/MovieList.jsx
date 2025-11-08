import MovieCard from "./MovieCard";

export default function MovieList({ movies, onFavorite, favorites }) {
  if (!movies.length)
    return <p className="text-center">Nenhum filme encontrado.</p>;

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onFavorite={onFavorite}
          isFavorite={favorites.some((fav) => fav.id === movie.id)}
        />
      ))}
    </div>
  );
}
