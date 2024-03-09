import React, { useState } from 'react';
import PacienteService from '../services/api';

const PacienteForm = ({ onPacienteSaved }) => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [num_contacto, setNumContacto] = useState('');
    const [his_medico, setHistorial] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const pacienteData = {
            nombre,
            direccion,
            num_contacto,
            his_medico, 
        };

        try {
           
            await PacienteService.createPaciente(pacienteData);
           
        } catch (error) {
            console.error('Error al guardar el paciente:', error);
           
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre del Paciente</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección del Paciente</label>
                <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="contacto" className="form-label">Número de Contacto del Paciente</label>
                <input
                    type="number"
                    className="form-control"
                    id="num_contacto"
                    value={num_contacto}
                    onChange={(e) => setNumContacto(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="historial" className="form-label">Historial médico del Paciente</label>
                <input
                    type="text"
                    className="form-control"
                    id="his_medico"
                    value={his_medico}
                    onChange={(e) => setHistorial(e.target.value)}
                />
            </div>
         
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        </div>
        
    );
};

export default PacienteForm;
