// 1.
class Employee {
    constructor(public name: string, public workHour = 0) {};
    addWorkHour(hours: number) {
        this.workHour += hours;
    };
}

class fullTime extends Employee {
    calculateSalary(): number {
        let rate = this.workHour > 6 ? 75000 : 100000;
        return this.workHour * rate;
    };
};

class partTime extends Employee {
    calculateSalary(): number {
        let rate = this.workHour > 6 ? 30000 : 50000;
        return this.workHour * rate;
    };
};

const fullTimeEmp = new fullTime("Kibo");
fullTimeEmp.addWorkHour(8);
const partTimeEmp = new partTime("Rais");
partTimeEmp.addWorkHour(4);

console.log(`${fullTimeEmp.name} Salary: IDR ${fullTimeEmp.calculateSalary()}`);
console.log(`${partTimeEmp.name} Salary: IDR ${partTimeEmp.calculateSalary()}`);



// 2. 
interface Item {
    health?: number;
    power?: number;
}

class Player {
    constructor(public name: string, public health = 100, public power = 10) {}

    damage(power: number): void {
        this.health = Math.max(0, this.health - power);
    }

    useItem({ health = 0, power = 0 }: Item): void {
        this.health += health;
        this.power += power;
    }

    showStatus(): void {
        console.log(`${this.name} (Health: ${this.health}, Power: ${this.power})`);
    }
}

class ShootingGame {
    private players: [Player, Player];

    constructor(player1: Player, player2: Player) {
        this.players = [player1, player2];
    }

    private getRandomItem(): Item {
        return [{ health: 10 }, { power: 10 }, {}][Math.floor(Math.random() * 3 )];
    }

    start(): void {
        while (this.players.every(p => p.health > 0)) {
            this.players.forEach(p => p.showStatus());
            
            const [attacker, defender] = this.players;
            const item = this.getRandomItem();
            if (Object.keys(item).length) {
                console.log(`${attacker.name} got an item!`);
                attacker.useItem(item);
                attacker.showStatus();
            }
            
            console.log(`${attacker.name} shoots at ${defender.name}!`);
            defender.damage(attacker.power);
            this.players.reverse();
        }
        
        console.log(`${this.players.find(p => p.health > 0)?.name} wins the game!`);
    }
}

const game = new ShootingGame(new Player("Player A"), new Player("Player B"));
game.start();
console.log(game);
