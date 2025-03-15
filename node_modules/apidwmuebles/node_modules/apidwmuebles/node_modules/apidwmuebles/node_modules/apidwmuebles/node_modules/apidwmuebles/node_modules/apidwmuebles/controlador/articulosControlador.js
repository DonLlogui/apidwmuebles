const articuloModel = require('../modelo/articuloModelo');

class articulosControlador {
  // Obtener todos los ariulos
  static async todoProductos(req, res) {
    try {
      const users = await articuloModel.todoProducto();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener los Productos' });
    }
  }

  // Buscar articulo por ID
  static async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const user = await articuloModel.buscarPorId(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el usuario' });
    }
  }

  // Buscar articulo por articulo
  static async buscarPorPro(req, res) {
    const { pro } = req.params;
    try {
      const users = await articuloModel.buscarPorDoc(pro);
      if (!users.length) {
        return res.status(404).json({ error: 'Producto no encontrado!' });
      }
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al obtener el Producto' });
    }
  }

    

  // Crear un nuevo usuario
  static async crearProductos(req, res) {
    const { pro } = req.body;
    try {
      const result = await articuloModel.crearProducto(pro);
      res.status(201).json({ mensaje: 'Producto creado exito', id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al crear el Producto' });
    }
  }

  // Modificar un usuario
  static async editarProducto(req, res) {
    const { id } = req.params;
    const { pro } = req.body;
    try {
      const result = await articuloModel.modificarProducto(id, pro);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.json({ mensaje: 'Producto actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al actualizar el Producto' });
    }
  }

  // Eliminar un usuario
  static async borrarProducto(req, res) {
    const { id } = req.params;
    try {
      const result = await articuloModel.eliminarProducto(id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.json({ mensaje: 'Producto eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al eliminar el Producto' });
    }
  }
}

module.exports = articulosControlador;