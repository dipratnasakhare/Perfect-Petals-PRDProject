
const express = require("express");
const Purple = express.Router();

// Model import for adding user
const { ModelPurple } = require("../models/Purple.models")



Purple.get("/", async (req, res) => {
    try {
        let valentine = await ModelPurple.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

Purple.get("/sum", async (req, res) => {
    try {
        let All_User = await ModelPurple.insertMany(   [
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104518mpuv5ca9x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104518mpuv5ca9x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Passion for Purple Roses',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Daydream Bouquet',
              Price: '$59.99 - $99.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90577mprsv1sc9x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90577mprsv1sc9x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Assorted Tulip Bouquet',
              Price: '$44.99 - $91.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/105257s011918x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/105257s011918x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Rose Elegance Premium Long Stem Lavender Roses',
              Price: '$89.99 - $119.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/146802mbhv1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/146802mbhv1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Exotic Breeze Orchids',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Lovely Lavender Medley',
              Price: '$49.99 - $79.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/18747kpskx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/18747kpskx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Elegant Calla Lily',
              Price: '$46.99 - $74.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191198x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191198x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Double Purple Orchid Plant',
              Price: '$84.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18116lcnx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18116lcnx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Majestic Mosaic Hydrangea',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191241lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191241lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Sweetheart Romance Bouquet',
              Price: '$79.99 - $109.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/179316lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/179316lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Luscious Lilac Beauty Bouquet by Southern Living',
              Price: '$54.99 - $74.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/99201x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/99201x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Purple Phalaenopsis Orchid',
              Price: '$59.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/156390lppx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/156390lppx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Magnificent Roses Preserved Lavender Roses',
              Price: '$175.00 - $325.00',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/177704lsbx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/177704lsbx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Magnificent Roses Preserved Sorbet Roses',
              Price: '$200.00 - $275.00',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192455lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192455lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Floral EnchantmentBouquet',
              Price: '$59.99 - $79.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191252xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191252xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Garden of Grandeur',
              Price: '$84.99 - $179.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/161929stjv3x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/161929stjv3x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Countryside Tulips',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/193059lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/193059lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Majestic Moment Bouquet',
              Price: '$69.99 - $99.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192448lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192448lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Golden Gem Bouquet',
              Price: '$59.99 - $79.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/18436pycx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/18436pycx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Elegant Orchid',
              Price: '$59.99 - $71.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/160557spuv5ch29x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/160557spuv5ch29x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Lavender Garden Bouquet',
              Price: '$49.99 - $74.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191246lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191246lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Treasured Love Bouquet',
              Price: '$79.99 - $99.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/139835n1mx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/139835n1mx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Lavender Rosemary Gift Set',
              Price: '$44.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/179057x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/179057x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Good Day Bouquet',
              Price: '$49.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/101697lnx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/101697lnx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Violet Opulence Orchid',
              Price: '$64.99 - $139.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192261lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192261lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Nature’s Beauty Bouquet',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/190305lax.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/190305lax.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Enchanted Beauty by Magnificent Roses Lavender',
              Price: '$115.00',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/97712rx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/97712rx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Waterford Glass Rose',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/190250sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/190250sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Magnificent Roses Preserved Lavender Rose',
              Price: '$65.00',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192446lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192446lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Nature in Bloom Bouquet',
              Price: '$69.99 - $89.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/157139sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/157139sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Lavish Lavender Rose Plant',
              Price: '$36.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/179323lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/179323lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Blush Posy Bouquet',
              Price: '$49.99 - $59.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/182668bdx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/182668bdx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Quiet the Mind Journal & Aromatherapy Gift Set',
              Price: '$54.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156227sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156227sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Lavender Door Décor',
              Price: '$54.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/179054lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/179054lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Chic Garden Bouquet',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18954lbx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18954lbx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Alluring Magenta Orchid Garden',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            }
          ] );
          res.status(200).send({ msg: "ModelPurple updated" });
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
    
})





module.exports = { Purple }