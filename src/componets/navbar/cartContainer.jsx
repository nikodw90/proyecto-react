import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { cartContex } from "../cartContex";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem";

export const Cart = () => {
  const { cart, limpiarCarrito, total } = useContext(cartContex);

  return (
    <div className="cart">
      {cart.length > 0 ? (
        <h1>Carrito de compras</h1>
      ) : (
        <>
          <h1>El carrito esta vacio</h1>
          <Link to={"/"}>
            <Button
              onClick={limpiarCarrito}
              variant="contained"
              color="primary"
            >
              Volver a Comprar
            </Button>
          </Link>
        </>
      )}

      <div>
        {cart.length > 0 &&
          cart.map((product) => (
            <CartItem
              id={product.id}
              nombre={product.nombre}
              img={product.img}
              precio={product.precio}
              contador={product.contador}
              cantidad={product.amount}

            />
          ))}
      </div>

      {cart.length > 0 && (
        <>
          <h2>Total Carrito $ {total}</h2>
          <div>
            <Button
              onClick={limpiarCarrito}
              variant="contained"
              color="primary"
            >
              Vaciar Carrito
            </Button>
            <Button variant="contained" color="primary">
              Comprar{" "}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
