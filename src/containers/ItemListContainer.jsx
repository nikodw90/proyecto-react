import { useEffect, useState } from "react";
import {ItemList} from "./itemList";
import './style.css'



export const ItemListContainer = () =>{
    const [ items, setItems ] = useState([])


    useEffect(() => {

     async function getProducts(){
           const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=libros`)
           const data = await response.json()
           setItems(data.results)
               
        }

        getProducts()
       

    }, [])
     
    

    return(
        
            <div className="card">
             
             {<ItemList productos={items} />} 
                
            </div>
    )
}

export default ItemListContainer