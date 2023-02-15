import _ from "lodash";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([1, 2, 3]);

  class Cart {
    add(id) {
      let value = cartList;
      value.push(id);
      setCartList(value);
    }
    deleteAll() {
      setCartList([]);
    }
    deleteAllById(id) {
      let value = cartList;
      value = _.remove(value, (i) => _.isEqual(i, id));
      setCartList(value);
    }
    deleteOneById(id) {
      let value = cartList;
      _.pull(value, id);
      setCartList(value);
    }
    changeQuantity(id, quantity) {
      let value = cartList;
      const itemIndex = value.findIndex((i) => i.id === id);
      if (itemIndex !== -1) {
        value[itemIndex].quantity = quantity;
        setCartList([...value]);
      }
    }
  }

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

export default CartProvider;
