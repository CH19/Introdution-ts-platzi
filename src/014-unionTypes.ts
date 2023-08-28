(()=>{
  // variable con diferente tipos
  let vari: number | string;
  vari = 'Christian';
  vari = 345345.345;
// esto de los unio types es conveniente porque nos permite tener varios tipos para nuestra variable y asi controlar mejor nuestro programa
// es conveniente en el uso de las funciones
function cargarCosa(cosita: number | string){
  if(typeof cosita === 'string'){
    return cosita.toUpperCase();
  }else{
    return cosita.toFixed(1);
  }
}
console.log(cargarCosa('Christian'));
console.log(cargarCosa(vari));
})()
