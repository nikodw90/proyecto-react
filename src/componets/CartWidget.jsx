import { useContext } from "react";
import { cartContex } from "./cartContex";
import './CartWidget.css';


export function CartWidget (){
    const {cantidad} = useContext(cartContex)

    return(

        <div>
            { cantidad > 0 && 
            <>
              <h4>{cantidad}</h4>
            </>}
        </div>
    )
    
}

export default CartWidget