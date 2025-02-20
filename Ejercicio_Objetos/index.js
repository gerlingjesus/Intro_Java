/*
Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number)
el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], 
escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/


const libro = {
    //ESTAS SON PROPIEDADES..
    titulo: 'El principito',
    autor: 'Antonie X',
    publicacion: '1943',
    Estado: 'Disponible',
    capitulos: ['Introducción', 'El encuentro con el zorro', 'El asteroie B-612'],
//ESTOS SON MÉTODOS...
//Método para mostrar la información del libro
    describirLibro: function(){
        return `Libro titulado ${this.titulo} escrito por ${this.autor} en el año ${this.publicacion}, estado: ${libro.Estado}`
    },

//funcion para mostrar los capitulos de los libro
    listarCapitulos: function(){
        console.log(`Capitulos de ${this.titulo}`);

        this.capitulos.forEach((capitulos, index) =>{
            console.log(`${index + 1}. ${capitulos}`);
        });
    },
//funcion para agregar nuevo capitulo
    AgregarCapitulo: function(nuevoCapitulo){
        this.capitulos.push(nuevoCapitulo)
        console.log(`Capitulo agregado: ${nuevoCapitulo}`);

    },
//Función para eliminar capitulo
    EliminarCapitulo: function(CapituloEliminar){
        //this.capitulos[CapituloEliminar+1] = '';
        this.capitulos.splice(CapituloEliminar-1,1);
        //this.capitulos.pop();
    }
}

console.log(libro.describirLibro());
libro.AgregarCapitulo('New Capitulo');
libro.listarCapitulos();
libro.EliminarCapitulo(1);
libro.listarCapitulos();

//libro.listarCapitulos();