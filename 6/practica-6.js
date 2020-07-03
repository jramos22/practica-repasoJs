let usuario = parseInt(prompt('Digite un numero se le dira si es un numero primo o no'));
let i=2;
let numeroprimo ='si';

while (i<usuario) {
    if(usuario % i == 0){
        numeroprimo='no';
    }
    i++;
}

if (numeroprimo=='si') {
    console.log(`El numero ${usuario} que usted digitó si es primo`);
}else{
    console.log(`El numero ${usuario} que usted digitó no es primo`);
}