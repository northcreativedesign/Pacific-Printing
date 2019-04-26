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
  class: String,
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




// 907 ENTRY

PacificShop.create(
 {
   name: "907",
   imagemock: "/img/shop/matt_h_collection/matt_h_907/matt_h_907_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_907/matt_h_907_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_907/uni_hoodie/matt_h_907_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_907/mens_tshirt/matt_h_907_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_907/womans_vneck/matt_h_907_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_907/womans_vneck/matt_h_907_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_907/womans_vneck/matt_h_907_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_907/womans_vneck/matt_h_907_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_907/womans_tshirt/matt_h_907_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_907/womans_tshirt/matt_h_907_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_907/womans_tshirt/matt_h_907_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_907/womans_tshirt/matt_h_907_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});


// END 907

// MATT H AK

PacificShop.create(
 {
   name: "AK",
   imagemock: "/img/shop/matt_h_collection/matt_h_ak/matt_h_ak_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_ak/matt_h_ak_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_ak/uni_hoodie/matt_h_ak_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_ak/mens_tshirt/matt_h_ak_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak/womans_vneck/matt_h_ak_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_ak/womans_vneck/matt_h_ak_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_ak/womans_vneck/matt_h_ak_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_ak/womans_vneck/matt_h_ak_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak/womans_tshirt/matt_h_ak_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_ak/womans_tshirt/matt_h_ak_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_ak/womans_tshirt/matt_h_ak_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_ak/womans_tshirt/matt_h_ak_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END MATT H AK

// MATT AK FLAG

PacificShop.create(
 {
   name: "AK Flag",
   imagemock: "/img/shop/matt_h_collection/matt_h_ak_flag/matt_h_ak_flag_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_ak_flag/matt_h_ak_flag_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak_flag/womans_vneck/matt_h_ak_flag_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/womans_vneck/matt_h_ak_flag_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/womans_vneck/matt_h_ak_flag_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/womans_vneck/matt_h_ak_flag_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_ak_flag/womans_tshirt/matt_h_ak_flag_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/womans_tshirt/matt_h_ak_flag_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/womans_tshirt/matt_h_ak_flag_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_ak_flag/womans_tshirt/matt_h_ak_flag_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END MATT AK FLAG

// BEAR SKULL

PacificShop.create(
 {
   name: "Bear Skull",
   imagemock: "/img/shop/matt_h_collection/matt_h_bear_skull/matt_h_bear_skull_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_bear_skull/matt_h_bear_skull_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_bear_skull/womans_vneck/matt_h_bear_skull_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/womans_vneck/matt_h_bear_skull_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/womans_vneck/matt_h_bear_skull_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/womans_vneck/matt_h_bear_skull_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_bear_skull/womans_tshirt/matt_h_bear_skull_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/womans_tshirt/matt_h_bear_skull_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/womans_tshirt/matt_h_bear_skull_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_bear_skull/womans_tshirt/matt_h_bear_skull_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END BEAR SKULL

// BEER MOUNTAIN

PacificShop.create(
 {
   name: "Beer Mountain",
   imagemock: "/img/shop/matt_h_collection/matt_h_beer_mountain/matt_h_beer_mountain_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_beer_mountain/matt_h_beer_mountain_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_vneck/matt_h_beer_mountain_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_vneck/matt_h_beer_mountain_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_vneck/matt_h_beer_mountain_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_vneck/matt_h_beer_mountain_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_tshirt/matt_h_beer_mountain_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_tshirt/matt_h_beer_mountain_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_tshirt/matt_h_beer_mountain_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_tshirt/matt_h_beer_mountain_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END BEER MOUNTAIN

// CHC2

PacificShop.create(
 {
   name: "CHC2",
   imagemock: "/img/shop/matt_h_collection/matt_h_chc2/matt_h_chc2_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_chc2/matt_h_chc2_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_chc2/womans_vneck/matt_h_chc2_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_chc2/womans_vneck/matt_h_chc2_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_chc2/womans_vneck/matt_h_chc2_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_chc2/womans_vneck/matt_h_chc2_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_chc2/womans_tshirt/matt_h_chc2_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_chc2/womans_tshirt/matt_h_chc2_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_chc2/womans_tshirt/matt_h_chc2_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_chc2/womans_tshirt/matt_h_chc2_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END CHC2

// COCKPIT

PacificShop.create(
 {
   name: "Cockpit",
   imagemock: "/img/shop/matt_h_collection/matt_h_cockpit/matt_h_cockpit_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_cockpit/matt_h_cockpit_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_cockpit/womans_vneck/matt_h_cockpit_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/womans_vneck/matt_h_cockpit_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/womans_vneck/matt_h_cockpit_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/womans_vneck/matt_h_cockpit_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_cockpit/womans_tshirt/matt_h_cockpit_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/womans_tshirt/matt_h_cockpit_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/womans_tshirt/matt_h_cockpit_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_cockpit/womans_tshirt/matt_h_cockpit_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END COCKPIT

// CRABPOTS

PacificShop.create(
 {
   name: "Crab Pot",
   imagemock: "/img/shop/matt_h_collection/matt_h_crabpots/matt_h_crabpots_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_crabpots/matt_h_crabpots_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_crabpots/womans_vneck/matt_h_crabpots_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/womans_vneck/matt_h_crabpots_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/womans_vneck/matt_h_crabpots_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/womans_vneck/matt_h_crabpots_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_crabpots/womans_tshirt/matt_h_crabpots_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/womans_tshirt/matt_h_crabpots_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/womans_tshirt/matt_h_crabpots_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_crabpots/womans_tshirt/matt_h_crabpots_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END CRABPOTS

// CREEKSTREET

PacificShop.create(
 {
   name: "Creek Street",
   imagemock: "/img/shop/matt_h_collection/matt_h_creekstreet/matt_h_creekstreet_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_creekstreet/matt_h_creekstreet_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_creekstreet/womans_vneck/matt_h_creekstreet_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/womans_vneck/matt_h_creekstreet_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/womans_vneck/matt_h_creekstreet_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/womans_vneck/matt_h_creekstreet_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_creekstreet/womans_tshirt/matt_h_creekstreet_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/womans_tshirt/matt_h_creekstreet_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/womans_tshirt/matt_h_creekstreet_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_creekstreet/womans_tshirt/matt_h_creekstreet_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END CREEKSTREET

// CUTBAIT

PacificShop.create(
 {
   name: "Cut Bait",
   imagemock: "/img/shop/matt_h_collection/matt_h_cutbait/matt_h_cutbait_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_cutbait/matt_h_cutbait_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_cutbait/womans_vneck/matt_h_cutbait_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/womans_vneck/matt_h_cutbait_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/womans_vneck/matt_h_cutbait_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/womans_vneck/matt_h_cutbait_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_cutbait/womans_tshirt/matt_h_cutbait_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/womans_tshirt/matt_h_cutbait_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/womans_tshirt/matt_h_cutbait_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_cutbait/womans_tshirt/matt_h_cutbait_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END CUTBAIT


// DRUG BAG

PacificShop.create(
 {
   name: "DRUG BAG",
   imagemock: "/img/shop/matt_h_collection/matt_h_drug_bag/matt_h_drugbag_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_drug_bag/matt_h_drugbag_mock.png",
   class:"drugbag",
   desc:"test",
   size:['Medium $14.99'],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Canvas Bag",
        color:["White"],
        images:[
          "/img/shop/matt_h_collection/matt_h_drug_bag/matt_h_drugbag_mock.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_drug_bag/matt_h_drugbag_mock.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['Medium - $14.99'],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});


// END DRUG BAG

// DUDE MTN

PacificShop.create(
 {
   name: "Dude Mtn",
   imagemock: "/img/shop/matt_h_collection/matt_h_dude_mtn/matt_h_dude_mtn_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_dude_mtn/matt_h_dude_mtn_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_vneck/matt_h_dude_mtn_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_vneck/matt_h_dude_mtn_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_vneck/matt_h_dude_mtn_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_vneck/matt_h_dude_mtn_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_tshirt/matt_h_dude_mtn_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_tshirt/matt_h_dude_mtn_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_tshirt/matt_h_dude_mtn_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_tshirt/matt_h_dude_mtn_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});


// END DUDE MTN

// FACEDOWN

PacificShop.create(
 {
   name: "Face Down",
   imagemock: "/img/shop/matt_h_collection/matt_h_face_down/matt_h_face_down_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_face_down/matt_h_face_down_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_face_down/womans_vneck/matt_h_face_down_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_face_down/womans_vneck/matt_h_face_down_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_face_down/womans_vneck/matt_h_face_down_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_face_down/womans_vneck/matt_h_face_down_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_face_down/womans_tshirt/matt_h_face_down_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_face_down/womans_tshirt/matt_h_face_down_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_face_down/womans_tshirt/matt_h_face_down_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_face_down/womans_tshirt/matt_h_face_down_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END FACEDOWN


// FALSE ALASKANS

PacificShop.create(
 {
   name: "False Alaskans",
   imagemock: "/img/shop/matt_h_collection/matt_h_false_alaskans/matt_h_false_alaskans_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_false_alaskans/matt_h_false_alaskans_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_vneck/matt_h_false_alaskans_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_vneck/matt_h_false_alaskans_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_vneck/matt_h_false_alaskans_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_vneck/matt_h_false_alaskans_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_tshirt/matt_h_false_alaskans_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_tshirt/matt_h_false_alaskans_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_tshirt/matt_h_false_alaskans_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_tshirt/matt_h_false_alaskans_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END FALSE ALASKANS

// FAMILY

PacificShop.create(
 {
   name: "Family",
   imagemock: "/img/shop/matt_h_collection/matt_h_family/matt_h_family_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_family/matt_h_family_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_family/womans_vneck/matt_h_family_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_family/womans_vneck/matt_h_family_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_family/womans_vneck/matt_h_family_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_family/womans_vneck/matt_h_family_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_family/womans_tshirt/matt_h_family_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_family/womans_tshirt/matt_h_family_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_family/womans_tshirt/matt_h_family_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_family/womans_tshirt/matt_h_family_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END FAMILY

// FERN

PacificShop.create(
 {
   name: "Fern",
   imagemock: "/img/shop/matt_h_collection/matt_h_fern/matt_h_fern_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_fern/matt_h_fern_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_fern/womans_vneck/matt_h_fern_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_fern/womans_vneck/matt_h_fern_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_fern/womans_vneck/matt_h_fern_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_fern/womans_vneck/matt_h_fern_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_fern/womans_tshirt/matt_h_fern_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_fern/womans_tshirt/matt_h_fern_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_fern/womans_tshirt/matt_h_fern_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_fern/womans_tshirt/matt_h_fern_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});

// END FERN

// GUARD ISLAND

PacificShop.create(
 {
   name: "Guard Island",
   imagemock: "/img/shop/matt_h_collection/matt_h_guard_island/matt_h_guard_island_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_guard_island/matt_h_guard_island_mock.png",
   desc:"test",
   size:[
     'Small',
     'Medium',
     'Large',
     'X-Large',
     '2XL',
     '3XL',
     '4XL'
   ],
   price_small:17.99,
   price_big:19.99,
     }, function(err, announcements){
       if(err) {
  console.log(err);
  } else {
    console.log("CREATED SHOP ITEM:");
    console.log(announcements);
    ProductMeta.create(
      {
        garment: "Uni - Sex Tee Shirts",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_black.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_ash.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_navy.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_royal.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_dk_green.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $17.99',
          'Medium - $17.99',
          'Large - $17.99',
          'X-Large - $17.99',
          '2XL - $19.99',
          '3XL - $19.99',
          '4XL - $19.99'
        ],
        price_small:17.99,
        price_big:19.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Uni - Sex Hoodies",
        color:[
          "Black",
          "Gray",
          "Navy",
          "Royal",
          "Dk Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_black.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_gray.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_navy.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_royal.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:[
          'Small - $33.99',
          'Medium - $33.99',
          'Large - $33.99',
          'X-Large - $33.99',
          '2XL - $36.99',
          '3XL - $36.99',
          '4XL - $36.99'
        ],
        price_small:33.99,
        price_big:36.99,
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Premium Mens Tee Shirt",
        color:[
          "Vintage Black",
          "Gray",
          "Navy",
          "Ocean Blue",
          "Heather Green"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_vintageblack.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_gray.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_navy.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_oceanblue.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_heathergreen.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens V - Neck",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"
        ],
        images:[
          "/img/shop/matt_h_collection/matt_h_guard_island/womans_vneck/matt_h_guard_island_womansv_black.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/womans_vneck/matt_h_guard_island_womansv_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/womans_vneck/matt_h_guard_island_womansv_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/womans_vneck/matt_h_guard_island_womansv_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
    ProductMeta.create(
      {
        garment: "Womens Tee Shirt",
        color:[
          "Black",
          "New Navy",
          "Dark Fuchsia",
          "Deep Royal"],
        images:[
          "/img/shop/matt_h_collection/matt_h_guard_island/womans_tshirt/matt_h_guard_island_womans_black.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/womans_tshirt/matt_h_guard_island_womans_newnavy.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/womans_tshirt/matt_h_guard_island_womans_darkfuchsia.png",
          "/img/shop/matt_h_collection/matt_h_guard_island/womans_tshirt/matt_h_guard_island_womans_deeproyal.png"
        ],
        image:"/img/download2.jpg",
        image1:"/img/download.jpg",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:[
          'Small - $19.99',
          'Medium - $19.99',
          'Large - $19.99',
          'X-Large - $19.99',
          '2XL - $21.99',
          '3XL - $21.99',
          '4XL - $21.99'
        ],
        productID:announcements._id
          }, function(err, announcements){
           if(err) {
        console.log(err);
       } else {
         console.log("CREATED SHOP ITEM: ");
         console.log(announcements);
       }
    });
  }
});


// END GUARD ISLAND






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
  res.render("print-requirements", {
    navstrip: "phone-nav",
    stripimage: "/img/phone_number.png"
  });
});


app.get("/shop", function(req, res){
  // Get all Announcements from database
  PacificShop.find({}, function(err, allPacificShop){
    if (err) {
      console.long(err);
    } else {
      res.render("matt-hamiliton-collection", {
        pacificshop:allPacificShop,
        navstrip: "phone-nav",
        stripimage: "/img/phone_number.png"
      });
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


// // CONTACT ROUTE
// app.get("/contact", function(req, res){
//   res.render("contact", {
//     navstrip: "phone-nav",
//     stripimage: "/img/phone_number.png"
//   });
// });
//
// app.post('/contact', upload.single('file'),function(req, res) {
//   if(req.file!=undefined){
//    sendMails(req.body,req.file,res);
//  }
//  else{sendMailsContent(req.body,res);}
//    // if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
//    // {
//    //   return res.json({"responseError" : "Please select captcha first"});
//    // }
//    // const secretKey = "6LdJUJ0UAAAAAOHPiNuPKQRQ-iNg0Z_XuHqESDW7";
//    // const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
//    //
//    // request(verificationURL,function(error,response,body) {
//    // body = JSON.parse(body);
//    //
//    // if(body.success !== undefined && !body.success) {
//    //   return res.json({"responseError" : "Failed captcha verification"});
//    // }
//    //   res.json({"responseSuccess" : "Sucess"});
//    // });
// });
//  function sendMails(senderMail,filet,res){
//
//    var ext =  filet.originalname.split('.').pop();
//    console.log(ext);
//         if(ext !== 'png' && ext !== 'jpg' && ext !== 'pdf' && ext !== 'jpeg') {
//             res.send('Only images and pdf are allowed');
//             return false;
//         }
//   var content = "<p>name-</p>"+senderMail.name+"<p>email-</p>"+senderMail.email+"<p>phone-</p>"+senderMail.phone+"<p>bussinessName-</p>"+senderMail.bussinessName+"<p>QUANTITY-</p>"+senderMail.qty+"<p>type-</p>"+senderMail.type+"<p>service-</p>"+senderMail.service;
//   var transporter = nodemailer.createTransport({
//    service: 'gmail',
//      auth: {
//         user: 'aanandchamp@gmail.com',
//         pass: 'omsairam@#jio'
//     }
// });
//   var mailOptions = {
//    from: senderMail.email,
//    to: 'aanandchamp@gmail.com',
//    subject: 'Contact Info',
//    html:content,
//    attachments: [
//         {   // utf-8 string as an attachment
//             filename: filet.originalname,
//             path:filet.path
//         }
//     ]
//   };
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     res.send('Successfully submitted ');
//   }
// });
// }
//
//
// function sendMailsContent(senderMail,res){
//  var content = "<p>name-</p>"+senderMail.name+"<p>email-</p>"+senderMail.email+"<p>phone-</p>"+senderMail.phone+"<p>bussinessName-</p>"+senderMail.bussinessName+"<p>QUANTITY-</p>"+senderMail.qty+"<p>type-</p>"+senderMail.type+"<p>service-</p>"+senderMail.service;
//  var transporter = nodemailer.createTransport({
//   service: 'gmail',
//     auth: {
//        user: 'aanandchamp@gmail.com',
//        pass: 'omsairam@#jio'
//    }
// });
//  var mailOptions = {
//   from: senderMail.email,
//   to: 'aanandchamp@gmail.com',
//   subject: 'Contact Info',
//   html:content,
//  };
// transporter.sendMail(mailOptions, function(error, info){
//  if (error) {
//    console.log(error);
//  } else {
//    res.send('Successfully submitted ');
//
//  }
// });
// }

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
