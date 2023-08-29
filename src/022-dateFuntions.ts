// Usando nuestra primera libreria de ts
// importando fechas para usarlos con nuestra libreria
// libreria de fechas utilizadas https://date-fns.org/docs/Getting-Started#installation

import {subDays, format} from 'date-fns';
// en js, ts  los meses del objeto date empiezan en 0 es decir enero es el mes 0 y diciembre es el mes 11
const date = new Date(1998, 4, 28)
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
