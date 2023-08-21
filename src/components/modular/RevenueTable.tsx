import React from "react";

interface propsInterface {
  productList: productInfoInterface[];
  totalRevenue: number;
}

const RevenueTable = (props: propsInterface) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <span>Product</span>
          </th>
          <th>
            <span>Revenue</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.productList.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{(item.sold * item.unitPrice).toFixed(2)}</td>
          </tr>
        ))}
        <tr className="totalRevenue">
          <td>Total</td>
          <td>{props.totalRevenue.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default RevenueTable;
