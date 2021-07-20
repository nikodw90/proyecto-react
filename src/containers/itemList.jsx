import React from 'react';
import { ItemCard } from "../componets/ItemCard";


export const ItemList = ( { productos }) => {
    
    return(

        <div>
            {
                productos.map(producto => {
                    return(
                        <div className="carditemlist">
                           <ItemCard key={producto.id} id={producto.id} name={producto.title} price={producto.price} img={producto.thumbnail}/>
                        </div>
                    )
                
                })
                
            }
            
        </div>
    )
}

export default ItemList