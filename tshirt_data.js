// 907 ENTRY

PacificShop.create(
 {
   name: "907",
   imagemock: "/img/shop/matt_h_collection/matt_h_907/matt_h_907_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_907/matt_h_907_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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

// END 907 ENTRY

// MATT H AK

PacificShop.create(
 {
   name: "AK",
   imagemock: "/img/shop/matt_h_collection/matt_h_ak/matt_h_ak_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_ak/matt_h_ak_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_ak/uni_tshirt/matt_h_ak_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "Deep Royal"
        ],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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

// END MATT AK

// MATT H AK Flag

PacificShop.create(
 {
   name: "AK FLAG",
   imagemock: "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_white.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_white.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        color:["White"],
        images:["/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_white.png"],
        image1:"/img/shop/matt_h_collection/matt_h_ak_flag/uni_tshirt/matt_h_ak_flag_uni_white.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
      garment: "Uni - Sex Hoodie",
      color:["White"],
      images:["/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag_hoodie_white.png"],
      image1:"/img/shop/matt_h_collection/matt_h_ak_flag/uni_hoodie/matt_h_ak_flag__white.png",
      image2:"/img/download3.jpg",
      image3:"/img/downloa4.jpg",
      size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        garment: "Premium Mens Tee Shirt",
        color:["White"],
        images:["/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_white.png"],
        image:"/img/download2.jpg",
        image1:"/img/shop/matt_h_collection/matt_h_ak_flag/mens_tshirt/matt_h_ak_flag_menst_white.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        color:["White"],
        images:["/img/shop/matt_h_collection/matt_h_ak_flag/womans_vneck/matt_h_akflag_womansv_white.png"],
        image:"/img/download2.jpg",
        image1:"assets/img/shop/matt_h_collection/matt_h_ak_flag/womans_vneck/matt_h_akflag_womansv_white.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        color:["White"],
        images:["/img/shop/matt_h_collection/matt_h_ak_flag/womans_tshirt/matt_h_akflag_womans_white.png"],
        image:"/img/download2.jpg",
        image1:"assets/img/shop/matt_h_collection/matt_h_ak_flag/womans_tshirt/matt_h_akflag_womans_white.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        price_small:19.99,
        price_big:21.99,
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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

// MATT BEAR SKULL

PacificShop.create(
 {
   name: "BEAR SKULL",
   imagemock: "/img/shop/matt_h_collection/matt_h_bear_skull/matt_h_bear_skull_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_bear_skull/matt_h_bear_skull_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_bear_skull/uni_tshirt/matt_h_bear_skull_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
   name: "BEER MOUNTAIN",
   imagemock: "/img/shop/matt_h_collection/matt_h_beer_mountain/matt_h_beer_mountain_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_beer_mountain/matt_h_beer_mountain_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_beer_mountain/uni_tshirt/matt_h_beer_mountain_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
   name: "CHC 2",
   imagemock: "/img/shop/matt_h_collection/matt_h_chc2/matt_h_chc2_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_chc2/matt_h_chc2_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_chc2/uni_tshirt/matt_h_chc2_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
   name: "COCKPIT",
   imagemock: "/img/shop/matt_h_collection/matt_h_cockpit/matt_h_cockpit_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_cockpit/matt_h_cockpit_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_cockpit/uni_tshirt/matt_h_cockpit_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
   name: "CRAB POTS",
   imagemock: "/img/shop/matt_h_collection/matt_h_crabpots/matt_h_crabpots_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_crabpots/matt_h_crabpots_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_crabpots/uni_tshirt/matt_h_crabpots_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
   name: "CREEK STREET",
   imagemock: "/img/shop/matt_h_collection/matt_h_creekstreet/matt_h_creekstreet_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_creekstreet/matt_h_creekstreet_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_creekstreet/uni_tshirt/matt_h_creekstreet_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
   name: "CUT BAIT",
   imagemock: "/img/shop/matt_h_collection/matt_h_cutbait/matt_h_cutbait_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_cutbait/matt_h_cutbait_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_cutbait/uni_tshirt/matt_h_cutbait_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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

// END CUT BAIT

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
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['M'],
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


// DUDE MTN

PacificShop.create(
 {
   name: "DUDE MTN",
   imagemock: "/img/shop/matt_h_collection/matt_h_dude_mtn/matt_h_dude_mtn_mock.png",
   image1: "/img/skiff_1_shop.jpg",
   image2: "/img/skiff_2_shop.jpg",
   image3: "/img/shop/matt_h_collection/matt_h_dude_mtn/matt_h_dude_mtn_mock.png",
   desc:"test",
   size:['SM','M','L','XL','2XL','3XL','4XL'],
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
          "/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_dkgreen.png"
        ],
        image1:"/img/shop/matt_h_collection/matt_h_dude_mtn/uni_tshirt/matt_h_dude_mtn_uni_black.png",
        image2:"/img/download3.jpg",
        image3:"/img/downloa4.jpg",
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
        size:['SM','M','L','XL','2XL','3XL','4XL'],
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
