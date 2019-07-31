let express = require('express');
let app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/fallinglovewith/:thing', function(req, res){
    let thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get("/posts", function(req, res){
    let posts = [
        {title: "Post 1", author: "Susy"}, 
        {title: "My dog is dalmatian", author: "Pekka"}, 
        {title: "This is the best day", author: "Mirjami"}, 
        {title: "I am learning backend", author: "Marika"}, 
    ]
    res.render('posts', {posts: posts});
});


app.listen(3000, function(){
    console.log('Server is listening!');
});