import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { cartContex } from '../cartContex'
import { Link } from 'react-router-dom'



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

            <div className="cartItems">
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}
            </div>


            { cart.length > 0 &&
            <>
            <h2>$ {total}</h2>
            <div className="cartItems__buttons">
                <Button onClick={limpiarCarrito} variant="contained" color="primary">Vaciar Carrito</Button>
                <Button variant="contained" color="primary">Comprar </Button>
            </div>
            </>}


        </div>
        
    )

}