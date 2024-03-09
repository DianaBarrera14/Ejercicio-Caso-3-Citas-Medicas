const historial = require( '../model/historialCitas');

const historialController = {
    create: async (req,res) =>{
        try{
            const {fecha_cita, hora_cita, id_cita, diagnostico, tratamientos} = req.body;
            const nuevo_historial = await historial.create({fecha_cita, hora_cita, id_cita, diagnostico, tratamientos});
            res.status(201).send(nuevo_historial);
        }catch(error){
            res.status(500).send(error.message);
        }
    },

    findAll: async (req,res) => {
        try{
            const historiales = await historial.findAll();
            res.status(200).send(historiales);
        }catch (error) {
            res.status(400).send(error.message);
        }
    },

    update: async (req,res) => {
        try{
            const {id} = req.params;
            const {fecha_cita, hora_cita, id_cita, diagnostico, tratamientos} = req.body;
            const historial = await historial.findByPk(id);
            if (historial) {
                await historial.update({fecha_cita, hora_cita, id_cita, diagnostico, tratamientos});
                res.status(200).send(historial);
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
            const deleted = await historial.destroy({
                where: { id_historial: id}
            });
            if (deleted) {
                res.status(204).send('historial eliminado');
            } else {
                res.status(400).send('historial no encontrado');
            }
        } catch(error){
            res.status(400).send(error.message)
        }
    }

}

module.exports = historialController;