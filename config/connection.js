const mysql = require('mysql')

//Configurações de acesso ao banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alexreis',
    password: 'wacgr12345',
    database: 'admcondominio'
})

connection.connect((err)=>{
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
     
      console.log('connected as id ' + connection.threadId);
})

//Exportando a constante connection
module.exports = {connection: connection}