let usuario = 0;
let i = 1;
while (i != 0) {
    usuario = parseInt(prompt('Adivine el numero secreto de 1 a 100, si desea dejar el juego digite 0.'));
    if (usuario == 0 || usuario == 64) {
        i = 0;
        if (usuario == 64) {
            console.log('Felicidades adivisnaste el numero secreto.');
        } else {
            console.log('abandonaste.');
        }
    }else if (usuario > 100) {
            console.log('ERROR el numero que digitó es mayor que 100');
            i++;
        
    } else if (usuario > 64) {
        console.log('Usted a fallado el numero que usted digitó es mayor a el numero a adivinar. ');
        i++;
    } else if (usuario < 64) {
        console.log('Usted a fallado el numero que usted digitó es menor a el numero a adivinar. ');
        i++;
    }

}
