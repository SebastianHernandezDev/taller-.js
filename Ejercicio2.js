console.log("/////////////// FORMULARIO DE REGISTO //////////////");

function ValidarContrasena(Contrasena) {
  if (Contrasena.length < 7) {
    return " la contraseña debe incluir al menos 8 caractereres."
  }

  if (!/[A-Z]/.test(Contrasena)) {
    return " la contraseña debe incluir al menos una letra mayuscula."
  }
  if (!/[0-9]/.test(Contrasena)) {
        return " la contraseña debe incluir al menos un numero."
    }   
return "Contraseña correcta, puedes seguir con el formulario"
}
let resultado = ValidarContrasena("12345678Mm");

console.log(resultado);
