let randomNumber1 = Math.floor(Math.random() * 6) + 1; //create random number

let dice1 = document.getElementsByClassName("dice1")[0]; //create var for first dice and select it in the DOM

dice1.setAttribute("src", "img/images/dice" + randomNumber1 + ".png"); //change the attribute of dice img with randomNumber

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dice2 = document.getElementsByClassName("dice2")[0];

dice2.setAttribute("src", "img/images/dice" + randomNumber2 + ".png");

//select elements
let textWinner = document.getElementById("title-winner"); //select h1
const btn = document.getElementsByClassName("btn")[0]; //select btn
let sectionDice = document.getElementById("dices"); //select section dices
sectionDice.style.display = "none"; // hide dices

let player1 = document.getElementsByClassName("player1")[0];
let player2 = document.getElementsByClassName("player2")[0];



btn.addEventListener("click", winner); //on click the function is activeted
player1.innerHTML = prompt("insert name player 1");
player2.innerHTML = prompt("insert name player 2");

//function for text winner
function winner() {
  sectionDice.style.display = "flex"; //show dices when function run
  btn.innerHTML = "roll the dice again";
  if (randomNumber1 > randomNumber2) {
    textWinner.innerHTML = "Player 1 <span>Wins!</span>";
  } else if (randomNumber1 == randomNumber2) {
    textWinner.innerHTML = "<span>equality</span>";
  } else {
    textWinner.innerHTML = "Player 2 <span>Wins!</span> ";
  }
  btn.addEventListener("click", reload); //reload roll dices
}

function reload() {
  window.location.reload(true);
}
