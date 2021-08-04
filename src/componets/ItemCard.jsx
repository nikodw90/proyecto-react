import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ItemCard = ({ id, name, price, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{"$" + " " + price}</Card.Text>

        <Link variant="primary" to={"/detalle/" + id}>
          Ver Producto
        </Link>
      </Card.Body>
    </Card>
  );
};
