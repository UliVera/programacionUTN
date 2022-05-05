// Ejercicio 1

distancia = prompt("¿Cuanta distancia haces?");

distancia = parseInt(distancia);


if (distancia >= 0 && distancia < 1000) {
    alert( "Tenes que andar a pie");
}

else if (distancia >= 1000 && distancia < 10000) {
     alert("Tenes que andar en bicicleta");
}

else if (distancia >= 10000 && distancia < 30000) {
     alert("Tenes que andar en colectivo");
}

else if (distancia >= 30000 && distancia < 100000 ) {
     alert("Tenes que andar en auto");
}

else if (distancia >= 100000) {
     alert("Tenes que andar en avión");
}

else {
     alert("Distancia no reconocida");
}

// Ejercicio 2

let numeros = [20, 60, 90, 50, 29, 24, 70, 10];

let mayor = 0;

for (let i = 0; i < numeros.length; i++) {

     if (numeros[i] > mayor) (
          mayor = numeros[i]
     )
}

document.write(`El numero mayor es : ` + mayor);