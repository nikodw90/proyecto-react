import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { cartContex } from "../componets/cartContex";
import { CartItem } from "../componets/CartItem";
import { firestore } from "../firebase";
import "./cartContainer.css";

export const Cart = () => {
  const { cart, limpiarCarrito, total } = useContext(cartContex);

  const [pay, setPay] = useState(false);

  const [form, setForm] = useState({ name: "", mail: "", phone: "" });

  return (
    <div className="cart">
      {cart.length > 0 ? (
        <h1 className="titulocarrito">Carrito de compras</h1>
      ) : (
        <>
          <h1 className="titulocarrito">El carrito esta vacio</h1>
          <Link to={"/"}>
            <Button
              className="buttonvolver"
              onClick={limpiarCarrito}
              variant="dark"
            >
              Volver a Comprar
            </Button>
          </Link>
        </>
      )}

      <div className="productosc">
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
          <h2 className=" total ">Total Carrito $ {total}</h2>
          <div className="buttons">
            <Button onClick={limpiarCarrito} variant="dark">
              Vaciar Carrito
            </Button>
            <Button
              variant="info"
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
        <div class="cardpedido">
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
            onInput={(event) => {
              setForm({ ...form, phone: event.target.value });
            }}
          />
          <Button
            onClick={() => {
              const pedido = {
                comprador: { ...form },
                items: cart,
                valor: total,
              };

              const db = firestore;
              const collection = db.collection("pedidos");
              collection.add(pedido).then(({ id }) => {
                alert("Pedido Enviado, Numero de Orden" + id);
              });
              console.log(pedido);
            }}
          >
            Enviar Compra
          </Button>
          <Button
            className="botoncerrar"
            onClick={() => {
              setPay(false);
            }}
            variant="danger"
          >
            X
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
