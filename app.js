const express    = require('express'),
      hbs        = require('express-handlebars'),
      bodyParser = require('body-parser')



const app = express();
var session = require('express-session');


app.use(express.static('assets'));

app.use(bodyParser.urlencoded({extended: true}));

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');



// INDEX ROUTE

app.get("/", function(req, res){
  res.render("index");
});


// SERVICES ROUTE

app.get("/services", function(req, res){
   res.render("services");
});


// PRINT REQUIREMENTS ROUTE

app.get("/print-requirements", function(req, res){
  res.render("print-requirements");
});








app.listen(process.env.PORT || 8002, function(){
  console.log(`Pacific Printing Server Is Running`);
});
