import { Box, Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import { DetailsBox } from './pages/01-DetailsBox'
import { BsCart } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi"
import { AiOutlineFundProjectionScreen } from "react-icons/ai" 
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GiTakeMyMoney } from "react-icons/gi"
import { NewProjects } from './pages/02-NewProjects';

export const Dashboard = () => {

    const Details = [
        {name:"customers", count:88, icon:HiOutlineUserGroup},
        {name:"Project", count:88, icon:AiOutlineFundProjectionScreen},
        {name:"Orders", count:88, icon:AiOutlineShoppingCart},
        {name:"Earning", count:88, icon:GiTakeMyMoney},
    ]
    return (
        <Grid pt="1rem" pb="2rem" gap="30px" w="90%" m="auto">
           <Flex gap="25px">
           {Details.map((ele)=>{
              return (
                <DetailsBox name={ele.name} count={ele.count} Icons={ele.icon}/>
              )
            })}
           </Flex>
         

          <Box>
           <Box w="50%"> <NewProjects /></Box>

            <Box w="50%">

            </Box>
          </Box>




            
        </Grid>
    )
}
