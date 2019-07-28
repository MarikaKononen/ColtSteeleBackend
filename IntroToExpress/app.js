let express = require('express');
let app = express();

// '/' => Welcome
 app.get('/', function(req, res){
    console.log("express is working");
    res.send('Hi there and welcome to my Express assignment!');
 });

 // simple Routes
 app.get('/mom/clean', function(req, res){
    res.send("The mom cleans the house");
 });

 app.get('/mom/food', function(req, res){
    res.send("The mom makes the food");
 });

 app.get('/mom/goods', function(req, res){
    res.send("The mom finds the goods");
 });

 // Route patterns
 app.get('/mom/clean/:number', function(req, res){
    res.send("The mom cleans the house");
 });




 // Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('listening port 3000');
});