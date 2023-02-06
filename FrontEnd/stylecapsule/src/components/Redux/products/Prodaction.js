import axios from "axios";
import { GET_PRODUCT } from "./ProdactionTypes";

export const Set_Single_Page_data = (data) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT, payload: data });
};
