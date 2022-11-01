import React, {useReducer} from 'react';
import AppContext from './AppContext';
import Reducer from './Reducer';

export default function Contexto({children}) {
    
    const datos = {
        valor1: "hola",
        valor2: "adios",
        valor3: "hasta luego",
    };
    
    // console.log(datos);
 
    const [DatosNew,dispatch] = useReducer(Reducer,datos); /* reducer es como para remplazar los valores del object */

    // console.log("line17",DatosNew);

    const Provider = {
        DatosNew,
        setStatem: (payload) => {
            dispatch({
                type: "SET_DATA",
                payload     /* nuevo dato a cambiar en el obejo de const datos */
            });
        },
    }

    // console.log("line31",Provider);

    return <AppContext.Provider value={Provider}>{children}</AppContext.Provider>
}