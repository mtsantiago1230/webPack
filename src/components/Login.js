import React, {useRef} from 'react';
import { useNavigate , Link } from 'react-router-dom';

import {sendForm} from '../components/Peticiones'; 


// import "regenerator-runtime"
// const URL_LOGIN = "http://localhost/prueba/backend.php";

function login()
{
    const navigate = useNavigate();
    const clickbtn = () => navigate("/sistema/datos");

    const refUser = useRef(null);
    const refPass = useRef(null);

    const envioForm = () => {
        const data = {
            user: refUser.current.value,
            pass: refPass.current.value
        };

        console.log(data)

        sendForm(data)        
    }

    return (
        <div className="width20">
            {/* <Peticiones/> */}
            <div className="padding2">
                <span className="material-icons icon-session">person_pin</span>
                <form onSubmit={envioForm}>
                    <div className="form-group">
                        <input className="form-control" placeholder="Email" ref={refUser}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Contraseña" ref={refPass}/>
                    </div>
                    {/* <button type="button" className="btn btn-info" onClick={clickbtn}> */}
                    <button type="button" className="btn btn-info" onClick={envioForm}>
                        Iniciar Sesión
                    </button>
                </form>
            </div>
            <div className="forget">
                <Link to="/restore">¿Has olvidado tu contraseña?</Link>
                {/* <a onClick={ () => navigate('restore') }>¿Has olvidado tu contraseña?</a> */}
            </div>
        </div>
    )
}

export default login;