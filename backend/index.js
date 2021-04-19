const express = require('express')
const cliSpinners = require('cli-spinners');
const bodyParser = require('body-parser')
const automacaoRoute = require('./src/routes/automacao.js')
const ai = require('./src/routes/ai.js')
const cors = require('cors')
const {iniciarAI} = require('./src/controllers/AiController.js')

const app = express()
const PORT = process.env.PORT || 5000

iniciarAI()

app.use(cors())

app.use(bodyParser.json())

app.use('/automacao', automacaoRoute)

app.use('/ai', ai)

app.get('/', (req, res) => {
    res.send(`Conectado em FakeOrNot API`)
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))