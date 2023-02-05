import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const BOX = () => {
  let inspired = [
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=272;maxWidth=400",
      name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
      pricenew: "$899.99",
      priceold: "$999.99",
      start: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418603_sd.jpg;maxHeight=272;maxWidth=400",
      name: 'MacBook Pro 13.3" Laptop - Apple M1 chip - 8GB Memory - 512GB SSD - Space Gray',
      pricenew: "$1,049.99",
      priceold: "$1,499.99",
      start: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg;maxHeight=272;maxWidth=400",
      name: "MacBook Pro 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray",
      pricenew: "$949.99",
      priceold: "$1,299.99",
      start: "⭐⭐⭐⭐",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473765_sd.jpg;maxHeight=272;maxWidth=400",
      name: 'Apple - MacBook Pro 15.4" Intel Core i7,  8GB RAM - 256GB SSD (ME293LL/A) Late 2013 - Pre-Owned - Silver',
      pricenew: "$479.99",
      priceold: "$499.99",
      start: "⭐⭐⭐⭐",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215943_sd.jpg;maxHeight=272;maxWidth=400",
      name: "Apple Watch Series 7 (GPS) 45mm (PRODUCT)RED Aluminum Case with (PRODUCT)",
      pricenew: "$359.00",
      priceold: "$429.00",
      start: "⭐⭐⭐",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473765_sd.jpg;maxHeight=272;maxWidth=400",
      name: 'Apple - MacBook Pro 15.4" Intel Core i7,  8GB RAM - 256GB SSD (ME293LL/A) Late 2013 - Pre-Owned - Silver',
      pricenew: "$479.99",
      priceold: "$499.99",
      start: "⭐⭐⭐⭐",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6339/6339741_sd.jpg;maxHeight=272;maxWidth=400",
      name: "Apple Watch Series 7 (GPS + Cellular) 41mm Green Aluminum Case with Clover Sport Band - Green",
      pricenew: "$369",
      priceold: "$499",
      start: "⭐⭐⭐⭐",
    },
  ];
  return (
    <Carousel>
              <Flex>

      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
        {inspired.map((ele) => {
          return (
            <Box>
              <Image src={ele.img} />
            </Box>
          );
        })}
      </Flex>
    </Carousel>
  );
};
