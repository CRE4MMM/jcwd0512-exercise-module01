const rock: string = "rock";
const paper: string = "paper";
const scissor: string = "scissor";

function npc(): string {
    const choices = [rock, paper, scissor];
    return choices[Math.floor(Math.random() * choices.length)];
}

function winner(player: string, computer: string): string {
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === rock && computer === scissor) ||
        (player === paper && computer === rock) ||
        (player === scissor && computer === paper)
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

const pilih: string | null = prompt("Choose: 1. rock, 2. paper, 3. scissor");
if (pilih !== null) {
    let playerChoice: string;
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

    const computerChoice = npc();
    alert(`Computer chose: ${computerChoice}\n${winner(playerChoice, computerChoice)}`);
} else {
    alert("Game canceled");
}