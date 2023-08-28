// fijate que no usamos una funcion anonima local
export type sizes = 'S' | 'M' |'L' |'XL';
export   type product = {
    title: string,
    price: number,
    stock: number,
    size?: sizes,
  }
