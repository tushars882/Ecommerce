import React, {createContext,useState} from "react";
import shoe1 from '../assets/shoe1.jpg'
import shoe2 from '../assets/shoe2.jpg'
import shoe3 from '../assets/shoe3.jpg'
import iphoneX from '../assets/iphoneX.jpg'
import iphone13 from '../assets/iphone13.jpg'
import earphones from '../assets/earphones.jpg'

export const ProductsContext = createContext();

const ProductsContextProvider = (props) =>{
    const [products] = useState([
        {id:1 , name : 'shoe1' , price: 15 , image: shoe1 , status: 'hot' },
        {id:2 , name : 'shoe2' , price: 15 , image: shoe2 , status: 'hot' },
        {id:3 , name : 'shoe3' , price: 15 , image: shoe3 , status: 'hot' },
        {id:4 , name : 'iphoneX' , price: 59 , image: iphoneX , status: 'hot' },
        {id:5 , name : 'iphone13' , price: 199 , image: iphone13 , status: 'hot' },
        {id:6 , name : 'earphones' , price: 19 , image: earphones , status: 'hot' }
        
    ]);
    return(
        <ProductsContext.Provider value = {{products : [...products]}}>  {/**here products is accessing all products array */}
        {props.children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider;