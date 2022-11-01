import React from 'react';
import { useNavigate , Link, Outlet  } from 'react-router-dom';

export default function consulta()
{
    const navigate = useNavigate();

    return (
        <div className="width20 center">
            <div className="padding2">
                <span className="material-icons icon-session">search</span>
                <h4 className="titleConsulta">Consulta el estado de una Bici</h4>
                <form>
                    <div className="form-group">
                        <input className="form-control" placeholder="Numero de serie de tu bici"/>
                    </div>
                    {/* <button type="button" className="btn btn-info" onClick={ () => navigate('/estado') }>
                        Consultar
                    </button> */}
                    <Link className="btn btn-info" to="/estado">Consultar</Link>
                </form>
            </div>
            <Outlet />
        </div>
    )
}