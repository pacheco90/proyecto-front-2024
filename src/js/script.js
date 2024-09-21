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
const navigator = document.querySelector(".nav1");

const open = document.querySelector(".nav-btn");
const close = document.querySelector(".close-nav");
const out = document.querySelector("main");



open.addEventListener("click", function(){
    navigator.classList.add('show');
});

close.addEventListener("click", function(){
    navigator.classList.remove('show');
});

out.addEventListener("click", function(){
    navigator.classList.remove('show');
});