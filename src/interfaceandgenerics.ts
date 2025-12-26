interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}

const masala:Chai = {
    flavour: "Masala",
    price: 20
}

interface Shop {
    readonly id: number;
    name: string;
}

const s:Shop = {
    id: 1,
    name: "Chai Point"
};

interface DiscountCalculator {
    (price: number): number;
}

const apply50: DiscountCalculator = (price: number) => {
    return price - 50;
}

interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Machine started");
    },
    stop() {
        console.log("Machine stopped");
    }  
}