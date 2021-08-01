import React, { useState } from "react";

import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import axios from "axios";

export const SelectedProductsContext = React.createContext([[], () => []]);
export const QuantitiesContext = React.createContext([[], () => []]);

function App() {
  const [search, setSearch] = useState("");
  const [searchedItem, setSearchedItem] = useState("");
  const [showProducts, setShowProducts] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [updatedProducts, setUpdatedProducts] = useState([]);

  let handleSearch = (e) => {
    if (e.which === 13) {
      setSearchedItem(search);
      setShowProducts(true);
    }
  };

  let handleCheckOut = () => {
    if (selectedProducts.length > 0) {
      axios
        .patch("/api/products/updateQ", {
          selectedProducts: selectedProducts,
          quantities: quantities,
        })
        .then((res) => {
          setUpdatedProducts(res.data);
          axios
            .post("/api/orders/add", {
              selectedProducts: selectedProducts,
              quantities: quantities,
            })
            .then((res) => {
              console.log("res :>> ", res);
              setSelectedProducts([]);
              setQuantities([]);
            });
        });
    }
  };

  return (
    <div className="App">
      <h2 className="logo">CHASE UP</h2>
      <div style={{ display: "flex" }}>
        <input
          className="form-control"
          type="text"
          placeholder="Search Products"
          name="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
        <div className="button-control">
          <button className="order-btn" onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="content">
          {showProducts ? (
            <SelectedProductsContext.Provider
              value={[selectedProducts, setSelectedProducts]}
            >
              <Products
                searchedItem={searchedItem}
                updatedProducts={updatedProducts}
                setUpdatedProducts={setUpdatedProducts}
              />
            </SelectedProductsContext.Provider>
          ) : (
            ""
          )}
        </div>
        <div id="bill" className="bill">
          {selectedProducts.length === 0 ? (
            ""
          ) : (
            <SelectedProductsContext.Provider
              value={[selectedProducts, setSelectedProducts]}
            >
              <QuantitiesContext.Provider value={[quantities, setQuantities]}>
                <Cart />
              </QuantitiesContext.Provider>
            </SelectedProductsContext.Provider>
          )}
        </div>
      </div>

      {/* <div>
        <pre>{JSON.stringify(updatedProducts, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default App;
