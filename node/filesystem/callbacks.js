function sumar(a, b, time, callback) {
    setTimeout(() => {
        let result = a + b;
        callback(result);
    }, time);
}

sumar(4, 7, 3000, (resultado) => {
    console.log('Dentro de la función', resultado);
    sumar(resultado, 5, 2000, (resultado2) => {
        console.log('5000', resultado2);
        sumar(resultado2, 10, 1000, (resultado3) => {
            console.log('6000', resultado3);
        })
    });
});

sumar(2, 5, 1000, (resultado) => {
    console.log('1000', resultado);
})

sumar(1, 34, 500, (resultado) => {
    console.log('500', resultado);
})

// a = 4;
// b = 7;
// time = 3000;
// callback = (resultado) => { };