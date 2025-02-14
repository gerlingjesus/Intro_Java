let teorico = Boolean(prompt("Resultado examen teorico:"))
let practico = Boolean(prompt("Resultado examen practico:"))
let vista = Boolean(prompt("Resultado examen vista:"))

/*let teorico = document.createElement("button");
teorico.innerText = "Haz clic";
document.appendChild(teorico) */




if(teorico === true && practico === true && vista === true){
    document.write("Felicidades eres Apto para la licencia de conducir")
    a//lert("Felicidades eres Apto para la licencia de conducir")
}

else if(teorico === false && practico === true && vista === true){
    document.write("Ups, hay que ponerse a estudiar mas teoria Crack")
}

else if(teorico === true && practico === false && vista === true){
    document.write("Ups, hay que ponerse a practicar mas Crack")
}

else if(teorico === true && practico === true && vista === false){
    document.write("Ups, tenemos que revisar esa vista Crack")
}

else{
    document.write("Algo salio mal, intentalo de nuevo o ponte en contacto con el administrador")
}




