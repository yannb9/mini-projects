
const express = require('express');
const app = express();
var path = require('path')

app.get('/',(req,res)=>{res.send('Yann Bohbot')})
app.use(express.static('src'));

app.listen(3000, () => console.log('Gator app listening on port 3000!'));