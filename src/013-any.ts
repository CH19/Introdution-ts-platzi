(()=>{
  // el valor any es cualquier cosa es como volver a js
  let myvar: any = 'sfsd';
  myvar = 34;
// con esto quitamos el sistema de tipos de typescript pero es una mala practica
// el objetivo del any es para migracion de proyectos en js a ts ya que si tenemos un error repetitivo o algo asi lo podemos usar

// cast
// es transformar una variable any a un tipo en especifico para que sea tradatado de un tipo pero lo podemos usar
const rta = (myvar as String).toUpperCase;
myvar = 'Christian';
console.log('Hola mundo');
console.log(myvar);

})();
