import React, { createContext } from "react";

export const CartContext = createContext({} as any);

export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer((state: any, action: any) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "remove":
        return state.filter((item: any) => item.id !== action.payload.id);
      default:
        return state;
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
