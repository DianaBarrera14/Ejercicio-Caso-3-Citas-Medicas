const paciente = require( '../model/paciente');

const pacienteController = {
    create: async (req,res) =>{
        try{
            const {nombre, direccion, num_contacto, his_medico} = req.body;
            const nuevo_paciente = await paciente.create({nombre, direccion, num_contacto, his_medico});
            res.status(201).send(nuevo_paciente);
        }catch(error){
            res.status(500).send(error.message);
        }
    },

    findById: async (req,res) => {
        try{
            const {id} = req.params;
            const Paciente = await paciente.findByPk(id);
            if(paciente){
                res.status(200).send(Paciente);
            }else{
            res.status(200).send('paciente no encontrado');
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },


    findAll: async (req,res) => {
        try{
            const Paciente = await paciente.findAll();
            res.status(200).send(Paciente);
        }catch (error) {
            res.status(400).send(error.message);
        }
    },

    update: async (req,res) => {
        try{
            const {id} = req.params;
            const {nombre, direccion, num_contacto, his_medico} = req.body;
            const Paciente = await paciente.findByPk(id);
            if (Paciente) {
                await Paciente.update({nombre, direccion, num_contacto, his_medico});
                res.status(200).send(Paciente);
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
            const deleted = await paciente.destroy({
                where: { id_paciente: id}
            });
            if (deleted) {
                res.status(204).send('paciente eliminado');
            } else {
                res.status(400).send('paciente no encontrado');
            }
        } catch(error){
            res.status(400).send(error.message)
        }
    }

}

module.exports = pacienteController;