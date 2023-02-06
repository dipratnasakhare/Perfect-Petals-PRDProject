import { GET_PRODUCT, Loading, Filter } from "./ProdactionTypes";

const init = {
  loading: false,
  data: {},
};

export const prodReducer = (state = init, action) => {
  switch (action.type) {

    case GET_PRODUCT: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
