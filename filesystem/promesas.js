function sumar(a, b, time) {
    // Definición de la Promesa
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, time);
    });

    return prom;
}

// Consumir la promesa
const res = sumar(4, 9, 3000);
res
    .then((numero) => {
        console.log('Resultado', numero);
        // sumar(2, 3, 1000)
        //     .then(numero => console.log('Resultado', numero))
        //     .catch(error => console.log('Eror', error));
    })
    .catch((error) => {
        console.log('Eror', error);
    });

sumar(5, 23, 1000)
    .then(numero => console.log('Resultado', numero))
    .catch(error => console.log('Eror', error));

// Consumir promesas async-await
// await lo colocamos delante de la función que devuelve una promesa
// async lo colocamos delante del ámbito donde estamos ejecutando la función.

async function main() {
    try {
        const numero = await sumar(5, 23, 1200);
        console.log('ASYNC_AWAIT', numero);

        const numero2 = await sumar(2, 3, 1000);
        console.log('ASYNC_AWAIT_2', numero2);
    } catch (error) {
        console.log(error);
    }
}

main();