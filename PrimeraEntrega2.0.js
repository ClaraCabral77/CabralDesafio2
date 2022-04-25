class Producto{
    constructor (nombre, precio, cantidad){
        this.nombre= nombre;
        this.precio= precio;
        this.cantidad= cantidad;
    }


mostrar(){
    console.table(this.nombre, this.precio, this.cantidad);
   
}

restar(){
if (anio < 2022){
   let resultado=  this.precio - 50
    console.table(`El precio del producto en el año ${anio} era de $${resultado}`)
}
else{
    alert("No es un año válido")
}
}

}

const anio= prompt("Año a consultar")

const producto1= new Producto ("parker1", 500, 3);
const producto2= new Producto ("parker2", 300, 5);
const producto3= new Producto ("parker3", 1500, 2);

const productos =  [];

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
console.log(productos)

/*metodos*/

producto1.mostrar();
producto2.mostrar();
producto3.mostrar();

producto1.restar();
producto2.restar();
producto3.restar();



/*Agrego un producto*/






function agregarProducto(){
    let nombreProductoNuevo= prompt("ingrese el nombre del producto");
  
    let nuevoPrecio= prompt("ingrese el nuevo precio");
    let cantidadNueva= prompt("ingrese la cantidad");
    let productoNuevo = new Producto (nombreProductoNuevo, nuevoPrecio, cantidadNueva);
    console.log(productoNuevo);
    productos.push(productoNuevo);
    productoNuevo.mostrar();
    productoNuevo.restar();
}

agregarProducto();


/*Consultar Stock*/



let productoAEliminar = prompt("Consultar Stock- Introduzca nombre del producto")
let indice = productos.findIndex(Producto => Producto.nombre == productoAEliminar) 


if(indice > -1){

alert("Este producto se encuentra en stock");
}
else{
    alert("este producto no existe")
}

   






