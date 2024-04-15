// PersonaDAO.js
const DBConnection = require('./DBConnection');

const PersonaDAO = {
  getAll: (callback) => {
    const connection = DBConnection.connect(); // Obtiene la conexión aquí
    
    const query = 'SELECT * FROM personas';
    connection.query(query, (error, results) => {
      connection.end();
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, results);
    });
  },

  findById: (id, callback) => {
    const connection = DBConnection.connect(); // Obtiene la conexión aquí
    const query = 'SELECT * FROM personas WHERE personaId = ?';
    connection.query(query, [id], (error, results) => {
      connection.end();
      if (error) {
        callback(error, null);
        return;
      }
      if (results.length === 0) {
        callback('Persona no encontrada', null);
        return;
      }
      callback(null, results[0]);
    });
  },

  create: (nuevaPersona, callback) => {
    const connection = DBConnection.connect();
    const query = 'INSERT INTO personas SET ?';
    connection.query(query, nuevaPersona, (error, result) => {
        connection.end();
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, result);
    });
},


  update: (id, datosActualizados, callback) => {
    const connection = DBConnection.connect();
    console.log(datosActualizados);
    const query = 'UPDATE personas SET ? WHERE personaId = ?';
    connection.query(query, [datosActualizados, id], (error, result) => {
      connection.end();
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, result);
    });
  },

  delete: (id, callback) => {
    const connection = DBConnection.connect();
    const query = 'DELETE FROM personas WHERE personaId = ?';
    connection.query(query, [id], (error, result) => {
      connection.end();
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, result);
    });
  }
};
module.exports = PersonaDAO;
