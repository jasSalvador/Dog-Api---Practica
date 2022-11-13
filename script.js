//API = bases de dato o acciones q se pueden usar haciendo una solicitud y nos regresa algo a cambio

//USANDO PROMESAS/ sincronica, mientras espera lo q sigue luego de la funcion, igual se ejecuta
function muestraPerrito() {
    fetch('https://dog.ceo/api/breeds/image/random') //se comunica con la web dnd esta la info, la solicitud tarda 
    //un poquito, por lo q se hace una promesa de dar una resp
        //.then(response => console.log(response)) //prometo q en algun momento voy a recibir una resp console.log
        .then(response => response.json()) //then =promesa.. (response = var dond guarda a json. response se puede cambiar)
        .then(data => {
            console.log(data);
            //se recibe la resp de json y se guarda en la var data (dat se puede cambiar x cualquier otro nombre)
            //data = objeto {(proiedades de data)"message": "imagen.ext": "success"}
            //data["message"] -> regresa el valor con la url de la imagen
            //var image_perrito = '<img src="URL DE LA IMAGEN" alt="dog">'; 
            var image_perrito = '<img src="'+data.message+'" alt="dog">'; //message no se puede cambiar
            //var image_perrito = '<img src="'+data['message']+'" alt="dog">'; lo anterior se puede hacer con corchetes tb
            var contenedor_img = document.querySelector('.contenedor-img');
            //innerText -> transforma el texto
            //innerText -> respeta las etiquetas q pongamos
            contenedor_img.innerHTML = image_perrito;
        }) 
} 
//para modificar el tamaño de las imagenes, en css se le daria stylo al contenedor_img




//lo mismo pero de forma asincronica. no se ejecuta lo demas, hasta q esto se ejecute
async function muestraPerritoAsync(){
    var response = await fetch('https://dog.ceo/api/breeds/image/random'); // va esperar hasta q el fetch se ejecute y 
    //regrese algo
    var data = await response.json();

    var image_perrito = '<img src="'+data.message+'" alt="dog">';
    var contenedor_img = document.querySelector('.contenedor-img');
    contenedor_img.innerHTML = image_perrito;
}