import React, { createContext, useReducer } from 'react'
 import {CartReducer} from './CartReducer';
import { useContext } from 'react'

export const CartContext = createContext();

export default function CartContextProvider(props) {
    
    const[cart , dispatch ] = useReducer(CartReducer ,{shoppingCart : [] , totalPrice : 0 , qty:0} );       //intiially everything is 0
    //cart returns value of sc,qty etc and dispatch function accesses cartReducer function


  return (
    <CartContext.Provider value = {{...cart, dispatch}}>
        {props.children}
    </CartContext.Provider>
  )
}
