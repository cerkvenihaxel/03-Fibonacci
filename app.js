const serie = require('./serie');

let argv = process.argv;
let valor = argv[2].split('=')[1];

let cantidad = valor;

serie.crearSerie(cantidad)
    .then(message => console.log(message))
    .catch(err => console.log(err));