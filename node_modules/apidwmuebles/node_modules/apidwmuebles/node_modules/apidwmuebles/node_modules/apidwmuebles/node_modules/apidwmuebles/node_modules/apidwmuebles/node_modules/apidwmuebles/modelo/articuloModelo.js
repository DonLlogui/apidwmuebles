const dbService = require('./bd/Conexion');

class articuloModelo {
  // Obtener todos los aticulos con paginación
  static async todoProducto(pagina = 1) {
    const limite = 50;  // Número máximo de productos por página
    const offset = (pagina - 1) * limite;  // Calculamos el offset para la paginación
    const query = `SELECT * FROM articulos ORDER BY idArticulo ASC LIMIT ${limite} OFFSET ${offset}`;
    try {
      return await dbService.query(query);
    } catch (err) {
      throw new Error(`Error al obtener los productos: ${err.message}`);
    }
  }

  // Buscar articulo por ID
  static async buscarPorId(id) {
    const query = 'SELECT * FROM articulos WHERE idArticulo = ?';
    try {
      const [user] = await dbService.query(query, [id]);
      return user || null;  // Devuelve null si no hay articulo
    } catch (err) {
      throw new Error(`Error al buscar el producto por ID: ${err.message}`);
    }
  }

  // Buscar articulo por articulo (autocompletado)
  static async buscarPorPro(pro) {
    const query = 'SELECT * FROM articulos WHERE articulo LIKE ?';
    try {
      return await dbService.query(query, [`%${pro}%`]);
    } catch (err) {
      throw new Error(`Error al buscar el producto por documento: ${err.message}`);
    }
  }


  // Crear un nuevo producto
  static async crearProducto(pro) {
    const query = 'INSERT INTO articulos (articulo) VALUES (?)';
    try {
      return await dbService.query(query, [pro]);
    } catch (err) {
      throw new Error(`Error al crear el Producto: ${err.message}`);
    }
  }

  // Modificar un producto existente
  static async modificarProducto(id, pro) {
    const query = 'UPDATE articulos SET articulo = ? WHERE idArticulo = ?';
    try {
      return await dbService.query(query, [pro, id]);
    } catch (err) {
      throw new Error(`Error al modificar el Producto: ${err.message}`);
    }
  }

  //Eliminar un Producto
    static async eliminarProducto(id) {
    const query = 'DELETE FROM articulos WHERE idArticulo = ?';
    try {
      return await dbService.query(query, [id]);
    } catch (err) {
      throw new Error(`Error al eliminar el Producto: ${err.message}`);
    }
  }

}

module.exports = articuloModelo;