class Producto{
    constructor(nombre, precio, stock){
    this.nombre=nombre;
    this.precio= precio;
    this.stock=stock;
}
}

const producto1= new Producto("parker1", 1200, 60);
const producto2= new Producto("parker2", 320, 120);
const producto3= new Producto("parker3", 550, 80);

let nombreDeProductos = [producto1, producto2, producto3]
console.log(nombreDeProductos);

for(let i=0; i < nombreDeProductos.length; i++){
    console.log(`Nombre del producto: ${nombreDeProductos[i].nombre} precio: ${nombreDeProductos[i].precio} Cantidad en stock: ${nombreDeProductos[i].stock}`);
}

console.log(nombreDeProductos[2]);
