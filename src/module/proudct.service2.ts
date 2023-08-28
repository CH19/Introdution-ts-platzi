import { product, sizes } from "./product-service";

let talla: sizes = 'M'

const products: product[] = [];
//  exportando el metodo de añadir  los productos
export const addProduct = (producto: product): void =>{
  products.push(producto);
}
export const totalStock = (stock: product[]): number=>{
  let total = 0;
  stock.forEach(item => {
    total += item.stock;
  })
  return total
}

