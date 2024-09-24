import React from "react";
import Navbar from "../components/Navbar";
import TrailerPlayer from '../components/TrailerPlayer';
import Filmes from '../components/Filmes';

import '../styles/TelaInicial.css';

const FixedNavbar = () => {
    return (
        <div style={{ position: 'sticky', top: 0, width: '100%', zIndex: 1000, backgroundColor: 'rgb(43, 43, 43, 0.85)',  backdropFilter: 'blur(10px)'}}>
            <Navbar />
        </div>
    );
};

const Trailers = () => {
    return (
        <div>
            <FixedNavbar/>
            <TrailerPlayer />
            <Filmes />
        </div>
    )
}

export default Trailers;
