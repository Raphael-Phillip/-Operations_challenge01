alert("Bem vindo ao programa inicial do javaScript!");

let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o segundo número");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = numberOne / numberTwo;
const restdiv = numberOne % numberTwo;

alert("A soma dos dois números é:  " + sum);
alert("A subtração dos dois números é:  " + sub);
alert("A multiplicação dos dois números é:  " + multi);
alert("A divisão dos dois números é:  " + div);
alert("O resto da divisão dos dois números é:  " + restdiv);

const impPar = Number(sum % 2);

if (impPar == 0) {
  alert("A soma dos números é par")
} else {
  alert("A soma dos números é ímpar")
};

if (numberOne == numberTwo ) {
  alert("Os números inseridos são iguais")
} else {
  alert ("Os números são diferentes")
};



