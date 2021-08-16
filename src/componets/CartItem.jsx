import { useContext } from "react";
import { cartContex } from "./cartContex";
import { Button } from "react-bootstrap";
import "./CartItem.css";
import { Table } from "react-bootstrap";

export function CartItem({ id, nombre, img, precio, cantidad }) {
  const { eliminarProducto } = useContext(cartContex);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <tr>
          <td className="divtitle">
            <h5>{nombre}</h5>
          </td>
          <td className="divimg">
            <img src={img} alt="img" />
          </td>
          <td className="divprice">${precio}</td>
          <td className="divamount">cant.{cantidad}</td>
          <td className="divbutton">
            <Button
              onClick={() => eliminarProducto(id)}
              variant="outline-secondary"
            >
              Eliminar
            </Button>
          </td>
        </tr>
      </Table>
    </div>
  );
}

export default CartItem;
