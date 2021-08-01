import axios from "axios";
import React, { useContext } from "react";

import { SelectedProductsContext } from "../App";

function ProductItem(props) {
  const [selectedProducts, setSelectedProducts] = useContext(
    SelectedProductsContext
  );
  const { product } = props;

  let handleProductClick = (pid) => {
    if (!selectedProducts.some((p) => p.pid === pid)) {
      axios
        .get("/api/products/addCart", {
          params: {
            pid: pid,
          },
        })
        .then((product) => {
          setSelectedProducts((prevProducts) => [
            ...prevProducts,
            product.data,
          ]);
        });
    }
  };

  return (
    <div className="product shadow">
      <button className="item" onClick={() => handleProductClick(product.pid)}>
        <div className="parent">
          <img
            className="pic"
            src={`/images/${product.image}`}
            alt={product.name}
          />
        </div>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td className="price">PKR {product.price}</td>
              <td qty={product.pid} className="stock">
                Qty {product.qty}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="des">{product.name}</div>
      </button>
      {/* <div>{JSON.stringify(selectedProducts, 2, null)}</div> */}
    </div>
  );
}

export default ProductItem;
