const express = require('express');

const app = express();

const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

const PORT = process.env.PORT;


app.use(require('./router/auth'));

const middleware = (req,res,next)=>{
    console.log("hiii")
    next();
}
app.use(express.json());

const User = require('./model/userSchema');



app.get('/',(req,res)=>{
    res.send("Hello world")  
})

app.get('/about',middleware,(req,res)=>{
    console.log("hiii world")
    res.send("Hello  about from the world")  
})

app.get('/signin',(req,res)=>{
    res.send("Hello signinnnnn from the world")  
})

app.get('/signup',(req,res)=>{
    res.send("Hello  signup from the world")  
})

app.get('/contact',(req,res)=>{
    res.send("Hello  contact from the world")  
})

app.listen(`${PORT}`,()=>{
    console.log(`server is running at port no ${PORT}`)
})