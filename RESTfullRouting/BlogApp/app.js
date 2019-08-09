var bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    express    = require("express"),
    app        = express();

// APP CONGIG    
mongoose.connect("mongodb://localhost/blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type:Date, default: Date.now}  
    
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "This is my Blog",
//     image: "https://images.unsplash.com/photo-1518316847866-651fbb917956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
//     body: "This is my first blog post about who I am and why I am here."
// });

// RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
});
// INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("Error!");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

// CREATE ROUTE 
app.post("/blogs", function(req, res){
    // create blog
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            // then redirert to the index
            res.redirect("/blogs");
        }
    });
}); 

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    res.send("Show page");
});

app.listen(3000, function(){
    console.log("Server is running")
});