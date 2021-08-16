import "./NavBar.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import { Button } from "react-bootstrap";

const categorias = [
  {
    categoryId: "infantil",
    name: "Libros Infantiles",
  },
  {
    categoryId: "drama",
    name: "Libros de Drama",
  },
];

export function MenuComponet() {
  return (
    <div className="navbar">
      <div>
        <Link to={"/"}>
          <h1>venta de libros</h1>
        </Link>
      </div>
      <Nav variant="fill variant" defaultActiveKey="/">
        <Link to={"/"}>
          <img className="logo" src="./imagenes/logo.jpg" alt="Logo" />
        </Link>
        <Nav.Item>
          <Nav.Link href="/">
            <Button variant="dark">Inicio</Button>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="categorias">
          {categorias.map((category) => (
            <Link to={`/category/${category.categoryId}`}>
              <Button variant="dark">{category.name}</Button>
            </Link>
          ))}
        </Nav.Item>
        <Nav.Item>
          <Link className="cartWidget" to={"/cart"}>
            <img src="./imagenes/widget.png" alt="carrito" />
            <CartWidget />
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
