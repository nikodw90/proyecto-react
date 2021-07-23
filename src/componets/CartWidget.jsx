import { useContext } from "react";
import { cartContex } from "./cartContex";



function CartWidget (){
    const {cantidad} = useContext(cartContex)

    return(

        <div>
            {cantidad 

            }
        
        </div>
    )
    
}

export default CartWidget