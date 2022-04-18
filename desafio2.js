

let ingresarMonto = parseInt(prompt("Ingresar monto"));
let ingresarCuotas=parseInt(prompt("¿En cuántas cuotas queres pagar?"));



let resultado = dividir(ingresarMonto, ingresarCuotas);
alert(`las cuotas son ${ingresarCuotas} de $${resultado}`);


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
     alert("No es una cuota valida, vuelve a intentarlo");
     return resultado
     
    }   
    
}







