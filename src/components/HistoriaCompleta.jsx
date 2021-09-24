import React from 'react';

const HistoriaCompleta = ({historia, limpieza}) => {
    return (
        <div>
            {historia.map( (h, index) => (<span className="historia" key={index}>{h}</span>))}
            <button className="botones" onClick={limpieza}>Volver al inicio</button>
        </div>
    );
}

export default HistoriaCompleta;
