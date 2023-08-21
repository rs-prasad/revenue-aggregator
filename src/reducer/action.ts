import actionTypes from "./actionTypes";

export const setAllProductInfoList = (productList: productInfoInterface[]) => {
  return { type: actionTypes.SET_ALL_PRODUCT_LIST, payload: productList };
};

export const setProductListToShow = (productList: productInfoInterface[]) => {
  return { type: actionTypes.SET_PRODUCT_LIST_TO_SHOW, payload: productList };
};

export const setLimitPerPage = (limit: number) => {
  return { type: actionTypes.SET_LIMIT_PER_PAGE, payload: limit };
};

export const setPageNumber = (page: number) => {
  return { type: actionTypes.SET_PAGE_NUMBER, payload: page };
};
