import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';

export const Single_Product_Box = () => {

    const data = useSelector((state) => state.prodManager.data.data);

    return (
        <Box>
            <Image src={data.ImgUrl}/>
            <Text>{data}</Text>
        </Box>
    )
}
