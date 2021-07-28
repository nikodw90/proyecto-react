import Card from "react-bootstrap/Card";
import { ButtonContador } from "./itemCount";
import { useState } from "react";

export const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const inicio = [0];

  const product = { id, nombre, img, precio };
  console.log(product);

  const [contador, setContador] = useState(inicio);

  function sumar() {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  function restar() {
    if (contador > inicio) {
      setContador(contador - 1);
    }
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={img} />
      <Card.Body>
        <Card.Text>{id}</Card.Text>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{stock}</Card.Text>
        <Card.Text>{"$" + precio}</Card.Text>
        <ButtonContador
          product={product}
          sumar={sumar}
          restar={restar}
          contador={contador}
        />
      </Card.Body>
    </Card>
  );
};
