import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../styles/TelaInicial.css'; // Importe o CSS da pasta styles

const TelaInicial = () => {
    return (
        <div className="telaInicial">
            <div className="telaInicialTexto">
                <h1>GhibliQuest</h1>
                <p>Adentre nesse mundo mágico</p>
            </div>   
                <div className="botao-entrar">
                    <Link to="/home" className="botaoEntrar">Entrar</Link>
                </div>
        </div>
    );
}

export default TelaInicial;
