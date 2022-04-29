


/*creo funcion*/

function loguearse(nombre= "persona"){
    document.write('<img src="http://placeimg.com/200/200/tech" />')
    document.write('<img src="http://placeimg.com/200/200/Animals" />')
    document.write('<img src="http://placeimg.com/200/200/People" />')
    document.write('<img src="http://placeimg.com/200/200/health" />')
   
}



/*creo variables*/

const $eventoBoton= document.getElementById("evento");

$eventoBoton.addEventListener("click", ()=> {
    loguearse();
  
})