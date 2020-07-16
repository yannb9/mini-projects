
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var path = require('path')

app.use(express.static('src'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(3000, () => console.log('listening on port 3000!'));

app.post('/api', (req, res) => {
    console.log(req.body);  
    res.json(req.body) 
 })  
