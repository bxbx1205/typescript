"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = 10;
let apiRequestStatus = "pending";
let airlineSeat = "aisle";
airlineSeat = "middle";
const orders = ['12', '20', '42'];
let currentorder;
for (let order of orders) {
    if (order === '28') {
        currentorder = order;
        break;
    }
    currentorder = "-1";
}
// currentorder = 243
console.log(currentorder);
//# sourceMappingURL=unionANDany.js.map