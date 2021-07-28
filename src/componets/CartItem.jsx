import { useContext } from "react";
import { cartContex } from "./cartContex";
import { Button } from "react-bootstrap";

export function CartItem({ id, nombre, img, precio, cantidad, }) {
  const { eliminarProducto } = useContext(cartContex);

  return (
    <div>
      <div>
        <h3>{nombre}</h3>
      </div>
      <div>
        <img src={img} />
      </div>
      <div>
        <h3>${precio}</h3>
      </div>
      <div>
        <h4>Cant.{cantidad}</h4>
      </div>
      <Button
        onClick={() => eliminarProducto(id)}
        variant="contained"
        color="primary"
      >
        Eliminar
      </Button>
    </div>
  );
}

export default CartItem;
