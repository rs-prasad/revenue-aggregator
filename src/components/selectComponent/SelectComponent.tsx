import React from "react";
import "./SelectComponent.css";

interface props {
  handlePageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  pageNumber: number;
  limit: number;
  productList: productInfoInterface[];
}

const SelectComponent = (props: props) => {
  const createNumberArrayFunc = (n: number) => {
    const numberArray = [];
    for (let i = 1; i <= n; i++) {
      numberArray.push(i);
    }
    return numberArray;
  };

  return (
    <div className="page-selection">
      {props.productList.length ? (
        <>
          <label htmlFor="pageSelect">Page</label>
          <select
            id="pageSelect"
            onChange={props.handlePageChange}
            value={props.pageNumber}
          >
            {createNumberArrayFunc(
              Math.ceil(props.productList.length / props.limit)
            ).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SelectComponent;
