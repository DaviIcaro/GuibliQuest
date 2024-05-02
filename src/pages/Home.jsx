import React from "react";
import Navbar from '../components/Navbar';
import Filmes from '../components/Filmes';
import FilmeSelecionado from "../components/FilmeSelecionado";

const Home = () => {
    return (
        <div>
            <Navbar />
            <FilmeSelecionado/>
            <Filmes />
        </div>
    );
};

export default Home;
