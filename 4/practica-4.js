let usuario = prompt('Digite una frase');
let caracter = prompt('Digite un caracter de la frase anteriror, se le mostrara cuantas veces parece el mismo');
let numeroletras= [];
let i =0;
while (i< usuario.length) {
    if(usuario[i] == caracter){
        numeroletras.unshift(i);
    }
    i++;
}
console.log(numeroletras.length);