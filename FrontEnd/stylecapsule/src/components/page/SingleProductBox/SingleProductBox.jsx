import { Box, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { AddToCartBox } from "./AddToCartBox/AddToCartBox"
import { NameBox } from "./ProductNameBox/NameBox"
export const SingleProductBox = ({product, i}) => {
    const [Hover, setHover] = useState(false);

    // h={["25rem", "25rem", "25rem"]}
    return (
        <div>
   <Box key={i/Date.now()} boxShadow='lg'  rounded='md' bg='white'>
      <Box bg="white" h={["26rem", "25rem", "26rem"]}   >
        <Box  h="13.5rem"
          overflow="hidden"
          >
           <Image src={product.ImgUrlList[0]}  />
        </Box>
        <Box
          p='15px'
          pt={["34px", "15px", "15px"]}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {!Hover ? (
            <NameBox data={product}/>
          ) : (
            <AddToCartBox data={product} />
          )}

        </Box>
      </Box>
    </Box>       </div>
    )
}
