const express = require('express')
const Execute = require('../controllers/automacaoExecute.js')

const router = express.Router()

router.get('/:text', async(req,res) => {
    try{
        const result = await Execute(req.params.text)
        res.status(201).send(result)
    }catch(e){
        res.status(500).send({mensagem: e})
    }

})

module.exports = router