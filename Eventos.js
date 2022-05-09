let productos = [
  
    {
        nombre: "Producto 4",
        precio: 700,
        codigo: "P-4",
    },
];

let contenedor = document.getElementById("contenedor");

function agregarProductoAHTML (producto) {

    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.innerText = "Nombre: " + producto.nombre;

    let li2 = document.createElement("li");
    li2.innerText = "Precio: " + producto.precio;

    let li3 = document.createElement("li");
    li3.innerText = "Codigo: " + producto.codigo;

    ul.append(li1, li2, li3);

    contenedor.append(ul);
}

/**
 * BOTON MOSTRAR UNO SOLO
 */
let boton = document.getElementById('evento');
boton.addEventListener("click", () => {

    if(productos.length > 0) {

        let producto = productos.pop();

        agregarProductoAHTML(producto);

    } else {
        alert("No hay más productos");
    }

});

