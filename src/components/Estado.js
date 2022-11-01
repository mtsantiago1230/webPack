import React from 'react';
import { useNavigate , Link } from 'react-router-dom';

export default function Estado({estadoBici})
{
    const navigate = useNavigate();
    // const {estadoBici} = props;

    const _estado = () => {

        switch(estadoBici)
        {
            case "robada":
                return  <div>
                            <span className="material-icons font-15">thumb_down</span>
                            <h3>Esta bici si esta registrada y se encuentra como Robada</h3>
                            <Link className="btn btn-info m-l-2" to="/consulta">Otra consulta</Link>
                        </div>
            case "recuperada" :
                return  <div>
                            <span className="material-icons font-15">task_alt</span>
                            <h3>Esta bici si esta registrada y se encuentra como Recuperada</h3>
                            <Link className="btn btn-info m-l-2" to="/consulta">Otra consulta</Link>
                        </div>
            case "noRegistrada" :
                return  <div>
                            <span className="material-icons font-15">sentiment_very_dissatisfied</span>
                            <h3>Esta bici aún no ha sido Registrada</h3>
                            {/* <button type="button" className="btn btn-success" onClick={() => navigate('/registro')}>
                                Registrar Ya!
                            </button> */}
                            <Link className="btn btn-success" to="/registro" >Registrar Ya!</Link>
                            <Link className="btn btn-info m-l-2" to="/consulta">Otra consulta</Link>
                        </div>
            // sinNovedad
            default:
                return  <div>
                            <span className="material-icons font-15">task_alt</span>
                            <h3>Esta bici si esta registrada y se encuentra como Sin Novedad</h3>
                            <Link className="btn btn-info m-l-2" to="/consulta">Otra consulta</Link>
                        </div>
        }
    }

    return (
        <div className="width20 center borde_estado">
            <div className="padding2">
                {
                    _estado()
                }
            </div>
        </div>
    )
}