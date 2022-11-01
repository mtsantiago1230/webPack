export default (state,action) => {
  
    // console.log(state,action)

    /*
        state = DatosNew[]
        action = type:"SET_DATA",
                 payload:"valor2:hola nuevo dato"
    */

    const {type,payload} = action;

    // console.log(type,payload);

    switch (type) {
        case 'SET_DATA':
            return {...state, ...payload}; /* esto es como un merge, remplazamos (o se agrega si no existe) el valor de state con el de payload */
    
        default:
            return state;
    }
    
}
