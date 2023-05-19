/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import GlobalStyles from "./GlobalStyles";
import Filters from "./Components/Filters";
import Home from "./Components/ProductList/Home";
import ShoppingCart from "./Components/ShoppingCart";
import { Container, LeftPanel, MiddlePanel, RightPanel } from "./styles";
import productList from "../src/assents/productList";
import { useState } from "react";

const App = () => {
  
  const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore =
        value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };
    
    return [storedValue, setValue];
  };
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useLocalStorage("cart", []);

  const handleFilterChange = (filterName, value) => {
    if (filterName === "minFilter") {
      setMinFilter(value);
    } else if (filterName === "maxFilter") {
      setMaxFilter(value);
    } else if (filterName === "searchFilter") {
      setSearchFilter(value);
    }
  };

  const addItemOnCart = (productAdd) => {
    const addedProduct = cart.find((product) => product.id === productAdd.id);
    if (addedProduct === undefined) {
      productAdd = { ...productAdd, quantity: 1 };
      setCart([...cart, productAdd]);
    } else {
      const newCart = cart.map((product) => {
        return product.id === productAdd.id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
      setCart(newCart);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <LeftPanel>
          <Filters
            onChange={handleFilterChange}
            minFilter={minFilter}
            maxFilter={maxFilter}
            searchFilter={searchFilter}
          />
        </LeftPanel>
        <MiddlePanel>
          <Home
            productList={productList}
            minFilter={minFilter}
            maxFilter={maxFilter}
            searchFilter={searchFilter}
            onClickProduct={addItemOnCart}
          />
        </MiddlePanel>
        <RightPanel>
          <ShoppingCart cart={cart} setCart={setCart} />
        </RightPanel>
      </Container>
    </>
  );
};

export default App;
