//ACTIVIDAD 01
// //console.log(`Mi nombre es: ${nombre}, tengo la edad de: ${edad}`)
// document.write(`Mi nombre es: ${nombre}, tengo la edad de: ${edad}`)

/*
console.log(typeof 42)
console.log(typeof 'veinticinco')
console.log(typeof -666)
console.log(typeof true)
console.log(typeof 0)
console.log(typeof'')
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof false) */
/*
var numero1 = Number(prompt('Numero 1:'))
var numero2 = Number(prompt('Numero 2:'))
var numero3 = Number(prompt('Numero 3:'))

var suma = numero1+numero2+numero3;

//alert('suma' + suma)

document.write(suma) */


//ACTIVIDAD 2: Evaluador de Notas con Mensajes Personalizados
// Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

// Si la nota es 90 o más, el estudiante aprueba con "Excelente".
// Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
// Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
// Si la nota es menor de 60, el estudiante no aprueba.

let Nota = Number(prompt("Ingresa tu nota:"));

if(Nota !== 0){
// Si la nota es 90 o más, el estudiante aprueba con "Excelente".
    if(Nota >= 90 && Nota <=100){
            document.write("Excelente");
        }
// Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    else if(Nota >= 75 && Nota <=89){
        document.write("Bien");
    }
// Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    else if(Nota >= 60 && Nota <=74){
        document.write("Suficiente");
    }
// Si la nota es menor de 60, el estudiante no aprueba.
    else if(Nota < 60){
        document.write("No aprobatorio");
    }
    else{
        document.write("Numero invalido :(");
    }





}
else{
    document.write("INGRESA UN NUMERO DIFERENTE A 0")
}