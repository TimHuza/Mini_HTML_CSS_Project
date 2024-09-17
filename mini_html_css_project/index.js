// Variables
let substruct = document.querySelector('#substruct');
let add = document.querySelector('#add');

console.log(substruct)

substruct.addEventListener("click", function () {
// Substract value (-1)
let output = document.querySelector('#result');
let result = Number(output.innerHTML) - 1;

if (result < 0)

output.textContent = result;
console.log(output)
});

add.addEventListener("click", function () {
// Add value (-1)
let output = document.querySelector('#result');
let result = Number(output.innerHTML) + 1;

output.textContent = result;
console.log(output)
});