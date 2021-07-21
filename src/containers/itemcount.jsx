import { useState, useContext } from "react"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import {cartContex} from "../componets/cartContex"


export const ButtonContador = ({onAdd}) => {
        const [contador, setContador] = useState(0)

        const [open , setOpen] =useState(false)

        const { anadir } = useContext(cartContex)

        function agregar(nombre, precio, img, id){
            anadir(nombre, precio, img, id)
            setOpen(true)

        }
        
        
    return (
            
        <section>
            
            <Button variant="primary" onClick={() => {setContador(contador-1)}}>-</Button>
            {contador}
            <Button variant="primary" onClick={() => {setContador(contador+1)}}>+</Button>
            
            { !open ? 
            
                (<div>
                <Button variant="primary" onClick={() => agregar(onAdd)} >Agregar</Button>
                </div>) :
                (<div><Link to="/cart">
                <Button variant="primary">Finalizar Compra</Button>
                </Link>    
                </div>)
                
            }

        </section>

    )
}