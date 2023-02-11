import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export const SliderContentNavBar = ({setRoutesText, routesText}) => {

    const SideContent = [
        {text:"Dashboard", route:"/Dashboard"},
        {text:"Users", route:"/users"},
        {text:"Orders", route:"/orders"},
        {text:"Products", route:"/Products"},
        {text:"Accounts", route:"/accounts"},
        {text:"Tasks", route:"/task"},
    ]
    return (
        <Box>
            {SideContent.map((ele) => {
                return (
                    <Flex  style={{
                        backgroundColor:routesText === ele.text ? "white" : "#c6d4d9"
                      }} mb="2px"  p="8px" pt="15px" pb="15px" onClick={()=>setRoutesText(ele.text)}>
                        <Box><Text>
                        {ele.text}
                        </Text></Box> 
                      </Flex>
                )
            })}
            
        </Box>
    )
}
