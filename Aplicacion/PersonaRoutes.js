const express = require('express');
const router = express.Router();
const PersonaController = require('./PersonaController');

// Definir las rutas para personas
router.get('/', PersonaController.getAllPersonas);
router.get('/:id', PersonaController.getPersonaById);
router.post("/create", PersonaController.createPersona);
router.put("/:id", PersonaController.updatePersona);
router.delete("/:id", PersonaController.deletePersona);

// Agregar aquí otras rutas según sea necesario

module.exports = router;
