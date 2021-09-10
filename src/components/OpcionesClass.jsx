import React, { Component } from 'react';
import "../index.css"

class OpcionesClass extends Component {


    render() {
        return (
            <div className="opcion">
            <button className="botones" id={this.props.opcion} onClick={this.props.updateHistorial}>{this.props.opcion}</button>
            <h2>{this.props.opciones}</h2>
        </div>
        );
    }
}

export default OpcionesClass;
