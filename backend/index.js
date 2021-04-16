const express = require('express')
const bodyParser = require('body-parser')
const automacaoRoute = require('./src/routes/automacao.js')
const simulacaoRoute = require('./src/routes/simulacao.js')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.use(bodyParser.json())

app.use('/automacao', automacaoRoute)

app.use('/simulacao', simulacaoRoute)

app.get('/', (req, res) => {
    res.send(`Conectado em FakeOrNot API`)
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))