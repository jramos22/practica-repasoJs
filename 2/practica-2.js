let usuario = 0;
let suma =0;
let i=1;
usuario = parseInt(prompt('Digite un numero y se le mostrara la suma total desde el numero 1 hasta el numero que ud digitó'));
while (i<=usuario) {
    suma=suma+i;
    i++;
}
console.log(`La suma total de los numeros del 1 al ${usuario} es de: ${suma}`);

