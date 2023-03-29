import React from 'react';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../Global/CartContext';



export default function Navbar() {
  const{ qty} = useContext(CartContext);
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">Mangaao</Link>
        </li>
      </ul>
      <ul className='right'>
        <li>
          <Link to="Cart">
            <span className="shoppingCart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cartCount">{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
