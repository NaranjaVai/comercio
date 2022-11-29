import { createContext, useContext, useState } from "react";

export const CartCont = createContext([]);
export const UseCartCont = () => useContext(CartCont);

export const CarritoProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addProduct = (item, cant) => {
        const elem = cart.find((e) => e.id === item.id);
        if(!elem) return setCart([...cart,{...item,cant}]);
        const aux = cart.map((e) =>{
            if(e.id === item.id && e.stock > e.cant && (e.cant + cant <= e.stock)){
                return {...e, cant: e.cant + cant};
            }
            return e;
        });
        setCart(aux);    
    }   

    const remProduct = (id) => {
        const aux = cart.filter((p) => p.id !== id);
        setCart(aux);
    };

    const getCant = () => cart.reduce((acc, p) => acc + p.cant , 0)
    
    const getTotal = () => cart.reduce((acc, p) => acc + p.precio * p.cant , 0)

    
    const emptyCart = () => setCart([]);

    const value = {
        cart,
        addProduct,
        remProduct,
        getTotal,
        getCant,
        emptyCart
    };

    return <CartCont.Provider value={value} displayName='cartContext'> {children}
    </CartCont.Provider>

    
}