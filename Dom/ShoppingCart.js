
let inputNombre= document.getElementById("form-controlNombre").value= "Juana"

console.log(inputNombre);

let inputApellido= document.getElementById("form-controlApellido").value= "Ruiz"

console.log(inputApellido);



/********* */



let mediosDePago =["Mercado Pago", "Tarjeta débito", "Tarjeta crédito"];

let seleccionForma = document.getElementById("paid")


/*opcion nula*/

let opcionNula = document.createElement("option");
opcionNula.innerText= "Seleccione forma de pago";
opcionNula.value= "";
seleccionForma.append(opcionNula);



/*Recorre el array*/

mediosDePago.forEach((formadepago, indice ) => {


let option = document.createElement("option");
option.innerText= formadepago;
option.value= indice;

/* agrego la opcion al select*/

seleccionForma.append(option);



});


