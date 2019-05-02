const controller = {}
const mysql = require('mysql')
const url =require('../routes/database')
const dbconnection = mysql.createConnection(url.urlMysql)


controller.list  = (req, res) => {
  dbconnection.query("SELECT * FROM revist", (error, results, fields)=>{

    res.render("Revista",{
        data: results
    })
});
}

controller.agregar = (req, res) =>{
    const data=req.body
   dbconnection.query('INSERT INTO revist set ?',[data], (err,results)=>{
       res.redirect('/')
   })
}
controller.editar = (req, res) =>{
    const {id}= req.params
    dbconnection.query('SELECT * FROM revist WHERE id=?',[id], (err, results)=>{
        res.render('RevistaEdit',{
            data: results[0]
        })
    })
        
}

controller.vistaAuto =(req,results)=>{
    
    res.render("vistaAutos",{
        data: results
    })
}
controller.update = (req, res) =>{
    const {id}= req.params
    const newRevista = req.body
    dbconnection.query('UPDATE revist set ? WHERE id=?',[newRevista, id],(err, results)=>{
        res.redirect('/')
    })

}

controller.eliminar = (req, res) =>{
    const {id}= req.params
   
    dbconnection.query('DELETE FROM revist WHERE id = ?', [id], (err, results) => {
        res.redirect('/')
    })
        
}

module.exports = controller