async function obtenerUsuarios() {
  try {
    const data = await fetch('https://66279b8eb625bf088c08fd8e.mockapi.io/api/usuarios');
    const usuario = await data.json();
    return usuario;
  } catch (error) {
    console.log(error);
  }
}

async function mostrarUsuarios() {
  try {
    const usuarios = await obtenerUsuarios();

    usuarios.forEach(usuario => {
      console.log('Nombre:', usuario.nombre);
    });
  } catch (error) {
    console.log(error);
  }
}
mostrarUsuarios();