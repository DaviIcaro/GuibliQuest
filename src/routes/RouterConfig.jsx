import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Home from "../pages/Home";
import Personagens from "../pages/Personagens";
import Trailers from "../pages/Trailers";
import TelaInicial from '../pages/TelaInicial';

export const Rotas = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Navigate to="/inicio" replace />
            },
            {
                path: "/inicio",
                element: <TelaInicial/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/personagens",
                element: <Personagens/>
            },
            {
                path: "/trailers",
                element: <Trailers/>
            }
        ]
    }
]);