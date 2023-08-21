import actionTypes from "./actionTypes";

interface actionInterface {
  type: string;
  payload: any;
}

export const initialState: storeInterface = {
  allProductList: [],
  productListToShow: [],
};

export const rootReducer = (
  store: storeInterface,
  action: actionInterface
): storeInterface => {
  switch (action.type) {
    case actionTypes.SET_ALL_PRODUCT_LIST: {
      return { ...store, allProductList: action.payload };
    }
    case actionTypes.SET_PRODUCT_LIST_TO_SHOW: {
      return { ...store, productListToShow: action.payload };
    }
    default: {
      return store;
    }
  }
};
