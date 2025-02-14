// function sumar(){
//     let resultado = 3+3;
//     console.log("El resultaddo es",resultado);
// }

// sumar()

// function sumarParametros(numeo1, numero2){
//     console.log(numeo1 + numero2);
// }

// sumarParametros(10, 20);

// function Saludo(nombre, apellido, edad, pasatiempo){
//     console.log('Hola soy', nombre, apellido, 'tengo la edad de', edad, 'y me gusta', pasatiempo);
// }

// Saludo('Gerling', 'Perez', 28, 'futbol');

// //Arrow funtion se declara: () => { }

// //Anonima:  cont Hola2 = funtion(){ }
// //Hola2()     ;Se manda a llamar la variable constante


// function limite(nombre){
//     setTimeout(() => {
//         alert(`Entrega tu examen, ${nombre}`);
//     }, 3000);
// }

// limite('Gerling')

//Ejemplo para conta los numeros pares de un arreglo

// function contarPares(numeros){
//     let contador = 0;
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros[i] % 2 === 0){
//             contador++
//         }
//     }
//     return contador;
// }

// console.log(contarPares([1,2,3,4]));


//Ejemplo una función que reciba un array de numero  y retorne el numero más grande

// function mayor(numeros){

//     let numeroMayor = numeros[0];

//     for(let i = 0; i < numeros.length; i++){
        
//         if(numeros[i] > numeroMayor){
//             //console.log(numeros[i]);
//             numeroMayor = numeros[i];
//         }
//     }
//     return numeroMayor;
// }

// console.log(mayor([19,1,27,5]));


// Objeto con datos que pueda calcula el promedio de un estudiante

// const estudiante = {
//     nombre: "miguel",
//     edad: 28, 
//     notas: [50,90,70]
// }

// function calcularPromedio(){
//     let suma = 0;
//     for(let i = 0; i < estudiante.notas.length; i++){
//         suma += estudiante.notas[i];
//     }
//     return suma / estudiante.notas.length;
// }

// console.log(calcularPromedio());



