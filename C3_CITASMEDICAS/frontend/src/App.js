import logo from './logo.svg';
import './App.css';
import React from 'react';
import PacienteForm from './components/pacientes';
import ListaPacientes from './components/pacienteTable'
import EditarPaciente from './components/editarPaciente';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/crear_pacientes' element={<PacienteForm />} /> 
        <Route path='/ver_pacientes' element={<ListaPacientes />} /> 
        <Route path='/editar_paciente/:id' element={<EditarPaciente />} /> 
      </Routes>
    </Router>
  );
}

export default App;
