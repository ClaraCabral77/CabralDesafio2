
/*Creo variables*/ 

const $img = document.createElement("img")
const $cards= document.querySelector(".card");
const $fig0= document.createElement("figcaption");
const $fig1= document.createTextNode("Animals");
const $h3= document.createElement("h3");
const $h3T= document.createTextNode("$450");
const $boton= document.createElement("button")
const $botonT= document.createTextNode("Comprar");



/*Creo nueva imagen*/

$img.setAttribute("src", "http://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")


$boton.appendChild($botonT)
$h3.appendChild($h3T)
$fig0.appendChild($fig1)
$cards.appendChild($img)
$cards.appendChild($fig0)
$cards.appendChild($h3)
$cards.appendChild($boton)


let imagen= [
    {

    }
]


/*Creo Funcion*/

function agregarProducto(){

    /*Agrego nueva imagen*/
    
const $img2 = document.createElement("img")
const $cards= document.querySelector(".card");
const $fig=document.createElement("figcaption")
const $figText= document.createTextNode("Personas")

const $h3= document.createElement("h3");
const $h3T= document.createTextNode("$550");

const $boton= document.createElement("button")
const $botonT= document.createTextNode("Comprar");



$img2.setAttribute("src", "http://placeimg.com/200/200/people")
$img2.setAttribute("alt", "gente")

$boton.appendChild($botonT)
$h3.appendChild($h3T)
$fig.appendChild($figText)
$cards.appendChild($img2)
$cards.appendChild($fig)
$cards.appendChild($h3)
$cards.appendChild($boton)

const $img3 = document.createElement("img")
const $cards1= document.querySelector(".card");


$img3.setAttribute("src", "http://placeimg.com/200/200/tech")
$img3.setAttribute("alt", "tecnologia")

$cards1.appendChild($img3)


}


/*Boton "Mostrar más fotos"*/

let boton = document.getElementById('evento');
boton.addEventListener("click", () => {

    if(imagen.length > 0) {

        let imagenNueva = imagen.pop();

        agregarProducto(imagenNueva);

    } else {
        alert("No hay más productos");
    }

});







/*Local Storage*/


let usuario = prompt("¿Cuál es su nombre?")

localStorage.setItem("nombre de usuario", usuario )

console.log(JSON.stringify(`El nombre es ${usuario}`))

