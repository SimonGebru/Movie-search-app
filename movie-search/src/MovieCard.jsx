function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
          alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
        <p>År: {movie.Year}</p>
        <p>IMDB ID: {movie.imdbID}</p>
      </div>
    );
  }
  
  export default MovieCard;