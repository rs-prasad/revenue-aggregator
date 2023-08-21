import React from "react";

interface propsInterface {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchComponent = (props: propsInterface) => {
  return (
    <div className="searchComponent">
      <input
        type="text"
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SearchComponent;
