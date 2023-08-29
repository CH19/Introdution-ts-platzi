(()=>{
  const login = (email: string, password: string): void => {
    console.log(email, password);
  }
  login('chris.co', 'sfde43434');
  // funcion con anotacion de datos
  const login2 = (data: {email: string, password: string}): void => {
    console.log(data.email, data.password);
  }
  login2({
    email: 'shdfsd.co',
    password: 'sdfsdf34'
  })

  type sizes = 'S' | 'M' |'L' |'XL';
  // funcion anotcacion de datos y tipado literal
  const addProduct = (data: {
    title: string,
    price: number,
    stock: number,
    size?: sizes,
  }) => data;
  let talla: sizes = 'M'
  let datos = {
      title: 'Cosa',
      price: 2432,
      stock: 23,
      size: talla
  }

  console.log(addProduct(datos));
})()

let price = 100;

