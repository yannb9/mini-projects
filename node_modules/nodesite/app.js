const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Yann Bohbot</h1>');
});
app.listen(3000, ()=>console.log('running on localhost:3000 bitch!'))