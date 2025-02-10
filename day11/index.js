var rock = "rock";
var paper = "paper";
var scissor = "scissor";
function npc() {
    var choices = [rock, paper, scissor];
    return choices[Math.floor(Math.random() * choices.length)];
}
function winner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    if ((player === rock && computer === scissor) ||
        (player === paper && computer === rock) ||
        (player === scissor && computer === paper)) {
        return "You win!";
    }
    else {
        return "You lose!";
    }
}
var pilih = prompt("Choose: 1. rock, 2. paper, 3. scissor");
if (pilih !== null) {
    var playerChoice = void 0;
    switch (pilih) {
        case "1":
            playerChoice = rock;
            break;
        case "2":
            playerChoice = paper;
            break;
        case "3":
            playerChoice = scissor;
            break;
        default:
            alert("Invalid choice!");
            throw new Error("Invalid choice");
    }
    var computerChoice = npc();
    alert("Computer chose: ".concat(computerChoice, "\n").concat(winner(playerChoice, computerChoice)));
}
else {
    alert("Game canceled");
}
