import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../ContextApI";
import {
  getAggregateProductDataFunc,
  getTotalRevenueFunc,
} from "./revenueAggregator.func";
import {
  setAllProductInfoList,
  setProductListToShow,
} from "../../reducer/action";
import { debounce } from "../../utils";
import RevenueTable from "../../components/modular/RevenueTable";
import SearchComponent from "../../components/generic/searchComponent/SearchComponent";
import "./RevenueAggregator.css";
// json data
import branch1Data from "../../jsonData/branch1.json";
import branch2Data from "../../jsonData/branch2.json";
import branch3Data from "../../jsonData/branch3.json";

const RevenueAggregator = () => {
  const debouncedFilterList = debounce(filterListFunc, 500);
  /*****************************  hooks  *****************************/
  const { store, dispatch } = useGlobalContext();
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [filterText, setFilterText] = useState("");

  /*****************************  useEffect  *****************************/
  useEffect(() => {
    const productsData = getAggregateProductDataFunc([
      branch1Data,
      branch2Data,
      branch3Data,
    ]);
    dispatch(setAllProductInfoList(productsData));
    dispatch(setProductListToShow(productsData));
  }, [dispatch]);

  useEffect(() => {
    setTotalRevenue(getTotalRevenueFunc(store.productListToShow));
  }, [store.productListToShow]);

  useEffect(() => {
    debouncedFilterList(store.allProductList, filterText);
  }, [filterText, store.allProductList, dispatch]);

  /*****************************  handlers  *****************************/
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  /*****************************  functions  *****************************/
  function filterListFunc(
    allProductList: productInfoInterface[],
    filterText: string
  ) {
    if (filterText === "") dispatch(setProductListToShow(allProductList));
    const filteredList = allProductList.filter((item) =>
      item.name.toLowerCase().includes(filterText)
    );
    dispatch(setProductListToShow(filteredList));
  }

  /*****************************  JSX  *****************************/
  return (
    <div className="revenue-aggregator">
      <header className="ra__header">
        <div className="ra__header__name">Revenue Aggregator</div>
      </header>
      <body className="ra__body">
        <div className="search__box">
          <SearchComponent
            handleChange={handleFilterChange}
            placeholder="Filter by name"
          />
        </div>
        <div className="productTable">
          <RevenueTable
            productList={store.productListToShow}
            totalRevenue={totalRevenue}
          ></RevenueTable>
        </div>
      </body>
    </div>
  );
};

export default RevenueAggregator;