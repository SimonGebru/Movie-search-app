import { useState } from "react";

function SearchMovies({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Sök efter en film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Sök</button>
    </form>
  );
}

export default SearchMovies;