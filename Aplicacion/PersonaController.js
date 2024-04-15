const PersonaService = require('./PersonaService');

const PersonaController = {
  getAllPersonas: (req, res) => {
    PersonaService.getAllPersonas((error, personas) => {
      if (error) {
        res.status(500).json({ error: 'Error al obtener todas las personas' });
        return;
      }
      res.json(personas);
    });
  },

  getPersonaById: (req, res) => {
    const id = req.params.id;
    PersonaService.getPersonaById(id, (error, persona) => {
      if (error) {
        res.status(404).json({ error: 'Persona no encontrada' });
        return;
      }
      res.json(persona);
    });
  },

  createPersona: (req, res) => {
    const nuevaPersona = req.body;
    PersonaService.createPersona(nuevaPersona, (error, personaCreada) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear persona' });
            return;
        }
        res.status(201).json({ message: 'Persona creada exitosamente', persona: personaCreada });
    });
},

  updatePersona: (req, res) => {
    const id = req.params.id;
    const datosActualizados = req.body;
    PersonaService.updatePersona(id, datosActualizados, (error, personaActualizada) => {
      if (error) {
        res.status(500).json({ error: 'Error al actualizar la persona' });
        return;
      }
      res.json(personaActualizada);
    });
  },

  deletePersona: (req, res) => {
    const id = req.params.id;
    PersonaService.deletePersona(id, (error, persona) => {
      if (error) {
        res.status(404).json({ error: 'Error al eliminar persona' });
        return;
      }
      res.json({ message: 'Persona eliminada exitosamente' });
    });
  }

};

module.exports = PersonaController;
