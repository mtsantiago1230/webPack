import React from 'react';
import Nav from '../components/Nav';

import {
    Outlet,
    NavLink
} from "react-router-dom";


export default function Home()
{
    let data_nav = [
        {
            text:"Login",
            class:"selected",
            route:"/"
        },
        {
            text:"Registra tu bici",
            class:"selected",
            route:"/registro"
        },
        {
            text:"Consulta tu bici",
            class:"selected",
            route:"/consulta"
        }
    ]

    return (
            <div className="App">
                <div className="App-header">
                    <div className="container">

                        <Nav list={data_nav}/>

                        <div className="form-container">
                            <Outlet/>
                        </div>

                    </div>
                </div>
            </div>
    );
}