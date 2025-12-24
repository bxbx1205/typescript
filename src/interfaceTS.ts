type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
};

function makeChai(order: chaiOrder | string) {
    console.log(order);

}

function serverChai(order: chaiOrder | string) {
    console.log(order)
}

type TeaRecipe = {
    water:number;
    milk:number;
}



class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

interface Cupsize {
    size: 'small' | 'medium' | 'large';
}

class Chai implements Cupsize{
    size: 'small' | 'medium' | 'large' = 'medium';
}

// interface Response ={ok:true} | {ok:false}
// class myRes implements Response {
//     ok: boolean = true;
// }

type TeaType = 'masala' | 'ginger' | 'cardamom';

function orderChai(t:TeaType){
    console.log(t)
}

type BaseChai = {teaLeaves:number};
type WithSugar = {sugar:number};
type MasalaChaiType = BaseChai & WithSugar


const cup: MasalaChaiType = {teaLeaves: 10, sugar: 5}