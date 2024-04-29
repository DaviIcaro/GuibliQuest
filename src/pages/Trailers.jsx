// Trailers.js
import React from "react";
import Navbar from "../components/Navbar";
import TrailerPlayer from '../components/TrailerPlayer';
import Filmes from '../components/Filmes';

import '../styles/TelaInicial.css';


const Trailers = () => {
    return (
        <div>
            <Navbar/>
            <TrailerPlayer />
            <Filmes />
        </div>
    )
}

export default Trailers;
