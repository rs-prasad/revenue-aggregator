import actionTypes from "./actionTypes";

export const setAllProductInfoList = (productList: productInfoInterface[]) => {
  return { type: actionTypes.SET_ALL_PRODUCT_LIST, payload: productList };
};

export const setProductListToShow = (productList: productInfoInterface[]) => {
  return { type: actionTypes.SET_PRODUCT_LIST_TO_SHOW, payload: productList };
};
