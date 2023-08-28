"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalStock = exports.addProduct = void 0;
let talla = 'M';
const products = [];
//  exportando el metodo de añadir  los productos
const addProduct = (producto) => {
    products.push(producto);
};
exports.addProduct = addProduct;
const totalStock = (stock) => {
    let total = 0;
    stock.forEach(item => {
        total += item.stock;
    });
    return total;
};
exports.totalStock = totalStock;
