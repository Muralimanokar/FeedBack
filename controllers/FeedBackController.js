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


router.get('/:id/getfeedback', async function (req, res) {
    console.log("working")
    var response = await FeedBackService.getfeedback(req.params.id)
    res.send(response)
})
router.get('/get-all',async function(req,res){
    
    var tmp =await FeedBackService.getAll()

    res.send(tmp)
    
})
router.post('/election/create_membership', async function (req, res) {
    
    if(req.body == undefined ){
        console.log("input statement")
    }

    var response = await FeedBackService.createmembership(req.body)
    if(response == null){
        return res.status(400).send({error_msg:'please Enter Your Email Id'});
    }
    res.send(response)
})
router.get('/election/:id/getmembership', async function (req, res) {
    
    var response = await FeedBackService.getmembership(req.params.id)
    res.send(response)
})

module.exports = router