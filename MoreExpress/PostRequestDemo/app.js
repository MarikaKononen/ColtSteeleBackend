let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let friends = ["Ayu", "Francesca", "Frauke", "Wendy", "Marika"];

app.get("/", function(req, res){
    res.render("home");
});

// post route for creating a new friend
app.post("/addfriend", function(req, res){
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});


app.listen(3000, function(){
    console.log("Server started");
});