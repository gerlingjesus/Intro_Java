//EJERCICIO "CLASIFICACIÓN DE FRUTAS"

/*Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta 
cuántas hay de cada tipo.

Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).*/

const frutas = ['manzana','pera','manzana','uva','uva','manzana','uva'];

const conteo = {
    manzana: 0,
    pera: 0,
    uva: 0,
}
//usando el ciclo FOR
/*for(index = 0; index < frutas.length; index++){
    if(frutas[index] === 'manzana'){
        conteo.manzana++;
    }
    else if(frutas[index] === 'pera'){
        conteo.pera++;
    }
    else if(frutas[index] === 'uva'){
        conteo.uva++;
    }
}*/

//usando el ciclo WHILE
let contador = 0;
while(contador < frutas.length){
    if(frutas[contador] === 'manzana'){
        conteo.manzana++;
    }
    else if(frutas[contador] === 'pera'){
        conteo.pera++;
    }
    else if(frutas[contador] === 'uva'){
        conteo.uva++;
    }
    contador++;

}

console.log('Manzanas:',conteo.manzana);
console.log('Peras:',conteo.pera);
console.log('uvas:',conteo.uva);

//=========================================================================================
const emojis = [1, 3, 2];

// emojis.push('abc');
// emojis.unshift('start');
//emojis.unshift('Gerling'); 
//emojis.pop();
//emojis.sort()
const ArregloAfectado = emojis.map((x) => x * 2);

// console.log(emojis);
// console.log(ArregloAfectado);

const obj = {
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'rojo',
}

// // console.log(obj);
// // console.log(obj.color);

const ArrayDeCarros = [
    {
        marca: 'Toyota',
        modelo: 'Corolla',
    },
    {
        marca: 'Honda',
        modelo: 'Civic',
    }
]

// console.log(ArrayDeCarros[1].marca);

//EJEMPLO EJERICIO CARROS

//Array con objetos dentro
const autos = [
    {marca: 'Toyota', modelo: 'Corolla', color: 'azul'},
    {marca: 'Honda', modelo: 'Civic', color: 'rojo'},
    {marca: 'Subaru', modelo: 'WRX', color: 'gris'},
    {marca: 'BMW', modelo: 'M4', color: 'azul'},
    {marca: 'Ford', modelo: 'Mustang', color: 'rojo'},
    {marca: 'Tesla', modelo: 'Model 3', color: 'gris'},
    {marca: 'Chevrolet', modelo: 'Solverado', color: 'blanco'},
]
let autoBuscado = null;

//buscamos caracteristicas por marca
for(let index = 0; index < autos.length; index++){
    if(autos[index].marca === 'Honda'){
        autoBuscado = autos[index];
        break;
    }
}

if(autoBuscado){
   // console.log(autoBuscado);
}
else{
    //console.log('Auto no encontrado');
}

//Buscamos todos los autos disponibles de cierto color especificico
let autoColor = [];

for(index = 0; index < autos.length; index++){
    if(autos[index].color === 'blanco'){
        autoColor.push(autos[index]);
    }
}

//console.log('Se encontro del color',autoColor);