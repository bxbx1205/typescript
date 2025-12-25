const chai ={
    name:"masala chai",
    price:20,
    isHot:true
}

// {
//     name:string;
//     price:number;
//     isHot:boolean;      
// }

let tea: {
    name:string;
    price:number;
    isHot:boolean;
}

tea = {
    name:"Ginger Tea",
    price:15,
    isHot:true
}

type Tea = {
    name:string;
    price:number;
    ingredients:string[];      
}

const adrakChai:Tea = {
    name:"Adrak Chai",
    price:25,
    ingredients:["ginger","water","tea leaves","milk","sugar"]
}

type Cup={
    size:string;
}

let smallcup:Cup={
    size:"200ml"
}

let bigcup:Cup={
    size:"500ml"
    // material:"plastic"
}

smallcup= bigcup

type Brew ={
    brewTime:number;
}

const coffee={
    brewTime:5,
    beans:"arabica"
}

const chaiBrew: Brew = coffee

type User={
    username:string;
    password:string;
}

const u:User={
    username:"tea_lover",
    password:"securepassword123"
}

type item={
    name:string;
    quantity:number;
}
type address={
    street:string;
    postalCode:string;
}
type order={
    id:string;
    item:item[];
    address:address;
}

type Chai = {
    name:string;
    price:number;
    isHot:boolean;
}

const updatechai = (updates:Partial<Chai>) =>{
    console.log("updating chai with ", updates);
    
}

updatechai({price:22});
updatechai({isHot:false});

type Chaiorder = {
    name?:string;
    quantity?:number;
}

const placeorder = (order:Required<Chaiorder>)=>{
    console.log("place order for ", order);
    
}

placeorder({name:"Masala Chai", quantity:2});

type CHAI = {
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[];
}

// type:BasicChaiInfo = Pick<CHAI, "name" | "price">;


// const chaiInfo:BasicChaiInfo={
//     name:"Lemon Chai",
//     price:18
// }

