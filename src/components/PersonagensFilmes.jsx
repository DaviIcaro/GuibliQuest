import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../styles/PersonagensFilmes.css';
import { MovieContext } from '../context/MovieContext';
import voltar from "../assets/icons8-voltar-64.png"

const PersonagensFilmes = () => {
    const { selectedMovie } = useContext(MovieContext);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if (selectedMovie) {
            const fetchCharacters = async () => {
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/credits?api_key=fca20a8a62aeb9dec3aca16c54e9a58f`);
                    const charactersData = response.data.cast.map((actor) => ({
                        id: actor.cast_id,
                        name: actor.character,
                        actor: actor.name,
                        profile_path: actor.profile_path
                    }));
                    setCharacters(charactersData.slice(0, 10));
                } catch (error) {
                    console.error('Erro ao buscar personagens', error);
                }
            };
            fetchCharacters();
        }
    }, [selectedMovie]);

    const handleOnClick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }); 
      }

    const backgroundImageUrl = selectedMovie && selectedMovie.backdrop_path
        ? `linear-gradient(to top, rgba(35, 35, 35, 1), rgba(0, 0, 0, 0) 20%), url(https://image.tmdb.org/t/p/w1280${selectedMovie.backdrop_path})`
        : 'linear-gradient(to top, rgba(35, 35, 35, 1), rgba(0, 0, 0, 0) 20%)';

    return (
        <div className="personagem-filme-container" style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='topo'>
                <h2 className='nome-filme'>Elenco de: "{selectedMovie ? selectedMovie.title : ''}"</h2>
                <Link to="/home" className="back-button" onClick={() => handleOnClick()}><img src={voltar} alt="voltar" width={23} height={23}/>Voltar</Link>
            </div>
            <div className="character-grid">
                {characters.map((character) => (
                    <div key={character.id} className="character-card">
                        <img src={`https://image.tmdb.org/t/p/w200${character.profile_path}`} alt={character.name} />
                        <div>
                            <h3>{character.name}</h3>
                            <p>Interpretado por: {character.actor}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonagensFilmes;
