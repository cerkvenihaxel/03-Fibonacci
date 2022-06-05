const serie = require('./serie');

let cantidad=10;

serie.crearSerie(cantidad)
    .then(message => console.log(message))
    .catch(err => console.log(err));