(()=>{
  type Sizes = 'S' | 'M' |'L' |'XL';
  function productToJSON(
    title: string,
    creditAt: Date,
    stock: number,
    size?: Sizes){
    return {
      title,
      creditAt,
      stock,
      size
    }

  }
  const product = productToJSON('Juego', new Date, 23, 'S' );
  console.log(product);

  const productToJSONv2 = (
    title: string,
    creditAt: Date,
    stock: number,
    size?: Sizes) => ({  title,
      creditAt,
      stock,
      size
    })
    // Poniendo un parametro opccional en la funcion
    const product2 = productToJSONv2('Cocina', new Date, 24);
    console.log(product2);
})()
