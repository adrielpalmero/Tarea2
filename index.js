let usser = prompt("Introduzca su usuario");
let pass = parseInt(prompt("introduzca su codigo"));

if (usser == "administrador" && pass == 1234) {
    console.log("Bienvenido a mi login");
    alert("Bienvenido a mi login");
} else{
    console.log("Contraseña incorrecta");
    alert("Vuelva a ingresar su contraseña")
}

let num1 = prompt ("Introduzca el primer numero:")
let num2 = prompt ("Introduzca el segundo numero:")
let num3 = prompt ("Introduzca el tercer numero:")

let nums = [num1, num2, num3];
let saludo = "Hola" + "mundo"

function login(){
    alert("saludo");
    console.log(saludo);
}