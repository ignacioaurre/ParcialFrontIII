import {useState} from 'react';

import data from './data.json'
import "../index.css"
import Opciones from './Opciones';
import HistoriaCompleta from './HistoriaCompleta';
import Swal from 'sweetalert2'
import 'animate.css'

const Historia = () => {

    const [contador, setContador] = useState(2);
    const [datos, setDatos] = useState(data[0]);
    const [previa, setPrevia] = useState();
    const [historial, setHistorial] = useState([]);
    const [historia, setHistoria] = useState([]);
    const [terminada, setTerminada] = useState(false)


    const limpieza = () => { 
        setHistorial([]);
        setPrevia();
        setDatos(data[0])
        setContador(2)
        setHistoria([])
        setTerminada(false)
    }


    const botonFinal = () => Swal.fire({
        title: '¡Has terminado la historia! ¿Quiéres verla completa o volver a comenzar?',
        background: "#fff",
        iconColor: "#fff",
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Mostrar la historia completa",
        denyButtonText: "Volver a empezar",
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            setTerminada(true)
        } else if (result.isDenied) {
            limpieza()
        }
    })

    const updateHistorial = (e) => {
        if (contador > 5){
            const nuevaHistoria = [...historia, datos.historia]
            setHistoria(nuevaHistoria)
            botonFinal();
        } else {
            const nuevaHistoria = [...historia, datos.historia]
            setHistoria(nuevaHistoria)
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

    const principal = <>
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
                </>

    return (
        <div className="layout">
            {!terminada ? principal : <HistoriaCompleta historia={historia} limpieza={limpieza}/>}
        </div>
    );
}

export default Historia;
