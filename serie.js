//  * Serie de Fibonacci
// * 1 1 2 3 5 8 13 21 34 ... 
const fs = require('fs');

let crearSerie = (cantidad) => {

    return new Promise((resolve, reject) => {
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = [];

        console.log(`${fibo1}`);

        for (let i = 2; i < cantidad; i++) {
            serie += `${fibo2}\n`;
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
            console.log(`${fibo2}`);
        }

        fs.writeFile('message.txt', serie, (err) => {
            if (err)
                reject('Error al crear el archivo.');
            else
                resolve('Archivo creado con éxito.');
        }); // end of fs.writeFile   */  
    }); // end of Promise
}
module.exports = {
    crearSerie
}