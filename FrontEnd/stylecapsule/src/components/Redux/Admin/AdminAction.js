import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { GET_ORDER_LIST, GET_USER_COUNT, SET_EDIT_PRODUCT } from "./AdminTypes";


export const GetUserCount = () => async (dispatch) => {
  // const toast = useToast()
  try {
    let res = await axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/users`);
    const data = res.data.count
    dispatch({ type: GET_USER_COUNT, payload: data })
  } catch (err) {
    console.log(err);
    // toast({
    //   position: "top",
    //   title: "Something is wrong please try later",
    //   status: "error",
    //   duration: 2000,
    //   isClosable: true,
    // });
  }
}

export const GetOrderList = () => async (dispatch) => {
  try {
    let x = await axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}/AdminSideRoutes/OrderGet`);
    let list = x.data.orderList
    dispatch({ type: GET_ORDER_LIST, payload: list })
  } catch (err) {
    console.log(err);
    // toast({
    //   position: "top",
    //   title: "Something is wrong please try later",
    //   status: "error",
    //   duration: 2000,
    //   isClosable: true,
    // });
  }
};

export const SetEditProduct = (data) => async (dispatch) => {
  dispatch({ type: SET_EDIT_PRODUCT, payload: data })
}