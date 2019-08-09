let express = require("express");
let app = express();
let request = require('request');
let bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let dogsUrls = [];
let breedName = "";

const requestBreedImg = (breed) => {
    
    let urlBegin = 'https://dog.ceo/api/breed/';
    let urlEnd = '/images';
    let url = urlBegin + breed + urlEnd;
    console.log('url', url);
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            // check type of the body variable
            console.log(typeof body);
            // turn body to javascript 
            let parsedData = JSON.parse(body);
            console.log('length: ', parsedData["message"].length);
            for(i=0; i < parsedData["message"].length; i++){
                dogsUrls.push(parsedData["message"][i]);
            }
            console.log("requestBreedImg function executed");
        }
    });
}

app.get("/", function(req, res){
    res.render("home");
    dogsUrls = [];
});

app.get("/dogs", function(req, res){
    console.log("in the /dogs");
    res.render("dogs", {dogs: dogsUrls, breed: breedName});
});

// post route for creating a new friend
app.post("/addbreed", function(req, res){
    console.log("addbreed", req.body)
    let newBreed = req.body.newbreed.toLowerCase();
    breedName = newBreed;
    console.log('breed', newBreed);
    requestBreedImg(newBreed);
    setTimeout(function(){
        res.redirect("/dogs");
    }, 3000);
    
});


app.listen(3000, function(){
    console.log("Server started");
});