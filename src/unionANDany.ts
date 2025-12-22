let subs:number | string = 10

let apiRequestStatus: "pending" | "success" | "error" = "pending"

let airlineSeat: "aisle" | "middle" | "window" = "aisle"

airlineSeat = "middle"

const orders = ['12', '20','42']

let currentorder: string|undefined;

for(let order of orders ){
    if(order==='28'){
        currentorder=order
        break
    }
    currentorder = "-1"
}
// currentorder = 243
console.log(currentorder)