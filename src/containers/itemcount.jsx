import { useState, useContext } from "react"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import ShopProvider, { cartContex } from "../componets/cartContex"


export const ButtonContador = ({onAdd, sumar, restar, contador }) => {

        const [open , setOpen] =useState(false)

        const { anadir } = useContext(ShopProvider, cartContex)

        function agregar(nombre, precio, img, id, contador){
            anadir(nombre, precio, img, id, contador)
            setOpen(true)

        }
     
        
        
    return (
            
        <section>
            
            <Button variant="primary" onClick={restar}>-</Button>
            {contador}
            <Button variant="primary" onClick={sumar}>+</Button>
            
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