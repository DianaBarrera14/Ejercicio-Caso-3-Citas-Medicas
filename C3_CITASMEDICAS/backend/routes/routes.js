const express = require("express");
const medicoController = require('../controller/medico');
const pacienteController = require('../controller/paciente');
const citaController = require('../controller/cita');
const historialController = require('../controller/historialCitas');

const router = express.Router();

router.post('/medico', medicoController.create);
router.get('/medico', medicoController.findAll);
router.put('/medico/:id', medicoController.update);
router.delete('/medico/:id', medicoController.delete);
router.get('/medico/:id', medicoController.findById);

router.post('/paciente', pacienteController.create);
router.get('/paciente', pacienteController.findAll);
router.put('/paciente/:id', pacienteController.update);
router.delete('/paciente/:id', pacienteController.delete);
router.get('/paciente/:id', pacienteController.findById);


router.post('/cita', citaController.create);
router.get('/cita', citaController.findAll);
router.put('/cita/:id', citaController.update);
router.delete('/cita/:id', citaController.delete);


router.post('/historial', historialController.create);
router.get('/historial', historialController.findAll);
router.put('/historial/:id', historialController.update);
router.delete('/historial/:id', historialController.delete);




module.exports = router;