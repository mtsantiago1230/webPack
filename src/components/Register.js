import React, {useRef} from 'react';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import { sendForm } from './Peticiones';


export default function register()
{
    const navigate = useNavigate();
    const clickbtn = () => navigate("/sistema/datos");
    const pathname = useLocation().pathname;

    //-- referencias user
    const refUser = useRef(null);
    const refCC = useRef(null);
    const refEmail = useRef(null);
    const refPass = useRef(null);

    //-- referencias user
    const refMarca = useRef(null);
    const refSerie = useRef(null);
    const refColor = useRef(null);
    const refEstado = useRef(null);

    const envioForm = () => {
        
        const data = {
            user: {
                user: refUser.current.value,
                cc: refCC.current.value,
                email: refEmail.current.value,
                pass: refPass.current.value
            },
            bike: {
                marca: refMarca.current.value,
                serie: refSerie.current.value,
                color: refColor.current.value,
                estado: refEstado.current.value
            },
        }

        console.log("datos a enviar",data);

        sendForm(data);  
    }

    const _home = () => {
        return  <div className="col-md-12">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input className="form-control" placeholder="Nombre" ref={refUser}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="CC" ref={refCC}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Email" ref={refEmail}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" placeholder="Contraseña" ref={refPass}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input className="form-control" placeholder="Marca" ref={refMarca}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Serie" ref={refSerie}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Color" ref={refColor}/>
                        </div>
                        <div className="form-group">
                            <select className="form-control" placeholder="Estado" ref={refEstado}>
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
                        {/* <button className="btn btn-info" onClick={clickbtn}>Registrarse</button> */}
                        <button className="btn btn-info" onClick={envioForm}>Registrarse</button>
                        {/* <Link className="btn btn-info" to="/" onClick={clickbtn}>Registrarse</Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}