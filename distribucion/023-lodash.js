"use strict";
// Interactuando con la libreria Lodash sin soporte en ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Se importa la funcion lodash dara error porque no tenemos las dependencias instaladas
const lodash_1 = __importDefault(require("lodash"));
const data = [
    {
        username: 'christin',
        role: 'Seller',
    },
    {
        username: 'Juan',
        role: 'Administrator',
    },
    {
        username: 'Juan',
        role: 'Seller',
    },
    {
        username: 'Pedro',
        role: 'Seller',
    },
    {
        username: 'Daniel',
        role: 'Costumer',
    }
];
console.log(lodash_1.default.groupBy(data, (item) => item.role));
const roles = lodash_1.default.groupBy(data, (item) => item.role);
console.log('-------------');
// console.log(roles.Seller);
console.log(lodash_1.default.chunk([2, 4, 3, 5, 3, 5], 2));
const rta = 1 + '1';
let mixed = [34, 5, 4, 3];
