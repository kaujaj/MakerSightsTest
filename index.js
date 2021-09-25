const express = require('express');
const api = require('./routes/products.route');
const app = express();

//add middleware apis
app.use('/api',api);

//send friendly response for unknown route.
app.use('/*',(req,res)=>{
    res.send('Please request the correct api/page');
})

app.listen('3000',()=>{
    console.log('App Started on 3000')
})

module.exports = app;