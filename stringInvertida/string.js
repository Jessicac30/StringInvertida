
let string = 'Jessica';

let resultado = "";

for (let i = string.length - 1; i >= 0; i--) {
  resultado += string[i];
}

console.log("String invertida:", resultado);