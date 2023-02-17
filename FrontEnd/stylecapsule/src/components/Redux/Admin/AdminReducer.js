import { GET_ORDER_LIST, GET_USER_COUNT } from "./AdminTypes";

const init = {
  UserCount: 0,
  Earning: 0,
  OrderCount: 0
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

    default: {
      return state;
    }
  }
};
