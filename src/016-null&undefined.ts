(()=>{
  // let holi: number = null;
  // let holi2: string = undefined

  let myNumber: number | null = null;

  console.log(hi('christian'));
  console.log(hi(null));

  // los valores null los podemos usar en casos determinados pero que son bastante posibles
  function hi(name: string | null){
    let hola =  ' Hola ';
    if(name) {
     hola += name;
    }else{
      hola += ' Nobody ';
    }
    return hola
  }
  //  Usando operadorres en ts
  function hiV2(name: string | null){
    let hola = 'Hola';
    hola += name?.toUpperCase() ?? 'Nobody';
  }
})()
