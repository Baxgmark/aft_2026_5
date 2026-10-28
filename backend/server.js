const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use((req,res,next)=>{
    console.log(req.method , ' + ', req.url , ' : ' , req.ip)
    next();
})



const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log('server at server at...', PORT)
})