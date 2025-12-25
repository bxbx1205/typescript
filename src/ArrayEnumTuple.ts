const chaiFlavours: string[] = ["Masala", "Ginger", "Cardamom"];

const chaiPrices: number[] = [20, 15, 25];

const rating:Array<[string, number]> = [
    ["Masala", 4.5],
    ["Ginger", 4.0],
    ["Cardamom", 4.7]
];

type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    { name: "Masala", price: 20 },
    { name: "Ginger", price: 15 },
    { name: "Cardamom", price: 25 }
];

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"];
// cities.push("Chennai"); // Error: Cannot add to a readonly array

const table:number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];

let userInfo: [string, number, boolean?];
userInfo = ["Alice", 30, true]; // boolean was optional
userInfo = ["Bob", 25]; // valid without boolean

const location: readonly [number, number] = [28.6139, 77.2090];

// location[0] = 29.0000; // Error: Cannot modify a readonly tuple

const chaiItems:[name:string,price:number] = ["Masala", 20]

enum CupSize {
    Small,
    Medium,
    Large
}

const size = CupSize.Large;

enum Status {
    Ordered = "ORDERED",
    Preparing = "PREPARING",
    Served = "SERVED"
}

enum ChaiType{
    Masala="MASALA",
    Ginger="GINGER",
    Cardamom="CARDAMOM"
}

function orderChaiType(type: ChaiType) {
    console.log(`Ordering a cup of ${type} chai`);
}

orderChaiType(ChaiType.Ginger);