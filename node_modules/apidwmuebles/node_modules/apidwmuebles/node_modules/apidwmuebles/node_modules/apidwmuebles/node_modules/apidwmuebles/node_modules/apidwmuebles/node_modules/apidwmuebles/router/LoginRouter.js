const express = require('express');
const LoginControlador = require('../controlador/loginControlador');
const router = express.Router();

router.post('/login', LoginControlador.validarCredencial);
module.exports = router; 