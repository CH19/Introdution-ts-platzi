"use strict";
(() => {
    // los arrays en ts tienen solo un tipo
    // un array puede tener varios tipos de dstos pero hay que declararlos
    const number = [2, 3, 4, true, 'hola'];
    number.push(23);
    // Puede tener varios tipos inferidos del dato del Array
    number.push(true);
    // si ponemos un dato que no esta en el array da error
    // si queremos un array con valores propuesto lo deebes colocar así
    let coleccion = [];
    coleccion.push(4);
    coleccion.push('34');
})();
