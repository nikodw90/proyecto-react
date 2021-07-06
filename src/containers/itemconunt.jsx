import { useState } from "react"


// const ButtonComponet = () => {
//     return <button>botoncito</button>
// }

export const ButtonContador = () => {
        const [contador, setContador] = useState(0)

        if(contador == -1){
            // alert('no puede ser menor que 0')
        }
        if(contador == 5){
            // alert('se supero el stock de el producto')
        }
        
        
    return (
            
        <section>
            <button type="button" className="btn btn-primary" onClick={() => {setContador(contador-1)}}>-</button>
            {contador}
            <button type="button" className="btn btn-primary" onClick={() => {setContador(contador+1)}}>+</button>
        </section>

    )
}