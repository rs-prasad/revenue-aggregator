import actionTypes from "./actionTypes";

interface actionInterface {
  type: string;
  payload: any;
}

export const initialState: storeInterface = {
  allProductList: [],
  productListToShow: [],
  limitPerPage: 20,
  pageNumber: 1,
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
    case actionTypes.SET_LIMIT_PER_PAGE: {
      return { ...store, limitPerPage: action.payload };
    }
    case actionTypes.SET_PAGE_NUMBER: {
      return { ...store, pageNumber: action.payload };
    }
    default: {
      return store;
    }
  }
};
