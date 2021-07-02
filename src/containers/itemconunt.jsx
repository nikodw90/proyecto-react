import { useState } from "react"


// const ButtonComponet = () => {
//     return <button>botoncito</button>
// }

export const ButtonContador = () => {
        const [contador, setContador] = useState(0)

        if(contador == -1){
            alert('no puede ser menor que 0')
        }
        if(contador == 5){
            alert('se supero el stock de el producto')
        }
        
        
    return (

        <section>
            <button onClick={() => {setContador(contador-1)}}>-</button>
            {contador}
            <button onClick={() => {setContador(contador+1)}}>+</button>
        </section>

    )
}