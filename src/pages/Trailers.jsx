// Trailers.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TrailerPlayer from '../components/TrailerPlayer';
import Filmes from '../components/Filmes';

import '../styles/TelaInicial.css';


const Trailers = () => {
    return (
        <div>
            <Navbar/>
            <Link to="/home" className="back-button">Voltar</Link>
            <TrailerPlayer />
            <Filmes />
        </div>
    )
}

export default Trailers;
