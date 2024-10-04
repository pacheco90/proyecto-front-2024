// let num1 = 5;
// let num2 = 5;


// if(num1<=num2){
//     alert("Si es Menor o igual que el numero 1");
// }else{
//     alert("No es Menor");
// };


// = asignacion
// == comparacion
// === comparacion de tipo
// "<" Menor que
// ">" Mayor que
// ">=" Mayor o igual que
// "<=" Menor o igual que



// console.log(lanzador);

// //Primera Funcionalidad del navegador

// //Elemento afectado relativo a las acciones
// const navigator = document.querySelector(".nav1");


// //Acciones que afectan al navigator
// const open = document.querySelector(".nav-btn");
// const close = document.querySelector(".close-nav");
// const out = document.querySelector("main");



// open.addEventListener("click", function(){
//     navigator.classList.add('show');
// });

// close.addEventListener("click", function(){
//     navigator.classList.remove('show');
// });

// out.addEventListener("click", function(){
//     navigator.classList.remove('show');
// });



//Segunda funcionalidad

//Elemento afectado relativo a las acciones
const navigator = document.querySelector(".nav1");


//Acciones que afectan al navigator
const open = document.querySelector(".nav-btn");
const close = document.querySelector(".close-nav");
const out = document.querySelector("main");


//Funcionalidades que permiten mostrar o esconder el navigator
const showNavigator = function(){
    navigator.classList.add('show');
};

const hiddeNavigator = function(){
    navigator.classList.remove('show');
};


//Escucha los clicks los elementos del dom para afectar el navigator por medio de la funcion
open.addEventListener("click", showNavigator);
close.addEventListener("click", hiddeNavigator);
out.addEventListener("click", hiddeNavigator);