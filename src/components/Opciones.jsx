import React from 'react';
import "../index.css"


const Opciones = ({updateHistorial, opciones, opcion}) => {
    return (
        <div className="opcion">
            <button className="botones" id={opcion} onClick={updateHistorial}>{opcion}</button>
            <h2>{opciones}</h2>
        </div>
    );
}

export default Opciones;
