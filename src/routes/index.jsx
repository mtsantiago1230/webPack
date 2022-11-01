import React from 'react'

import {
    Routes,
    Route,
} from "react-router-dom";

import Login from '../components/Login'; 
import Register from '../components/Register'; 
import Consulta from '../components/Consulta'; 
import Estado from '../components/Estado'; 
import Restore from '../components/Restore';
import Datos from '../components/Datos';
import NotFound from '../components/NotFound'; 
import Welcome from '../pages/Welcome'; 
import Home from '../pages/Home'; 


export default function index()
{
    return (
        <Routes>

            <Route path="/" element={<Home/>} >
                <Route index element={<Login/>} />
                <Route path="registro" element={<Register/>} />
                <Route path="consulta" element={<Consulta/>} />
                <Route path="estado" element={<Estado estadoBici="noRegistrada"/>} />
                <Route path="restore" element={<Restore/>} />
                <Route path="*" element={<Login/>} />
            </Route>

            <Route path="/sistema" element={<Welcome/>}>
                <Route path="datos" index element={<Datos/>} />
                <Route path="consulta" element={<Consulta/>}>
                    <Route path="estado" element={<Estado/>} />
                </Route>
                <Route path="registro" element={<Register/>} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
