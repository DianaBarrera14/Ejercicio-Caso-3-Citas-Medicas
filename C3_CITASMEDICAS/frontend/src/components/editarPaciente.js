import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PacienteService from '../services/api';

const EditarPaciente = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [paciente, setPaciente] = useState({
        nombre: '',
        direccion: '',
        num_contacto: '',
        his_medico: '',
    });

    useEffect(() => {
        const fetchPaciente = async () => {
            try {
                const data = await PacienteService.getPacienteById(id);
                console.log(data); 
                setPaciente(data);
            } catch (error) {
                console.error('Error al obtener el paciente:', error);
            }
        };
        

        fetchPaciente();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaciente((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await PacienteService.updatePaciente(id, paciente);
            navigate('/ver_pacientes');
        } catch (error) {
            console.error('Error al actualizar el paciente:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Editar Paciente</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre del Paciente</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={paciente.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección del Paciente</label>
                    <input
                        type="text"
                        className="form-control"
                        id="direccion"
                        name="direccion"
                        value={paciente.direccion}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="contacto" className="form-label">Numero de contacto del Paciente</label>
                    <input
                        type="number"
                        className="form-control"
                        id="contacto"
                        name="contacto"
                        value={paciente.num_contacto}
                        onChange={handleChange}
                    />
                </div>
              
                <div className="mb-3">
                    <label htmlFor="Historiales" className="form-label">Historal</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Historiales"
                        name="Historiales"
                        value={paciente.his_medico}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditarPaciente;
