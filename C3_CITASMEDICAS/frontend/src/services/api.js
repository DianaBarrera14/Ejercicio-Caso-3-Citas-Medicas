import axios from "axios";

const API_URL = 'http://localhost:3002/api/';
const api = axios.create({
    baseURL: API_URL,
});

const PacienteService = {
    createPaciente: async (pacienteData) => {
        try {
            const response = await api.post('/paciente', pacienteData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAllPacientes: async () => {
        try {
            const response = await api.get('/paciente');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updatePaciente: async (id, pacienteData) => {
        try {
            const response = await api.put(`/paciente/${id}`, pacienteData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deletePaciente: async (id) => {
        try {
            const response = await api.delete(`/paciente/${id}`);
            return response.data; 
        } catch (error) {
            throw error;
        }
    },
    getPacienteById: async (id) => {
        try {
        const response = await api.get(`/paciente/${id}`);
        return response.data;
        }catch (error){
            throw error;
        }
    }
};

export default PacienteService;
