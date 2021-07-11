import './style.css'
import { Nav } from 'react-bootstrap';


export function MenuComponet() {
    return(
      
      <Nav variant="pills" defaultActiveKey="/home">
        <img className="logo" src="./imagenes/logo.jpg"/><img/>
      <Nav.Item>
        <Nav.Link href="/home">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Carrito</Nav.Link>
      </Nav.Item>
    </Nav>
        
    );
}