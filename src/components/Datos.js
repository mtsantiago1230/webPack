import React, {useContext} from 'react'
// import { useState } from "react";
// import Table from 'rc-table';
import AppContext from '../Contexto/AppContext';

/*
    const columns = [
        {
            title: '',
            dataIndex: 'column1',
            // key: 'column1',
            width: "100",
            // className:"tablehead",
        },
        {
            title: '',
            dataIndex: 'column2',
            // key: 'column2',
            width: 100,
        },
        // {
        //     title: 'Operations',
        //     dataIndex: 'operations',
        //     key: 'operations',
        //     render: () => <button>Reportar Bicicleta</button>,
        //     width: 100,
        // },
    ];
*/

export default function Datos()
{
    console.log("line33",useContext(AppContext))
    const { DatosNew , setStatem } = useContext(AppContext);

    const ModificarContexto = () => {
        setStatem({ valor2:"hola nuevo dato" });
    }

    console.log("var DatosNew",DatosNew)

    return <>
        <p>
            <strong>Hijo está mostrando</strong> {DatosNew.valor2}
        </p>

        <button onClick={ModificarContexto}>Modificar Contexto</button>
    </>


    /*
    const [reportar,setreportar] = useState("Sin novedad");

    const _clickReportar = (estado) => {
        setreportar(estado);
    }

    const dataUser = [
        { column1: 'Nombre', column2: "santiago", key:1},
        { column1: 'Apellido', column2: "ruiz", key:2 },
        { column1: 'CC', column2: "1233493792", key:3 },
        { column1: 'Email', column2: "santiago@bluecaribu.com", key:4 },
    ];


    const dataBike = [
        { column1: 'Marca', column2: "gw", key:1 },
        { column1: 'Serie', column2: "hyena", key:2 },
        { column1: 'Color', column2: "roja", key:3 },
        { column1: 'Referencia', column2: "AC15E54A552ASF12", key:4 },
        { column1: 'Estado', column2: reportar, key:5 },
    ];


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-6">
                        <span className="material-icons icon-welcome">person</span>
                        <Table className="tableWelcome" columns={columns} data={dataUser} />
                    </div>
                    <div className="col-md-6">
                        <span className="material-icons icon-welcome">directions_bike</span>
                        <Table className="tableWelcome" columns={columns} data={dataBike} />
                    </div>
                    <div className="col-md-12 center">
                        {
                            reportar=="robada"
                            ?
                            <button className="btn btn-success" onClick={ () => _clickReportar("sin novedad")}>Reportar como Recuperada</button>
                            :
                            <button className="btn btn-danger" onClick={ () => _clickReportar("robada")}>Reportar Bicicleta</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
    */
}