import React from 'react';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';


export default function register()
{
    const navigate = useNavigate();
    const clickbtn = () => navigate("/sistema/datos");
    const pathname = useLocation().pathname;

    const _home = () => {
        return  <div className="col-md-12">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input className="form-control" placeholder="Nombre"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Apellido"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="CC"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" placeholder="Contraseña"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input className="form-control" placeholder="Marca"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Serie"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Color"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Referencia"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control" placeholder="Estado">
                                <option value="Sin novedad">Sin novedad</option>
                                <option value="Robada">Robada</option>
                            </select>
                        </div>
                    </div>
                </div>
    }

    const _welcome = () => {
        return  <div className="col-md-12">
                    <div className="form-group">
                        <input className="form-control" placeholder="Marca"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Serie"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Color"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Referencia"/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" placeholder="Estado">
                            <option value="Sin novedad">Sin novedad</option>
                            <option value="Robada">Robada</option>
                        </select>
                    </div>
                </div>
    }


    return (
        <div className="width20 text-center">
            <div className="padding2">
                <span className="material-icons icon-session">person_add_alt_1</span>
                <form className="row form-register">
                    {
                        pathname.indexOf("sistema")>0
                        ?
                        _welcome()
                        :
                        _home()
                    }
                    <div className="col-md-12">
                        {/* lo hice de esta manera ya que tenia que resetear la url para cuando ingrese a welcome */}
                        <button className="btn btn-info" onClick={clickbtn}>Registrarse</button>
                        {/* <Link className="btn btn-info" to="/" onClick={clickbtn}>Registrarse</Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}