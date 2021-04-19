const express = require('express')
const AutomacaoFakeNewsExecute = require('../controllers/AutomacaoFakeNewsExecute.js')
const AutomacaoVacinacaoExecute = require('../controllers/automacaoVacinacaoExecute.js')

const router = express.Router()

router.post('/', async(req,res) => {
    try{
        const result = await AutomacaoFakeNewsExecute(req.body.text)
        res.status(201).send(result)
    }catch(e){
        res.status(500).send({mensagem: e})
    }

})

router.get('/:age/:state', async(req,res) => {
    try{
        const result = await AutomacaoVacinacaoExecute(req.params)
        res.status(201).send(result)
    }catch(e){
        res.status(500).send({mensagem: e})
    }

})

module.exports = router