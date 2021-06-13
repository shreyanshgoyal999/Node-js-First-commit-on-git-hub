const express = require('express')
const path = require('path');

const app = express();
const port = 8000;

//Serving static files using express
app.use("/static",express.static('static'));

//Setting Template(view) Engine as pug
app.set('view engine', 'pug');

// Set Views directory
app.set("views", "./views");      // or path.join(__dirname,"views")
              
// Our pug demo endpoint
app.get('/demo', function (req, res) {
    res.render('demo', { title: 'Hello goyal', message: 'Hello ! Good Morning' })
  });

// (End points) Serving using express
app.get("/",(req,res)=>{
    res.send("This home page");
});

app.get("/about",(req,res)=>{
    res.send("This about page");
});

app.get("/contact",(req,res)=>{
    res.send("This contact page");
});

app.listen(port,"127.0.0.1",()=>{
    console.log("Server listen at port 8000");
});