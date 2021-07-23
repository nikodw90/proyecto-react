import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemList} from "./itemList";
import './style.css'

export const ItemListContainer = () =>{
    const [ items, setItems ] = useState([])
    // const {categoryId} = useParams()
    

    useEffect(() => {

    
     async function getProducts(){
           const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=libros`)
           const data = await response.json()
           setItems(data.results)
               
        }

        getProducts()

        // if(categoryId){
        //     const category = items.filter(product => product.categoryId === categoryId)
        //     setItems(category)
        //     }
        

    }, [])

    
     
    

    return(
        
            <div className="card">
             
             {<ItemList productos={items}/> }
             
                
            </div>
    )
}

export default ItemListContainer