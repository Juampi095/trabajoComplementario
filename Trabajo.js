//Ejemplo 1
// let planeta=prompt("Cual es el planeta mas grande de nuestro sistema solar?");
// if (planeta=="jupiter"){
//     console.log("Felicitaciones!");
// }
// else{
//     console.log("No, es Jupiter!");
// }

// Ejemplo 2 Condicionales Anidados

// let jugador=prompt("Cual es el 10 de la seleccion Argentina?");
// if(jugador=="lionel messi"){
//     console.log("Felicitaciones!");
// }
// else if(jugador=="Lionel Messi"){
//     console.log("Felicitaciones!");
// }
// else if(jugador=="LIONEL MESSI"){
//     console.log("Felicitaciones!");
// }
// else{
//     console.log("No, es Lionel Messi!");
// }

// //Ejemplo 3

// let edad=prompt("Cual es tu edad?");
// if(edad=="18"){
//     console.log("Eres mayor de edad");
// }
// let esMayorDeEdad=(edad>=18);
// console.log(esMayorDeEdad)

//Ejemplo Messi OR

// let jugador = prompt("Cual es el 10 de la seleccion Argentina?")
// if (((jugador == "lionel messi") || (jugador == "Lionel Messi") || (jugador == "LIONEL MESSI"))) {
//     console.log("Felicitaciones!");
//     alert("Felicitaciones!");
// }
// else{
//     console.log("No, es Lionel Messi!");
//     alert("No, es Lionel Messi!");
// }

//EJEMPLO AND
// let usuario=prompt("Ingrese nombre de usuario");
// let password=prompt("Ingrese su contraseña");
// if((usuario=="juan")&&(password==7891)){
//     console.log("Bienvenido al Sistema");
//     alert("Bienvenido al Sistema");
// }
// else{
//     console.log("Error en usuario y/o contraseña");
//     alert("Error en usuario y/o contraseña");
// }

// EJEMPLO WHILE
// let gastos = parseInt(prompt("Ingresa tus gastos(-1 para salir)"));
// let sumaGastos = 0;
// let cantidadGastos = 0;
// while (gastos != -1) {
//     sumaGastos = sumaGastos + gastos;
//     cantidadGastos = cantidadGastos + 1;
//     gastos = parseInt(prompt("Ingresa tus gastos(-1 para salir)"));  }
//     let promedioGastos = sumaGastos / cantidadGastos;
//     console.log("El promedio de gastos es: " + promedioGastos);
//     alert("El promedio de gastos mensual es: " + promedioGastos);

//EJEMPLO SWITCH

// let colorAutos = prompt("Ingresa el color de auto y te dire los modelos disponibiles");

// switch (colorAutos) {
//     case "Azul":
//     case "AZUL":
//         alert("En azul tenemos disponibles 2 modelos");
//         break;

//     case "Blanco":
//     case "BLANCO":
//         alert("En blanco tenemos disponible 1 modelo");
//         break;

//     case "Negro":
//     case "NEGRO":
//         alert("En negro tenemos disponible 3 modelos");
//         break;

//     case "Amarillo":
//     case "AMARILLO":
//         alert("En amarillo tenemos disponible 2 modelos");
//         break;

//     default:
//         alert("No tenemos modelos disponibles en ese color");
//        break;
// }
