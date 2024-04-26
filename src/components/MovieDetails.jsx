import React from 'react';

const MovieDetails = ({ movie, onPlayTrailer }) => {
  return (
    <div className="selected-movie-display">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p><strong>Lançamento:</strong> {movie.release_date}</p>
        <button onClick={onPlayTrailer}>Assistir Trailer</button>
      </div>
    </div>
  );
};

export default MovieDetails;
