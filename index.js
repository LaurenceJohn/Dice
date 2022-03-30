function diceNumber(dice){
    var randomNumber = Math.floor((Math.random() * dice) + 1);

    return randomNumber;
}

var diceOne = diceNumber(6);
var diceTwo = diceNumber(6);

document.querySelector(".img1").setAttribute("src", "./images/dice" + diceOne + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + diceTwo + ".png");

if (diceOne > diceTwo){
    document.querySelector("h1").textContent = "Player 1 Wins 🎉"
}
else if (diceOne < diceTwo){
    document.querySelector("h1").textContent = "Player 2 Wins 🎉"
}
else if (diceOne === diceTwo){
    document.querySelector("h1").textContent = "Draw!"
}