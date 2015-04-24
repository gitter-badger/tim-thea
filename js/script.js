function compHand() {
  var randomHand = Math.floor(Math.random() * 3) + 1;
  var compRock = "KISS";
  var compPaper = "HEART";
  var compScissors = "CUPID";
  if (randomHand === 1) {
    return compRock;
  }
  if (randomHand === 2) {
    return compPaper;
  }
  if (randomHand === 3) {
    return compScissors;
  }
}

//																 KISS = ROCK    || HEART = PAPER    || CUPID = SCISSORS 
//																 KISS = ROCK    || HEART = PAPER    || CUPID = SCISSORS 
//																 KISS = ROCK    || HEART = PAPER    || CUPID = SCISSORS 
//																 KISS = ROCK    || HEART = PAPER    || CUPID = SCISSORS 
function playerHand() {
  var playerWin = "You Win";
  var compWin = "You Lose";
  var playerTie = "You Tie";
  var comp = compHand();
  if (playerChoice.toUpperCase() === "KISS" && comp === "CUPID") {
    playerScore += 1
    return playerWin
  } else if (playerChoice.toUpperCase() === "HEART" && comp === "KISS") {
    playerScore += 1
    return playerWin
  } else if (playerChoice.toUpperCase() === "CUPID" && comp === "HEART") {
    playerScore += 1
    return playerWin
  } else if (playerChoice.toUpperCase() === "KISS" && comp === "HEART") {
    compScore += 1
    return compWin
  } else if (playerChoice.toUpperCase() === "HEART" && comp === "CUPID") {
    compScore += 1
    return compWin
  } else if (playerChoice.toUpperCase() === "CUPID" && comp === "KISS") {
    compScore += 1
    return compWin
  } else if (playerChoice.toUpperCase() === "CUPID" && comp === "CUPID") {
    return playerTie
  } else if (playerChoice.toUpperCase() === "KISS" && comp === "KISS") {
    return playerTie
  } else if (playerChoice.toUpperCase() === "HEART" && comp === "HEART") {
    return playerTie
  } else {
    return ("Something isn't quite working");
  }
}
var playerScore = 0;
var compScore = 0;
var playerName = prompt("Welcome to the most Romantic 'Rock Paper Scissors' game. Type in your name so we can identify your Beauty");
alert("Best out of Three");
var playerChoice = prompt("Please Choose a hand: Kiss, Heart, or Cupid");
alert(playerHand());
var playerChoice = prompt("Please Choose a hand: Kiss, Heart, or Cupid");
alert(playerHand());
var playerChoice = prompt("Please Choose a hand: Kiss, Heart, or Cupid");
alert(playerHand());
console.log("Love Villian: " + compScore);
console.log(playerName + ": " + playerScore);
if (playerScore > compScore) {
  document.write("<h3>" + playerName + " Wins </h3><br><h2>You Score: " + playerScore + "!</h2>" + "<br>" + "<h2>Computer Score: " + compScore + "!</h2>")
} else if (playerScore < compScore) {
  document.write("<h3>" + playerName + " Lost </h3><br><h2>You Score: " + playerScore + "!</h2>" + "<br>" + "<h2>Computer Score: " + compScore + "!</h2>")
} else if (playerScore === compScore) {
  document.write("<h3>" + playerName + " Ties! </h3><br><h2>You Score: " + playerScore + "!</h2>" + "<br>" + "<h2>Computer Score: " + compScore + "!</h2>")
}

//																 KISS = ROCK    || HEART = PAPER    || CUPID = SCISSORS 
//																 KISS = ROCK    || HEART = PAPER    || CUPID = SCISSORS 
//																 KISS = ROCK    || HEART = PAPER    || CUPID = SCISSORS 
//																 KISS = ROCK    || HEART = PAPER    || CUPID = SCISSORS 