import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./ItemCard.css";

export const ItemCard = ({ id, name, price, img }) => {
  return (
    <div className="Card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> $ {price}</Card.Text>

          <Link to={"/detalle/" + id}>
            <Button variant="outline-secondary">Ver Producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
