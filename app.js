var express = require('express'); 
var app = express(); 
app.get('/myform', function(req, res){ 
    var myText = req.query.mytext; //mytext is the name of your input box
    res.send('Your Text:' +myText); 
}); 
app.listen(3000)