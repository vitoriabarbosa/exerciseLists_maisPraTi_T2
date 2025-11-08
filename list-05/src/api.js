const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovies(query, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=pt-BR`
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message);
    return data;
  } catch (error) {
    console.error('Erro na busca de filmes:', error);
    throw error;
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.status_message);
    return data;
  } catch (error) {
    console.error('Erro ao buscar detalhes:', error);
    throw error;
  }
}
