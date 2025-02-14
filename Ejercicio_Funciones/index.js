// Instrucciones para resolver el problema:
// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
//Gerling Jesús Pérez Hernández

let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
    //console.log(librosLeidos[0])
}

function mostrarLibrosLeidos(){
    for(i = 0; i < librosLeidos.length; i++){
        console.log(librosLeidos[i]);

    }
}

agregarLibro("El principito");
agregarLibro("padre rico, padre pobre");
agregarLibro("El principito 2");

mostrarLibrosLeidos();
