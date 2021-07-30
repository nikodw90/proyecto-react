import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { cartContex } from "../cartContex";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem";

export const Cart = () => {
  const { cart, limpiarCarrito, total } = useContext(cartContex);

  const [pay, setPay] = useState(false);

  const [form, setForm] = useState({ name: "", mail: "", phone: "" });

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
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setPay(true);
              }}
            >
              Comprar
            </Button>
          </div>
        </>
      )}

      {pay && (
        <div>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onInput={(event) => {
              setForm({ ...form, name: event.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Ingresa tu email"
            onInput={(event) => {
              setForm({ ...form, mail: event.target.value });
            }}
          />
          <input
            type="tel"
            placeholder="Ingresa tu Telefono"
            placeholder="Ej: +56987003250"
            onInput={(event) => {
              setForm({ ...form, phone: event.target.value });
            }}
          />
          <button
            onClick={() => {
              const pedido = {
                comprador: { ...form },
                items:  cart ,
                valor:  total ,
              };
              console.log(pedido);
            }}
          >
            Enviar Compra
          </button>
        </div>
      )}
    </div>
  );
};
