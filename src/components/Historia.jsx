import {useState} from 'react';
import data from './data.json'
import "../index.css"
import Opciones from './Opciones';

const Historia = () => {

    const [contador, setContador] = useState(2);
    const [datos, setDatos] = useState(data[0]);
    const [previa, setPrevia] = useState();
    const [historial, setHistorial] = useState([]);
    const updateHistorial = (e) => {
        if (contador > 5){
            window.alert("¡Haz llegado al final de la historia!")
        } else {
        const nuevaData = data.find(el => el.id === (contador + e.target.id.toLowerCase()))
        setDatos(nuevaData)
        if (previa) {
            const nuevoHistorial = [...historial, previa]
            setHistorial(nuevoHistorial)
        }
        setPrevia(e.target.id)
        setContador(contador+1);
        }
    }

    return (
        <div className="layout">
            <h1 className="historia">{datos.historia}</h1>
            <div className="opciones">
                <Opciones updateHistorial={updateHistorial} opciones={datos.opciones.a} opcion="A" />
                <Opciones updateHistorial={updateHistorial} opciones={datos.opciones.b} opcion="B" />
            </div>
            <div className="recordatorio">
                <h3>Seleccion anterior: {previa}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>
                {historial.length === 0 ? <div></div> :
                    historial.map((opcion, index) => (<li key={index}>{opcion}</li>))
                }
                </ul>
            </div>
        </div>
    );
}

export default Historia;
