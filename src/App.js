import './App.css';
import Navbar from './components/Navbar';
import ProductsContextProvider from './Global/ProductsContext'
import Products from './components/Products';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import CartContextProvider from './Global/CartContext';


function App() {
  return (
    <div>
      <ProductsContextProvider>    {/**all the components inside this fetches data from this provider tag which eventually pulls data from the function */}
        <CartContextProvider>
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>

          {/* <Products />{" "} */}
          {/*this is available as as prop inside productContext* */}
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
