"use strict";
(() => {
    const login = (email, password) => {
        console.log(email, password);
    };
    login('chris.co', 'sfde43434');
    // funcion con anotacion de datos
    const login2 = (data) => {
        console.log(data.email, data.password);
    };
    login2({
        email: 'shdfsd.co',
        password: 'sdfsdf34'
    });
    // funcion anotcacion de datos y tipado literal
    const addProduct = (data) => data;
    let talla = 'M';
    let datos = {
        title: 'Cosa',
        price: 2432,
        stock: 23,
        size: talla
    };
    console.log(addProduct(datos));
})();
