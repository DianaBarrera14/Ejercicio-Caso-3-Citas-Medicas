import React, { useState, useEffect } from 'react';
import PacienteService from '../services/api'; 
import { useNavigate } from 'react-router-dom'; 

const ListaPacientes = () => {
    const navigate = useNavigate(); 
    const [pacientes, setPacientes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchPacientes();
    }, []);

    const fetchPacientes = async () => {
        try {
            const data = await PacienteService.getAllPacientes();
            setPacientes(data);
        } catch (error) {
            console.error('Error al obtener pacientes:', error);
            setError('Error al obtener pacientes');
        }
    };

    const handleDelete = async (id) => {
        console.log("ID a eliminar:", id); 
        if (id) { 
            try {
                await PacienteService.deletePaciente(id);
                fetchPacientes(); 
            } catch (error) {
                console.error('Error al eliminar paciente:', error);
                setError('Error al eliminar paciente');
            }
        } else {
            console.error("El ID del paciente es undefined o nulo.");
        }
    };
    
    
    const handleEdit = (id) => {
        console.log('Editar paciente con id:', id);
        navigate(`/editar_paciente/${id}`);
    };

    return (
        <div className='container mt-5'>
            <h2>Lista de Pacientes</h2>
            {error && <p className="text-danger">{error}</p>}
            <button className="btn btn-primary mb-3" onClick={() => navigate('/crear_pacientes')}>Añadir Nuevo Paciente</button>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Contacto del Paciente</th>
                        <th>Historial de Citas</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map((paciente) => (
                        <tr key={paciente.id_paciente}>
                            <td>{paciente.nombre}</td>
                            <td>{paciente.direccion}</td>
                            <td>{paciente.num_contacto}</td>
                            <td>{paciente.his_medico}</td>
                            <td>
                                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(paciente.id_paciente)}>Eliminar</button>
                                <button className="btn btn-secondary btn-sm" onClick={() => handleEdit(paciente.id_paciente)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaPacientes;
