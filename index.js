'use strict'

let mongoose = require('mongoose');
let app = require('./app');
//Puerto definido
const port = process.env.PORT || 3678;

//Conexion a la base de datos de MongoDB
mongoose.connect('mongodb://localhost/favorites', (err, res) =>{
    if(err){
        console.log('Conexion a Mongo incorrecta')
        throw err;
    }else{
        console.log('Conexion a Mongo correcta')
        app.listen(port, () => {
            console.log(`Esta corriendo en http://localhost:${port}`);
        });
    }
});

