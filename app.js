var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

var port = 3000;


app.get("/", function(req, res){
    res.render("logindisplay/login");
});

app.listen(port, function(){
     console.log("server is running on port" + port);
});