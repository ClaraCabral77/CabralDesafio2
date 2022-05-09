
/*Creo variables*/ 

const $img = document.createElement("img")
const $cards= document.querySelector(".card");

/*Creo nueva imagen*/

$img.setAttribute("src", "http://placeimg.com/200/200/nature")
$img.setAttribute("alt", "naturaleza")

$cards.appendChild($img)


let imagen= [
    {

    }
]


/*Creo Funcion*/

function agregarProducto(){

    /*Agrego nueva imagen*/
    
const $img2 = document.createElement("img")
const $cards= document.querySelector(".card");


$img2.setAttribute("src", "http://placeimg.com/200/200/people")
$img2.setAttribute("alt", "gente")

$cards.appendChild($img2)

const $img3 = document.createElement("img")
const $cards1= document.querySelector(".card");


$img3.setAttribute("src", "http://placeimg.com/200/200/tech")
$img3.setAttribute("alt", "tecnologia")

$cards1.appendChild($img3)


}


/*Boton*/

let boton = document.getElementById('evento');
boton.addEventListener("click", () => {

    if(imagen.length > 0) {

        let imagenNueva = imagen.pop();

        agregarProducto(imagenNueva);

    } else {
        alert("No hay más productos");
    }

});