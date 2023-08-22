import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../ContextAPI";
import {
  getAggregateProductDataFunc,
  getTotalRevenueFunc,
} from "./revenueAggregator.func";
import {
  setAllProductInfoList,
  setProductListToShow,
  setPageNumber,
} from "../../reducer/action";
import { debounce } from "../../utils";
import RevenueTable from "../../components/RevenueTable/RevenueTable";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";
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
    dispatch(setPageNumber(1));
  }, [store.productListToShow]);

  useEffect(() => {
    debouncedFilterList(store.allProductList, filterText);
  }, [filterText, store.allProductList, dispatch]);

  /*****************************  handlers  *****************************/
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageNumber(event.target.value as never as number));
  };

  /*****************************  functions  *****************************/
  function filterListFunc(
    allProductList: productInfoInterface[],
    filterText: string
  ) {
    if (filterText === "") dispatch(setProductListToShow(allProductList));
    const filteredList = allProductList.filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
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
          <SelectComponent
            handlePageChange={handlePageChange}
            pageNumber={store.pageNumber}
            limit={store.limitPerPage}
            productList={store.productListToShow}
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
