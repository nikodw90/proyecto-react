import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cartContex } from "./cartContex";
import "./itemCount.css";

export const ButtonContador = ({ product, sumar, restar, contador }) => {
  const [open, setOpen] = useState(false);

  const { anadir } = useContext(cartContex);

  function agregar(product, contador) {
    anadir(product, contador);
    setOpen(true);
  }

  return (
    <section>
      <Button
        className="buttoncount"
        variant="outline-secondary"
        onClick={restar}
      >
        -
      </Button>
      {contador}
      <Button
        className="buttoncount"
        variant="outline-secondary"
        onClick={sumar}
      >
        +
      </Button>

      {!open ? (
        <div>
          <Button
            variant="outline-secondary"
            onClick={() => agregar(product, contador)}
          >
            Agregar
          </Button>
        </div>
      ) : (
        <div>
          <Link to={"/cart"}>
            <Button variant="outline-info">Finalizar Compra</Button>
          </Link>
        </div>
      )}
    </section>
  );
};
