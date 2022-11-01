// import React from 'react';
import "regenerator-runtime"

const URL = "http://localhost/prueba/backend.php";

const sendForm = async (data) => {
    
    console.log(URL,data)
    
    const resp = await fetch(URL,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json",            
        }
    });

    console.log("1",resp)
    const json = await resp.json()
    console.log("2",json)
}

export {
    sendForm
}
