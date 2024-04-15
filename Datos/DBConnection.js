// DBConnection.js
const mysql = require('mysql2');

function connect() 
{
  const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tiziano',
    database: 'PersonasTPDesWeb'
  });

  conexion.connect((error) => {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

  return conexion; // Devuelve la conexión establecida
}

module.exports = {
  connect
};
