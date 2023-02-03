
const express = require("express");
const Bright = express.Router();

// Model import for adding user
const { ModelBright } = require("../models/Bright.models")



Bright.get("/", async (req, res) => {
    try {
        let valentine = await ModelBright.find()
        console.log("valentine", "valentine")
          res.send(valentine);
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
})

Bright.get("/sum", async (req, res) => {
    try {
        let All_User = await ModelBright.insertMany( [
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Floral Embrace',
              Price: '$49.99 - $79.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/176433xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/176433xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Vibrant Floral Medley',
              Price: '$54.99 - $84.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90925mpuv5ch29x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90925mpuv5ch29x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Two Dozen Assorted Roses',
              Price: '$76.99 - $96.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192260lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192260lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Beautiful Blooms Bouquet',
              Price: '$76.99 - $96.99',
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
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/193050stjv3sfh2x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/193050stjv3sfh2x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Warm Sunset Bouquet',
              Price: '$49.99 - $74.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/183661lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/183661lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Sunshine Medley by Real Simple',
              Price: '$49.99 - $59.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/107308mpkcv2ws4x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/107308mpkcv2ws4x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Vibrant Blooms Bouquet',
              Price: '$39.99 - $89.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191170xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191170xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Sweet Citrus Bouquet',
              Price: '$49.99 - $79.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/101827lnscx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/101827lnscx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Charming Rose Garden',
              Price: '$36.99 - $66.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/140157mpuv5wc2x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/140157mpuv5wc2x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Kaleidoscope Roses, 12-24 Stems',
              Price: '$59.99 - $109.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/179314lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/179314lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Sunshine Splendor Bouquet by Southern Living',
              Price: '$76.99 - $96.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/158217n1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/158217n1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Farmstand Bulb Garden',
              Price: '$49.99 - $54.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/194875mtv4ck20x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/194875mtv4ck20x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: "Happy Gerbera Daisies & Cheryl's Cookies",
              Price: '$74.99 - $94.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90618mtv4ws4x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90618mtv4ws4x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Happy Gerbera Daisies, 12-24 Stems',
              Price: '$44.99 - $84.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/95044mvw1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/95044mvw1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Sunflower Bouquet',
              Price: '$44.99 - $79.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/194876swkv1ck20x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/194876swkv1ck20x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: "Warm Sunset Bouquet & Cheryl's Cookies",
              Price: '$74.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/182684sptx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/182684sptx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Magnificent Roses Preserved Delightful Medley',
              Price: '$200.00',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/179323lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/179323lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Blush Posy Bouquet',
              Price: '$49.99 - $59.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/193054mhbv2ch31x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/193054mhbv2ch31x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Birthday Celebration',
              Price: '$74.99 - $104.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191252xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191252xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Garden of Grandeur',
              Price: '$84.99 - $179.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/144754mpkcv2ws4x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/144754mpkcv2ws4x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Assorted Roses & Peruvian Lilies',
              Price: '$76.99 - $96.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158218os1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158218os1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Country Charm Bulb Garden',
              Price: '$49.99 - $54.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/194874mv24bl19ck20x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/194874mv24bl19ck20x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: "Happy Birthday Assorted Roses & Cheryl's Cookies",
              Price: '$76.99 - $96.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/177704lsbx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/177704lsbx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Magnificent Roses Preserved Sorbet Roses',
              Price: '$200.00 - $275.00',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/177705lkdx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/177705lkdx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Magnificent Roses Preserved Kaleidoscope Roses',
              Price: '$200.00 - $275.00',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192263lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/192263lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Perfectly Pastel Bouquet',
              Price: '$76.99 - $96.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/183667lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/183667lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Sunshine & Happiness by Real Simple',
              Price: '$76.99 - $96.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/194873mv24bl21ck20x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/194873mv24bl21ck20x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: "Get Well Soon Assorted Roses & Cheryl's Cookies",
              Price: '$76.99 - $96.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104514mbdv3ca9x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104514mbdv3ca9x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Yellow Roses, 12-24 Stems',
              Price: '$44.99 - $89.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158408l1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158408l1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Bountiful Blooms Bulb Garden',
              Price: '$54.99 - $59.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/174311x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/174311x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'a-DOG-able in a Basket',
              Price: '$59.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192321lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192321lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Jubilee Bouquet—Bright',
              Price: '$49.99 - $59.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/190298lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/190298lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Magnificent Memories Gift Set',
              Price: '$29.99 - $115.00',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/179054lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/179054lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Chic Garden Bouquet',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            },
            {
              ImgUrl: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191109xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}',
              ImgUrlList: [
                'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191109xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
              ],
              Name: 'Fields of Europe',
              Price: '$49.99 - $69.99',
              Bought: 0,
              Rating: 0
            }
          ]  );
          res.status(200).send({ msg: "ModelBright updated" });
    } catch (err) {
        console.log(err, "err line 20");
        res.status(200).send({ msg: err,status:"valentine not updated" });
    }
    
})





module.exports = { Bright }