const express = require('express')
const FeedBackService = require('../services/FeedBackService')

const router = express.Router()

router.post('/create_feedback', async function (req, res) {
    
    if(req.body.name == undefined || req.body.phoneno ==undefined ||req.body.address == undefined||req.body.issues==undefined){
        console.log("input statement")
    }

    var response = await FeedBackService.create(req.body)
    if(response == null){
        return res.status(400).send({error_msg:'please Enter Your UserName'});
    }
    res.send(response)
})


router.get('/:id', async function (req, res) {
    var response = await FeedBackService.getfeedback(req.params.id)
    res.send(response)
})
router.get('/get-all',async function(req,res){
    var tmp =await FeedBackService.getAll()
    res.send(tmp)
    
})

module.exports = router