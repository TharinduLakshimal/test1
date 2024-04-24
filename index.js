const express = require('express');
const port = 3000;
const app= express();


app.listen(port,()=>{
    console.log('api is work',port);
})

app.get('/',(req,res)=>{
    res.send("hello");
})