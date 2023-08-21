interface productInfoInterface {
  id: string;
  name: string;
  unitPrice: float;
  sold: number;
}

interface branchInfoInterface {
  branchId: string;
  products: productInfoInterface[];
}

interface storeInterface {
  allProductList: productInfoInterface[];
  productListToShow: productInfoInterface[];
  limitPerPage: number;
  pageNumber: number;
}
