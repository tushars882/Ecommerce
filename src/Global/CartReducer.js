export const CartReducer = (state , action) =>{
     
    const {shoppingCart , totalPrice , qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch(action.type){
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product=> product.id === action.id);     //ACTION.ID IS the default id present in action (dispatch of products)
            if(check){
                return state;
            }
            else{
                product = action.product;
                product['qty'] = 1;   //initially quantity 1;
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;
                return{         //default state will be replaced by this

                    shoppingCart:[product , ...shoppingCart],totalPrice: updatedPrice , qty: updatedQty

                }
            }
            break;

            case 'INC':
                product = action.cart;
                product.qty = product.qty +1;
                updatedPrice = totalPrice +product.price;
                updatedQty = qty+product.qty;
                index = shoppingCart.findIndex(cart => cart.id === action.id);
                shoppingCart[index] = product;
                return {shoppingCart: [...shoppingCart],totalPrice : updatedPrice , qty: updatedQty}
                break;

                case'DEC':
                product = action.cart;
                if(product.qty > 1){
                    product.qty = product.qty -1;
                    updatedPrice = totalPrice -product.price;
                    updatedQty = qty-product.qty;
                   index = shoppingCart.findIndex(
                     (cart) => cart.id === action.id
                   );
                   shoppingCart[index] = product;
                    return {
                      shoppingCart: [...shoppingCart],
                      totalPrice: updatedPrice,
                      qty: updatedQty,
                    };
                }
                else{
                    return state;
                }



            default:
                return state;

    }
}
