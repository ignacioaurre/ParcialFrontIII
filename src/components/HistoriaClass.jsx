import React, { Component } from 'react';
import data from "./data.json"
import OpcionesClass from './OpcionesClass';
import "../index.css"


class HistoriaClass extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador: 2,
            previa: "",
            historial: [],
            datos: data[0]
        };
    }

    updateHistorial = (e) => {
        if (this.state.contador > 5){
            window.alert("¡Haz llegado al final de la historia!")
        } else {
        const nuevaData = data.find(el => el.id === (this.state.contador + e.target.id.toLowerCase()))
        this.setState({
            datos: nuevaData
        })
        if (this.state.previa) {
            const nuevoHistorial = [...this.state.historial, this.state.previa]
            this.setState({
                historial: nuevoHistorial
            })
        }
        this.setState({
            previa: e.target.id
        })
        this.setState({
            contador: this.state.contador + 1
        })
        }
    }

    componentDidMount() {
        console.log("¡Me acabo de montar!");;
      }


    render() {
        return (
            <div className="layout">
            <h1 className="historia">{this.state.datos.historia}</h1>
            <div className="opciones">
                <OpcionesClass updateHistorial={this.updateHistorial} opciones={this.state.datos.opciones.a} opcion="A" />
                <OpcionesClass updateHistorial={this.updateHistorial} opciones={this.state.datos.opciones.b} opcion="B" />
            </div>
            <div className="recordatorio">
                <h3>Seleccion anterior: {this.state.previa}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>
                {this.state.historial.length === 0 ? <div></div> :
                    this.state.historial.map((opcion, index) => (<li key={index}>{opcion}</li>))
                }
                </ul>
            </div>
        </div>
        );
    }
}

export default HistoriaClass;
