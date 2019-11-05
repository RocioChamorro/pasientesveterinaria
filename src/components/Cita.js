import React from 'react';
import PropTypes from 'prop-types';
const Cita = ({cita, eliminarCita}) => (
    <div className="">
        <div>
            <h3>{cita.mascota}</h3>
            <p><span>Nombre Dueño: </span>{cita.propietario}</p>
            <p><span>Fecha: </span>{cita.fecha}</p>
            <p><span>Hora: </span>{cita.hora}</p>
            <p><span>Síntomas: </span></p>
            <p>{cita.sintomas}</p>
            <button
                className="btn btn-danger"
                onClick={() => eliminarCita(cita.id)}
            >Borrar &times;</button>
        </div>
    </div>

);
Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
export default Cita;