import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SliderContentNavBar } from "./01-SliderContentNavBar/SliderContentNavBar";
import { AdminRoutes } from "./02-AdminRoutes/AdminRoutes";

export const AdminDashboard = () => {

    const [routesText, setRoutesText] = useState("Dashboard")
    const  navigate = useNavigate()

    useEffect(()=>{
      let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken")) || "null"
      if(UserId === "null" || UserId.msg === "User login successfully"){
        navigate("/")
      }
    }, )
    
  return (
    <Flex >
      <Box  w="30%" backgroundSize={"cover"} backgroundImage={"https://images.pexels.com/photos/7130544/pexels-photo-7130544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}>
        <SliderContentNavBar routesText={routesText} setRoutesText={setRoutesText} />
      </Box>
      <Box w="80%">
        <AdminRoutes routesText={routesText} />
      </Box>
    </Flex>
  );
};
