const cita = require( '../model/cita');

const citaController = {
    create: async (req,res) =>{
        try{
            const {fecha_inicio, instruc_adicional, id_paciente, id_medEspecialista} = req.body;
            const nueva_cita = await cita.create({fecha_inicio, instruc_adicional, id_paciente, id_medEspecialista});
            res.status(201).send(nueva_cita);
        }catch(error){
            res.status(500).send(error.message);
        }
    },

    findAll: async (req,res) => {
        try{
            const citas = await cita.findAll();
            res.status(200).send(citas);
        }catch (error) {
            res.status(400).send(error.message);
        }
    },

    update: async (req,res) => {
        try{
            const {id} = req.params;
            const {fecha_inicio, instruc_adicional, id_paciente, id_medEspecialista } = req.body;
            const cita = await cita.findByPk(id);
            if (cita) {
                await cita.update({fecha_inicio, instruc_adicional, id_paciente, id_medEspecialista});
                res.status(200).send(cita);
            } else {
                res.status(400).send(error.message);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    delete: async (req,res) => {
        try{
            const {id} = req.params
            const deleted = await cita.destroy({
                where: { id_cita: id}
            });
            if (deleted) {
                res.status(204).send('cita eliminada');
            } else {
                res.status(400).send('cita no encontrado');
            }
        } catch(error){
            res.status(400).send(error.message)
        }
    }

}

module.exports = citaController;