// lavender-gifts
const express = require("express");
const LavenderGifts = express.Router();

// Model import for adding user
const { ModelLavenderGifts } = require("../models/Lavender-Gifts.models")



LavenderGifts.get("/", async (req, res) => {
    try {
        let valentine = await ModelLavenderGifts.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

// LavenderGifts.get("/sum", async (req, res) => {
//     try {
//         let All_User = await ModelLavenderGifts.insertMany([
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/155227lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/155227lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/155227lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Sonoma Lavender Bath Gift Set',
//               Price: '$59.99 - $159.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156428sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156428sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156428sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Preserved Lavender Wreath-16',
//               Price: '$79.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Daydream Bouquet',
//               Price: '$59.99 - $99.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/97712lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/97712lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/97712lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Waterford Glass Rose',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lovely Lavender Medley',
//               Price: '$49.99 - $79.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/156974sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/156974sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/156974sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Faux Lilac Wreath-22',
//               Price: '$64.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/177896sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/177896sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/177896sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Mistral Lavender Spa Gift Set',
//               Price: '$64.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156404sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156404sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156404sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Essential Oils Gift Set',
//               Price: '$54.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/182501sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/182501sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/182501sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Magnificent Roses Preserved with Ferrero Rocher',
//               Price: '$150.00',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156390lppx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156390lppx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156390lppx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Magnificent Roses Preserved Lavender Roses',
//               Price: '$175.00 - $325.00',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/139835n1mx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/139835n1mx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/139835n1mx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Rosemary Gift Set',
//               Price: '$44.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/190305lax.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/190305lax.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/190305lax.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Enchanted Beauty by Magnificent Roses Lavender',
//               Price: '$115.00',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192261lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192261lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192261lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Nature’s Beauty Bouquet',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/157139sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/157139sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/157139sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavish Lavender Rose Plant',
//               Price: '$36.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/195979bdx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/195979bdx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/195979bdx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Damask Lavender Neck Pillow & Candle',
//               Price: '$74.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk009689x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk009689x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk009689x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Self Care Spa Gift',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk0408x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk0408x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Aromatherapy Relaxing Lavender Scent Bath Rocks Set',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/155888l110118x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/155888l110118x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/155888l110118x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Camille Beckman Lavender Gift Set',
//               Price: '$44.99 - $69.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156227sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156227sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156227sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Door Décor',
//               Price: '$54.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/99201x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/99201x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/99201x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Purple Phalaenopsis Orchid',
//               Price: '$59.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk007217x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk007217x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Little Luxurious Spa Gift Set For Her',
//               Price: '$39.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk019113x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk019113x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk019113x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lovery Home Spa Gift Baskets - Lavender & Jasmine Home Spa - 8pc Set',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk021694x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk021694x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk021694x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Calming Collection Gift Box',
//               Price: '$99.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156972sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156972sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156972sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Mixed Flower Hanging Basket',
//               Price: '$49.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk0394x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk0394x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Essential Oil Butterfly Gift Set',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk0251x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk0251x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Bath and Body Spa Gift Set Tub',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/16252922x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/16252922x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/16252922x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Denarii Lavender Spa Tower',
//               Price: '$69.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/105257s011918x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/105257s011918x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/105257s011918x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Rose Elegance Premium Long Stem Lavender Roses',
//               Price: '$89.99 - $119.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18747kpskx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18747kpskx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18747kpskx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Elegant Calla Lily',
//               Price: '$46.99 - $74.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/190295sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/190295sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/190295sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Kitras Diffuser with Oil',
//               Price: '$54.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn4.fruitbouquets.com/wcsstore/Flowers/images/catalog/192909sbbv24bdmx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn4.fruitbouquets.com/wcsstore/Flowers/images/catalog/192909sbbv24bdmx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn4.fruitbouquets.com/wcsstore/Flowers/images/catalog/192909sbbv24bdmx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Deliciously Decadent Lavender Garden & Drizzled Strawberries',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18116lcnx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18116lcnx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18116lcnx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Majestic Mosaic Hydrangea',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/mk009267x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/mk009267x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Fragrance Bath & Body Spa Gift Set Basket',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/mk017253x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/mk017253x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/mk017253x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Body Care Gift Set, Handmade Self Care Kit, 15 Piece',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk012148x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk012148x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk012148x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Lavender Skincare Appreciation Gift Box - Unique Birthday Spa Gift',
//               Price: '$99.99 - $109.99',
//               Bought: 0,
//               Rating: 0
//             },
//             {
//               ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk012144x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//               ImgUrlList: [
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk012144x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
//                 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk012144x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
//               ],
//               Name: 'Birthday Gift Basket - Lavender Luxury Natural Bath & Body Gift Set',
//               Price: '$140.00',
//               Bought: 0,
//               Rating: 0
//             }
//           ]);
//           res.status(200).send({ msg: "valentine updated" });
//     } catch (err) {
//         console.log(err, "err line 20");
//         res.status(200).send({ msg: err,status:"valentine not updated" });
//     }
    
// })





module.exports = { LavenderGifts }