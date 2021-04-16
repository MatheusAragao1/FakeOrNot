const express = require('express')


const router = express.Router()

router.get('/', async(req,res) => {
    try{
        //const result = await dbOppInfos.getInfoStruct()
        res.status(201).send("Ok")
    }catch(e){
        res.status(500).send({mensagem: e})
    }

})

module.exports = router