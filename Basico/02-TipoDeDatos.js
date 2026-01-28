/*
TIPOS DE DATOS EN JAVASCRIPT (PRIMITIVOS): datos basicos del lengauje
son los datos en los que se fundamenta nuestra interaccion con el lneguaje
son datos basicose inmutables, representando solo 1 valor
no tienen funciones ni metodos, son 7:
*/

//string = cadena de texto
let nombre="alexander"
let apellido = "garcia"
let email= "sander.com"
console.log(nombre,apellido,email)

//numeros (number)
let edad = 27 //entero
let altura = 1.78 //decimal

//booleanos (boolean)
let verdades = true
let falsedades = false

//indefinido (undefined)
let undefinedValue
console.log(undefinedValue)

//null
let nullValor = null

//simbolo - symbol , intenta representar valores unicos , como identificadores de propiedades
// de futuros objetos, para evitar colisiones
let simbolo = Symbol("mi simbolo") 

//big int , se usa cuando se busca representar un numero grande
//cuadno nose puede usar el tipo Number
//LIMITE: se puede usar toda la memoria de la maquina
let big = BigInt(12312321312321321313213) 
let big2 = 213132132132131231242413123123213n //otra forma de usarlo

//mostrar tipos de datos
console.log(typeof nombre)
console.log(typeof apellido)
console.log(typeof email)

console.log(typeof edad)
console.log(typeof altura)

console.log(typeof undefinedValue)

console.log(typeof nullValor)

console.log(typeof simbolo)

console.log(typeof big)
console.log(typeof big2)
