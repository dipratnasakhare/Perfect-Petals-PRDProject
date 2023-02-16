import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Spacer, Text } from "@chakra-ui/react";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import PaymentOption from "./pages/PaymentOption/PaymentOption";
import { PaymentSucces } from "./PaymentSucces/PaymentSucces";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
  const [CartData, setCartData] = useState([]);
  const [orderPlace, setOrderPlace] = useState(false);
  const [OrderTotal, setOrderTotal] = useState(0);
  const navigation = useNavigate();
  // const toast = useToast();

  console.log(CartData, "payment page")

  const GetCartData = async () => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId,
    };

    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/User_Cart_Data/`,
        data
      );
      if(x.data.msg === "Please add product in cart"){
        setCartData([])
      }else{
        setCartData(x.data.User_Arr)
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetCartData();
  }, []);

  const SetOrderDetails = async () => {
    let UserId = JSON.parse(localStorage.getItem("styleCapsuleToken"));
    UserId = UserId.UserId;
    let data = {
      UserId,
      TotalPrice: OrderTotal,
      OrderDetails: CartData,
    };

    try {
      let x = await axios.post(
        `${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/OrderPost`,
        data
      );
      console.log(x, "orderlist post or not")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mt="2rem" mb="2rem">
      {orderPlace ? (
        <PaymentSucces setOrderTotal={setOrderTotal} />
      ) : (
        <Box bg="#e1e9ec">
          <Box w="80%" m="auto" display={["grid", "grid", "grid", "flex"]}>
            <Box>
              <OrderSummary
                setOrderTotal={setOrderTotal}
                orderPlace={orderPlace}
                cartData={CartData}
              />
            </Box>
            <Spacer />
            <Box>
              <PaymentOption
                SetOrderDetails={SetOrderDetails}
                setOrderPlace={setOrderPlace}
                CartData={CartData}
              />
            </Box>
          </Box>
        </Box>
      )}

      <Box bg="#333" p="36px">
        <Box mb="10px" justifyContent={"flex-start"} display="grid">
          <Text color={"white"}>Amazing offers available on nearbuy</Text>
        </Box>
        <Box justifyContent={"flex-start"} display="grid">
          <Text color="white">
            Perfect Petals helps you discover the best things to do, eat and buy
            – wherever you are! Make every day awesome with nearbuy. Dine at the
            finest restaurants, relax at the best spas, pamper yourself with
            exciting wellness and shopping offers or just explore your city
            intimately… you will always find a lot more to do with nearbuy. From
            tattoo parlors to music concerts, movie tickets to theme parks,
            everything you want is now within reach. Don't stop yet! Take it
            wherever you go with the nearbuy mobile app. Based on your location
            and preference, our smart search engine will suggest new things to
            explore every time you open the app. What's more, with offers on
            everything around you... you are sure to try something new every
            time.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPage;
