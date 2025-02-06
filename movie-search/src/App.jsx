import { useState } from "react";
import SearchMovies from "./SearchMovies";
import DisplayMovies from "./DisplayMovies";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]); 
  const [error, setError] = useState("");

  const searchMovies = async (query) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=37fe945a&s=${query}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError("Inga filmer hittades. Försök med ett annat sökord.");
      }
    } catch (error) {
      setError("Ett fel inträffade vid hämtning av data.");
    }
  };

  return (
    <div className="app">
      <h1>Movie Search App</h1>
      <SearchMovies onSearch={searchMovies} />
      {error && <p className="error">{error}</p>}
      <DisplayMovies movies={movies} />
    </div>
  );
}

export default App;