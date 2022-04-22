let numero = parseInt(prompt("Ingrese un número"));

switch(numero) {

    case 5:
        console.log("ingresó 5");
        break;

    case 8:
        console.log("ingresó 8");

        break;
    case 20:
        console.log("ingresó 20");
        break;

    default:
        console.log("número no identificado");
        break;
}

// let entrada = prompt("Ingresar un nombre");
//
// // Repetimos hasta que se ingresa "SALIR"
// while(entrada != "SALIR" ) {
//
//     switch (entrada) {
//         case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//
//         default:
//             alert("¿QUIÉN SOS?")
//             break;
//     }
//
//     entrada = prompt("Ingresar un nombre");
// }