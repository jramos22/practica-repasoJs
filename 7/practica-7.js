let usuario= prompt('Digite un texto, se le devolvera el texto sin los espacioes en blanco');
// la parte de / significa que es una exprecion regular en este caso son los espacios vacios
// y el /g significa que lo buca de forma global o sea en toda la variable
console.log(usuario.replace(/ /g, ""));