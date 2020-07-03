let usuario = 0;

usuario = parseInt(prompt('Digite un año,se le dira si el mismo es bisiesto o no'));

if (usuario % 4 == 0 && usuario % 100 != 0) {
    console.log(`El año que digitó:${usuario} es bisiesto`);
}else if(usuario % 100 ==0 && usuario % 400 == 0){
    console.log(`El año que digitó:${usuario} es bisiesto`);
}else{
    console.log(`El año que digitó:${usuario} no es bisiesto`);
}