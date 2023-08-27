"use strict";
// Se declara esto para lidiar y evitar errores de scope
(() => {
    let price = 100;
    price = 12;
    console.log('price', price);
    let age = 18;
    age = age + 2;
    console.log('age', age);
    // Ponemos la variable pero no la inicializamos
    // se debe de poner el valor cuando no queremos asignar un valor por defecto para no usar el motor de inferencia
    let productInStoct = 40;
    // errores que ts advierte en el codigo estatico para ver los errores
    console.log(productInStoct);
    if (productInStoct > 10) {
        console.log('Los productos son mayores a 10');
    }
    let color = 0xfff;
    let discount = parseInt('123');
    // probando una variable String transferido a number en ts
    console.log('discount', discount);
    console.log('imprimir numero ' + color);
})();
