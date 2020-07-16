
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var path = require('path')

app.get('/',(req,res)=>{res.send('Yann Bohbot')})
app.use(express.static('src'));

app.use(express.urlencoded({
    extended: true
  }))

//   app.post('/submit-form', (req, res) => {
//     console.log(req.body);
//     res.end()
//   })

app.post('/submit-react', (req, res) => {
//     console.', urlencodedParser, function (req, res) {  
    // Prepare output in JSON format  
    console.log(req);  
    res.end();  
 })  

app.listen(3000, () => console.log('Gator app listening on port 3000!'));