import { useEffect, useState } from "react"
import { CardComponet } from "./componets/CardComponent"


export function ItemListContainer (){
    const [ items, setItems ] = useState([])


    useEffect(() => {

        async function getProducts(){
           const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=libros')
           const data = await response.json()
           setItems(data.results)
            

            
        }
        getProducts()

    }, [])
     


    return(

        <div>
            {
                items.map(producto => {
                    return(
                        <div>
                           <CardComponet name={producto.title} price={producto.price} img={producto.thumbnail}/>
                        </div>
                    )
                
                })
                
            }
            
        </div>
    )
}

export default ItemListContainer