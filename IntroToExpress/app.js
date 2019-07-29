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
 app.get('/mom/vacuum/:number', function(req, res){
    let numberOfCleaning = parseInt(req.params.number);
    let str = '';

    for( i = 0; i < numberOfCleaning; i++ ){
       str += "vacuum "
       console.log(i);
       console.log(str);
    }
    res.send("The mom vacuums the house " + numberOfCleaning + " times in this week " + "<br> <br>" + str )

 });

 app.get('/mom/laundry/:number', function(req, res){
   let numberOfCleaning = parseInt(req.params.number);
   let str = '';

   for( i = 0; i < numberOfCleaning; i++ ){
      str += "laundry "
      console.log(i);
      console.log(str);
   }
   res.send("The mom do laundry " + numberOfCleaning + " times in this week " + "<br> <br>" + str )

});

app.get('*', function(req, res){
   res.send("Sorry, mom is tired please contact tomorrow again!" )

});





 // Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('listening port 3000');
});