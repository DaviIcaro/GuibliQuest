import React from "react";
import Navbar from '../components/Navbar';
import Filmes from '../components/Filmes';
import FilmeSelecionado from "../components/FilmeSelecionado";

const FixedNavbar = () => {
    return (
        <div style={{ position: 'sticky', top: 0, width: '100%', zIndex: 1000, backgroundColor: 'rgb(43, 43, 43, 0.85)',  backdropFilter: 'blur(10px)'}}>
            <Navbar />
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <FixedNavbar />
            <FilmeSelecionado />
            <Filmes />
        </div>
    );
};

export default Home;
