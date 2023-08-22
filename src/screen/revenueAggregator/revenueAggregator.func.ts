export const getAggregateProductDataFunc = (
  branchDataArr: branchInfoInterface[]
) => {
  const productMap = new Map<string, productInfoInterface>();

  branchDataArr.forEach((branchData) => {
    branchData.products.forEach((item) => {
      if (productMap.has(item.id)) {
        const prevSavedProduct = productMap.get(item.id);
        // aggregation of products
        if (prevSavedProduct !== undefined) {
          const updatedProduct = {
            ...prevSavedProduct,
            sold: prevSavedProduct.sold + item.sold,
          };
          productMap.set(item.id, updatedProduct);
        } else {
          throw new Error("Undefined product found in productMap");
        }
      } else {
        productMap.set(item.id, item);
      }
    });
  });

  return Array.from(productMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
};

export const getTotalRevenueFunc = (productList: productInfoInterface[]) => {
  let total = 0;
  productList.forEach((product) => {
    total += product.sold * product.unitPrice;
  });
  return total;
};
