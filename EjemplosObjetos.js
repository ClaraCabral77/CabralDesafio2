
//Ejercicio 1

//class Cancion{
//    constructor (titulo, autor){
  //  this.titulo= titulo;
   // this.autor= autor;
//}


//mostrarTitulo (){
  //  this.titulo= "una calle me separa";
//}
//mostrarAutor(){
   // this.autor= "Nestor";
//}


//}

//const song= new Cancion ("una calle me separa","Nestor");

//console.log(song);

//Ejercicio 2

/* class Persona{
    constructor (nombre, dni){
    this.nombre= nombre;
    this.edad= false;
    this.dni= dni;
}


mostrar (){
    console.log(this.nombre, this.dni);
}
esMayor(){
    if(edadPersona>=18){
        this.edad= true;
    }
   
    
}
}

const nombrePersona = prompt("Ingrese nombre");
const edadPersona= prompt("Ingrese la edad");
const dniPersona= prompt("Ingrese dni");

const person= new Persona (nombrePersona, edadPersona, dniPersona);

console.log(person.nombre + " " + person.dni);
person.esMayor();
console.log(person.edad); */

//Ejercicio 3
/* 
class Cuenta{
    constructor (titular, cantidad){
        this.titular= titular;
        this.cantidad= cantidad;
    }
    mostrar(){
        console.log(this.titular, this.cantidad);
    }
    ingresar(cantidad){
        if(cantidadIngresar >=0){
            alert(`Usted ingreso ${cantidadIngresar} con exito`);
        }
        else{
            alert("monto invalido");
        }

    }
    retirar(cantidad){
        if(cantidadRetirar >0){
            alert(`Usted retiro ${cantidadRetirar} con exito`);
        }
        else{
            alert("monto invalido");
        }

    }
}

const nombreTitular= prompt("Ingrese nombre titular");
const cantidadIngresar= prompt("Ingrese cantidad a ingresar");
const cantidadRetirar= prompt("Ingrese cantidad a retirar");

const cuenta1= new Cuenta(nombreTitular, cantidadIngresar, cantidadRetirar);
console.log(cuenta1.nombreTitular, cuenta1.cantidadIngresar, cuenta1.cantidadRetirar);

cuenta1.ingresar();
console.log(cuenta1.cantidad);
cuenta1.retirar();
console.log(cuenta1.cantidad);
 */
/*Ejercicio 4*/

class Calculadora{
    constructor (numero1, numero2,){
        this.numero1= numero1;
        this.numero2= numero2;

    }

multiplicar(){
 return  this.numero1 * this.numero2;


}
sumar(){
    return this.numero1 + this.numero2;


}
restar(){
    return  this.numero1 - this.numero2;


}
dividir(){
    return  this.numero1 / this.numero2;


}
}

const number1= prompt("Ingrese un numero");
const number2= prompt("Ingrese otro numero");


const calc1= new Calculadora(number1, number2);
const resultadoMult= calc1.multiplicar();
const resultadoSuma= calc1.sumar();
const resultadoResta= calc1.restar();
const resultadoDividir= calc1.dividir();

console.log(resultadoMult);



/*Ejercicio 5*

class Libro{
    constructor(titulo, autor, prestado){
        this.titulo= titulo;
        this.autor= autor;
        this.presado= Boolean;

    }

    prestamo(){

    }
    devolver(){
        
    }
}*/




//const producto1= new Producto("parker1", 1200, 60);
//const producto2= new Producto("parker2", 320, 120);
//const producto3= new Producto("parker3", 550, 80);

//let nombreDeProductos = [producto1, producto2, producto3]
//console.log(nombreDeProductos);

//for(let i=0; i < nombreDeProductos.length; i++){
  //  console.log(`Nombre del producto: ${nombreDeProductos[i].nombre} precio: ${nombreDeProductos[i].precio} Cantidad en stock: ${nombreDeProductos[i].stock}`);
//}

//console.log(nombreDeProductos[2]);
