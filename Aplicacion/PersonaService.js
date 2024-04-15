const PersonaDAO = require('../Datos/PersonaDAO');

const PersonaService = {
  getAllPersonas: (callback) => {
    PersonaDAO.getAll((error, personas) => {
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, personas);
    });
  },

  getPersonaById: (id, callback) => {
    PersonaDAO.findById(id, (error, persona) => {
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, persona);
    });
  },

  createPersona: (nuevaPersona, callback) => {
    PersonaDAO.create(nuevaPersona, (error, personaCreada) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, personaCreada);
    });
},


  updatePersona: (id, datosActualizados, callback) => {
    PersonaDAO.update(id, datosActualizados, (error, personaActualizada) => {
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, personaActualizada);
    });
  },

  deletePersona: (id, callback) => {
    PersonaDAO.delete(id, (error, persona) => {
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, persona);
    });
  },

};

module.exports = PersonaService;
