import { useContext } from "react";
import { createContext } from "react";



export const cartContex = createContext()

export const ShopProvider = ({children}) => {
    const [cart, setCart] =useContext()

    //funcion para eliminar producto
   function borrar(id){
        const item = cart.filter(item => item.id !== id);
        setCart(item);
      };

    //funcion para agregar producto a la cart
    function anadir (id){
        const item = items.find(item => item.id === id);
        setCart([...cart, ...item]);
        console.log(cart.length);
    }




    return( 

                
                <cartContex.Provider value = {{anadir, borrar}}>
                    {children}
                </cartContex.Provider>
    )
}