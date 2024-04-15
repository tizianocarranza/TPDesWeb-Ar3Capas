const express = require('express');
const bodyParser = require('body-parser'); // Importa el módulo body-parser
const router = require("./Aplicacion/PersonaRoutes");
const app = express();

// Configura el middleware de análisis de cuerpo
app.use(bodyParser.json()); // Analiza el cuerpo de las solicitudes con formato JSON

// Rutas
app.use("/personas", router);

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Servidor backend en ejecución en el puerto 3001');
});
