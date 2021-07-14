import { useState } from "react"
import Button from 'react-bootstrap/Button'


export const ButtonContador = () => {
        const [contador, setContador] = useState(0)

        if(contador === -1){
            alert('no puede ser menor que 0')
        }
        if(contador === 5){
            alert('se supero el stock de el producto')
        }
        
        
    return (
            
        <section>
            <Button variant="primary" onClick={() => {setContador(contador-1)}}>-</Button>
            {contador}
            <Button variant="primary" onClick={() => {setContador(contador+1)}}>+</Button>
        </section>

    )
}