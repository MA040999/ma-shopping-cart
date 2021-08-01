import React from "react";

function QuantityInput(props) {
  const { product, i, handleQtyChange, value } = props;

  return (
    <div>
      <input
        type="number"
        value={value}
        min={1}
        max={product.qty}
        onChange={(e) => handleQtyChange(e.target.value, i)}
      />
    </div>
  );
}

export default QuantityInput;
