import React from 'react';
import {Link} from "react-router-dom";



export default function Navbar() {
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
              <span className="cartCount">0</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
