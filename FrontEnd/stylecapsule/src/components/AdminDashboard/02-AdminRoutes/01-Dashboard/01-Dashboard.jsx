import { Box, Flex, Grid, SimpleGrid, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DetailsBox } from "./pages/01-DetailsBox";
import { BsCart } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { NewProjects } from "./pages/02-NewProjects";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

//  redux all requests 
import { GetUserCount, GetOrderList } from "../../../Redux/Admin/AdminAction"
export const Dashboard = () => {

  const [OrderList, setOrderList] = useState([])
  // const [UserCount, setUserCount] = useState(0)
  // const [OrderCount, setOrderCount] = useState(0)
  // const [Earning, setEarning] = useState(0)
  const toast = useToast()


// redux data management 

 const dispatch = useDispatch()
 const { UserCount, OrderCount, Earning } = useSelector((store) => store.AdminManager);


  const Details = [
    { name: "customers", count: UserCount, icon: HiOutlineUserGroup },
    { name: "Orders", count: OrderCount, icon: AiOutlineShoppingCart },
    { name: "Earning", count:"$-" + Earning, icon: GiTakeMyMoney },
  ];


// console.log(user, "userADMIN")
  // const GetUserCount = async () => {
  //     try {
  //       let res =  await axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/users`);
  //       setUserCount(res.data.count)
  //     } catch (err) {
  //       console.log(err);
  //       toast({
  //         position: "top",
  //         title: "Something is wrong please try later",
  //         status: "error",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //     }
  // }


  // const GetOrderList = async () => {
  //   try {
  //     let x = await axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/OrderGet`);
  //       let list = x.data.orderList
  //       setOrderList(list)
  //       setOrderCount(list.length)
  //       let total = 0
  //       list.map((ele, a) => total += ele.TotalPrice)
  //       setEarning(total)
  //   } catch (err) {
  //     console.log(err);
  //     toast({
  //       position: "top",
  //       title: "Something is wrong please try later",
  //       status: "error",
  //       duration: 2000,
  //       isClosable: true,
  //     });
  //   }
  // };

  useEffect(() => {
    // GetUserCount()
    // GetOrderList()

    dispatch(GetOrderList())
    dispatch(GetUserCount())
  }, [])


  
  return (
    <Box h="40rem" backgroundSize={"cover"} backgroundImage={"https://images.pexels.com/photos/7130540/pexels-photo-7130540.jpeg?auto=compress&cs=tinysrgb&w=600"} pt="1rem" pb="2rem">
    <Grid pt="1rem" pb="2rem" gap="30px" w="90%" m="auto" >
      <SimpleGrid columns={[1, 2, 2, 4]} w={{base:"85%" , md:"100%"}}spacing={10}>
        {Details.map((ele) => {
          return (
            <DetailsBox name={ele.name} count={ele.count} Icons={ele.icon} />
          );
        })}
      </SimpleGrid>

      <Box>
        <Box w="50%">
          {" "}
          {/* <NewProjects /> */}
        </Box>

        <Box w="50%"></Box>
      </Box>
    </Grid>
  </Box>
  );
};
