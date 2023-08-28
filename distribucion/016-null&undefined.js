"use strict";
(() => {
    // let holi: number = null;
    // let holi2: string = undefined
    let myNumber = null;
    console.log(hi('christian'));
    console.log(hi(null));
    // los valores null los podemos usar en casos determinados pero que son bastante posibles
    function hi(name) {
        let hola = ' Hola ';
        if (name) {
            hola += name;
        }
        else {
            hola += ' Nobody ';
        }
        return hola;
    }
    //  Usando operadorres en ts
    function hiV2(name) {
        var _a;
        let hola = 'Hola';
        hola += (_a = name === null || name === void 0 ? void 0 : name.toUpperCase()) !== null && _a !== void 0 ? _a : 'Nobody';
    }
})();
