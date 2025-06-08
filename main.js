function saludar1(nombre) {
    return `¡Hola, ${nombre}!`;
}

console.log(saludar1("Ana")); 

function suma(a, b){
    return a + b;
}
console.log("la suma de a + b es: ", suma(3, 9));

const duplicar = (a,b)=>{
    b = 4;
    return a * b;
}
console.log("el resultado del numero duplicado es:  ", duplicar(2));


function par(numero){
    return numero % 2===0
}
if(par(2)===true){
     console.log("El resultado es par");  
}else{
     console.log("El resultado es impar")
}


function saludar(nombre, saludo="Hola querido instructor del SENA") {
     return `${saludo}, ${nombre}` 
}
 console.log(saludar("Somos Sara Garcia, Darwin Alexis, Ana Maria y Emanuel Giraldo"))


const sinParametros= () => "¡JavaScrips es genial!";
console.log(sinParametros());


(function(){
    const mensaje = "¡Soy una IIFE! me ejecuto inmediatamente";
    console.log(mensaje);    
})();

// Ejercicios intermedios

function sumarArreglo(suma){
    const arreglo = [1, 2, 3, 4, 5];
    let sumaArreglo = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
        sumaArreglo += arreglo[i];
    }
    console.log ("la suma del arreglo es:", sumaArreglo);
    return sumaArreglo; 
}
sumarArreglo();

function multiplicar(a,b, ...rest){
    let resultado = a * b;
    for (let i = 0; i<rest.length;i++){
        resultado *= rest[i];
    }
    return resultado;
}
console.log("Resultado de multiplicar (2,3,4,5) es: ", multiplicar(2,3,4,5));

function crearContador(){
    let contador =0;
    return function(){
        contador++;
        return contador;
}
}

let contador = crearContador();

console.log("Funcion llamando a otra funcion para crear contador : ",contador());


//  metodos de objetos
const calculadora = {
    suma: function(a, b) {
        return a + b;
        },
        resta: (a, b) => a - b,
    };
    console.log("Metodo Objeto suma 5,3 :", calculadora.suma(5, 3));
    console.log("Metodo Objeto resta 5,3 :", calculadora.resta(5, 3));

// factorial recursivo

const factorial = function fact(n){
    if (n === 0) return 1;
    else return n * fact(n - 1);
}
console.log("El numero factorial usando fact de 4 es: ", factorial(4));

// filtrar mayores
const filtrarMayores = arr => arr.filter(num => num >10);
console.log("los numeros mayores a 10 usando la funcion filter entre 5,12,8,15 son: ", filtrarMayores([5, 12, 8, 15]));

// parametros por defecto avanzado
function calcularArea(base = 1, altura = 1) {
    return base * altura;
}
console.log("La base", calcularArea(5));
console.log("Calcular base por altura", calcularArea(5, 3));

// Ejercicios avanzados
// callback
function procesar(Array, callback){
    return Array.map(callback);
}
console.log(procesar([1, 2, 3], num => num * 2));

// ambito y cierre
function crearSaludo(saludoPersonalizado){
    return function(nombre){
        return `${saludoPersonalizado} ${nombre}`;
    }
}
const saludo = crearSaludo('Hola');
// console.log(crearSaludo('Hola')( 'Ana'));
 
// IIFE con parametros
const resultado = (function(a, b){
    return a + b;
 })(5, 3);
console.log(resultado);

// funcion como metodo dinamico
const persona = {
    nombre: 'Sara',
    presentarse: function(){
    return `Hola, mi nombre es ${persona.nombre}`;
    }
    
};
console.log(persona.presentarse()); 

// rest parameters y reduce 
function promedio(numeros){
    return numeros.reduce((a, b) => a + b, 0) / numeros.length;
}
console.log(promedio([10, 20, 30]));

// combinacion de funcionales
function combinacion(f1, f2){
    return function(x){{
        return f2(f1(x));
    }
}
const duplica = x => x * 2;
const sumarDiez = x => x + 10;
const combinada = combinacion(duplica, sumarDiez);
 console.log(combinada(5));
}
