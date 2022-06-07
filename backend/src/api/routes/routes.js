const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const categoriasControllers = require('../controllers/categoriasControllers.js')
const alunosControllers = require('../controllers/alunosControllers.js')
const professoresControllers = require('../controllers/professoresControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)


routes.get('/alunos', alunosControllers.index)
routes.get('/alunos/:codigo_id', alunosControllers.indexId)
routes.post('/alunos', alunosControllers.store)
routes.put('/alunos/:codigo_id', alunosControllers.update)
routes.delete('/alunos/:codigo_id', alunosControllers.delete)
 

// rota de categorias
routes.get('/categorias', categoriasControllers.index)
routes.get('/categorias/:codigo_id', categoriasControllers.indexId)
routes.post('/categorias', categoriasControllers.store)
routes.put('/categorias/:codigo_id', categoriasControllers.update)
routes.delete('/categorias/:codigo_id', categoriasControllers.delete)

// rota de departamentos
 
routes.get('/professores', professoresControllers.index)
routes.get('/professores/:codigo_id', professoresControllers.indexId)
routes.post('/professores', professoresControllers.store)
routes.put('/professores/:codigo_id', professoresControllers.update)
routes.delete('/professores/:codigo_id', professoresControllers.delete)

module.exports = routes