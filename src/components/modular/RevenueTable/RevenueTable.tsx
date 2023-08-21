import React, { useEffect } from "react";
import "./RevenueTable.css";
import { useGlobalContext } from "../../../ContextAPI";
import { setLimitPerPage } from "../../../reducer/action";

interface propsInterface {
  productList: productInfoInterface[];
  totalRevenue: number;
}

const RevenueTable = (props: propsInterface) => {
  const { store, dispatch } = useGlobalContext();

  useEffect(() => {
    const mainTable = document.querySelector(".main-table")!;
    const row = mainTable.querySelector("tr")!;

    const mainTableRect = mainTable.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    const limit = (window.innerHeight - mainTableRect.top) / rowRect.height - 2;
    dispatch(setLimitPerPage(limit));
  }, []);

  return (
    <div className="table-container">
      <table className="main-table">
        <thead>
          <tr>
            <th>
              <span>Product</span>
            </th>
            <th className="revenue__cell">
              <span>Revenue</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.productList
            .slice(
              (store.pageNumber - 1) * store.limitPerPage,
              store.pageNumber * store.limitPerPage
            )
            .map((item) => (
              <tr>
                <td>{item.name}</td>
                <td className="revenue__cell">
                  {(item.sold * item.unitPrice).toFixed(2)}
                </td>
              </tr>
            ))}
          {props.productList.length === 0 && (
            <tr className="notFound">No product found</tr>
          )}
          <tr className="totalRevenue">
            <td>Total</td>
            <td className="revenue__cell">{props.totalRevenue.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RevenueTable;
