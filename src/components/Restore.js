import React from 'react';
import { useNavigate , Link  } from 'react-router-dom';

export default function restore()
{
    // const navigate = useNavigate();

    return (
        <div className="width20">
            <div className="padding2">
                <span className="material-icons icon-session">person_pin</span>
                <form>
                    <p>Introduce el email para restaurar la contraseña</p>
                    <div className="form-group">
                        <input className="form-control" placeholder="Email"/>
                    </div>
                    {/* <button type="button" className="btn btn-info" onClick={ () => navigate('/') }>
                        Restaurar Contraseña
                    </button> */}
                    <Link to="/" className="btn btn-info"> Restaurar Contraseña</Link>
                </form>
            </div>

            <div className="forget">
                <Link to="/">Regresar al inicio de sesión</Link>
            </div>

        </div>
    )
}