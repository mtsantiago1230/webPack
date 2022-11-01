import React from "react";
import { render } from "react-dom";
import "./assets/style.css";

import Contexto from "./Contexto/Contexto";

// import { useEffect, useState } from "react";

import {
    HashRouter,
} from "react-router-dom";

import Routes from './routes'

function App()
{
    return (
        <Contexto>
            <HashRouter>
               <Routes/>
            </HashRouter>
        </Contexto>
    );  
}


render(<App/>,document.getElementById("app"));