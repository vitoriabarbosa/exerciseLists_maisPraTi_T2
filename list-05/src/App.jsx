import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import { FavoritesProvider, FavoritesContext } from "./context/FavoritesContext";
import { useContext } from "react";

function AppContent() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <>
      <header>
        <Link to="/">🎬 TMDB App</Link>
        <nav>
          <Link to="/">Buscar</Link>
          <Link to="/favorites">Favoritos ({favorites.length})</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home onFavorite={toggleFavorite} favorites={favorites} />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <AppContent />
      </Router>
    </FavoritesProvider>
  );
}
