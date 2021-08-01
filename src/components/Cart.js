import React, { useContext, useEffect, useState } from "react";

import { SelectedProductsContext, QuantitiesContext } from "../App";

import QuantityItem from "./QuantityInput";
import { MdDelete } from "react-icons/md";

function Cart() {
  const [selectedProducts, setSelectedProducts] = useContext(
    SelectedProductsContext
  );
  const [quantities, setQuantities] = useContext(QuantitiesContext);

  const [total, setTotal] = useState(0);

  let handleQtyChange = (newValue, i) => {
    setQuantities((oldQty) => {
      const newQty = [...oldQty];
      newQty[i] = Number(newValue);
      return newQty;
    });
  };

  let removeProduct = (i) => {
    setQuantities((oldQty) => {
      const newQty = [...oldQty];
      newQty.splice(i, 1);

      return newQty;
    });
    setSelectedProducts((oldProducts) => {
      const newProducts = [...oldProducts];
      newProducts.splice(i, 1);

      return newProducts;
    });
  };

  useEffect(() => {
    let total = 0;
    quantities.map((qty, i) => {
      total = total + Number(selectedProducts[i].price * qty);
      return null;
    });

    setTotal(total);
  }, [quantities, selectedProducts]);

  useEffect(() => {
    if (selectedProducts.length !== quantities.length) {
      setQuantities((oldQty) => {
        const newQty = [...oldQty];
        newQty.push(1);
        return newQty;
      });
    }
  }, [selectedProducts, setQuantities, quantities.length]);
  return (
    <div>
      <table style={{ width: "540px" }}>
        <thead>
          <tr>
            <th>Sno</th>
            <th style={{ width: "70px" }}>Product</th>
            <th style={{ width: "200px" }}>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="cart">
          {selectedProducts.map((product, i) => (
            <tr key={product._id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={`/images/${product.image}`}
                  width="75"
                  style={{ margin: "auto" }}
                  alt={product.name}
                />
              </td>

              <td>{product.name}</td>
              <td>{product.price}</td>

              <td>
                <QuantityItem
                  product={product}
                  i={i}
                  value={quantities[i] || 1}
                  handleQtyChange={handleQtyChange}
                />
              </td>
              <td>{String(quantities[i] * product.price)}</td>
              <td>
                <MdDelete
                  onClick={() => {
                    removeProduct(i);
                  }}
                  style={{ cursor: "pointer", color: "red" }}
                  size={28}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ borderTop: "2px solid #585858" }}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="totalAll">{total}</td>
          </tr>
        </tfoot>
      </table>
      {/* <div>
        <pre>{JSON.stringify(quantities, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default Cart;
