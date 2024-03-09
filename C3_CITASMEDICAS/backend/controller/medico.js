const Medico = require( '../model/medico');

const medicoController = {
    create: async (req,res) =>{
        try{
            const {nombre, especialidad, numContacto} = req.body;
            const nuevo_medico = await Medico.create({nombre, especialidad, numContacto});
            res.status(201).send(nuevo_medico);
        }catch(error){
            res.status(500).send(error.message);
        }
    },

    findById: async (req, res) => {
        try {
            const { id } = req.params;
            const medico = await Medico.findByPk(id);
            if (medico) {
                res.status(200).send(medico);
            } else {
                res.status(404).send('Medico no encontrado');
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    findAll: async (req,res) => {
        try{
            const medicos = await Medico.findAll();
            res.status(200).send(medicos);
        }catch (error) {
            res.status(400).send(error.message);
        }
    },

    update: async (req,res) => {
        try{
            const {id} = req.params;
            const {nombre, especialidad, numContacto} = req.body;
            const medico = await Medico.findByPk(id);
            if (medico) {
                await medico.update({nombre, especialidad, numContacto});
                res.status(200).send(medico);
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
            const deleted = await Medico.destroy({
                where: { id_medico: id}
            });
            if (deleted) {
                res.status(204).send('Medico eliminado');
            } else {
                res.status(400).send('Medico no encontrado');
            }
        } catch(error){
            res.status(400).send(error.message)
        }
    }

}

module.exports = medicoController;