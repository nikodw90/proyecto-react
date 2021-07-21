import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router";



export const ItemDetailContainer = ({items}) => {
    const [detail, setDetail] = useState();
    const {productId} = useParams()

    

    useEffect(() => {


        if(productId){

            const category = items.find(product=>product.id === productId)
            setDetail(category)
        }



    }, [productId, items])




    return(
        <div className="card">
            {detail ?
                <ItemDetail key={detail.id} id={detail.id} nombre={detail.title} img={detail.thumbnail} precio={detail.price}/>
            : <p>Loading...</p>}
         </div>
    )

}


    