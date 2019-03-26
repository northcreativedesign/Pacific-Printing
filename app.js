const express    = require('express'),
      hbs        = require('express-handlebars'),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose')



const app = express();
var session = require('express-session');


app.use(express.static('assets'));

app.use(bodyParser.urlencoded({extended: true}));

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');



// MONGO CLIENT CONNECT LOGIC

var MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost:27017/pacific_printing');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));

// mongoose.connect('mongodb://localhost:27017/pacific_printing');

// SCHEMA SETUP FOR SHOP PAGES


const pacificshopSchema = new mongoose.Schema({
  name: String,
  image1: String,
  image2: String,
  image3: String,
  imagemock: String
});

const PacificShop = mongoose.model("PacificShop", pacificshopSchema);






// PacificShop.create(
//   {
//     name: "Testing MongoDb",
//     imagemock: "/img/shop/matt_h_907.png"
//   }, function(err, announcements){
//    if(err) {
//      console.log(err);
//    } else {
//      console.log("CREATED SHOP ITEM: ");
//      console.log(announcements);
//    }
// });




app.get("/shop", function(req, res){
  // Get all Announcements from database
  PacificShop.find({}, function(err, allPacificShop){
    if (err) {
      console.long(err);
    } else {
      res.render("matt-hamiliton-collection", {pacificshop:allPacificShop});
    }
  });
});



// SINGLE ITEM SHOP

app.get("/shop/:id", function(req, res){
  // find the shop item with provided id
  PacificShop.findById(req.params.id, function(err, foundPacificShop){
    if (err) {
      console.log(err);
    } else {
      // render show template with the shop item
      res.render("shop-item", {pacificshop: foundPacificShop});
    }
  });
});



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


// CONTACT ROUTE

app.get("/contact", function(req, res){
  res.render("contact")
});






app.listen(process.env.PORT || 8002, function(){
  console.log(`Pacific Printing Server Is Running`);
});
