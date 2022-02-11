const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ktemplates'
})
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: ' + error);
        return
    }
    console.log('¡Conexión completada!');
})

module.exports = conexion;