// App para validar entra al parque tematico
// 1. Edad y altura, tener 12 años y medir mas de 140cm
// 2. pago o pase, debe haber hecho el pago de $20 o tener un pase VIP 
// 3. Condicion de salud, No debe tener restricciones medicas
// 4. Acompañante, si el visitante es menor de 16 años debe estar acompañado por un adulto.

// let PaseVip = (prompt("¿Tienes pase VIP? si/no")).toLocaleLowerCase;
// let EstadoSalud = (prompt("¿Tienes restricciones de salud? si/no")).toLocaleLowerCase;
// let Pago
// let Acompanante


let Edad = Number(prompt("Ingresa tu edad"));
let Estatura = Number(prompt("Ingresa tu estatura en Centimentros:"));

if(Edad >12 && Estatura >140){
    if(Edad <= 16){
        let Acompanante = prompt("¿Vienes acompañado?").toLocaleLowerCase();
        if(Acompanante === "no"){
            document.write("No puedes accesar sin acompañante");
        }
        else{
            //poner codigo para continuar
            let PaseVip = prompt("¿Tienes pase VIP?").toLocaleLowerCase();
            if(PaseVip === "si"){
                //codigo 2 para continuar
                let EstadoSalud = prompt("¿Tienes problemas de salud?").toLocaleLowerCase();
                    if(EstadoSalud === "si"){
                        document.write("No puedes acceder")
                    }
                    else{
                        document.write("Si puedes acceder")
                    }

            }
            else{
                Pago = prompt("¿Realizaste el pago de $20? si/no").toLocaleLowerCase();
                if(Pago === "si"){
                    //codigo 2 para continuar
                    let EstadoSalud = prompt("¿Tienes problemas de salud?").toLocaleLowerCase();
                    if(EstadoSalud === "si"){
                        document.write("No puedes acceder")
                    }
                    else{
                        document.write("Si puedes acceder")
                    }
                }
                else{
                    document.write("Es necesario realizar el pago")
                }
            }
        }
    }
    else{
        
        //poner codigo para continuar
        let PaseVip = prompt("¿Tienes pase VIP?").toLocaleLowerCase();
            if(PaseVip === "si"){
                //codigo 2 para continuar
                let EstadoSalud = prompt("¿Tienes problemas de salud?").toLocaleLowerCase();
                    if(EstadoSalud === "si"){
                        document.write("No puedes acceder")
                    }
                    else{
                        document.write("Si puedes acceder")
                    }

            }
            else{
                Pago = prompt("¿Realizaste el pago de $20? si/no").toLocaleLowerCase();
                if(Pago === "si"){
                    //codigo 2 para continuar
                    let EstadoSalud = prompt("¿Tienes problemas de salud?").toLocaleLowerCase();
                    if(EstadoSalud === "si"){
                        document.write("No puedes acceder")
                    }
                    else{
                        document.write("Si puedes acceder")
                    }
                }
                else{
                    document.write("Es necesario realizar el pago")
                }
            }
    }

}
else{
    document.write("No puedes acceder")
}
