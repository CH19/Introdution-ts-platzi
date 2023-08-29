"use strict";
// Usando nuestra primera libreria de ts
// importando fechas para usarlos con nuestra libreria
// libreria de fechas utilizadas https://date-fns.org/docs/Getting-Started#installation
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
// en js, ts  los meses del objeto date empiezan en 0 es decir enero es el mes 0 y diciembre es el mes 11
const date = new Date(1998, 4, 28);
const rta = (0, date_fns_1.subDays)(date, 30);
const str = (0, date_fns_1.format)(rta, 'yyyy/MM/dd');
console.log(str);
