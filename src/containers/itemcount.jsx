import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { cartContex } from "../componets/cartContex";

export const ButtonContador = ({ product, sumar, restar, contador }) => {
  const [open, setOpen] = useState(false);

  const { anadir } = useContext(cartContex);

  function agregar(product, contador) {
    anadir(product, contador);
    setOpen(true);
  }

  return (
    <section>
      <Button variant="primary" onClick={restar}>
        -
      </Button>
      {contador}
      <Button variant="primary" onClick={sumar}>
        +
      </Button>

      {!open ? (
        <div>
          <Button variant="primary" onClick={() => agregar(product, contador)}>
            Agregar
          </Button>
        </div>
      ) : (
        <div>
          <Link to={"/cart"}>
            <Button variant="primary">Finalizar Compra</Button>
          </Link>
        </div>
      )}
    </section>
  );
};
