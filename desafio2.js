

let ingresarMonto = parseInt(prompt("Ingresar monto"));
let ingresarCuotas=parseInt(prompt("¿En cuántas cuotas queres pagar?"));



function dividir(ingresarMonto, ingresarCuotas){

    if (ingresarCuotas === 1){
    return  ingresarMonto / ingresarCuotas;
}

    else if (ingresarCuotas === 3){
        
    return ingresarMonto / ingresarCuotas;
}
    else if (ingresarCuotas=== 6){
      
    return ingresarMonto / ingresarCuotas;
}
    else if (ingresarCuotas=== 12){
        
    return ingresarMonto / ingresarCuotas;
}
    else { 
     alert("No es una cuota valida");
     return resultado;
     
    }   
    
}

let resultado = dividir(ingresarMonto, ingresarCuotas);
alert(`las cuotas son ${ingresarCuotas} de $${resultado}`);





