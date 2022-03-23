const express = require('express')
const consign = require('consign') // importando uma biblioteca
const path = require('path')

app = express();   

app.set('url', 'http://localhost:') // variavel do express
app.set('porta', 3000)

app.use(express.json())

// Diretório estático
app.set('views', path.join(__dirname, '../api/views'))
app.set('view engine', 'ejs')

// Diretório estático - public
app.use('/static', express.static(__dirname+'/public'))
app.use(express.static('public'))
app.use(express.static('estilos'))
app.use(express.static('imagens'))

consign({cwd: 'api'}) // na pasta api, vai trazer esses três diretórios (comando cwd)
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app