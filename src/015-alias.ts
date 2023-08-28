(()=>{
  // creando un tipo es una coleccion de datos que nosotros conocemos
  // se utiliza como tipo
  type UserId = string | number ;
  let userId: UserId;

  function getThings(thing: UserId){
    if(typeof thing === 'string'){
      console.log(thing.toUpperCase());
    }else{
      console.log(thing.toFixed(1));
    }
  }
  // literal types
  // son datos que colocamos para que sean permitidados en una variable o un tipo
  type sizes = 'S' | 'M' |'L' |'XL';
  let shirtSize: sizes;
  shirtSize = 'S';
  // shirtSize = 'r'; //esto es un error porque no se encuenta en el tipo literal
})()
