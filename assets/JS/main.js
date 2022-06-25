//////////////////// Saludar por su Nombre ///////////////////////////////
// let nombre = prompt ("Como es tu nombre?")
// alert ("Un gusto ," + nombre)

////////////////// Suma de Numero ///////////////////////////////
// let numero = prompt ("Dime un numero que soy GOD")
// numero = parseFloat(numero)
// let numero2 = 10
// let resultadofinal = numero + numero2
// console.log(resultadofinal)

////////////////// Pedir Nombre y apellido y saludar a la persona ///////////////////////////////
// let nombre = prompt ("Como es tu nombre")
// let apellido = prompt ("Como es tu apellido")
// const espacio = " "
// let resultado = nombre + espacio + apellido
// alert ("Encantado de conocerte y bienvenido a JavaScript "+ espacio + resultado)


//////////////////// Promedio de 3 notas de un Alumno ///////////////////////////////
// let nota1 = prompt ("Primer nota del alumno")
// let nota2 = prompt ("Segunda nota del alumno")
// let nota3 = prompt ("Tercer nota del alumno")
// nota1 = parseFloat (nota1)
// nota2 = parseFloat (nota2)
// nota3 = parseFloat (nota3)
// let resultado = [(nota1 + nota2 + nota3)/3]
// alert ("El promedio del alumno es de "+ resultado)

//Jodita para bebeto////
// let nombre = prompt ("Como te llamas?(gordinigay)")
// alert ("Hola Gordini ndeaaa ,Hola "+ nombre )

// Peluqueria//
// const nombre =prompt("ingrese su nombre")
// let precio = 0
// alert("hola " + nombre + " bienvenido a la peluqueria de Don Mateo")

// let corte = prompt("Ingrese que tipo de corte quiere (opcion 1:Corte de Hombre, Opcion 2:Corte de Mujer")

// while(corte !=1 && corte != 2) {
//     alert("el corte no existe")
//     corte = prompt("Ingrese que tipo de corte quiere (opcion 1:Corte de Hombre, Opcion 2:Corte de Mujer")
// }
// if(corte == 1 ){
//     precio = 500
// }else {
//     precio = 900
// }
// alert ("El precio del corte es "+ precio)

// let dinero = prompt("Con cuanto va a pagar")
// while(dinero < precio) {
//     alert("El pago es insuficiente")
//     dinero = prompt("Con cuanto va a pagar")
// }
// let vuelto = dinero - precio
// alert("Su pago es de "+ precio + " y su cambio es "+ vuelto)

let nombre= prompt("Poneme un nombre")
alert("Vaya que me has dado!"+ nombre)

let accion = prompt("Que queres que haga?, (comer,baño,amor o dormir)").toLowerCase()
while(accion != "dormir"){
    if(accion == "comer"){
        alert("ñam ñam que rico!")
    }else if (accion == "baño"){
        alert("gracias!")
    }else if (accion == "amor"){
        alert("Te amo amiguito")
    }else {
        alert("que estas diciendo willy?")
    }
//     switch(accion){
//         case "comer":
//             alert("ñam ñam que rico!")
//             break
//         case "baño":
//             alert("Gracias!")
//             break
//         case "amor":
//             alert("Te amo amiguito")
//             break
//         default:
//             alert("Que estas diciendo willy?")
//             break
//     }
    accion = prompt("Que queres que haga?, (comer,baño,amor o dormir)").toLowerCase()
}
alert("Buenas noches")
