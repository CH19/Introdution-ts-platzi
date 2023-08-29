// Interactuando con la libreria Lodash sin soporte en ts

// Se importa la funcion lodash dara error porque no tenemos las dependencias instaladas
import _ from 'lodash';

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
]

console.log(_.groupBy(data, (item) => item.role));

const roles = _.groupBy(data, (item) => item.role);

console.log('-------------');
// console.log(roles.Seller);

console.log(_.chunk([2,4,3,5,3,5], 2));
const rta = 1 + '1';
let mixed: (number | boolean)[] = [34,5,4,3]
