"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proudct_service2_1 = require("./proudct.service2");
let talla = 'M';
const products = [{
        title: 'Cosa',
        price: 2432,
        stock: 23,
        size: talla
    }, {
        title: 'Cosa',
        price: 2432,
        stock: 23,
        size: talla
    }, {
        title: 'Cosa',
        price: 2432,
        stock: 23,
        size: talla
    }];
(0, proudct_service2_1.addProduct)({
    title: 'Cosa',
    price: 2432,
    stock: 23,
    size: talla
});
console.log((0, proudct_service2_1.totalStock)(products));
