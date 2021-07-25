import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { cartContex } from '../cartContex'
import { Link } from 'react-router-dom'
import {CartItem } from '../CartItem'



export const Cart = () =>{

    const {cart, limpiarCarrito, total} = useContext(cartContex)

    return(
        
        <div className="cart">
            { 
            ( <>
            <h1>El carrito esta vacio</h1>
                <Link to={"/"}>
                <Button onClick={limpiarCarrito} variant="contained" color="primary">Volver a Comprar</Button>
                </Link>
            </>)}

            <div>
                { cart.length > 0 && cart.map( product => <CartItem  
                id={product.id} nombre={product.name} img={product.image} precio={product.price} 
                contador={product.amount} />)}
            </div>


            { cart.length > 0 &&
            <>
            <h2>$ {total}</h2>
            <div>
                <Button onClick={limpiarCarrito} variant="contained" color="primary">Vaciar Carrito</Button>
                <Button variant="contained" color="primary">Comprar </Button>
            </div>
            </>}


        </div>
        
    )

}