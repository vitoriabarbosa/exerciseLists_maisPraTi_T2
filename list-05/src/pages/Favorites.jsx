import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieList from "../components/MovieList";

export default function Favorites() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h2 className="text-center">❤️ Meus Favoritos</h2>
      {favorites.length > 0 ? (
        <MovieList
          movies={favorites}
          onFavorite={toggleFavorite}
          favorites={favorites}
        />
      ) : (
        <p className="text-center">Nenhum filme favorito ainda.</p>
      )}
    </div>
  );
}
