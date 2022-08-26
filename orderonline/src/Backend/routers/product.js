const Buffer = require('buffer/').Buffer
const express = require('express')
const multer = require('multer')
const Product = require('../models/Product')

const router = new express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/createproduct', upload.single('avatar'),async (req,res) => {
   
    try {  
        var a = req.body;
      delete a.avatar

        const task = new Product({...req.body,avatar: req.file.buffer});
        const base64data = Buffer.from(req.file.buffer).toString('base64');

       console.log(base64data)
       await task.save();

        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})
router.get('/getproduct/:popular', upload.single('avatar'),async (req,res) => {
   
    try {  
        if(req.params.popular == 'true'){
            req.params.popular=true;
        }
        console.log(req.params)
    var productlist =  await Product.find(req.params).limit(8)
console.log(productlist[0].description.avatar)
    // console.log(Buffer.from())
        res.status(201).send(productlist)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }

})

module.exports = router