const express = require('express');
const path = require('path') // une directorios
const morgan = require('morgan')  //
const mysql = require('mysql')
const dbconnection = require('express-myconnection')
const app = express();



//importando rutas
const Revistaroutes = require('./routes/routes')
//settings


app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs') //motor de plantillas
app.set('views',path.join(__dirname,'views'))

//middlewares -> son funciones que se ejecutan antes de las peticiones del usuario 
//app.use(require('express-status-monitor')());

app.use(express.urlencoded({extend: false}));
//rutas
app.use('/',Revistaroutes)


//archivos estaticos para tus configuraciones frontend
app.use(express.static(path.join(__dirname,'public')))
//iniciando el servidor

app.listen(app.get('port'), () =>{
console.log('the magic start in  PORT 3000');
});   