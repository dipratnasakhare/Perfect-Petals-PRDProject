import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { SliderContentNavBar } from "./01-SliderContentNavBar/SliderContentNavBar";
import { AdminRoutes } from "./02-AdminRoutes/AdminRoutes";

export const AdminDashboard = () => {

    const [routesText, setRoutesText] = useState("Dashboard")


    console.log(routesText)
    
  return (
    <Flex >
      <Box  w="20%" border="1px solid red">
        <SliderContentNavBar routesText={routesText} setRoutesText={setRoutesText} />
      </Box>

      <Box w="80%">
    
        <AdminRoutes routesText={routesText} />
      </Box>
    </Flex>
  );
};
