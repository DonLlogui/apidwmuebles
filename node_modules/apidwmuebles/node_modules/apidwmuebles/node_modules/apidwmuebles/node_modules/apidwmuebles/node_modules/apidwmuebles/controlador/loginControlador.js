const LoginModel = require('../modelo/loginModelo');

class loginControlador {
  // Validar correo y contraseña
  static async validarCredencial(req, res) {
    const { t1: email, t2: password } = req.body; // Renombramos t1 y t2 para mayor claridad

    if (!email || !password) {
      return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
    }

    try {
      const user = await LoginModel.validarCredenciales(email, password);
      
      if (!user) {
        return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
      }

      res.json({ mensaje: 'Inicio de sesión exitoso', usuario: user });
    } catch (err) {
      res.status(500).json({ error: `Hubo un error al validar las credenciales: ${err.message}` });
    }
  }
}

module.exports = loginControlador;
