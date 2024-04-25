import React from "react";
import { Link, Outlet } from "react-router-dom";

const TelaInicial = () => {
    return (
        <div>
            GhibliQuest <br />
            <Link to="/home">Entrar</Link>
            <Outlet/>
        </div>
    )
}

export default TelaInicial;