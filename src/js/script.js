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

const open = document.querySelector(".nav-btn");
const navigator = document.querySelector(".nav1");
const close = document.querySelector(".close");

console.log(navigator);

open.addEventListener("click", function(){
    navigator.style.display = "flex";
});


close.addEventListener("click", function(){
    navigator.style.display = "none";
});