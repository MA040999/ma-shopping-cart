import app from ".././axiosConfig";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Products(props) {
  const { searchedItem, updatedProducts, setUpdatedProducts } = props;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isTrue = false;
    const newProducts = [];
    if (updatedProducts.length !== 0) {
      for (const product of products) {
        for (const updated of updatedProducts) {
          if (product.pid === updated.pid) {
            isTrue = true;
            newProducts.push(updated);
          }
        }
        if (!isTrue) {
          newProducts.push(product);
        }
        isTrue = false;
      }
      setProducts(newProducts);
      setUpdatedProducts([]);
    }
  }, [updatedProducts, setUpdatedProducts, products]);

  useEffect(() => {
    if (searchedItem === "") {
      app.get("/api/products/all").then((products) => {
        setProducts(products.data);
      });
    } else {
      app
        .get(`/api/products/search`, {
          params: {
            search: searchedItem,
          },
        })
        .then((products) => {
          setProducts(products.data);
        });
    }
  }, [searchedItem]);
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
}

export default Products;
