import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {
    const [unidadMock, setUnidadMock] = useState();

    useEffect(() => {
        async function productos () {
            const response = await fetch('https://api.mercadolibre.com/sites/MLC/search?q=libros')
            const data = await response.json()
            setUnidadMock (data.results[1])

        }
        setTimeout(() =>{
            productos()
        },4000)

    }, [])

    return(
        <div className="card">
            {unidadMock ?
                <ItemDetail key={unidadMock.id} nombre={unidadMock.title} img={unidadMock.thumbnail} precio={unidadMock.price}/>
            : <p>Loading...</p>}
         </div>
    )

}


    