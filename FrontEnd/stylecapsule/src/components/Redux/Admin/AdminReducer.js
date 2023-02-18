import { GET_ORDER_LIST, GET_USER_COUNT, SET_EDIT_PRODUCT } from "./AdminTypes";

const init = {
  UserCount: 0,
  Earning: 0,
  OrderCount: 0,
  EditProduct:{}
};

export const AdminReducer = (state = init, action) => {
  switch (action.type) {

    case GET_USER_COUNT: {
      return {
        ...state,
        UserCount: action.payload,
      };
    }
    case GET_ORDER_LIST: {

      console.log(action.payload)
      let total = 0
      action.payload.map((ele, a) => total += ele.TotalPrice)
      return {
        ...state,
        OrderCount: action.payload.length,
        Earning: total,
      };
    }
    case SET_EDIT_PRODUCT: {
      return {
        ...state,
        EditProduct: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
