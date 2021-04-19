const express = require('express')
const { classifier } = require('../controllers/AiController.js')

const router = express.Router()

router.post('/', async(req,res) => {
    try{
        const result = { result: classifier.classify(req.body.text)}
        res.status(201).send(result)
    }catch(e){
        res.status(500).send({mensagem: e})
    }
})

module.exports = router