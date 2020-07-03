let usuario = prompt('Digite una frase, esta sera imprimida al reves');
let usuarioreverso = "";
let i = usuario.length-1;
for(i; i>=0; i--){
    usuarioreverso+= usuario[i];
}
console.log(usuarioreverso);