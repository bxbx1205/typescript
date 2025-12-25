function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai`);

}

makeChai("Masala", 3);


function getChaiPrice(): number {
    return 25;

}

function makeOrder(order: string): string | null {
    if (!order) return null;
    return order
}

function logChai(): void {
    console.log("Chai logged");
}

function orderChai(type?: string) {
    if (type) {
        console.log(`Ordering a cup of ${type} chai`);
    } else {
        console.log("Ordering a cup of regular chai");
    }
}
function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "medium" | "large";
}) {
    console.log(`Creating a ${order.size} cup of ${order.type} chai with ${order.sugar} spoons of sugar`);
}