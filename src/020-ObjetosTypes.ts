(()=>{
  type sizes = 'S' | 'M' |'L' |'XL';
  type product = {
    title: string,
    price: number,
    stock: number,
    size?: sizes,
  }

  const addProduct = (data: product) => data;
  let talla: sizes = 'M'
  let datos = {
      title: 'Cosa',
      price: 2432,
      stock: 23,
      size: talla
  }
  console.log(addProduct(datos));
})()
