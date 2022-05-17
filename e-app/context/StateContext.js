import React, { createContext, useContext, useState, useEffect } from "react";
import { toast }from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setcartItems] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantity, settotalQuantity] = useState()
    const [qty, setqty] = useState(1);

    const incQty = () => {
        setqty((preQty) => preQty + 1);
    }

    const decQty = () => {
        setqty((preQty) => {
            if(preQty - 1 < 1) return 1;

            return preQty - 1;
        })
    }

    return (
        <Context.Provider 
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantity,
            qty,
            incQty,
            decQty
        }}  
        >
            {children}

        </Context.Provider>
    )
}  

export const useStateContext = () => useContext(Context);