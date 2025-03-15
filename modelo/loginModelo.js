const dbService = require('./bd/Conexion');

class loginModelo {
 
  // Buscar usuario por correo (autocompletado)
  static async buscaCorreo(email) {
    const query = 'SELECT * FROM usuarios WHERE correo = ?';
    try {
      return await dbService.query(query, [email]);
    } catch (err) {
      throw new Error(`Error al buscar el usuario por correo: ${err.message}`);
    }
  }

// Validar correo y contraseña
static async validarCredenciales(req, res) {
    const { t1, t2 } = req.body;
    try {
      const user = await UsuarioModel.buscaCorreo(t1);
      if (!user.length) {
        return res.status(404).json({ error: 'Usuario inavalido' });
      }
      const usuario = user[0];
      if (usuario.contra !== t2) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }
      res.json({ mensaje: 'Credenciales válidas', usuario });
    } catch (err) {
      res.status(500).json({ error: 'Hubo un error al validar las credenciales' });
    }
  }
  

}

module.exports = loginModelo;