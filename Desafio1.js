

let ingresarNumero = parseInt(prompt("Ingresar numero"));

for(let i= 1; i<=10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + " x " + i + " = " + resultado);
}


let nombre= prompt("Adivina el nombre");

while(nombre === "sofia"){
    alert("acertaste el nombre")
    switch (nombre){
        case "sofia":
            alert("hola sofia")
        break;
    }
}
alert("fallaste")
