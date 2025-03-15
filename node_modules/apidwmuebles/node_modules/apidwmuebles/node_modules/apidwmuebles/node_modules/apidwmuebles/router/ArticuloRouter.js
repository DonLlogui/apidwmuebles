const express = require('express');
const ArticuloControlador = require('../controlador/articulosControlador');
const router = express.Router();

router.get('/productos', ArticuloControlador.todoProductos);
router.get('/productoI/:id', ArticuloControlador.buscarPorId);
router.get('/productoP/:pro', ArticuloControlador.buscarPorPro);
router.post('/productos', ArticuloControlador.crearProductos);
router.put('/productos/:id', ArticuloControlador.editarProducto);
router.delete('/productos/:id', ArticuloControlador.borrarProducto);
module.exports = router; 