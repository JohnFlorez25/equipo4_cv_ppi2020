const mysql = require('mysql');
// párámetros de conexión
const mysqlConnection=mysql.createConnection({
//host: '181.133.136.83', //bnuhluvomjfkpoulcnxc-mysql.services.clever-cloud.com
host:'bhtfye0o4dljwfet7h06-mysql.services.clever-cloud.com',
//user: 'mediatecnica', //uzjxnklbt5wcjjze
user: 'uvqf7v2s5f4nmc2b',
//password: '123', //yN0iZPsed0lzErrcxde7
password: 'nTorXipEHfndmN8fNKrW',
//database: 'lab_mediatecnica', //bnuhluvomjfkpoulcnxc
database: 'bhtfye0o4dljwfet7h06',
multipleStatements:true

});
//Establecer la conexión a la bd
mysqlConnection.connect(function(err){
if(err){
    console.log(err);
    return;
}else{
    console.log('Base de datos conectado');
}// fin si
})// fin connect

// al final de las funciones , callbacks, middleware
module.exports =mysqlConnection;


