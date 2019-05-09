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
//           "/img/shop/matt_h_collection/matt_h_907/uni_tshirt/matt_h_907_uni_dkgreen.png"
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
//    name: "AK",
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
//           "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_dkgreen.png"
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
// PacificShop.create(
//  {
//    name: "AK FLAG",
//    imagemock: "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_white.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_white.png",
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
//         color:["White"],
//         images:["/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_white.png"],
//         image1:"/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_white.png",
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
//     {
//       garment: "Uni - Sex Hoodie",
//       color:["White"],
//       images:["/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag_hoodie_white.png"],
//       image1:"/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag__white.png",
//       image2:"/img/download3.jpg",
//       image3:"/img/downloa4.jpg",
//       size:[
//         'Small - $33.99',
//         'Medium - $33.99',
//         'Large - $33.99',
//         'X-Large - $33.99',
//         '2XL - $36.99',
//         '3XL - $36.99',
//         '4XL - $36.99'
//       ],
//       price_small:17.99,
//       price_big:19.99,
//       productID:announcements._id
//         }, function(err, announcements){
//          if(err) {
//       console.log(err);
//      } else {
//        console.log("CREATED SHOP ITEM: ");
//        console.log(announcements);
//      }
//   });
//     ProductMeta.create(
//       {
//         garment: "Premium Mens Tee Shirt",
//         color:["White"],
//         images:["/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_white.png"],
//         image:"/img/download2.jpg",
//         image1:"/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_white.png",
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
//         color:["White"],
//         images:["/img/shop/matt_h_collection/matt_h_ak_flag/womans_vneck/matt_h_akflag_womansv_white.png"],
//         image:"/img/download2.jpg",
//         image1:"assets/img/shop/matt_h_collection/matt_h_ak_flag/womans_vneck/matt_h_akflag_womansv_white.png",
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
//         color:["White"],
//         images:["/img/shop/matt_h_collection/matt_h_ak_flag/womans_tshirt/matt_h_akflag_womans_white.png"],
//         image:"/img/download2.jpg",
//         image1:"assets/img/shop/matt_h_collection/matt_h_ak_flag/womans_tshirt/matt_h_akflag_womans_white.png",
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
// // END MATT AK FLAG
//
// // BEAR SKULL
//
// PacificShop.create(
//  {
//    name: "Bear Skull",
//    imagemock: "/img/shop/matt_h_collection/matt_h_bear_skull/matt_h_bear_skull_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_bear_skull/matt_h_bear_skull_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_bear_skull/uni_hoodie/matt_h_bear_skull_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/mens_tshirt/matt_h_bear_skull_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_bear_skull/womans_vneck/matt_h_bear_skull_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/womans_vneck/matt_h_bear_skull_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/womans_vneck/matt_h_bear_skull_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/womans_vneck/matt_h_bear_skull_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_bear_skull/womans_tshirt/matt_h_bear_skull_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/womans_tshirt/matt_h_bear_skull_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/womans_tshirt/matt_h_bear_skull_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_bear_skull/womans_tshirt/matt_h_bear_skull_womans_deeproyal.png"
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
// // END BEAR SKULL
//
// // BEER MOUNTAIN
//
// PacificShop.create(
//  {
//    name: "Beer Mountain",
//    imagemock: "/img/shop/matt_h_collection/matt_h_beer_mountain/matt_h_beer_mountain_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_beer_mountain/matt_h_beer_mountain_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_beer_mountain/uni_hoodie/matt_h_beer_mountain_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/mens_tshirt/matt_h_beer_mountain_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_vneck/matt_h_beer_mountain_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_vneck/matt_h_beer_mountain_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_vneck/matt_h_beer_mountain_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_vneck/matt_h_beer_mountain_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_tshirt/matt_h_beer_mountain_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_tshirt/matt_h_beer_mountain_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_tshirt/matt_h_beer_mountain_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_beer_mountain/womans_tshirt/matt_h_beer_mountain_womans_deeproyal.png"
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
// // END BEER MOUNTAIN
//
// // CHC2
//
// PacificShop.create(
//  {
//    name: "CHC2",
//    imagemock: "/img/shop/matt_h_collection/matt_h_chc2/matt_h_chc2_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_chc2/matt_h_chc2_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_chc2/uni_hoodie/matt_h_chc2_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/mens_tshirt/matt_h_chc2_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_chc2/womans_vneck/matt_h_chc2_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/womans_vneck/matt_h_chc2_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/womans_vneck/matt_h_chc2_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/womans_vneck/matt_h_chc2_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_chc2/womans_tshirt/matt_h_chc2_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/womans_tshirt/matt_h_chc2_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/womans_tshirt/matt_h_chc2_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_chc2/womans_tshirt/matt_h_chc2_womans_deeproyal.png"
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
// // END CHC2
//
// // COCKPIT
//
// PacificShop.create(
//  {
//    name: "Cockpit",
//    imagemock: "/img/shop/matt_h_collection/matt_h_cockpit/matt_h_cockpit_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_cockpit/matt_h_cockpit_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_cockpit/uni_hoodie/matt_h_cockpit_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/mens_tshirt/matt_h_cockpit_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_cockpit/womans_vneck/matt_h_cockpit_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/womans_vneck/matt_h_cockpit_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/womans_vneck/matt_h_cockpit_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/womans_vneck/matt_h_cockpit_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_cockpit/womans_tshirt/matt_h_cockpit_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/womans_tshirt/matt_h_cockpit_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/womans_tshirt/matt_h_cockpit_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_cockpit/womans_tshirt/matt_h_cockpit_womans_deeproyal.png"
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
// // END COCKPIT
//
// // CRABPOTS
//
// PacificShop.create(
//  {
//    name: "Crab Pot",
//    imagemock: "/img/shop/matt_h_collection/matt_h_crabpots/matt_h_crabpots_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_crabpots/matt_h_crabpots_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_crabpots/uni_hoodie/matt_h_crabpots_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/mens_tshirt/matt_h_crabpots_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_crabpots/womans_vneck/matt_h_crabpots_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/womans_vneck/matt_h_crabpots_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/womans_vneck/matt_h_crabpots_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/womans_vneck/matt_h_crabpots_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_crabpots/womans_tshirt/matt_h_crabpots_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/womans_tshirt/matt_h_crabpots_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/womans_tshirt/matt_h_crabpots_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_crabpots/womans_tshirt/matt_h_crabpots_womans_deeproyal.png"
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
// // END CRABPOTS
//
// // CREEKSTREET
//
// PacificShop.create(
//  {
//    name: "Creek Street",
//    imagemock: "/img/shop/matt_h_collection/matt_h_creekstreet/matt_h_creekstreet_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_creekstreet/matt_h_creekstreet_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_creekstreet/uni_hoodie/matt_h_creekstreet_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/mens_tshirt/matt_h_creekstreet_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_creekstreet/womans_vneck/matt_h_creekstreet_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/womans_vneck/matt_h_creekstreet_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/womans_vneck/matt_h_creekstreet_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/womans_vneck/matt_h_creekstreet_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_creekstreet/womans_tshirt/matt_h_creekstreet_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/womans_tshirt/matt_h_creekstreet_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/womans_tshirt/matt_h_creekstreet_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_creekstreet/womans_tshirt/matt_h_creekstreet_womans_deeproyal.png"
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
// // END CREEKSTREET
//
// // CUTBAIT
//
// PacificShop.create(
//  {
//    name: "Cut Bait",
//    imagemock: "/img/shop/matt_h_collection/matt_h_cutbait/matt_h_cutbait_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_cutbait/matt_h_cutbait_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_cutbait/uni_hoodie/matt_h_cutbait_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/mens_tshirt/matt_h_cutbait_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_cutbait/womans_vneck/matt_h_cutbait_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/womans_vneck/matt_h_cutbait_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/womans_vneck/matt_h_cutbait_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/womans_vneck/matt_h_cutbait_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_cutbait/womans_tshirt/matt_h_cutbait_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/womans_tshirt/matt_h_cutbait_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/womans_tshirt/matt_h_cutbait_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_cutbait/womans_tshirt/matt_h_cutbait_womans_deeproyal.png"
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
// // END CUTBAIT
//
//
// // DRUG BAG
//
// PacificShop.create(
//  {
//    name: "DRUG BAG",
//    imagemock: "/img/shop/matt_h_collection/matt_h_drug_bag/matt_h_drugbag_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_drug_bag/matt_h_drugbag_mock.png",
//    class:"drugbag",
//    desc:"test",
//    size:['Medium $14.99'],
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
//         garment: "Canvas Bag",
//         color:["White"],
//         images:[
//           "/img/shop/matt_h_collection/matt_h_drug_bag/matt_h_drugbag_mock.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_drug_bag/matt_h_drugbag_mock.png",
//         image2:"/img/download3.jpg",
//         image3:"/img/downloa4.jpg",
//         size:['Medium - $14.99'],
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
//   }
// });
//
//
// // END DRUG BAG
//
// // DUDE MTN
//
// PacificShop.create(
//  {
//    name: "Dude Mtn",
//    imagemock: "/img/shop/matt_h_collection/matt_h_dude_mtn/matt_h_dude_mtn_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_dude_mtn/matt_h_dude_mtn_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_dude_mtn/uni_hoodie/matt_h_dude_mtn_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/mens_tshirt/matt_h_dude_mtn_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_vneck/matt_h_dude_mtn_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_vneck/matt_h_dude_mtn_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_vneck/matt_h_dude_mtn_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_vneck/matt_h_dude_mtn_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_tshirt/matt_h_dude_mtn_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_tshirt/matt_h_dude_mtn_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_tshirt/matt_h_dude_mtn_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_dude_mtn/womans_tshirt/matt_h_dude_mtn_womans_deeproyal.png"
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
// // END DUDE MTN
//
// // FACEDOWN
//
// PacificShop.create(
//  {
//    name: "Face Down",
//    imagemock: "/img/shop/matt_h_collection/matt_h_face_down/matt_h_face_down_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_face_down/matt_h_face_down_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_face_down/uni_tshirt/matt_h_face_down_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_face_down/uni_hoodie/matt_h_face_down_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/mens_tshirt/matt_h_face_down_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_face_down/womans_vneck/matt_h_face_down_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/womans_vneck/matt_h_face_down_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/womans_vneck/matt_h_face_down_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/womans_vneck/matt_h_face_down_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_face_down/womans_tshirt/matt_h_face_down_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/womans_tshirt/matt_h_face_down_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/womans_tshirt/matt_h_face_down_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_face_down/womans_tshirt/matt_h_face_down_womans_deeproyal.png"
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
// // END FACEDOWN
//
//
// // FALSE ALASKANS
//
// PacificShop.create(
//  {
//    name: "False Alaskans",
//    imagemock: "/img/shop/matt_h_collection/matt_h_false_alaskans/matt_h_false_alaskans_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_false_alaskans/matt_h_false_alaskans_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_false_alaskans/uni_tshirt/matt_h_false_alaskans_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_false_alaskans/uni_hoodie/matt_h_false_alaskans_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/mens_tshirt/matt_h_false_alaskans_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_vneck/matt_h_false_alaskans_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_vneck/matt_h_false_alaskans_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_vneck/matt_h_false_alaskans_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_vneck/matt_h_false_alaskans_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_tshirt/matt_h_false_alaskans_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_tshirt/matt_h_false_alaskans_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_tshirt/matt_h_false_alaskans_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_false_alaskans/womans_tshirt/matt_h_false_alaskans_womans_deeproyal.png"
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
// // END FALSE ALASKANS
//
// // FAMILY
//
// PacificShop.create(
//  {
//    name: "Family",
//    imagemock: "/img/shop/matt_h_collection/matt_h_family/matt_h_family_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_family/matt_h_family_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_family/uni_tshirt/matt_h_family_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_family/uni_hoodie/matt_h_family_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_family/mens_tshirt/matt_h_family_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_family/womans_vneck/matt_h_family_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_family/womans_vneck/matt_h_family_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_family/womans_vneck/matt_h_family_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_family/womans_vneck/matt_h_family_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_family/womans_tshirt/matt_h_family_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_family/womans_tshirt/matt_h_family_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_family/womans_tshirt/matt_h_family_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_family/womans_tshirt/matt_h_family_womans_deeproyal.png"
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
// // END FAMILY
//
// // FERN
//
// PacificShop.create(
//  {
//    name: "Fern",
//    imagemock: "/img/shop/matt_h_collection/matt_h_fern/matt_h_fern_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_fern/matt_h_fern_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_fern/uni_tshirt/matt_h_fern_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_fern/uni_hoodie/matt_h_fern_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_fern/mens_tshirt/matt_h_fern_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_fern/womans_vneck/matt_h_fern_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_fern/womans_vneck/matt_h_fern_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_fern/womans_vneck/matt_h_fern_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_fern/womans_vneck/matt_h_fern_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_fern/womans_tshirt/matt_h_fern_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_fern/womans_tshirt/matt_h_fern_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_fern/womans_tshirt/matt_h_fern_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_fern/womans_tshirt/matt_h_fern_womans_deeproyal.png"
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
// // END FERN
//
// // GUARD ISLAND
//
// PacificShop.create(
//  {
//    name: "Guard Island",
//    imagemock: "/img/shop/matt_h_collection/matt_h_guard_island/matt_h_guard_island_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_guard_island/matt_h_guard_island_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_guard_island/uni_tshirt/matt_h_guard_island_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_guard_island/uni_hoodie/matt_h_guard_island_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/mens_tshirt/matt_h_guard_island_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_guard_island/womans_vneck/matt_h_guard_island_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/womans_vneck/matt_h_guard_island_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/womans_vneck/matt_h_guard_island_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/womans_vneck/matt_h_guard_island_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_guard_island/womans_tshirt/matt_h_guard_island_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/womans_tshirt/matt_h_guard_island_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/womans_tshirt/matt_h_guard_island_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_guard_island/womans_tshirt/matt_h_guard_island_womans_deeproyal.png"
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
// // END GUARD ISLAND

// HAIDA CLUBS

// PacificShop.create(
//  {
//    name: "Haida Clubs",
//    imagemock: "/img/shop/matt_h_collection/matt_h_haida_clubs/matt_h_haida_clubs_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_haida_clubs/matt_h_haida_clubs_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_tshirt/matt_h_haida_clubs_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_tshirt/matt_h_haida_clubs_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_tshirt/matt_h_haida_clubs_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_tshirt/matt_h_haida_clubs_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_tshirt/matt_h_haida_clubs_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_haida_clubs/uni_tshirt/matt_h_haida_clubs_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_hoodie/matt_h_haida_clubs_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_hoodie/matt_h_haida_clubs_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_hoodie/matt_h_haida_clubs_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_hoodie/matt_h_haida_clubs_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/uni_hoodie/matt_h_haida_clubs_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_haida_clubs/uni_hoodie/matt_h_haida_clubs_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/mens_tshirt/matt_h_haida_clubs_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/mens_tshirt/matt_h_haida_clubs_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/mens_tshirt/matt_h_haida_clubs_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/mens_tshirt/matt_h_haida_clubs_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/mens_tshirt/matt_h_haida_clubs_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/womans_vneck/matt_h_haida_clubs_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/womans_vneck/matt_h_haida_clubs_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/womans_vneck/matt_h_haida_clubs_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/womans_vneck/matt_h_haida_clubs_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/womans_tshirt/matt_h_haida_clubs_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/womans_tshirt/matt_h_haida_clubs_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/womans_tshirt/matt_h_haida_clubs_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_haida_clubs/womans_tshirt/matt_h_haida_clubs_womans_deeproyal.png"
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
// // END HAIDA CLUBS
//
// // HALIBUT CIRCLE
//
// PacificShop.create(
//  {
//    name: "Halibut Circle",
//    imagemock: "/img/shop/matt_h_collection/matt_h_halibut_circle/matt_h_halibut_circle_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_halibut_circle/matt_h_halibut_circle_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_tshirt/matt_h_halibut_circle_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_tshirt/matt_h_halibut_circle_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_tshirt/matt_h_halibut_circle_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_tshirt/matt_h_halibut_circle_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_tshirt/matt_h_halibut_circle_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_halibut_circle/uni_tshirt/matt_h_halibut_circle_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_hoodie/matt_h_halibut_circle_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_hoodie/matt_h_halibut_circle_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_hoodie/matt_h_halibut_circle_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_hoodie/matt_h_halibut_circle_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/uni_hoodie/matt_h_halibut_circle_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_halibut_circle/uni_hoodie/matt_h_halibut_circle_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/mens_tshirt/matt_h_halibut_circle_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/mens_tshirt/matt_h_halibut_circle_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/mens_tshirt/matt_h_halibut_circle_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/mens_tshirt/matt_h_halibut_circle_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/mens_tshirt/matt_h_halibut_circle_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/womans_vneck/matt_h_halibut_circle_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/womans_vneck/matt_h_halibut_circle_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/womans_vneck/matt_h_halibut_circle_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/womans_vneck/matt_h_halibut_circle_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/womans_tshirt/matt_h_halibut_circle_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/womans_tshirt/matt_h_halibut_circle_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/womans_tshirt/matt_h_halibut_circle_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_halibut_circle/womans_tshirt/matt_h_halibut_circle_womans_deeproyal.png"
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
// // END HALIBUT CIRCLE
//
// // HAULING GEAR
//
// PacificShop.create(
//  {
//    name: "Hauling Gear",
//    imagemock: "/img/shop/matt_h_collection/matt_h_hauling_gear/matt_h_hauling_gear_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_hauling_gear/matt_h_hauling_gear_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_tshirt/matt_h_hauling_gear_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_tshirt/matt_h_hauling_gear_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_tshirt/matt_h_hauling_gear_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_tshirt/matt_h_hauling_gear_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_tshirt/matt_h_hauling_gear_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_hauling_gear/uni_tshirt/matt_h_hauling_gear_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_hoodie/matt_h_hauling_gear_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_hoodie/matt_h_hauling_gear_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_hoodie/matt_h_hauling_gear_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_hoodie/matt_h_hauling_gear_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/uni_hoodie/matt_h_hauling_gear_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_hauling_gear/uni_hoodie/matt_h_hauling_gear_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/mens_tshirt/matt_h_hauling_gear_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/mens_tshirt/matt_h_hauling_gear_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/mens_tshirt/matt_h_hauling_gear_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/mens_tshirt/matt_h_hauling_gear_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/mens_tshirt/matt_h_hauling_gear_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/womans_vneck/matt_h_hauling_gear_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/womans_vneck/matt_h_hauling_gear_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/womans_vneck/matt_h_hauling_gear_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/womans_vneck/matt_h_hauling_gear_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/womans_tshirt/matt_h_hauling_gear_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/womans_tshirt/matt_h_hauling_gear_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/womans_tshirt/matt_h_hauling_gear_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_hauling_gear/womans_tshirt/matt_h_hauling_gear_womans_deeproyal.png"
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
// // END HAULING GEAR
//
// // HUCCI
//
// PacificShop.create(
//  {
//    name: "Hucci",
//    imagemock: "/img/shop/matt_h_collection/matt_h_hucci/matt_h_hucci_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_hucci/matt_h_hucci_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_tshirt/matt_h_hucci_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_tshirt/matt_h_hucci_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_tshirt/matt_h_hucci_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_tshirt/matt_h_hucci_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_tshirt/matt_h_hucci_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_hucci/uni_tshirt/matt_h_hucci_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_hoodie/matt_h_hucci_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_hoodie/matt_h_hucci_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_hoodie/matt_h_hucci_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_hoodie/matt_h_hucci_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/uni_hoodie/matt_h_hucci_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_hucci/uni_hoodie/matt_h_hucci_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_hucci/mens_tshirt/matt_h_hucci_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/mens_tshirt/matt_h_hucci_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/mens_tshirt/matt_h_hucci_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/mens_tshirt/matt_h_hucci_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/mens_tshirt/matt_h_hucci_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_hucci/womans_vneck/matt_h_hucci_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/womans_vneck/matt_h_hucci_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/womans_vneck/matt_h_hucci_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/womans_vneck/matt_h_hucci_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_hucci/womans_tshirt/matt_h_hucci_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/womans_tshirt/matt_h_hucci_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/womans_tshirt/matt_h_hucci_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_hucci/womans_tshirt/matt_h_hucci_womans_deeproyal.png"
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
// // END HUCCI


// // ICE CUBE
//
// PacificShop.create(
//  {
//    name: "Ice Cube",
//    imagemock: "/img/shop/matt_h_collection/matt_h_ice_cube/matt_h_ice_cube_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_ice_cube/matt_h_ice_cube_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_tshirt/matt_h_ice_cube_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_tshirt/matt_h_ice_cube_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_tshirt/matt_h_ice_cube_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_tshirt/matt_h_ice_cube_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_tshirt/matt_h_ice_cube_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_ice_cube/uni_tshirt/matt_h_ice_cube_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_hoodie/matt_h_ice_cube_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_hoodie/matt_h_ice_cube_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_hoodie/matt_h_ice_cube_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_hoodie/matt_h_ice_cube_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/uni_hoodie/matt_h_ice_cube_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_ice_cube/uni_hoodie/matt_h_ice_cube_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_ice_cube/mens_tshirt/matt_h_ice_cube_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/mens_tshirt/matt_h_ice_cube_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/mens_tshirt/matt_h_ice_cube_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/mens_tshirt/matt_h_ice_cube_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/mens_tshirt/matt_h_ice_cube_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_ice_cube/womans_vneck/matt_h_ice_cube_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/womans_vneck/matt_h_ice_cube_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/womans_vneck/matt_h_ice_cube_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/womans_vneck/matt_h_ice_cube_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_ice_cube/womans_tshirt/matt_h_ice_cube_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/womans_tshirt/matt_h_ice_cube_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/womans_tshirt/matt_h_ice_cube_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_ice_cube/womans_tshirt/matt_h_ice_cube_womans_deeproyal.png"
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
// // END ICE CUBE
//
// // IN YOUR FACE
//
// PacificShop.create(
//  {
//    name: "In Your Face",
//    imagemock: "/img/shop/matt_h_collection/matt_h_in_your_face/matt_h_in_your_face_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_in_your_face/matt_h_in_your_face_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_tshirt/matt_h_in_your_face_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_tshirt/matt_h_in_your_face_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_tshirt/matt_h_in_your_face_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_tshirt/matt_h_in_your_face_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_tshirt/matt_h_in_your_face_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_in_your_face/uni_tshirt/matt_h_in_your_face_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_hoodie/matt_h_in_your_face_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_hoodie/matt_h_in_your_face_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_hoodie/matt_h_in_your_face_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_hoodie/matt_h_in_your_face_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/uni_hoodie/matt_h_in_your_face_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_in_your_face/uni_hoodie/matt_h_in_your_face_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_in_your_face/mens_tshirt/matt_h_in_your_face_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/mens_tshirt/matt_h_in_your_face_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/mens_tshirt/matt_h_in_your_face_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/mens_tshirt/matt_h_in_your_face_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/mens_tshirt/matt_h_in_your_face_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_in_your_face/womans_vneck/matt_h_in_your_face_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/womans_vneck/matt_h_in_your_face_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/womans_vneck/matt_h_in_your_face_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/womans_vneck/matt_h_in_your_face_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_in_your_face/womans_tshirt/matt_h_in_your_face_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/womans_tshirt/matt_h_in_your_face_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/womans_tshirt/matt_h_in_your_face_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_in_your_face/womans_tshirt/matt_h_in_your_face_womans_deeproyal.png"
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
// // END IN YOUR FACE
//
// // KICK IT
//
// PacificShop.create(
//  {
//    name: "Kick It",
//    imagemock: "/img/shop/matt_h_collection/matt_h_kick_it/matt_h_kick_it_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_kick_it/matt_h_kick_it_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_tshirt/matt_h_kick_it_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_tshirt/matt_h_kick_it_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_tshirt/matt_h_kick_it_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_tshirt/matt_h_kick_it_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_tshirt/matt_h_kick_it_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_kick_it/uni_tshirt/matt_h_kick_it_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_hoodie/matt_h_kick_it_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_hoodie/matt_h_kick_it_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_hoodie/matt_h_kick_it_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_hoodie/matt_h_kick_it_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/uni_hoodie/matt_h_kick_it_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_kick_it/uni_hoodie/matt_h_kick_it_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_kick_it/mens_tshirt/matt_h_kick_it_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/mens_tshirt/matt_h_kick_it_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/mens_tshirt/matt_h_kick_it_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/mens_tshirt/matt_h_kick_it_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/mens_tshirt/matt_h_kick_it_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_kick_it/womans_vneck/matt_h_kick_it_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/womans_vneck/matt_h_kick_it_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/womans_vneck/matt_h_kick_it_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/womans_vneck/matt_h_kick_it_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_kick_it/womans_tshirt/matt_h_kick_it_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/womans_tshirt/matt_h_kick_it_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/womans_tshirt/matt_h_kick_it_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_kick_it/womans_tshirt/matt_h_kick_it_womans_deeproyal.png"
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
// // END KICK IT
//
// // KILLING TIME
//
// PacificShop.create(
//  {
//    name: "Killing Time",
//    imagemock: "/img/shop/matt_h_collection/matt_h_killing_time/matt_h_killing_time_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_killing_time/matt_h_killing_time_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_tshirt/matt_h_killing_time_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_tshirt/matt_h_killing_time_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_tshirt/matt_h_killing_time_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_tshirt/matt_h_killing_time_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_tshirt/matt_h_killing_time_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_killing_time/uni_tshirt/matt_h_killing_time_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_hoodie/matt_h_killing_time_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_hoodie/matt_h_killing_time_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_hoodie/matt_h_killing_time_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_hoodie/matt_h_killing_time_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/uni_hoodie/matt_h_killing_time_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_killing_time/uni_hoodie/matt_h_killing_time_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_killing_time/mens_tshirt/matt_h_killing_time_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/mens_tshirt/matt_h_killing_time_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/mens_tshirt/matt_h_killing_time_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/mens_tshirt/matt_h_killing_time_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/mens_tshirt/matt_h_killing_time_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_killing_time/womans_vneck/matt_h_killing_time_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/womans_vneck/matt_h_killing_time_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/womans_vneck/matt_h_killing_time_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/womans_vneck/matt_h_killing_time_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_killing_time/womans_tshirt/matt_h_killing_time_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/womans_tshirt/matt_h_killing_time_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/womans_tshirt/matt_h_killing_time_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_killing_time/womans_tshirt/matt_h_killing_time_womans_deeproyal.png"
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
// // END KILLING TIME
//
// // KRILLING
//
// PacificShop.create(
//  {
//    name: "Krilling",
//    imagemock: "/img/shop/matt_h_collection/matt_h_krilling/matt_h_krilling_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_krilling/matt_h_krilling_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_tshirt/matt_h_krilling_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_tshirt/matt_h_krilling_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_tshirt/matt_h_krilling_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_tshirt/matt_h_krilling_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_tshirt/matt_h_krilling_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_krilling/uni_tshirt/matt_h_krilling_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_hoodie/matt_h_krilling_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_hoodie/matt_h_krilling_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_hoodie/matt_h_krilling_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_hoodie/matt_h_krilling_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/uni_hoodie/matt_h_krilling_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_krilling/uni_hoodie/matt_h_krilling_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_krilling/mens_tshirt/matt_h_krilling_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/mens_tshirt/matt_h_krilling_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/mens_tshirt/matt_h_krilling_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/mens_tshirt/matt_h_krilling_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/mens_tshirt/matt_h_krilling_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_krilling/womans_vneck/matt_h_krilling_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/womans_vneck/matt_h_krilling_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/womans_vneck/matt_h_krilling_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/womans_vneck/matt_h_krilling_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_krilling/womans_tshirt/matt_h_krilling_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/womans_tshirt/matt_h_krilling_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/womans_tshirt/matt_h_krilling_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_krilling/womans_tshirt/matt_h_krilling_womans_deeproyal.png"
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
// // END KRILLING
//
// // LOWER 48
//
// PacificShop.create(
//  {
//    name: "Lower 48",
//    imagemock: "/img/shop/matt_h_collection/matt_h_lower_48/matt_h_lower_48_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_lower_48/matt_h_lower_48_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_tshirt/matt_h_lower_48_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_tshirt/matt_h_lower_48_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_tshirt/matt_h_lower_48_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_tshirt/matt_h_lower_48_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_tshirt/matt_h_lower_48_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_lower_48/uni_tshirt/matt_h_lower_48_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_hoodie/matt_h_lower_48_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_hoodie/matt_h_lower_48_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_hoodie/matt_h_lower_48_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_hoodie/matt_h_lower_48_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/uni_hoodie/matt_h_lower_48_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_lower_48/uni_hoodie/matt_h_lower_48_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_lower_48/mens_tshirt/matt_h_lower_48_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/mens_tshirt/matt_h_lower_48_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/mens_tshirt/matt_h_lower_48_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/mens_tshirt/matt_h_lower_48_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/mens_tshirt/matt_h_lower_48_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_lower_48/womans_vneck/matt_h_lower_48_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/womans_vneck/matt_h_lower_48_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/womans_vneck/matt_h_lower_48_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/womans_vneck/matt_h_lower_48_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_lower_48/womans_tshirt/matt_h_lower_48_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/womans_tshirt/matt_h_lower_48_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/womans_tshirt/matt_h_lower_48_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_lower_48/womans_tshirt/matt_h_lower_48_womans_deeproyal.png"
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
// // END LOWER 48
//
//
// // MOTHER MOTHER
//
// PacificShop.create(
//  {
//    name: "Mother Mother",
//    imagemock: "/img/shop/matt_h_collection/matt_h_mother_mother/matt_h_mother_mother_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_mother_mother/matt_h_mother_mother_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_tshirt/matt_h_mother_mother_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_tshirt/matt_h_mother_mother_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_tshirt/matt_h_mother_mother_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_tshirt/matt_h_mother_mother_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_tshirt/matt_h_mother_mother_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_mother_mother/uni_tshirt/matt_h_mother_mother_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_hoodie/matt_h_mother_mother_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_hoodie/matt_h_mother_mother_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_hoodie/matt_h_mother_mother_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_hoodie/matt_h_mother_mother_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/uni_hoodie/matt_h_mother_mother_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_mother_mother/uni_hoodie/matt_h_mother_mother_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_mother_mother/mens_tshirt/matt_h_mother_mother_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/mens_tshirt/matt_h_mother_mother_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/mens_tshirt/matt_h_mother_mother_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/mens_tshirt/matt_h_mother_mother_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/mens_tshirt/matt_h_mother_mother_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_mother_mother/womans_vneck/matt_h_mother_mother_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/womans_vneck/matt_h_mother_mother_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/womans_vneck/matt_h_mother_mother_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/womans_vneck/matt_h_mother_mother_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_mother_mother/womans_tshirt/matt_h_mother_mother_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/womans_tshirt/matt_h_mother_mother_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/womans_tshirt/matt_h_mother_mother_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_mother_mother/womans_tshirt/matt_h_mother_mother_womans_deeproyal.png"
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
// // END MOTHER MOTHER
//
// // MOTOR TO THE HEAD
//
// PacificShop.create(
//  {
//    name: "Motor To The Head",
//    imagemock: "/img/shop/matt_h_collection/matt_h_motor_to_the_head/matt_h_motor_to_the_head_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_motor_to_the_head/matt_h_motor_to_the_head_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_tshirt/matt_h_motor_to_the_head_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_tshirt/matt_h_motor_to_the_head_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_tshirt/matt_h_motor_to_the_head_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_tshirt/matt_h_motor_to_the_head_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_tshirt/matt_h_motor_to_the_head_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_tshirt/matt_h_motor_to_the_head_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_hoodie/matt_h_motor_to_the_head_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_hoodie/matt_h_motor_to_the_head_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_hoodie/matt_h_motor_to_the_head_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_hoodie/matt_h_motor_to_the_head_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_hoodie/matt_h_motor_to_the_head_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_motor_to_the_head/uni_hoodie/matt_h_motor_to_the_head_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/mens_tshirt/matt_h_motor_to_the_head_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/mens_tshirt/matt_h_motor_to_the_head_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/mens_tshirt/matt_h_motor_to_the_head_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/mens_tshirt/matt_h_motor_to_the_head_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/mens_tshirt/matt_h_motor_to_the_head_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/womans_vneck/matt_h_motor_to_the_head_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/womans_vneck/matt_h_motor_to_the_head_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/womans_vneck/matt_h_motor_to_the_head_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/womans_vneck/matt_h_motor_to_the_head_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/womans_tshirt/matt_h_motor_to_the_head_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/womans_tshirt/matt_h_motor_to_the_head_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/womans_tshirt/matt_h_motor_to_the_head_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_motor_to_the_head/womans_tshirt/matt_h_motor_to_the_head_womans_deeproyal.png"
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
// // END MOTOR TO THE HEAD
//
// // OLD SCHOOL KING
//
// PacificShop.create(
//  {
//    name: "Old School King",
//    imagemock: "/img/shop/matt_h_collection/matt_h_old_school_king/matt_h_old_school_king_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_old_school_king/matt_h_old_school_king_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_tshirt/matt_h_old_school_king_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_tshirt/matt_h_old_school_king_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_tshirt/matt_h_old_school_king_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_tshirt/matt_h_old_school_king_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_tshirt/matt_h_old_school_king_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_old_school_king/uni_tshirt/matt_h_old_school_king_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_hoodie/matt_h_old_school_king_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_hoodie/matt_h_old_school_king_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_hoodie/matt_h_old_school_king_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_hoodie/matt_h_old_school_king_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/uni_hoodie/matt_h_old_school_king_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_old_school_king/uni_hoodie/matt_h_old_school_king_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_old_school_king/mens_tshirt/matt_h_old_school_king_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/mens_tshirt/matt_h_old_school_king_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/mens_tshirt/matt_h_old_school_king_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/mens_tshirt/matt_h_old_school_king_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/mens_tshirt/matt_h_old_school_king_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_old_school_king/womans_vneck/matt_h_old_school_king_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/womans_vneck/matt_h_old_school_king_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/womans_vneck/matt_h_old_school_king_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/womans_vneck/matt_h_old_school_king_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_old_school_king/womans_tshirt/matt_h_old_school_king_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/womans_tshirt/matt_h_old_school_king_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/womans_tshirt/matt_h_old_school_king_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_old_school_king/womans_tshirt/matt_h_old_school_king_womans_deeproyal.png"
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
// // END OLD SCHOOL KING
//
// // PORT HOLE
//
// PacificShop.create(
//  {
//    name: "Port Hole",
//    imagemock: "/img/shop/matt_h_collection/matt_h_port_hole/matt_h_port_hole_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_port_hole/matt_h_port_hole_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_tshirt/matt_h_port_hole_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_tshirt/matt_h_port_hole_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_tshirt/matt_h_port_hole_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_tshirt/matt_h_port_hole_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_tshirt/matt_h_port_hole_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_port_hole/uni_tshirt/matt_h_port_hole_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_hoodie/matt_h_port_hole_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_hoodie/matt_h_port_hole_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_hoodie/matt_h_port_hole_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_hoodie/matt_h_port_hole_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/uni_hoodie/matt_h_port_hole_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_port_hole/uni_hoodie/matt_h_port_hole_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_port_hole/mens_tshirt/matt_h_port_hole_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/mens_tshirt/matt_h_port_hole_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/mens_tshirt/matt_h_port_hole_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/mens_tshirt/matt_h_port_hole_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/mens_tshirt/matt_h_port_hole_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_port_hole/womans_vneck/matt_h_port_hole_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/womans_vneck/matt_h_port_hole_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/womans_vneck/matt_h_port_hole_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/womans_vneck/matt_h_port_hole_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_port_hole/womans_tshirt/matt_h_port_hole_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/womans_tshirt/matt_h_port_hole_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/womans_tshirt/matt_h_port_hole_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_port_hole/womans_tshirt/matt_h_port_hole_womans_deeproyal.png"
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
// // END PORTHOLE


// // REEL 907
//
// PacificShop.create(
//  {
//    name: "Reel 907",
//    imagemock: "/img/shop/matt_h_collection/matt_h_reel_907/matt_h_reel_907_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_reel_907/matt_h_reel_907_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_tshirt/matt_h_reel_907_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_tshirt/matt_h_reel_907_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_tshirt/matt_h_reel_907_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_tshirt/matt_h_reel_907_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_tshirt/matt_h_reel_907_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_reel_907/uni_tshirt/matt_h_reel_907_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_hoodie/matt_h_reel_907_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_hoodie/matt_h_reel_907_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_hoodie/matt_h_reel_907_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_hoodie/matt_h_reel_907_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/uni_hoodie/matt_h_reel_907_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_reel_907/uni_hoodie/matt_h_reel_907_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_reel_907/mens_tshirt/matt_h_reel_907_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/mens_tshirt/matt_h_reel_907_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/mens_tshirt/matt_h_reel_907_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/mens_tshirt/matt_h_reel_907_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/mens_tshirt/matt_h_reel_907_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_reel_907/womans_vneck/matt_h_reel_907_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/womans_vneck/matt_h_reel_907_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/womans_vneck/matt_h_reel_907_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/womans_vneck/matt_h_reel_907_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_reel_907/womans_tshirt/matt_h_reel_907_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/womans_tshirt/matt_h_reel_907_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/womans_tshirt/matt_h_reel_907_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_reel_907/womans_tshirt/matt_h_reel_907_womans_deeproyal.png"
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
// // END Reel 907
//
// // SEA WEED
//
// PacificShop.create(
//  {
//    name: "Sea Weed",
//    imagemock: "/img/shop/matt_h_collection/matt_h_sea_weed/matt_h_sea_weed_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_sea_weed/matt_h_sea_weed_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_tshirt/matt_h_sea_weed_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_tshirt/matt_h_sea_weed_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_tshirt/matt_h_sea_weed_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_tshirt/matt_h_sea_weed_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_tshirt/matt_h_sea_weed_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_sea_weed/uni_tshirt/matt_h_sea_weed_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_hoodie/matt_h_sea_weed_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_hoodie/matt_h_sea_weed_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_hoodie/matt_h_sea_weed_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_hoodie/matt_h_sea_weed_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/uni_hoodie/matt_h_sea_weed_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_sea_weed/uni_hoodie/matt_h_sea_weed_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_sea_weed/mens_tshirt/matt_h_sea_weed_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/mens_tshirt/matt_h_sea_weed_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/mens_tshirt/matt_h_sea_weed_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/mens_tshirt/matt_h_sea_weed_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/mens_tshirt/matt_h_sea_weed_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_sea_weed/womans_vneck/matt_h_sea_weed_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/womans_vneck/matt_h_sea_weed_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/womans_vneck/matt_h_sea_weed_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/womans_vneck/matt_h_sea_weed_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_sea_weed/womans_tshirt/matt_h_sea_weed_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/womans_tshirt/matt_h_sea_weed_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/womans_tshirt/matt_h_sea_weed_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_sea_weed/womans_tshirt/matt_h_sea_weed_womans_deeproyal.png"
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
// // SEA WEED
//
// // SEINE OR SHINE
//
// PacificShop.create(
//  {
//    name: "Seine or Shine",
//    imagemock: "/img/shop/matt_h_collection/matt_h_seine_or_shine/matt_h_seine_or_shine_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_seine_or_shine/matt_h_seine_or_shine_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_tshirt/matt_h_seine_or_shine_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_tshirt/matt_h_seine_or_shine_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_tshirt/matt_h_seine_or_shine_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_tshirt/matt_h_seine_or_shine_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_tshirt/matt_h_seine_or_shine_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_tshirt/matt_h_seine_or_shine_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_hoodie/matt_h_seine_or_shine_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_hoodie/matt_h_seine_or_shine_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_hoodie/matt_h_seine_or_shine_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_hoodie/matt_h_seine_or_shine_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_hoodie/matt_h_seine_or_shine_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_seine_or_shine/uni_hoodie/matt_h_seine_or_shine_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/mens_tshirt/matt_h_seine_or_shine_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/mens_tshirt/matt_h_seine_or_shine_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/mens_tshirt/matt_h_seine_or_shine_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/mens_tshirt/matt_h_seine_or_shine_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/mens_tshirt/matt_h_seine_or_shine_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/womans_vneck/matt_h_seine_or_shine_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/womans_vneck/matt_h_seine_or_shine_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/womans_vneck/matt_h_seine_or_shine_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/womans_vneck/matt_h_seine_or_shine_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/womans_tshirt/matt_h_seine_or_shine_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/womans_tshirt/matt_h_seine_or_shine_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/womans_tshirt/matt_h_seine_or_shine_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_seine_or_shine/womans_tshirt/matt_h_seine_or_shine_womans_deeproyal.png"
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
// // END SEINE OR SHINE
//
//
// // SKIFF HAIR
//
// PacificShop.create(
//  {
//    name: "Skiff Hair",
//    imagemock: "/img/shop/matt_h_collection/matt_h_skiff_hair/matt_h_skiff_hair_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_skiff_hair/matt_h_skiff_hair_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_tshirt/matt_h_skiff_hair_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_tshirt/matt_h_skiff_hair_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_tshirt/matt_h_skiff_hair_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_tshirt/matt_h_skiff_hair_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_tshirt/matt_h_skiff_hair_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_skiff_hair/uni_tshirt/matt_h_skiff_hair_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_hoodie/matt_h_skiff_hair_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_hoodie/matt_h_skiff_hair_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_hoodie/matt_h_skiff_hair_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_hoodie/matt_h_skiff_hair_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/uni_hoodie/matt_h_skiff_hair_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_skiff_hair/uni_hoodie/matt_h_skiff_hair_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/mens_tshirt/matt_h_skiff_hair_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/mens_tshirt/matt_h_skiff_hair_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/mens_tshirt/matt_h_skiff_hair_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/mens_tshirt/matt_h_skiff_hair_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/mens_tshirt/matt_h_skiff_hair_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/womans_vneck/matt_h_skiff_hair_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/womans_vneck/matt_h_skiff_hair_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/womans_vneck/matt_h_skiff_hair_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/womans_vneck/matt_h_skiff_hair_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/womans_tshirt/matt_h_skiff_hair_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/womans_tshirt/matt_h_skiff_hair_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/womans_tshirt/matt_h_skiff_hair_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_skiff_hair/womans_tshirt/matt_h_skiff_hair_womans_deeproyal.png"
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
// // END SKIFF HAIR
//
// // SKULL TUNNEL
//
// PacificShop.create(
//  {
//    name: "Skull Tunnel",
//    imagemock: "/img/shop/matt_h_collection/matt_h_skull_tunnel/matt_h_skull_tunnel_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_skull_tunnel/matt_h_skull_tunnel_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_tshirt/matt_h_skull_tunnel_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_tshirt/matt_h_skull_tunnel_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_tshirt/matt_h_skull_tunnel_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_tshirt/matt_h_skull_tunnel_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_tshirt/matt_h_skull_tunnel_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_tshirt/matt_h_skull_tunnel_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_hoodie/matt_h_skull_tunnel_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_hoodie/matt_h_skull_tunnel_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_hoodie/matt_h_skull_tunnel_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_hoodie/matt_h_skull_tunnel_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_hoodie/matt_h_skull_tunnel_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_skull_tunnel/uni_hoodie/matt_h_skull_tunnel_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/mens_tshirt/matt_h_skull_tunnel_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/mens_tshirt/matt_h_skull_tunnel_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/mens_tshirt/matt_h_skull_tunnel_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/mens_tshirt/matt_h_skull_tunnel_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/mens_tshirt/matt_h_skull_tunnel_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/womans_vneck/matt_h_skull_tunnel_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/womans_vneck/matt_h_skull_tunnel_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/womans_vneck/matt_h_skull_tunnel_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/womans_vneck/matt_h_skull_tunnel_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/womans_tshirt/matt_h_skull_tunnel_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/womans_tshirt/matt_h_skull_tunnel_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/womans_tshirt/matt_h_skull_tunnel_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_skull_tunnel/womans_tshirt/matt_h_skull_tunnel_womans_deeproyal.png"
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
// // END SKULL TUNNEL
//
// // SLUG LIFE
//
// PacificShop.create(
//  {
//    name: "Slug Life",
//    imagemock: "/img/shop/matt_h_collection/matt_h_slug_life/matt_h_slug_life_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_slug_life/matt_h_slug_life_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_tshirt/matt_h_slug_life_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_tshirt/matt_h_slug_life_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_tshirt/matt_h_slug_life_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_tshirt/matt_h_slug_life_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_tshirt/matt_h_slug_life_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_slug_life/uni_tshirt/matt_h_slug_life_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_hoodie/matt_h_slug_life_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_hoodie/matt_h_slug_life_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_hoodie/matt_h_slug_life_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_hoodie/matt_h_slug_life_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/uni_hoodie/matt_h_slug_life_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_slug_life/uni_hoodie/matt_h_slug_life_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_slug_life/mens_tshirt/matt_h_slug_life_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/mens_tshirt/matt_h_slug_life_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/mens_tshirt/matt_h_slug_life_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/mens_tshirt/matt_h_slug_life_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/mens_tshirt/matt_h_slug_life_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_slug_life/womans_vneck/matt_h_slug_life_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/womans_vneck/matt_h_slug_life_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/womans_vneck/matt_h_slug_life_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/womans_vneck/matt_h_slug_life_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_slug_life/womans_tshirt/matt_h_slug_life_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/womans_tshirt/matt_h_slug_life_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/womans_tshirt/matt_h_slug_life_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_slug_life/womans_tshirt/matt_h_slug_life_womans_deeproyal.png"
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
// // END SLUG LIFE
//
//
// // SOCKEYE
//
// PacificShop.create(
//  {
//    name: "Sockeye",
//    imagemock: "/img/shop/matt_h_collection/matt_h_sockeye/uni_tshirt/matt_h_sockeye_uni_white.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_sockeye/uni_tshirt/matt_h_sockeye_uni_white.png",
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
//         color:["White"],
//         images:["/img/shop/matt_h_collection/matt_h_sockeye/uni_tshirt/matt_h_sockeye_uni_white.png"],
//         image1:"/img/shop/matt_h_collection/matt_h_sockeye/uni_tshirt/matt_h_sockeye_uni_white.png",
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
//     {
//       garment: "Uni - Sex Hoodie",
//       color:["White"],
//       images:["/img/shop/matt_h_collection/matt_h_sockeye/uni_hoodie/matt_h_sockeye_hoodie_white.png"],
//       image1:"/img/shop/matt_h_collection/matt_h_sockeye/uni_hoodie/matt_h_sockeye__white.png",
//       image2:"/img/download3.jpg",
//       image3:"/img/downloa4.jpg",
//       size:[
//         'Small - $33.99',
//         'Medium - $33.99',
//         'Large - $33.99',
//         'X-Large - $33.99',
//         '2XL - $36.99',
//         '3XL - $36.99',
//         '4XL - $36.99'
//       ],
//       price_small:17.99,
//       price_big:19.99,
//       productID:announcements._id
//         }, function(err, announcements){
//          if(err) {
//       console.log(err);
//      } else {
//        console.log("CREATED SHOP ITEM: ");
//        console.log(announcements);
//      }
//   });
//     ProductMeta.create(
//       {
//         garment: "Premium Mens Tee Shirt",
//         color:["White"],
//         images:["/img/shop/matt_h_collection/matt_h_sockeye/mens_tshirt/matt_h_sockeye_menst_white.png"],
//         image:"/img/download2.jpg",
//         image1:"/img/shop/matt_h_collection/matt_h_sockeye/mens_tshirt/matt_h_sockeye_menst_white.png",
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
//         color:["White"],
//         images:["/img/shop/matt_h_collection/matt_h_sockeye/womans_vneck/matt_h_sockeye_womansv_white.png"],
//         image:"/img/download2.jpg",
//         image1:"assets/img/shop/matt_h_collection/matt_h_sockeye/womans_vneck/matt_h_sockeye_womansv_white.png",
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
//         color:["White"],
//         images:["/img/shop/matt_h_collection/matt_h_sockeye/womans_tshirt/matt_h_sockeye_womans_white.png"],
//         image:"/img/download2.jpg",
//         image1:"assets/img/shop/matt_h_collection/matt_h_sockeye/womans_tshirt/matt_h_sockeye_womans_white.png",
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
// // END SOCKEYE
//
// // SURVIVAL
//
// PacificShop.create(
//  {
//    name: "Survival",
//    imagemock: "/img/shop/matt_h_collection/matt_h_survival/matt_h_survival_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_survival/matt_h_survival_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_survival/uni_tshirt/matt_h_survival_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_survival/uni_tshirt/matt_h_survival_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_survival/uni_tshirt/matt_h_survival_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_survival/uni_tshirt/matt_h_survival_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_survival/uni_tshirt/matt_h_survival_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_survival/uni_tshirt/matt_h_survival_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_survival/uni_hoodie/matt_h_survival_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_survival/uni_hoodie/matt_h_survival_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_survival/uni_hoodie/matt_h_survival_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_survival/uni_hoodie/matt_h_survival_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_survival/uni_hoodie/matt_h_survival_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_survival/uni_hoodie/matt_h_survival_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_survival/mens_tshirt/matt_h_survival_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_survival/mens_tshirt/matt_h_survival_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_survival/mens_tshirt/matt_h_survival_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_survival/mens_tshirt/matt_h_survival_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_survival/mens_tshirt/matt_h_survival_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_survival/womans_vneck/matt_h_survival_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_survival/womans_vneck/matt_h_survival_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_survival/womans_vneck/matt_h_survival_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_survival/womans_vneck/matt_h_survival_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_survival/womans_tshirt/matt_h_survival_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_survival/womans_tshirt/matt_h_survival_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_survival/womans_tshirt/matt_h_survival_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_survival/womans_tshirt/matt_h_survival_womans_deeproyal.png"
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
// // END SURVIVAL
//
// // UFF DA
//
// PacificShop.create(
//  {
//    name: "Uff Da",
//    imagemock: "/img/shop/matt_h_collection/matt_h_uff_da/matt_h_uff_da_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_uff_da/matt_h_uff_da_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_tshirt/matt_h_uff_da_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_tshirt/matt_h_uff_da_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_tshirt/matt_h_uff_da_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_tshirt/matt_h_uff_da_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_tshirt/matt_h_uff_da_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_uff_da/uni_tshirt/matt_h_uff_da_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_hoodie/matt_h_uff_da_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_hoodie/matt_h_uff_da_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_hoodie/matt_h_uff_da_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_hoodie/matt_h_uff_da_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/uni_hoodie/matt_h_uff_da_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_uff_da/uni_hoodie/matt_h_uff_da_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_uff_da/mens_tshirt/matt_h_uff_da_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/mens_tshirt/matt_h_uff_da_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/mens_tshirt/matt_h_uff_da_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/mens_tshirt/matt_h_uff_da_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/mens_tshirt/matt_h_uff_da_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_uff_da/womans_vneck/matt_h_uff_da_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/womans_vneck/matt_h_uff_da_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/womans_vneck/matt_h_uff_da_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/womans_vneck/matt_h_uff_da_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_uff_da/womans_tshirt/matt_h_uff_da_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/womans_tshirt/matt_h_uff_da_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/womans_tshirt/matt_h_uff_da_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_uff_da/womans_tshirt/matt_h_uff_da_womans_deeproyal.png"
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
// // END UFF DA
//
// // WELCOME TO ALASKA
//
// PacificShop.create(
//  {
//    name: "Welcome to Alaska",
//    imagemock: "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/matt_h_welcome_to_alaska_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/matt_h_welcome_to_alaska_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_tshirt/matt_h_welcome_to_alaska_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_tshirt/matt_h_welcome_to_alaska_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_tshirt/matt_h_welcome_to_alaska_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_tshirt/matt_h_welcome_to_alaska_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_tshirt/matt_h_welcome_to_alaska_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_tshirt/matt_h_welcome_to_alaska_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_hoodie/matt_h_welcome_to_alaska_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_hoodie/matt_h_welcome_to_alaska_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_hoodie/matt_h_welcome_to_alaska_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_hoodie/matt_h_welcome_to_alaska_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_hoodie/matt_h_welcome_to_alaska_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_welcome_to_alaska/uni_hoodie/matt_h_welcome_to_alaska_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/mens_tshirt/matt_h_welcome_to_alaska_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/mens_tshirt/matt_h_welcome_to_alaska_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/mens_tshirt/matt_h_welcome_to_alaska_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/mens_tshirt/matt_h_welcome_to_alaska_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/mens_tshirt/matt_h_welcome_to_alaska_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/womans_vneck/matt_h_welcome_to_alaska_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/womans_vneck/matt_h_welcome_to_alaska_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/womans_vneck/matt_h_welcome_to_alaska_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/womans_vneck/matt_h_welcome_to_alaska_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/womans_tshirt/matt_h_welcome_to_alaska_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/womans_tshirt/matt_h_welcome_to_alaska_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/womans_tshirt/matt_h_welcome_to_alaska_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_welcome_to_alaska/womans_tshirt/matt_h_welcome_to_alaska_womans_deeproyal.png"
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
// // END WELCOME TO ALASKA
//
// // WIFI
//
// PacificShop.create(
//  {
//    name: "WiFi",
//    imagemock: "/img/shop/matt_h_collection/matt_h_wifi/matt_h_wifi_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_wifi/matt_h_wifi_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_tshirt/matt_h_wifi_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_tshirt/matt_h_wifi_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_tshirt/matt_h_wifi_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_tshirt/matt_h_wifi_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_tshirt/matt_h_wifi_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_wifi/uni_tshirt/matt_h_wifi_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_hoodie/matt_h_wifi_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_hoodie/matt_h_wifi_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_hoodie/matt_h_wifi_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_hoodie/matt_h_wifi_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/uni_hoodie/matt_h_wifi_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_wifi/uni_hoodie/matt_h_wifi_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_wifi/mens_tshirt/matt_h_wifi_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/mens_tshirt/matt_h_wifi_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/mens_tshirt/matt_h_wifi_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/mens_tshirt/matt_h_wifi_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/mens_tshirt/matt_h_wifi_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_wifi/womans_vneck/matt_h_wifi_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/womans_vneck/matt_h_wifi_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/womans_vneck/matt_h_wifi_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/womans_vneck/matt_h_wifi_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_wifi/womans_tshirt/matt_h_wifi_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/womans_tshirt/matt_h_wifi_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/womans_tshirt/matt_h_wifi_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_wifi/womans_tshirt/matt_h_wifi_womans_deeproyal.png"
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
// // END WIFI
//
// // YELLOW EYE
//
// PacificShop.create(
//  {
//    name: "Yellow eye",
//    imagemock: "/img/shop/matt_h_collection/matt_h_yellow_eye/matt_h_yellow_eye_mock.png",
//    image1: "/img/skiff_1_shop.jpg",
//    image2: "/img/skiff_2_shop.jpg",
//    image3: "/img/shop/matt_h_collection/matt_h_yellow_eye/matt_h_yellow_eye_mock.png",
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
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_tshirt/matt_h_yellow_eye_uni_black.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_tshirt/matt_h_yellow_eye_uni_ash.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_tshirt/matt_h_yellow_eye_uni_navy.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_tshirt/matt_h_yellow_eye_uni_royal.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_tshirt/matt_h_yellow_eye_uni_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_yellow_eye/uni_tshirt/matt_h_yellow_eye_uni_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_hoodie/matt_h_yellow_eye_hoodie_black.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_hoodie/matt_h_yellow_eye_hoodie_gray.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_hoodie/matt_h_yellow_eye_hoodie_navy.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_hoodie/matt_h_yellow_eye_hoodie_royal.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/uni_hoodie/matt_h_yellow_eye_hoodie_dkgreen.png"
//         ],
//         image1:"/img/shop/matt_h_collection/matt_h_yellow_eye/uni_hoodie/matt_h_yellow_eye_hoodie_black.png",
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
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/mens_tshirt/matt_h_yellow_eye_menst_vintageblack.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/mens_tshirt/matt_h_yellow_eye_menst_gray.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/mens_tshirt/matt_h_yellow_eye_menst_navy.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/mens_tshirt/matt_h_yellow_eye_menst_oceanblue.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/mens_tshirt/matt_h_yellow_eye_menst_heathergreen.png"
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
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/womans_vneck/matt_h_yellow_eye_womansv_black.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/womans_vneck/matt_h_yellow_eye_womansv_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/womans_vneck/matt_h_yellow_eye_womansv_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/womans_vneck/matt_h_yellow_eye_womansv_deeproyal.png"
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
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/womans_tshirt/matt_h_yellow_eye_womans_black.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/womans_tshirt/matt_h_yellow_eye_womans_newnavy.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/womans_tshirt/matt_h_yellow_eye_womans_darkfuchsia.png",
//           "/img/shop/matt_h_collection/matt_h_yellow_eye/womans_tshirt/matt_h_yellow_eye_womans_deeproyal.png"
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
// // END YELLOW EYE














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


// CONTACT ROUTE
app.get("/contact", function(req, res){
  res.render("contact", {
    navstrip: "phone-nav",
    stripimage: "/img/phone_number.png"
  });
});

app.post('/contact', upload.single('file'),function(req, res) {
  if(req.file!=undefined){
   sendMails(req.body,req.file,res);
 }
 else{sendMailsContent(req.body,res);}
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
 function sendMails(senderMail,filet,res){

   var ext =  filet.originalname.split('.').pop();
   console.log(ext);
        if(ext !== 'png' && ext !== 'jpg' && ext !== 'pdf' && ext !== 'jpeg') {
            res.send('Only images and pdf are allowed');
            return false;
        }
  var content = "<p>name-</p>"+senderMail.name+"<p>email-</p>"+senderMail.email+"<p>phone-</p>"+senderMail.phone+"<p>bussinessName-</p>"+senderMail.bussinessName+"<p>QUANTITY-</p>"+senderMail.qty+"<p>type-</p>"+senderMail.type+"<p>service-</p>"+senderMail.service;
  var transporter = nodemailer.createTransport({
   service: 'gmail',
     auth: {
        user: 'jeremy.daniel1981@gmail.com',
        pass: 'ncak2018'
    }
});
  var mailOptions = {
   from: senderMail.email,
   to: 'jeremy.daniel1981@gmail.com',
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
    res.redirect('/');
  }
});
}


function sendMailsContent(senderMail,res){
 var content = "<p>name-</p>"+senderMail.name+"<p>email-</p>"+senderMail.email+"<p>phone-</p>"+senderMail.phone+"<p>bussinessName-</p>"+senderMail.bussinessName+"<p>QUANTITY-</p>"+senderMail.qty+"<p>type-</p>"+senderMail.type+"<p>service-</p>"+senderMail.service;
 var transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
       user: 'jeremy.daniel1981@gmail.com',
       pass: 'ncak2018'
   }
});
 var mailOptions = {
  from: senderMail.email,
  to: 'jeremy.daniel1981@gmail.com',
  subject: 'Contact Info',
  html:content,
 };
transporter.sendMail(mailOptions, function(error, info){
 if (error) {
   console.log(error);
 } else {
   res.send('Successfully submitted ');

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


app.listen(process.env.PORT || 8080, function(){
  console.log(`Pacific Printing Server Is Running`);
});
