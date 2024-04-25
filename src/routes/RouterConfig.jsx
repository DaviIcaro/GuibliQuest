import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from "../pages/Home";
import Personagens from "../pages/Personagens";
import TelaInicial from "../pages/TelaInicial";
import Trailers from "../pages/Trailers";

export const Rotas = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: "/",
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