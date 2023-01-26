
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use("/public" ,express.static("public"));

app.get("/" , function(req,res){

res.sendFile(__dirname + "/index.html")
});
app.get("/about" , function(req,res){

    res.sendFile(__dirname + "/about.html")
    });
    app.get("/signup" , function(req,res){

        res.sendFile(__dirname + "/signup.html")
        });

app.get("/form-submit" ,function(req,res){

    res.render("register");

});
app.post("/form-submit" , async(req,res)=> {

res.write("<h1>Registration Successful</h1>")
res.write("<p>Name: </P>" + req.body.name);
res.write("<p>email: </P>" + req.body.email);
res.write("<p>Password: </P>" +  req.body.password);
res.write("<p>:Repeatpassword </P>" + req.body.repeatpassword);
res.end("save data");




});







        app.listen(3000,function(){

            console.log("server is running on port 3000")
        });
        