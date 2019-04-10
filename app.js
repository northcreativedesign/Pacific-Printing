const express    = require('express'),
      hbs        = require('express-handlebars'),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose')



const app = express();
const request = require('request');
var nodemailer = require("nodemailer");

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layouts', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

// MONGO CLIENT CONNECT LOGIC
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
 //     name: "Skiff Hair2",
 //     imagemock: "/img/shop/matt_h_skiff_hair.png",
 //     image1: "/img/skiff_1_shop.jpg",
 //     image2: "/img/skiff_2_shop.jpg",
 //     image3: "/img/skiff_3_shop.jpg"
 //   }, function(err, announcements){
 //    if(err) {
 //      console.log(err);
 //    } else {
 //      console.log("CREATED SHOP ITEM: ");
 //      console.log(announcements);
 //    }
 // });
 //
 //

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
  //res.render("contact")
  nodemailer.createTestAccount((err, account) => {

    // Explained as 3 steps process as I explaned in tutorial

    //Step: 1 Create transporter
    let smtpConfig = {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports. For TLS use port 465
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    };

    let transporter = nodemailer.createTransport(smtpConfig);

    //Step: 2 Setup message options
    let mailOptions = {
        from: 'aanandchamp@gmail.com', // sender address
        to: 'aanandchamp@gmail.com', // list of receivers i.e [sneder1, sender2, sender3, ....]
        subject: 'Hello ?', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    //Step: 3 Send mail using created transport
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
});

app.post('/contact', function(req, res) {
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  {
    return res.json({"responseError" : "Please select captcha first"});
  }
  const secretKey = "6LdJUJ0UAAAAAOHPiNuPKQRQ-iNg0Z_XuHqESDW7";

  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

  request(verificationURL,function(error,response,body) {
    body = JSON.parse(body);

    if(body.success !== undefined && !body.success) {
      return res.json({"responseError" : "Failed captcha verification"});
    }
    res.json({"responseSuccess" : "Sucess"});
  });
});
app.listen(process.env.PORT || 8002, function(){
  console.log(`Pacific Printing Server Is Running`);
});
