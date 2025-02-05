// 1. 
interface Student {
    name: string;
    age: number;
}

const student: Student = {
    name: "Alice",
    age: 20,
};

console.log(student.name);



// 2. 


// 3. 
const students: Student[] = [
    { name: "John", age: 14 },
    { name: "Mike", age: 17 },
    { name: "Anna", age: 16 },
    { name: "Sophie", age: 12 },
    { name: "Chris", age: 18 },
];

students.forEach(student => {
    if (student.age > 15) {
        student.name = "Budi";
    }
});
console.log(students);





class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

let dbProduct: Product[] = [
    new Product("apel", 5000),
    new Product("lemon", 10000)
]

interface CartItem {
    product: Product;
    qty: number;
    total: number;
}


class Transaction {
    total: number = 0;
    products: CartItem[] = [];
        
    addToCart(product: Product, qty: number) {
        const itemTotal = product.price * qty;
        this.products.push({ product, qty, total: itemTotal });
        this.total += itemTotal;
    } 
        
    checkOut(): string {
        let receipt = this.products.map((item, idx) => {
            return `${idx + 1}. ${item.product.name} ${item.product.price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}, Qty: ${item.qty}, total: ${item.total.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}`;
        }).join("\n");
    
        receipt += `\nTotal: ${this.total.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}`;
            
        return receipt;
    }
}

let transaction = new Transaction();
transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 2);
console.log(transaction.total);
console.log(transaction.checkOut());



class Murid {
    name: string;
    email: string;
    age: string;
    score: number;

    constructor(name: string, email: string, age: string, score: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = score;
    }

    newAge(): number {
        const birthDate = new Date(this.age);
        const today = new Date();
        // let age = today.getFullYear() - birthDate.getFullYear();
        // const month = today.getMonth() - birthDate.getMonth();

        // if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        //     age--; 
        // }
        const diff = today.getTime() - birthDate.getTime()

        return Math.abs(new Date(diff).getUTCFullYear() - 1970);
    }
}

let dbMurid: Murid[] = [
    new Murid("edo", "edo@gmail.com", "2005-04-25", 35),
    new Murid("andrew", "andrew@gmail.com", "2006-11-12", 85),
    new Murid("zafrian", "zafrian@gmail.com", "2010-02-01", 95),
    new Murid("budi", "budi@gmail.com", "2003-11-11", 55),
]

const calculateMurid = (arr: Murid[]) => {
    const highestScoreMurid = arr.reduce((max, murid) => (murid.score > max.score ? murid : max), arr[0]);
    const lowestScoreMurid = arr.reduce((min, murid) => (murid.score < min.score ? murid : min), arr[0]);

    const highestAgeMurid = arr.reduce((max, murid) => (murid.newAge() > max.newAge() ? murid : max), arr[0]);
    const lowestAgeMurid = arr.reduce((min, murid) => (murid.newAge() < min.newAge() ? murid : min), arr[0]);

    const avgScore = arr.reduce((sum, murid) => sum + murid.score, 0) / arr.length;
    const avgAge = arr.reduce((sum, murid) => sum + murid.newAge(), 0) / arr.length;

    return {
        score: {
            highest: {
                name: highestScoreMurid.name,
                email: highestScoreMurid.email,
                age: highestScoreMurid.newAge(),
                score: highestScoreMurid.score
            },
            lowest: {
                name: lowestScoreMurid.name,
                email: lowestScoreMurid.email,
                age: lowestScoreMurid.newAge(),
                score: lowestScoreMurid.score
            },
            average: avgScore
        },
        age: {
            highest: {
                name: highestAgeMurid.name,
                email: highestAgeMurid.email,
                age: highestAgeMurid.newAge(),
                score: highestAgeMurid.score
            },
            lowest: {
                name: lowestAgeMurid.name,
                email: lowestAgeMurid.email,
                age: lowestAgeMurid.newAge(),
                score: lowestAgeMurid.score
            },
            average: avgAge
        }
    };
};

console.log(calculateMurid(dbMurid));