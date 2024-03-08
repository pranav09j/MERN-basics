const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello from server router")  
})
router.use(express.json())
router.post('/register',(req,res)=>{

    const {name, email, phone, work, password, cpassword} = req.body
    console.log(name);
    // res.json({message:req.body})
})
module.exports= router;