//var randomNumber1 = Math.random(); --> vai gerar de forma aleatória números de 0 - 0,9999999999999
//var randomNumber1 = Math.random() * 6; --> então vamos multiplicar por 6 para retornar números de 0 a 5
//var randomNumber1 = Math.floor(Math.random() * 6); --> usando Math.floor para arredondar para números inteiros
//var randomNumber1 = Math.floor(Math.random() * 6) +1; --> somando 1 aos números para retornar números de 1 a 6

var randomNumber1 = Math.floor(Math.random() * 6) +1; //---> números de 1 à 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //---> concatenando dicerandomNmber.png (dice1.png)
var randomImageSource = "images/" + randomDiceImage; //---> agora precisamos concatenar o caminho onde estão as imagens (images/dice1.png)

var image1 = document.querySelectorAll("img")[0]; //---> posição 0, ou seja a 1° posição
image1.setAttribute("src", randomImageSource);





//------------------------------------------------------------------------------
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //---> posição 1, ou seja 2° posição
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);





//------------------------------------------------------------------------------
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Jogador 1";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Jogador 2 🏆";
}
else {
  document.querySelector("h1").innerHTML = " Empate 🤬"
}
