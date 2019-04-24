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


// MONGO CLIENT CONNECT LOGIC

 // mongoose.connect('mongodb://localhost:27017/pacific_printing');
 mongoose.connect('mongodb://ncdesignco:NCAK20!9@ds031223.mlab.com:31223/heroku_1gbtwtrj');

// SCHEMA SETUP FOR SHOP PAGES
const pacificshopSchema = new mongoose.Schema({
  name: String,
  image1: String,
  image2: String,
  image3: String,
  price_small:Number,
  price_big:Number,
  size:String,
  desc:String,
  imagemock: String
});
const PacificShop = mongoose.model("PacificShop", pacificshopSchema);

var productMetaSchema = new mongoose.Schema({
  garment:String,
  color    : String,
  size     : String,
  image1:String,
  image2:String,
  image3:String,
  images:String,
  price_small:Number,
  price_big:Number,
  productID : { type: mongoose.Schema.Types.ObjectId, ref: 'PacificShop' }
});





const ProductMeta = mongoose.model("ProductMeta", productMetaSchema);




// // 907 ENTRY
//
// PacificShop.create(
//  {
//    name: "907",
//    imagemock: "/img/shop/matt_h_collection/matt_h_907/matt_h_907_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_907/matt_h_907_mock.png",
//    desc:"test",
//    size:[
//      'Small',
//      'Medium',
//      'Large',
//      'X-Large',
//      '2XL',
//      '3XL',
//      '4XL'
//    ],
//    price_small:17.99,
//    price_big:19.99,
//      }, function(err, announcements){
//        if(err) {
//   console.log(err);
//   } else {
//     console.log("CREATED SHOP ITEM:");
//     console.log(announcements);
//     ProductMeta.create(
//       {
//         garment: "Uni - Sex Tee Shirts",
//         color:[
//           "Black",
//           "Gray",
//           "Navy",
//           "Royal",
//           "Dk Green"
//         ],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_dk_green.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_black.png",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         size:[
//           'Small - $17.99',
//           'Medium - $17.99',
//           'Large - $17.99',
//           'X-Large - $17.99',
//           '2XL - $19.99',
//           '3XL - $19.99',
//           '4XL - $19.99'
//         ],
//         price_small:17.99,
//         price_big:19.99,
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
//         garment: "Uni - Sex Hoodies",
//         color:[
//           "Black",
//           "Gray",
//           "Navy",
//           "Royal",
//           "Dk Green"
//         ],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_black.png",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         size:[
//           'Small - $33.99',
//           'Medium - $33.99',
//           'Large - $33.99',
//           'X-Large - $33.99',
//           '2XL - $36.99',
//           '3XL - $36.99',
//           '4XL - $36.99'
//         ],
//         price_small:33.99,
//         price_big:36.99,
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
//         color:[
//           "Vintage Black",
//           "Gray",
//           "Navy",
//           "Ocean Blue",
//           "Heather Green"
//         ],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_heathergreen.png"
//         ],
//         image:"/img/download2.jpg",
//         image1:"/img/download.jpg",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         price_small:19.99,
//         price_big:21.99,
//         size:[
//           'Small - $19.99',
//           'Medium - $19.99',
//           'Large - $19.99',
//           'X-Large - $19.99',
//           '2XL - $21.99',
//           '3XL - $21.99',
//           '4XL - $21.99'
//         ],
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
//         garment: "Womens V - Neck",
//         color:[
//           "Black",
//           "New Navy",
//           "Dark Fuchsia",
//           "Deep Royal"
//         ],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_907/womans_vneck/matt_h_907_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_907/womans_vneck/matt_h_907_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_907/womans_vneck/matt_h_907_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_907/womans_vneck/matt_h_907_womansv_deeproyal.png"
//         ],
//         image:"/img/download2.jpg",
//         image1:"/img/download.jpg",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         price_small:19.99,
//         price_big:21.99,
//         size:[
//           'Small - $19.99',
//           'Medium - $19.99',
//           'Large - $19.99',
//           'X-Large - $19.99',
//           '2XL - $21.99',
//           '3XL - $21.99',
//           '4XL - $21.99'
//         ],
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
//         garment: "Womens Tee Shirt",
//         color:[
//           "Black",
//           "New Navy",
//           "Dark Fuchsia",
//           "Deep Royal"],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_907/womans_tshirt/matt_h_907_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_907/womans_tshirt/matt_h_907_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_907/womans_tshirt/matt_h_907_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_907/womans_tshirt/matt_h_907_womans_deeproyal.png"
//         ],
//         image:"/img/download2.jpg",
//         image1:"/img/download.jpg",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         price_small:19.99,
//         price_big:21.99,
//         size:[
//           'Small - $19.99',
//           'Medium - $19.99',
//           'Large - $19.99',
//           'X-Large - $19.99',
//           '2XL - $21.99',
//           '3XL - $21.99',
//           '4XL - $21.99'
//         ],
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
//
// // END 907
//
// // MATT H AK
//
// PacificShop.create(
//  {
//    name: "907",
//    imagemock: "/img/shop/matt_h_collection/matt_h_ak/matt_h_ak_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_ak/matt_h_ak_mock.png",
//    desc:"test",
//    size:[
//      'Small',
//      'Medium',
//      'Large',
//      'X-Large',
//      '2XL',
//      '3XL',
//      '4XL'
//    ],
//    price_small:17.99,
//    price_big:19.99,
//      }, function(err, announcements){
//        if(err) {
//   console.log(err);
//   } else {
//     console.log("CREATED SHOP ITEM:");
//     console.log(announcements);
//     ProductMeta.create(
//       {
//         garment: "Uni - Sex Tee Shirts",
//         color:[
//           "Black",
//           "Gray",
//           "Navy",
//           "Royal",
//           "Dk Green"
//         ],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_dk_green.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_black.png",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         size:[
//           'Small - $17.99',
//           'Medium - $17.99',
//           'Large - $17.99',
//           'X-Large - $17.99',
//           '2XL - $19.99',
//           '3XL - $19.99',
//           '4XL - $19.99'
//         ],
//         price_small:17.99,
//         price_big:19.99,
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
//         garment: "Uni - Sex Hoodies",
//         color:[
//           "Black",
//           "Gray",
//           "Navy",
//           "Royal",
//           "Dk Green"
//         ],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_black.png",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         size:[
//           'Small - $33.99',
//           'Medium - $33.99',
//           'Large - $33.99',
//           'X-Large - $33.99',
//           '2XL - $36.99',
//           '3XL - $36.99',
//           '4XL - $36.99'
//         ],
//         price_small:33.99,
//         price_big:36.99,
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
//         color:[
//           "Vintage Black",
//           "Gray",
//           "Navy",
//           "Ocean Blue",
//           "Heather Green"
//         ],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_heathergreen.png"
//         ],
//         image:"/img/download2.jpg",
//         image1:"/img/download.jpg",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         price_small:19.99,
//         price_big:21.99,
//         size:[
//           'Small - $19.99',
//           'Medium - $19.99',
//           'Large - $19.99',
//           'X-Large - $19.99',
//           '2XL - $21.99',
//           '3XL - $21.99',
//           '4XL - $21.99'
//         ],
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
//         garment: "Womens V - Neck",
//         color:[
//           "Black",
//           "New Navy",
//           "Dark Fuchsia",
//           "Deep Royal"
//         ],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_ak/womans_vneck/matt_h_ak_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_ak/womans_vneck/matt_h_ak_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_ak/womans_vneck/matt_h_ak_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_ak/womans_vneck/matt_h_ak_womansv_deeproyal.png"
//         ],
//         image:"/img/download2.jpg",
//         image1:"/img/download.jpg",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         price_small:19.99,
//         price_big:21.99,
//         size:[
//           'Small - $19.99',
//           'Medium - $19.99',
//           'Large - $19.99',
//           'X-Large - $19.99',
//           '2XL - $21.99',
//           '3XL - $21.99',
//           '4XL - $21.99'
//         ],
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
//         garment: "Womens Tee Shirt",
//         color:[
//           "Black",
//           "New Navy",
//           "Dark Fuchsia",
//           "Deep Royal"],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_ak/womans_tshirt/matt_h_ak_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_ak/womans_tshirt/matt_h_ak_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_ak/womans_tshirt/matt_h_ak_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_ak/womans_tshirt/matt_h_ak_womans_deeproyal.png"
//         ],
//         image:"/img/download2.jpg",
//         image1:"/img/download.jpg",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         price_small:19.99,
//         price_big:21.99,
//         size:[
//           'Small - $19.99',
//           'Medium - $19.99',
//           'Large - $19.99',
//           'X-Large - $19.99',
//           '2XL - $21.99',
//           '3XL - $21.99',
//           '4XL - $21.99'
//         ],
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
// // END MATT H AK
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
      res.render("shop-item", {
        pacificshop: foundPacificShop,
        navstrip: "shop-nav",
        stripimage: "/img/shop_phone.png"
      });
    }
  });
});

// INDEX ROUTE
app.get("/", function(req, res){
  res.render("index",
  {
    navstrip: "phone-nav",
    stripimage: "/img/phone_number.png"
  });
});

// SERVICES ROUTE
app.get("/services", function(req, res){
   res.render("services", {
     navstrip: "shop-nav",
     stripimage: "/img/shop_phone.png"
   });
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
  ProductMeta.find({productID:req.query._id},function(err, foundPacificShop){
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
  ProductMeta.find({_id:req.query._id}, function(err, foundPacificShop){
    if (err) {
      console.log(err);
    } else {
      // render show template with the shop item
      res.send(foundPacificShop);
    }
  });
});


app.get("/colors", function(req, res){
  // find the shop item with provided id
  ProductMeta.find({_id:req.query._id}, function(err, foundPacificShop){
    if (err) {
      console.log(err);
    } else {
      // render show template with the shop item
      res.send(foundPacificShop);
    }
  });
});

app.get("/size", function(req, res){
  // find the shop item with provided id
  ProductMeta.find({_id:req.query._id},function(err, foundPacificShop){
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
