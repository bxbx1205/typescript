// class Chai{
//     flavour: string;
//     price: number;

//     constructor(flavour: string, price: number){
//         this.flavour = flavour;
//         this.price = price;
//     }
    
// }

// const MasalaChai = new Chai("Masala", 20);
// MasalaChai.flavour = "Masala";
// MasalaChai.price = 20;

class Chai{
    public flavour: string = "Masala";
    private ingredients: string = "Ginger, Cardamom, Cloves";

    reveal(){
        return this.ingredients; //ok
    }

    protected shopName: string = "Chai Point";

    getShopName(){
        return this.shopName; //ok
    }
}

class branch extends Chai{
    branchInfo(){
        return this.shopName; // ok
    }
}

const c = new Chai();
 c.reveal();


 class Walet {
    #balance: number=100;
    
    getBalance() {
        return this.#balance;
    }
}  

const w = new Walet();

class Cup{
    readonly size: number=250;
    constructor(size:number){
        this.size = size;
    }
}