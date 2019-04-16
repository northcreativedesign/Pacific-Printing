const express    = require('express'),
      hbs        = require('express-handlebars'),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose')

const app = express();
const request = require('request');
var nodemailer = require("nodemailer");
var multer  = require('multer');

var upload = multer({ dest: '/tmp/'});
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');


 //MONGO CLIENT CONNECT LOGIC
mongoose.connect('mongodb://anand:omsairam123@ds135456.mlab.com:35456/pacific_printing',
{useNewUrlParser: true }
);
//var MongoClient = require('mongodb').MongoClient;
//mongoose.connect('mongodb://localhost:27017/pacific_printing');
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
// }));

 //mongoose.connect('mongodb://localhost:27017/pacific_printing3');

// SCHEMA SETUP FOR SHOP PAGES
const pacificshopSchema = new mongoose.Schema({
  name: String,
  image1: String,
  image2: String,
  image3: String,
  price:Number,
  desc:String,
  imagemock: String
});
const PacificShop = mongoose.model("PacificShop", pacificshopSchema);

var productMetaSchema = new mongoose.Schema({
  garment:String,
  color    : String,
  size     : Number,
  image:String,
  productID : { type: mongoose.Schema.Types.ObjectId, ref: 'PacificShop' }
});

//const ProductMeta = mongoose.model("ProductMeta", productMetaSchema);


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
const ProductMeta = mongoose.model("ProductMeta", productMetaSchema);
// PacificShop.create(
//  {
//    name: "Nike",
//    imagemock: "/img/shop/matt_h_skiff_hair.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/skiff_3_shop.jpg",
//    desc:"test",
//    price:10
//      }, function(err, announcements){
//        if(err) {
//   console.log(err);
//   } else {
//     console.log("CREATED SHOP ITEM: ");
//     console.log(announcements);
//     ProductMeta.create(
//       {
//         garment: "Uni - Sex Tee Shirts",
//         color:["Black", "Gray", "Navy", "Royal", "Dk","Green"],
//         image:"/img/download.jpg",
//         productID:announcements._id
//           }, function(err, announcements){
//            if(err) {
//         console.log(err);
//        } else {
//          console.log("CREATED SHOP ITEM: ");
//          console.log(announcements);
//        }
//     });
//     ProductMeta.create(
//       {
//         garment: "Premium Mens Tee Shirt",
//         color:["Vintage" ,"Black", "Gray", "Navy", "Ocean","Blue", "Heather","Green"],
//         image:"/img/download2.jpg",
//         productID:announcements._id
//           }, function(err, announcements){
//            if(err) {
//         console.log(err);
//        } else {
//          console.log("CREATED SHOP ITEM: ");
//          console.log(announcements);
//        }
//     });
//   }
// });
//


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

app.post('/contact', upload.single('file'),function(req, res) {
  console.log(req.body);
   sendMails(req.body,req.file);
   // if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
   // {
   //   return res.json({"responseError" : "Please select captcha first"});
   // }
   // const secretKey = "6LdJUJ0UAAAAAOHPiNuPKQRQ-iNg0Z_XuHqESDW7";
   // const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
   //
   // request(verificationURL,function(error,response,body) {
   // body = JSON.parse(body);
   //
   // if(body.success !== undefined && !body.success) {
   //   return res.json({"responseError" : "Failed captcha verification"});
   // }
   //   res.json({"responseSuccess" : "Sucess"});
   // });
});
 function sendMails(senderMail,filet){
  var content = "<p>name-</p>"+senderMail.name+"<p>email-</p>"+senderMail.email+"<p>phone-</p>"+senderMail.phone+"<p>bussinessName-</p>"+senderMail.bussinessName+"<p>QUANTITY-</p>"+senderMail.qty+"<p>type-</p>"+senderMail.type+"<p>service-</p>"+senderMail.service;
  var transporter = nodemailer.createTransport({
   service: 'gmail',
     auth: {
        user: 'aanandchamp@gmail.com',
        pass: 'omsairam@#jio'
    }
});
  var mailOptions = {
   from: senderMail.email,
   to: 'aanandchamp@gmail.com',
   subject: 'Contact Info',
   html:content,
   attachments: [
        {   // utf-8 string as an attachment
            filename: filet.originalname,
            path:filet.path
        }
    ]
  };
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

app.get("/garment", function(req, res){
  // find the shop item with provided id
  ProductMeta.find({productID:"5cb4d83ed9c171001700857e"}, function(err, foundPacificShop){
    if (err) {
      console.log(err);
    } else {
      // render show template with the shop item
      res.send(foundPacificShop);
    }
  });
});

app.get("/garmentSingle", function(req, res){
  // find the shop item with provided id
  ProductMeta.find({productID:"5cb4d83ed9c171001700857e",_id:req.query.garmentName}, function(err, foundPacificShop){
    if (err) {
      console.log(err);
    } else {
      // render show template with the shop item
      res.send(foundPacificShop);
    }
  });
});
app.listen(process.env.PORT || 8002, function(){
  console.log(`Pacific Printing Server Is Running`);
});
