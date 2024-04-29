import React, { useContext, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { MovieContext } from '../context/MovieContext';
import { Link } from "react-router-dom";
import '../styles/TrailerPlayer.css'
import voltar from "../assets/icons8-voltar-64.png"

const TrailerPlayer = () => {
  const { selectedMovie } = useContext(MovieContext);
  const [videoId, setVideoId] = useState('');
  const TMDB_KEY = 'fca20a8a62aeb9dec3aca16c54e9a58f'; // Sua chave da API da TMDB

  useEffect(() => {
    if (selectedMovie) {
      // Buscar trailer na TMDB em português
      fetch(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?api_key=${TMDB_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
          // Tentar encontrar um trailer em português
          const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
          if (trailer) {
            setVideoId(trailer.key);
          } else {
            // Se não houver trailer em português, pode-se buscar em inglês como fallback
            fetch(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?api_key=${TMDB_KEY}&language=en-US`)
              .then(response => response.json())
              .then(data => {
                const fallbackTrailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                setVideoId(fallbackTrailer ? fallbackTrailer.key : null);
              });
          }
        })
        .catch(err => console.error('Erro ao buscar trailers', err));
    }
  }, [selectedMovie]);

  const opts = {
    height: '480',
    width: '854',
    playerVars: {
      autoplay: 1,  // Auto-play the video on load
      controls: 1,  // Show pause/play buttons in player
    },
  };

  return (
    <div className='trailer-player' style={{ backgroundImage: `linear-gradient(to top, rgba(35, 35, 35, 1), rgba(0, 0, 0, 0) 20%), url(https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='topo'>
        <Link to="/home" className="voltar"><img src={voltar} alt="voltar" width={23} height={23}/>Voltar</Link>
      </div>
      <div className='content'>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
        {videoId ? <YouTube videoId={videoId} opts={opts} /> : <p>Trailer não disponível</p>}
      </div>
    </div>
  );
};

export default TrailerPlayer;
