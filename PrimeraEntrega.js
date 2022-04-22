

class Producto{
    constructor (nombre, precio, cantidad){
        this.nombre= nombre;
        this.precio= precio;
        this.cantidad= cantidad;
    }


    name(){
    switch (nombreProducto){
        case "parker1":
            alert(`Usted seleccionó ${nombreProducto}`);
            break;
        case "parker2":
            alert(`Usted seleccionó ${nombreProducto}`);
        break;
        case "parker3":
            alert(`Usted seleccionó ${nombreProducto}`);
            break;
            default:
        alert("Ese producto no existe");
          break;
    }

    }
     

    price(){

        switch (nombreProducto){
            case "parker1":
                let resultado= this.precio * cantidadIngresar
        alert(`El precio total es de ${resultado}`);
                break;
            
            case "parker2":
                let resultado1= this.precio * cantidadIngresar   
        alert(`El precio total es de ${resultado1}`);
            break;

            case "parker3":
                let resultado2= this.precio * cantidadIngresar
                alert(`El precio total es de ${resultado2}`);
                break;

                default:
            alert("Precio inexistente");
              break;
        }
    }  
}


const nombreProducto= prompt("Ingrese nombre del producto");
const cantidadIngresar= prompt("¿Cuántos quiere comprar?");




const producto1= new Producto ("parker1", 500, 3);
const producto2= new Producto ("parker2", 300, 5);
const producto3= new Producto ("parker3", 1500, 2);

const productos =  [];

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
console.log(productos)

/*Llamo a la funcion*/

producto1.name();
producto1.price();


/*Agrego un producto*/



function agregarProducto(){
    let nombreProductoNuevo= prompt("ingrese el nombre del producto");
  
    let nuevoPrecio= prompt("ingrese el nuevo precio");
    let cantidadNueva= prompt("ingrese la cantidad");
    let productoNuevo = new Producto (nombreProductoNuevo, nuevoPrecio, cantidadNueva);
    console.log(productoNuevo);
}

agregarProducto();
