import React from "react";

const OptionList = ({ data }) => {
  const list = data.map((option) => {
    return (
      <>
        <option key={option.codigo} value={option.codigo}>
          {option.nombre}
        </option>
      </>
    );
  });
  return <>{list}</>;
};
export default OptionList;
