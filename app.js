const serie = require('./serie');

serie.crearSerie()
    .then(message => console.log(message))
    .catch(err => console.log(err));