//Primeiro exercício

let turma =
  "A turma de UI/UX é dinâmica e tem as características essenciais para brilhar numa empresa";

alert(turma);

console.log(
  `A letra U aparece pela primeira vez na ${turma.indexOf("U")} posição.`
);
console.log(
  `A letra X aparece pela primeira vez na ${turma.indexOf("X")} posição.`
);
console.log(`A frase tem ${turma.length}`);

//Segundo exercício

let myWishList = ["perfume", "carro", "amor"];

for (let element of myWishList) {
  console.log(element);
}

console.log(`A lista de prendas tem ${myWishList.length} itens.`);

//Terceiro exercício

function multiply(num1, num2) {
  console.log(num1 * num2);
}

//Quarto exercício

function isShortsWeather(temperature) {
  if (temperature > 25) {
    return true;
  } else {
    return false;
  }
}

//Quinto exercício

function olaButton() {
  let pergunta = prompt("Como te chamas?");
  if (pergunta.length < 1) {
    alert("Não disseste o teu nome, não te digo olá.");
  } else {
    alert(`Olá, ${pergunta}!`);
  }
}

//Sexto exercício

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
