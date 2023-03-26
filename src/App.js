import './App.css';
import Navbar from './components/Navbar';
import ProductsContextProvider from './Global/ProductsContext'
import Products from './components/Products';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
function App() {
  return (
    <div>
      <ProductsContextProvider>
        <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path = "/cart" element = {<Cart/>}/>
            <Route path="*" element = {<NotFound/>}/>
          </Routes>
        </Router>

        
          {/* <Products />{" "} */}
          {/*this is available as as prop inside productContext* */}
        
      </ProductsContextProvider>
    </div>
  );
}

export default App;
