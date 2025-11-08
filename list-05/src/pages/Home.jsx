import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { searchMovies } from "../api";

export default function Home({ onFavorite, favorites }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (newQuery, newPage = 1) => {
    setLoading(true);
    setError("");
    try {
      const data = await searchMovies(newQuery, newPage);
      setMovies(data.results || []);
      setTotalPages(data.total_pages);
      setQuery(newQuery);
      setPage(newPage);
    } catch (err) {
      setError("Erro ao buscar filmes. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center">Carregando...</p>}
      {error && <p className="text-center">{error}</p>}
      <MovieList movies={movies} onFavorite={onFavorite} favorites={favorites} />
      {movies.length > 0 && (
        <Pagination
          current={page}
          total={totalPages}
          onChange={(newPage) => handleSearch(query, newPage)}
        />
      )}
    </div>
  );
}
