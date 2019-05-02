

const express = require('express')
const router = express.Router() // te devuelve un objeto de js en la cual se puede ir agregando rutas

const   RevistaController = require('../controllers/RevistaController')

router.get('/',RevistaController.list)
router.post('/add',RevistaController.agregar) // escucha un nueva ruta del metodo post
router.get('/delete/:id',RevistaController.eliminar)
router.get('/update/:id',RevistaController.editar)
router.post('/update/:id',RevistaController.update)
module.exports = router

