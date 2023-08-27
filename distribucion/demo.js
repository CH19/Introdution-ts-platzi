"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@ts-check
(() => __awaiter(void 0, void 0, void 0, function* () {
    const myCart = [];
    // se asigna el tipo de Array o interfaz a utilizar
    let products = [];
    const limit = 2;
    function getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const rta = yield fetch('http://api.escuelajs.co/api/v1/products', {
                method: 'GET'
            });
            const data = yield rta.json();
            products.concat(data);
        });
    }
    function getTotal() {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total += products[i];
        }
        return total;
    }
    function addProduct(index) {
        if (getTotal() <= limit) {
            myCart.push(products[index]);
        }
    }
    yield getProducts();
    addProduct(1);
    addProduct(2);
    const total = getTotal();
    console.log(total);
    const person = {
        name: 'Nicolas',
        lastName: 'Molina'
    };
    // esto es un numero mas un objeto no tiene sentido
    // const rta = person +  limit;
    // console.log(rta);
}));