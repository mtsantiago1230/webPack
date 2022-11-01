import React from 'react';
import Nav from '../components/Nav';

import {
    Outlet
} from "react-router-dom";

export default function Welcome()
{
    let data_nav = [
        {
            text:"Datos Personales",
            class:"selectedWelcome",
            route:"/sistema/datos"
        },
        {
            text:"Registra tu bici",
            class:"selectedWelcome",
            route:"/sistema/registro"
        },
        {
            text:"Consulta tu bici",
            class:"selectedWelcome",
            route:"/sistema/consulta"
        },
        {
            text:"Cerrar Sesión",
            class:"",
            route:"/"
        }
    ]

    return (
            <>
                <div className="nav-li">
                    <Nav list={data_nav} />
                </div>
                <div>
                    <Outlet/>
                </div>
            </>
    );
}