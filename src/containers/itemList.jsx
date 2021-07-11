import { ItemCard } from "../componets/ItemCard";


export function ItemList( { items }) {
    
    return(

        <div>
            {
                items.map(producto => {
                    return(
                        <div>
                           <ItemCard name={producto.title} price={producto.price} img={producto.thumbnail}/>
                        </div>
                    )
                
                })
                
            }
            
        </div>
    )
}

export default ItemList