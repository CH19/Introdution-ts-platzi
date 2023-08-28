"use strict";
(() => {
    let userId;
    function getThings(thing) {
        if (typeof thing === 'string') {
            console.log(thing.toUpperCase());
        }
        else {
            console.log(thing.toFixed(1));
        }
    }
    let shirtSize;
    shirtSize = 'S';
    // shirtSize = 'r'; //esto es un error porque no se encuenta en el tipo literal
})();
