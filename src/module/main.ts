import { addProduct, totalStock, } from "./proudct.service2";
import { product, sizes } from "./product-service";

let talla: sizes = 'M'
const products: product[] = [{
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
addProduct({
  title: 'Cosa',
  price: 2432,
  stock: 23,
  size: talla
})
console.log(totalStock(products));
