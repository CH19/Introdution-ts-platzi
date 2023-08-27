"use strict";
// Datos de tipo boolean
(() => {
    // declarando de forma implicita un booleano
    let itsTrue = true;
    // condicion de booleano de forma explicita
    let boolean2 = false;
    let boCondicional;
    let number = Math.random();
    console.log('number' + number);
    boCondicional = number > .5 ? true : false;
    console.log('valor' + boCondicional);
    // el objeto boolean es diferente a boolean
    // el objeto boolean es una mala practica
    let boolean = true;
})();
