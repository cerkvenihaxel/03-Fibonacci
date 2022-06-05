//  * Serie de Fibonacci
// * 1 1 2 3 5 8 13 21 34 ... 
const fs = require('fs');

let fibo1 = 1;
let fibo2 = 1; 
let serie=[];

console.log(`${fibo1}`);

for(let i=2; i<=10; i++){
    serie+=`${fibo2}\n`;
    fibo2=fibo1+fibo2;
    fibo1=fibo2-fibo1;
    console.log(`${fibo2}`);
}

fs.writeFile('message.txt', serie, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });  // end of fs.writeFile
 