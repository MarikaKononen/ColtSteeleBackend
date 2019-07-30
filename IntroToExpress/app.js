let express = require('express');
let app = express();

// '/' => Welcome
 app.get('/', function(req, res){
    console.log("express is working");
    res.send('Hi there and welcome to my Express assignment!');
 });

 // simple Routes
 app.get('/mom/:momdothis', function(req, res){
  
   let dothis = {
      clean: "The mom cleans the house",
      food: "The mom makes the food", 
      goods: "The mom finds the goods",
      everything: "The mom do everything"
   }
   let momdothis = req.params.momdothis.toLowerCase();
   let task = dothis[momdothis];
   res.send(task); 

 });


 // Route patterns
 app.get('/mom/:task/:number', function(req, res){
    let number = Number(req.params.number);
    let task = req.params.task;
    let str = '';

    for( i = 0; i < number; i++ ){
       str += task;
       str += " ";
       console.log(i);
       console.log(str);
    }
    res.send("The mom do " +   task + " " + number + " times in this week " + "<br> <br>" + str )

 });

app.get('*', function(req, res){
   res.send("Sorry, mom is tired please contact tomorrow again!" )

});

 // Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('listening port 3000');
});